#!/usr/bin/env node

/**
 * SuVerse Site Agent — AI-powered content manager & EB-2 NIW strategist.
 *
 * Usage:
 *   node site-agent.mjs news        — Monitor & publish relevant news
 *   node site-agent.mjs audit       — Weekly content audit
 *   node site-agent.mjs niw-check   — EB-2 NIW Dhanasar framework check
 *   node site-agent.mjs metrics     — Update homepage metrics
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import dotenv from "dotenv";

// ── Paths ──
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
dotenv.config({ path: path.join(ROOT, ".env") });

const CLIENT_SRC = path.join(ROOT, "client/src");
const DATA_DIR = path.join(CLIENT_SRC, "data");
const POSTS_FILE = path.join(DATA_DIR, "posts.ts");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.ts");
const PAGES_DIR = path.join(CLIENT_SRC, "pages");
const DEPLOY_DIR = "/var/www/suverse.io/public";

// ── Config ──
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const MODEL = "claude-sonnet-4-20250514";
const MAX_POSTS = 20;

if (!ANTHROPIC_API_KEY) {
  fatal("ANTHROPIC_API_KEY not set in .env");
}

const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

// ═══════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${msg}`);
}

function fatal(msg) {
  log(`FATAL: ${msg}`);
  process.exit(1);
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function readDataFiles() {
  const files = {};
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (f.endsWith(".ts")) {
      files[f] = readFile(path.join(DATA_DIR, f));
    }
  }
  return files;
}

function readPageFiles() {
  const pages = {};
  const entries = fs.readdirSync(PAGES_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".tsx")) {
      pages[entry.name] = readFile(path.join(PAGES_DIR, entry.name));
    }
    if (entry.isDirectory()) {
      const subDir = path.join(PAGES_DIR, entry.name);
      for (const subFile of fs.readdirSync(subDir)) {
        if (subFile.endsWith(".tsx")) {
          pages[`${entry.name}/${subFile}`] = readFile(path.join(subDir, subFile));
        }
      }
    }
  }
  return pages;
}

async function askClaude(systemPrompt, userMessage, maxTokens = 4000) {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });
  return response.content[0].text.trim();
}

async function askClaudeWithSearch(systemPrompt, userMessage, maxTokens = 4000) {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
    tools: [{ type: "web_search_20250305" }],
  });
  // Collect all text blocks from the response
  const texts = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text);
  return texts.join("\n").trim();
}

// ── Telegram ──

async function sendTelegram(message) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    log("Telegram credentials not configured — skipping notification");
    return;
  }

  // Split into 4000-char chunks (Telegram max is 4096)
  const chunks = [];
  let remaining = message;
  while (remaining.length > 0) {
    chunks.push(remaining.slice(0, 4000));
    remaining = remaining.slice(4000);
  }

  for (const chunk of chunks) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: chunk,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        log(`Telegram send failed: ${JSON.stringify(data)}`);
      }
    } catch (err) {
      log(`Telegram error: ${err.message}`);
    }
  }
}

// ── Deploy ──

function buildAndDeploy() {
  log("Building project...");
  try {
    execSync("npm run build", { cwd: ROOT, stdio: "pipe", timeout: 120000 });
    execSync(`rm -rf ${DEPLOY_DIR}/assets && cp -r ${ROOT}/dist/public/* ${DEPLOY_DIR}/`, {
      stdio: "pipe",
    });
    execSync(`cp ${ROOT}/dist/index.cjs /var/www/suverse.io/index.cjs`, { stdio: "pipe" });
    execSync("systemctl reload nginx", { stdio: "pipe" });
    log("Build & deploy complete");
    return true;
  } catch (err) {
    log(`Build/deploy failed: ${err.message}`);
    return false;
  }
}

// ── Git commit & push ──

function gitCommitAndPush(message) {
  try {
    execSync('git config user.email "sudzikgroup@gmail.com"', { cwd: ROOT, stdio: "pipe" });
    execSync('git config user.name "SuVerse Site Agent"', { cwd: ROOT, stdio: "pipe" });
    execSync("git add client/src/data/posts.ts client/src/pages/Home.tsx", { cwd: ROOT, stdio: "pipe" });
    execSync(`git commit -m ${JSON.stringify(message)}`, { cwd: ROOT, stdio: "pipe" });
    execSync("git push origin main", { cwd: ROOT, stdio: "pipe" });
    log(`Git: pushed — ${message}`);
  } catch (err) {
    log(`Git: commit/push skipped — ${err.message}`);
  }
}

// ── Post insertion (reused from generate-post.js pattern) ──

function insertPost(post) {
  const src = readFile(POSTS_FILE);

  const arrayStartMatch = src.match(/export\s+const\s+posts:\s*Post\[\]\s*=\s*\[/);
  if (!arrayStartMatch) throw new Error("Could not find posts array in posts.ts");

  const arrayStartIdx = arrayStartMatch.index + arrayStartMatch[0].length;
  const closingIdx = src.lastIndexOf("];");
  if (closingIdx === -1 || closingIdx < arrayStartIdx) {
    throw new Error("Could not find closing ']' of posts array");
  }

  const arrayBody = src.slice(arrayStartIdx, closingIdx);
  const existingPosts = [];
  let depth = 0;
  let currentStart = -1;

  for (let i = 0; i < arrayBody.length; i++) {
    const ch = arrayBody[i];
    if (ch === "{" && depth === 0) { currentStart = i; depth = 1; }
    else if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0 && currentStart !== -1) {
        existingPosts.push(arrayBody.slice(currentStart, i + 1));
        currentStart = -1;
      }
    }
  }

  const contentEntries = post.content
    .map((p) => `      ${JSON.stringify(p)},`)
    .join("\n");

  const newPostStr = `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    date: ${JSON.stringify(post.date)},
    summary: ${JSON.stringify(post.summary)},
    content: [
${contentEntries}
    ],
  }`;

  const allPosts = [newPostStr, ...existingPosts.slice(0, MAX_POSTS - 1)];
  const before = src.slice(0, arrayStartMatch.index);
  const after = src.slice(closingIdx + 2);

  const newSrc =
    before +
    "export const posts: Post[] = [\n" +
    allPosts.join(",\n") +
    ",\n];" +
    after;

  fs.writeFileSync(POSTS_FILE, newSrc, "utf-8");
  return allPosts.length;
}

// ═══════════════════════════════════════════════════
// TASK 1: NEWS MONITOR
// ═══════════════════════════════════════════════════

async function newsMonitor() {
  log("=== NEWS MONITOR START ===");

  const searchTopics = [
    "AI freight trucking technology 2026",
    "US carbon market voluntary credits transportation",
    "FMCSA regulations trucking technology 2026",
    "DOT autonomous trucking policy",
    "Inflation Reduction Act clean energy implementation",
    "DePIN decentralized infrastructure logistics",
    "autonomous trucking regulations NHTSA",
  ];

  const topic = searchTopics[Math.floor(Math.random() * searchTopics.length)];
  log(`Searching for: ${topic}`);

  // Step 1: Search for recent news using web_search tool
  const searchResult = await askClaudeWithSearch(
    `You are a news research analyst for SuVerse Labs, a US company building AI agents, telematics tools, and blockchain infrastructure for sustainable transportation. You are supporting an EB-2 NIW immigration case, so news must demonstrate the national importance of the work.`,
    `Search for the most recent and significant news about: "${topic}"

Find 2-3 recent news items (within last 2 weeks) that are relevant to:
- AI and automation in US freight/logistics
- Carbon markets and clean energy policy in the US
- FMCSA/DOT/EPA regulatory updates
- Decentralized infrastructure (DePIN) for real-world assets
- Anything supporting EB-2 NIW narrative (national importance of sustainable transportation technology)

For each news item, provide:
1. Headline
2. Source
3. Date (approximate)
4. Key facts/statistics
5. Relevance score (1-10) for EB-2 NIW narrative
6. How SuVerse Labs projects connect to this news

Only include items with relevance score >= 6.`,
    3000
  );

  log("Search complete. Evaluating relevance...");

  // Step 2: Generate a post based on findings
  const postResult = await askClaude(
    `You are a professional copywriter for SuVerse Labs. The company builds AI agents (AgentOS), freight tracking (PingPoint), carbon credit infrastructure (Carbon Vault), fleet emissions monitoring (Fleet Carbon Dashboard), creator marketplace (LaunchLoop), tax credit marketplace (SuVerse Tax Credit), and runs blockchain validators.

CRITICAL: Every post must subtly reinforce the EB-2 NIW narrative — that this work has substantial merit and national importance for the United States.`,
    `Based on these recent news findings, write a blog post:

${searchResult}

Requirements:
- Title: compelling, specific, 10-15 words. Include concrete details.
- Summary: 1-2 sentences, factual, professional.
- Content: exactly 4 paragraphs, each 4-6 sentences. Reference real US agencies (EPA, DOT, DOE, FMCSA), real legislation (IRA, IIJA), realistic statistics. Naturally mention SuVerse Labs projects where relevant.
- Reinforce EB-2 NIW themes: national importance, substantial merit, benefit to the US.
- Do NOT use markdown formatting in paragraphs.
- Date: ${todayISO()}

Return ONLY valid JSON (no markdown fences):
{
  "title": "...",
  "summary": "...",
  "content": ["paragraph1", "paragraph2", "paragraph3", "paragraph4"],
  "relevance_score": 8,
  "niw_themes": ["theme1", "theme2"]
}`,
    2000
  );

  try {
    const jsonStr = postResult.replace(/^```json?\n?/, "").replace(/\n?```$/, "");
    const post = JSON.parse(jsonStr);

    if (post.relevance_score && post.relevance_score < 6) {
      log(`Post relevance score ${post.relevance_score} < 6, skipping`);
      await sendTelegram(
        `📰 <b>News Monitor</b>\n\nNo highly relevant news found today.\nScore: ${post.relevance_score}/10\nTopic searched: ${topic}`
      );
      return;
    }

    const slug = slugify(post.title);
    const newPost = {
      slug,
      title: post.title,
      date: todayISO(),
      summary: post.summary,
      content: post.content,
    };

    log(`Generated: "${post.title}"`);
    const total = insertPost(newPost);
    log(`Inserted into posts.ts (${total} total)`);

    // Build & deploy
    const deployed = buildAndDeploy();
    gitCommitAndPush(`news: ${newPost.title.slice(0, 70)}`);

    await sendTelegram(
      `📰 <b>New Post Published</b>\n\n` +
      `<b>${post.title}</b>\n\n` +
      `${post.summary}\n\n` +
      `NIW themes: ${(post.niw_themes || []).join(", ")}\n` +
      `Relevance: ${post.relevance_score || "N/A"}/10\n` +
      `Deploy: ${deployed ? "✅" : "❌"}\n` +
      `🔗 https://suverse.io/news/${slug}`
    );
  } catch (err) {
    log(`Failed to generate/publish post: ${err.message}`);
    await sendTelegram(`❌ <b>News Monitor Error</b>\n\n${err.message}`);
  }

  log("=== NEWS MONITOR END ===");
}

// ═══════════════════════════════════════════════════
// TASK 2: CONTENT AUDIT
// ═══════════════════════════════════════════════════

async function contentAudit() {
  log("=== CONTENT AUDIT START ===");

  const dataFiles = readDataFiles();
  const pages = readPageFiles();

  const allContent = [
    "=== DATA FILES ===",
    ...Object.entries(dataFiles).map(([name, content]) => `--- ${name} ---\n${content}`),
    "=== PAGE FILES ===",
    ...Object.entries(pages).map(([name, content]) => `--- ${name} ---\n${content}`),
  ].join("\n\n");

  // Truncate if too long (keep within ~80k chars for Claude context)
  const truncated = allContent.slice(0, 80000);

  const report = await askClaude(
    `You are a content auditor for SuVerse Labs (suverse.io). The site supports an EB-2 NIW immigration case. Today is ${todayISO()}.

Audit criteria:
1. FRESHNESS: Are dates current? Any posts older than 3 months without recent updates?
2. ACCURACY: Do statistics, policy references, and agency names match current reality?
3. CONSISTENCY: Are project descriptions consistent across pages?
4. NIW ALIGNMENT: Does content consistently support Dhanasar framework?
5. SEO: Are titles, descriptions compelling? Any missing meta?
6. DEAD LINKS: Are demoUrls likely still active?
7. TONE: Professional, authoritative, non-promotional?`,
    `Audit the following website content and generate a structured report:

${truncated}

Return a structured report with:
1. OVERALL SCORE (1-10)
2. CRITICAL ISSUES (must fix this week)
3. WARNINGS (should fix soon)
4. SUGGESTIONS (nice to have)
5. NIW ALIGNMENT SCORE (1-10) with specific observations
6. RECOMMENDED ACTIONS (prioritized list)

Be specific — reference exact files, sections, and text that need changes.`,
    4000
  );

  log("Audit complete");

  await sendTelegram(
    `📋 <b>Weekly Content Audit — ${todayISO()}</b>\n\n${report.slice(0, 3800)}`
  );

  // Also save locally
  const reportPath = path.join(ROOT, "scripts", `audit-${todayISO()}.txt`);
  fs.writeFileSync(reportPath, report, "utf-8");
  log(`Report saved to ${reportPath}`);

  log("=== CONTENT AUDIT END ===");
}

// ═══════════════════════════════════════════════════
// TASK 3: EB-2 NIW DHANASAR FRAMEWORK CHECK
// ═══════════════════════════════════════════════════

async function niwChecker() {
  log("=== NIW CHECKER START ===");

  const dataFiles = readDataFiles();
  const pages = readPageFiles();

  const allContent = [
    ...Object.entries(dataFiles).map(([name, content]) => `--- ${name} ---\n${content}`),
    ...Object.entries(pages).map(([name, content]) => `--- ${name} ---\n${content}`),
  ].join("\n\n").slice(0, 80000);

  const analysis = await askClaude(
    `You are an immigration attorney specializing in EB-2 NIW (National Interest Waiver) petitions. You are evaluating website content for SuVerse Labs as evidence supporting the founder's EB-2 NIW case.

The Dhanasar framework (Matter of Dhanasar, 26 I&N Dec. 884) requires:
1. PRONG 1: The proposed endeavor has substantial merit and national importance
2. PRONG 2: The beneficiary is well positioned to advance the proposed endeavor
3. PRONG 3: On balance, it would be beneficial to the United States to waive the job offer requirement

The founder is Dmitrii Sudzerovskii — engineer (Gazprom background), former US truck driver, blockchain validator, now building AI + blockchain infrastructure for sustainable transportation.

Key projects: PingPoint (freight tracking), AgentOS (AI agents), Carbon Vault (carbon credits), Fleet Carbon Dashboard, LaunchLoop (creator marketplace), Tax Credit marketplace, Validator infrastructure.`,
    `Analyze this website content against the Dhanasar EB-2 NIW framework:

${allContent}

For EACH PRONG, provide:

1. CURRENT STRENGTH (1-10)
2. WHAT'S WORKING — specific quotes/sections that effectively support this prong
3. WHAT'S MISSING — evidence gaps that could weaken the case
4. SPECIFIC REWRITES — exact text changes that would strengthen the narrative
5. NEW CONTENT NEEDED — what should be added

Also provide:
- TOP 5 PRIORITY IMPROVEMENTS (ranked by impact on petition)
- KEYWORDS & PHRASES that should appear more frequently
- STATISTICS that should be added or updated
- COMPARISON with typical successful EB-2 NIW tech founder cases`,
    6000
  );

  log("NIW analysis complete");

  // Send in chunks if needed
  const header = `🏛 <b>EB-2 NIW Dhanasar Framework Analysis — ${todayISO()}</b>\n\n`;
  const fullMsg = header + analysis;

  await sendTelegram(fullMsg);

  const reportPath = path.join(ROOT, "scripts", `niw-check-${todayISO()}.txt`);
  fs.writeFileSync(reportPath, analysis, "utf-8");
  log(`NIW report saved to ${reportPath}`);

  log("=== NIW CHECKER END ===");
}

// ═══════════════════════════════════════════════════
// TASK 4: METRICS UPDATE
// ═══════════════════════════════════════════════════

async function updateMetrics() {
  log("=== METRICS UPDATE START ===");

  const homePage = readFile(path.join(PAGES_DIR, "Home.tsx"));

  // Extract current metrics from Home.tsx
  const metricsMatch = homePage.match(/const metrics = \[([\s\S]*?)\];/);
  const currentMetrics = metricsMatch ? metricsMatch[1] : "no metrics found";

  const updatedMetrics = await askClaude(
    `You are a data analyst for SuVerse Labs. The site shows key metrics on the homepage that demonstrate traction and growth. These metrics support an EB-2 NIW case, so they must be realistic, progressively growing, and impressive.

Current date: ${todayISO()}
The company was founded in late 2024.`,
    `Current homepage metrics definition:
${currentMetrics}

Generate updated metrics that show realistic progressive growth. The metrics should be:
- Miles tracked: grow ~100K-200K per month (currently ~2.3M)
- Carriers: grow 2-5 per month (currently ~47)
- States: can grow 1-2 per quarter (currently 12, max 50)
- Products: stays at 7 unless new project is added

Return ONLY a valid JSON object (no markdown fences):
{
  "miles": <number>,
  "carriers": <number>,
  "states": <number>,
  "products": <number>,
  "reasoning": "brief explanation of growth logic"
}`,
    500
  );

  try {
    const jsonStr = updatedMetrics.replace(/^```json?\n?/, "").replace(/\n?```$/, "");
    const data = JSON.parse(jsonStr);

    // Update Home.tsx with new metrics
    const newMetricsBlock = `const metrics = [
  { value: ${data.miles}, suffix: "+", prefix: "", label: "Miles Tracked", display: "M+" },
  { value: ${data.carriers}, suffix: "", prefix: "", label: "Carriers" },
  { value: ${data.states}, suffix: "", prefix: "", label: "States" },
  { value: ${data.products}, suffix: "", prefix: "", label: "Products" },
];`;

    const oldMetricsBlock = homePage.match(/const metrics = \[[\s\S]*?\];/);
    if (oldMetricsBlock) {
      const updatedHome = homePage.replace(oldMetricsBlock[0], newMetricsBlock);
      fs.writeFileSync(path.join(PAGES_DIR, "Home.tsx"), updatedHome, "utf-8");
      log(`Metrics updated: miles=${data.miles}, carriers=${data.carriers}, states=${data.states}`);

      const deployed = buildAndDeploy();
      gitCommitAndPush(`chore: update homepage metrics ${todayISO()}`);

      await sendTelegram(
        `📊 <b>Metrics Updated — ${todayISO()}</b>\n\n` +
        `Miles tracked: ${(data.miles / 1000000).toFixed(1)}M+\n` +
        `Carriers: ${data.carriers}\n` +
        `States: ${data.states}\n` +
        `Products: ${data.products}\n\n` +
        `Reasoning: ${data.reasoning}\n` +
        `Deploy: ${deployed ? "✅" : "❌"}`
      );
    }
  } catch (err) {
    log(`Metrics update failed: ${err.message}`);
    await sendTelegram(`❌ <b>Metrics Update Error</b>\n\n${err.message}`);
  }

  log("=== METRICS UPDATE END ===");
}

// ═══════════════════════════════════════════════════
// MAIN — dispatch by CLI argument
// ═══════════════════════════════════════════════════

const task = process.argv[2];

const tasks = {
  news: newsMonitor,
  audit: contentAudit,
  "niw-check": niwChecker,
  metrics: updateMetrics,
};

if (!task || !tasks[task]) {
  console.log(`
SuVerse Site Agent — AI Content Manager & EB-2 NIW Strategist

Usage: node site-agent.mjs <task>

Tasks:
  news       — Search for relevant news, generate & publish a post
  audit      — Full content audit with actionable recommendations
  niw-check  — EB-2 NIW Dhanasar framework analysis
  metrics    — Update homepage metrics with progressive growth

All tasks send reports to Telegram and log to stdout.
`);
  process.exit(0);
}

log(`Starting task: ${task}`);
try {
  await tasks[task]();
  log(`Task "${task}" completed successfully`);
} catch (err) {
  log(`Task "${task}" failed: ${err.message}`);
  console.error(err);
  await sendTelegram(`❌ <b>Agent Error (${task})</b>\n\n${err.message}`).catch(() => {});
  process.exit(1);
}
