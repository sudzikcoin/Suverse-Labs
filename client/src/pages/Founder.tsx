import { PageShell } from "@/components/layout/PageShell";
import { motion } from "framer-motion";
import {
  Truck,
  Bot,
  Network,
  BarChart3,
  Target,
  Leaf,
  Shield,
  Zap,
  FileText,
  Wrench,
  Code2,
  Rocket,
} from "lucide-react";

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── Data ── */
const backgroundStory = [
  {
    icon: Wrench,
    era: "Early Career",
    title: "Industrial Engineer & Electrician",
    description:
      "Started as an electrician, advancing through heavy industry with steadily increasing rank and responsibilities. Served as engineer at Gazprom Energoholding, working with complex energy and electrical systems at an industrial scale. This foundation in physical infrastructure — how systems actually behave under real conditions — shapes every product built at SuVerse Labs.",
    color: "#8899AA",
    bg: "rgba(136, 153, 170, 0.08)",
    ring: "rgba(136, 153, 170, 0.15)",
  },
  {
    icon: Truck,
    era: "USA Chapter",
    title: "OTR Long-Haul Truck Driver",
    description:
      "After relocating to the United States, gained direct hands-on experience in American logistics as an over-the-road truck driver. Saw firsthand the inefficiencies, data gaps, and opportunities in freight transportation — empty miles, fuel waste, lack of real-time visibility, and the complete absence of carbon tracking at the carrier level. This experience became the foundation for every logistics product at SuVerse Labs.",
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.08)",
    ring: "rgba(0, 255, 136, 0.15)",
  },
  {
    icon: Code2,
    era: "Builder Phase",
    title: "AI, Blockchain & DePIN",
    description:
      "Completed PostHuman validator school in the Cosmos ecosystem and built deep expertise in decentralized physical infrastructure (DePIN) and validator operations. Combined industrial engineering, trucking experience, and blockchain knowledge to found SuVerse Labs — focused on AI agents, telematics, and the infrastructure needed to decarbonize freight at scale.",
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.08)",
    ring: "rgba(0, 212, 255, 0.15)",
  },
];

const expertiseTags = [
  { label: "Green Logistics & Telematics", color: "#00FF88" },
  { label: "AI Agents & Automation", color: "#00D4FF" },
  { label: "Blockchain / DePIN Infrastructure", color: "#6366F1" },
  { label: "Systems Architecture", color: "#8899AA" },
];

const initiatives = [
  {
    icon: Bot,
    title: "AgentOS",
    description:
      "An AI robot-application platform that automates key workflows for carriers, brokers, and finance teams — from document processing to decision support.",
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.08)",
  },
  {
    icon: FileText,
    title: "SuVerse Tax Credit",
    description:
      "Tooling to help logistics companies and small businesses access and manage tax credits and incentives in a transparent, data-driven way.",
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.08)",
  },
  {
    icon: Target,
    title: "PingPoint",
    description:
      "A tracking core for freight that improves visibility, reduces empty miles, and supports more efficient use of equipment and fuel.",
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.08)",
  },
  {
    icon: Leaf,
    title: "CO2 Blockchain Infrastructure",
    description:
      "Systems for measuring, recording, and tokenizing emissions-related data in a secure, auditable, on-chain ledger.",
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.08)",
  },
  {
    icon: Shield,
    title: "Validator Portal",
    description:
      "Infrastructure and tools that support validators and decentralized networks aligned with real-world logistics use cases.",
    color: "#6366F1",
    bg: "rgba(99, 102, 241, 0.08)",
  },
  {
    icon: Network,
    title: "AI & Blockchain Tooling",
    description:
      "Frameworks that connect AI agents with on-chain logic and off-chain data, enabling automated, trustless logistics operations.",
    color: "#6366F1",
    bg: "rgba(99, 102, 241, 0.08)",
  },
];

/* ══════════════════════════════════════════════
   FOUNDER PAGE
══════════════════════════════════════════════ */
export default function Founder() {
  return (
    <PageShell>
      {/* ──────────────────────────────────────────
          HERO — Split layout with cyan radial glow
      ────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden py-24 md:py-32"
        style={{ background: "#060910" }}
      >
        {/* Cyan radial glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D4FF]/[0.04] blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#6366F1]/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00D4FF]/30 text-[#00D4FF] tracking-widest uppercase bg-[#00D4FF]/5 mb-6"
              >
                Founder & Systems Architect
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Meet the Founder
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-[#8899AA] mb-6 leading-relaxed max-w-xl"
              >
                From Gazprom engineer to OTR truck driver to AI & blockchain builder
              </motion.p>

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.08]"
                style={{ background: "rgba(0, 212, 255, 0.06)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#00D4FF", boxShadow: "0 0 8px #00D4FF" }}
                />
                <span
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Dmitrii Sudzerovskii
                </span>
                <span className="text-[#8899AA] text-sm">· SuVerse Labs</span>
              </motion.div>
            </div>

            {/* Right — avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring behind */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF]/20 via-[#00FF88]/10 to-[#6366F1]/20 blur-[40px] scale-110" />

                {/* Gradient border wrapper */}
                <div
                  className="relative w-[200px] h-[200px] rounded-full p-[3px]"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF, #00FF88, #6366F1)",
                  }}
                >
                  {/* Avatar inner — dark bg with initials */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                    style={{ background: "#0C1018" }}
                  >
                    {/* Try to load actual image; fallback to initials */}
                    <img
                      src="/images/IMG_1423.jpeg"
                      alt="Dmitrii Sudzerovskii"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const initials = document.createElement("span");
                          initials.textContent = "DZ";
                          initials.className = "text-4xl font-bold text-[#00D4FF] select-none";
                          parent.appendChild(initials);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          BACKGROUND STORY — 3 column cards
      ────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#080C14" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
              Background
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Journey
            </h2>
            <p className="text-[#8899AA] text-lg max-w-2xl">
              A career built across continents, industries, and disciplines — all converging on one
              mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {backgroundStory.map((chapter, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.05] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0C1018" }}
                data-testid={`card-story-${index}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    background: chapter.bg,
                    boxShadow: `0 0 0 1px ${chapter.ring}`,
                  }}
                >
                  <chapter.icon className="w-7 h-7" style={{ color: chapter.color }} />
                </div>

                {/* Era label */}
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-2 block"
                  style={{ color: chapter.color }}
                >
                  {chapter.era}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {chapter.title}
                </h3>

                {/* Description */}
                <p className="text-[#8899AA] leading-relaxed text-sm flex-1">
                  {chapter.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-6 h-px"
                  style={{
                    background: `linear-gradient(to right, ${chapter.color}40, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          EXPERTISE TAGS
      ────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="mb-10"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
              Expertise
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Domain Knowledge
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="flex flex-wrap gap-3"
          >
            {expertiseTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200"
                style={{
                  background: `${tag.color}0D`,
                  borderColor: `${tag.color}25`,
                  color: tag.color,
                }}
                data-testid={`badge-expertise-${index}`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: tag.color }}
                />
                {tag.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          INITIATIVES — grid of cards
      ────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "#080C14" }}
      >
        {/* Subtle glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#6366F1]/[0.03] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
              Active Work
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Initiatives at SuVerse Labs
            </h2>
            <p className="text-[#8899AA] text-lg max-w-2xl">
              Projects currently in development or active deployment across AI, blockchain, and
              sustainable logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.05] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.1]"
                style={{ background: "#0C1018" }}
                data-testid={`card-initiative-${index}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: initiative.bg,
                    boxShadow: `0 0 0 1px ${initiative.color}20`,
                  }}
                >
                  <initiative.icon className="w-6 h-6" style={{ color: initiative.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#8899AA] leading-relaxed flex-1">
                  {initiative.description}
                </p>

                {/* Color accent */}
                <div
                  className="mt-5 h-px w-8"
                  style={{ background: initiative.color, opacity: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CLOSING — National alignment note
      ────────────────────────────────────────── */}
      <section className="py-20 md:py-24" style={{ background: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00FF88] mb-4 block">
                Building in America
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Supporting U.S. National Interests
              </h2>
              <div className="space-y-5 text-[#8899AA] leading-relaxed text-lg">
                <p>
                  Through these projects, Dmitrii's work is directly aligned with U.S. national
                  interests: strengthening critical digital infrastructure, supporting cleaner and more
                  efficient freight transportation, and enabling better use of data for climate and
                  energy decisions.
                </p>
                <p>
                  By combining practical trucking experience with deep technical knowledge, he designs
                  systems that are not only innovative on paper but also realistic for adoption by
                  American fleets and logistics companies.
                </p>
                <p>
                  Dmitrii lives in the United States with his wife and two children and is committed
                  to building long-term solutions that support sustainable economic growth, modern
                  infrastructure, and the transition to a lower-carbon future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
