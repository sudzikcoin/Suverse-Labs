#!/usr/bin/env node

/**
 * Auto-generates a news post using Claude Sonnet via Anthropic API,
 * prepends it to client/src/data/posts.ts, and trims to 20 posts max.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(ROOT, ".env") });

const POSTS_FILE = path.join(ROOT, "client/src/data/posts.ts");
const MAX_POSTS = 20;

const TOPICS = [
  "AI adoption in the U.S. freight and logistics industry — reference EPA SmartWay, DOT, FMCSA regulations, real statistics about trucking emissions, fleet automation trends",
  "Carbon markets, Inflation Reduction Act (IRA) clean energy tax credits, DOE and EPA climate policy updates, voluntary carbon market growth, REC certificates",
  "DePIN (Decentralized Physical Infrastructure Networks) and blockchain infrastructure — Cosmos ecosystem, validator economics, real-world asset tokenization, supply chain transparency",
  "SuVerse Labs project update: PingPoint AI-powered freight tracking — new features, telematics integrations, fleet visibility improvements",
  "SuVerse Labs project update: AgentOS AI robot applications — new agent capabilities, LLM automation for carriers and brokers, workflow improvements",
  "SuVerse Labs project update: LaunchLoop creator-led product growth marketplace — creator matching, B2B SaaS distribution, performance analytics",
  "SuVerse Labs project update: Carbon Vault and Fleet Carbon Dashboard — emissions measurement improvements, blockchain carbon credit tracking, sustainability reporting",
  "U.S. clean energy infrastructure and its intersection with freight — EV trucks, hydrogen fuel cells, charging infrastructure, grid modernization for logistics",
];

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

async function generatePost() {
  const client = new Anthropic();
  const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
  const date = todayISO();

  const prompt = `You are a professional copywriter for SuVerse Labs, a U.S.-based technology company building AI agents, telematics tools, and blockchain infrastructure to decarbonize trucking and modernize logistics.

Write a blog post on this topic:
${topic}

Requirements:
- Title: compelling, specific, 10-15 words max. Include concrete details (numbers, policy names, technologies).
- Summary: 1-2 sentences, factual, professional tone.
- Content: exactly 4 paragraphs, each 4-6 sentences. Professional but accessible tone. Reference real U.S. agencies (EPA, DOT, DOE, FMCSA), real legislation (IRA, IIJA), real statistics where plausible. Mention SuVerse Labs projects naturally where relevant (PingPoint, AgentOS, Carbon Vault, Fleet Carbon Dashboard, LaunchLoop, Validators).
- Do NOT use markdown formatting in content paragraphs.
- Date: ${date}

Return ONLY valid JSON (no markdown fences) in this exact format:
{
  "title": "...",
  "summary": "...",
  "content": ["paragraph1", "paragraph2", "paragraph3", "paragraph4"]
}`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1500,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();

  // Parse JSON, stripping possible markdown fences
  const jsonStr = text.replace(/^```json?\n?/, "").replace(/\n?```$/, "");
  const data = JSON.parse(jsonStr);

  return {
    slug: slugify(data.title),
    title: data.title,
    date,
    summary: data.summary,
    content: data.content,
  };
}

/**
 * Robust approach: parse out all existing posts as JSON objects,
 * prepend the new one, trim to MAX_POSTS, and rewrite the entire file.
 */
function insertPost(post) {
  const src = fs.readFileSync(POSTS_FILE, "utf-8");

  // Extract the array content between "Post[] = [" and the final "];"
  const arrayStartMatch = src.match(/export\s+const\s+posts:\s*Post\[\]\s*=\s*\[/);
  if (!arrayStartMatch) {
    throw new Error("Could not find 'export const posts: Post[] = [' in posts.ts");
  }
  const arrayStartIdx = arrayStartMatch.index + arrayStartMatch[0].length;

  // Find the matching closing "];" — search from the end
  const closingIdx = src.lastIndexOf("];");
  if (closingIdx === -1 || closingIdx < arrayStartIdx) {
    throw new Error("Could not find closing ']' of posts array");
  }

  // Extract the array body (everything between [ and ])
  const arrayBody = src.slice(arrayStartIdx, closingIdx);

  // Parse individual post objects using brace counting
  const existingPosts = [];
  let depth = 0;
  let currentStart = -1;

  for (let i = 0; i < arrayBody.length; i++) {
    const ch = arrayBody[i];
    if (ch === "{" && depth === 0) {
      currentStart = i;
      depth = 1;
    } else if (ch === "{") {
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && currentStart !== -1) {
        existingPosts.push(arrayBody.slice(currentStart, i + 1));
        currentStart = -1;
      }
    }
  }

  // Build new post string
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

  // Combine: new post first, then existing (up to MAX_POSTS - 1)
  const allPosts = [newPostStr, ...existingPosts.slice(0, MAX_POSTS - 1)];

  // Get the parts before and after the array
  const before = src.slice(0, arrayStartMatch.index);
  const after = src.slice(closingIdx + 2); // skip "];"

  // Reassemble
  const newSrc =
    before +
    "export const posts: Post[] = [\n" +
    allPosts.join(",\n") +
    ",\n];" +
    after;

  fs.writeFileSync(POSTS_FILE, newSrc, "utf-8");
  return allPosts.length;
}

async function main() {
  console.log(`[${new Date().toISOString()}] Generating new post...`);

  try {
    const post = await generatePost();
    console.log(`  Title: ${post.title}`);
    console.log(`  Slug:  ${post.slug}`);

    const totalPosts = insertPost(post);
    console.log(`  Inserted into posts.ts (${totalPosts} total, max ${MAX_POSTS})`);
    console.log(`  Done.`);
  } catch (err) {
    console.error("Failed to generate post:", err.message);
    process.exit(1);
  }
}

main();
