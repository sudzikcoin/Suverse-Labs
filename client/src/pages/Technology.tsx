import { PageShell } from "@/components/layout/PageShell";
import { Bot, Network, Cpu, Radio, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* ── Tech deep-dive cards ── */
const techCards = [
  {
    icon: Bot,
    color: "#00FF88",
    title: "AI & Agents",
    description:
      "LLM-based agents built for specific business domains. They understand context, make decisions, and communicate naturally with human operators — going far beyond simple automation.",
    features: [
      "Multi-step reasoning and decision support",
      "Agent orchestration for complex workflows",
      "Human-in-the-loop for critical decisions",
    ],
    testId: "card-tech-ai",
  },
  {
    icon: Network,
    color: "#00D4FF",
    title: "Blockchain & DePIN",
    description:
      "Blockchain where it delivers real value: transparency, trustless verification, and interoperability between systems and organizations at scale.",
    features: [
      "Validator operations on aligned networks",
      "Immutable audit trails for carbon credits",
      "DePIN integration for decentralized data",
    ],
    testId: "card-tech-blockchain",
  },
  {
    icon: Radio,
    color: "#6366F1",
    title: "Telematics",
    description:
      "The physical world is our data source. Vehicles and devices provide the real-world telemetry that powers emissions calculations, operational analytics, and tracking systems.",
    features: [
      "ELD and telematics device integration",
      "Mobile device location and sensor data",
      "Real-time data processing pipelines",
    ],
    testId: "card-tech-iot",
  },
];

/* ── Stack tags ── */
const stackTags = [
  { label: "AgentOS", color: "#00D4FF" },
  { label: "DePIN Validators", color: "#6366F1" },
  { label: "Carbon Measurement", color: "#00FF88" },
  { label: "Fleet Telematics", color: "#00D4FF" },
  { label: "LLM Agents", color: "#00FF88" },
  { label: "Smart Contracts", color: "#6366F1" },
  { label: "Real-time Analytics", color: "#00D4FF" },
  { label: "REC Tokenization", color: "#00FF88" },
];

export default function Technology() {
  return (
    <PageShell>
      {/* ════════════════════════════════════════════
          HERO — Full-width background image
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/tech-hero.png')" }}
        />
        {/* Directional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/95 via-[#060910]/70 to-[#060910]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060910]/40 via-transparent to-[#060910]/90" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00D4FF]/30 text-[#00D4FF] tracking-widest uppercase bg-[#00D4FF]/5">
                AI · Telematics · Blockchain
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Technology &amp;{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00D4FF 0%, #00FF88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Innovation
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              The technical foundations powering sustainable transportation
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060910] to-transparent" />
      </section>

      {/* ════════════════════════════════════════════
          ARCHITECTURE OVERVIEW — Three-layer steps
      ════════════════════════════════════════════ */}
      <section className="relative bg-[#060910] py-24 overflow-hidden">
        {/* Subtle grid glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#00D4FF]/[0.025] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three-Layer Architecture
          </motion.h2>

          {/* Steps row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {/* Step 1 — AI Layer */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
              className="flex flex-col items-center text-center max-w-[240px] px-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-400 hover:scale-110"
                style={{
                  background: "rgba(0, 212, 255, 0.12)",
                  boxShadow: "0 0 0 1px rgba(0, 212, 255, 0.25), 0 0 32px rgba(0, 212, 255, 0.08)",
                }}
              >
                <Bot className="w-7 h-7 text-[#00D4FF]" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AI Layer
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                LLM agents that reason, decide, and communicate across logistics
                operations
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex-shrink-0 mx-2 md:mx-6 my-6 md:my-0"
            >
              <ArrowRight
                className="w-8 h-8 text-[#00D4FF]/40 rotate-90 md:rotate-0"
              />
            </motion.div>

            {/* Step 2 — Telematics */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
              className="flex flex-col items-center text-center max-w-[240px] px-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-400 hover:scale-110"
                style={{
                  background: "rgba(0, 255, 136, 0.12)",
                  boxShadow: "0 0 0 1px rgba(0, 255, 136, 0.25), 0 0 32px rgba(0, 255, 136, 0.08)",
                }}
              >
                <Radio className="w-7 h-7 text-[#00FF88]" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Telematics Layer
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                Real-world vehicle data and sensor telemetry feeding the
                intelligence pipeline
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex-shrink-0 mx-2 md:mx-6 my-6 md:my-0"
            >
              <ArrowRight
                className="w-8 h-8 text-[#00FF88]/40 rotate-90 md:rotate-0"
              />
            </motion.div>

            {/* Step 3 — Blockchain */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
              className="flex flex-col items-center text-center max-w-[240px] px-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-400 hover:scale-110"
                style={{
                  background: "rgba(99, 102, 241, 0.12)",
                  boxShadow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 0 32px rgba(99, 102, 241, 0.08)",
                }}
              >
                <Network className="w-7 h-7 text-[#6366F1]" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Blockchain Layer
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                Transparent, immutable verification anchoring trust across the
                entire stack
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TECH DEEP DIVE — 3 cards grid
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#060910]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-xs text-[#00D4FF] uppercase tracking-widest font-medium">
              Deep Dive
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built for the real world
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardFade}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 bg-[#0C1018]"
                data-testid={card.testId}
              >
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: `${card.color}15`,
                      boxShadow: `0 0 0 1px ${card.color}22`,
                    }}
                  >
                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>

                  <h3
                    className="text-xl font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-white/50 leading-relaxed text-sm mb-6">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-white/40">
                        <span
                          className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: card.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STACK SECTION — 2-column with pill badges
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#060910] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <span className="text-xs text-[#00FF88] uppercase tracking-widest font-medium">
                What We Use
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Stack
              </h2>
              <p className="text-white/45 leading-relaxed max-w-md">
                Every tool in our stack is chosen for purpose — not trend. We
                integrate AI, decentralized infrastructure, and telematics to
                build something that actually works for fleets at scale.
              </p>
            </motion.div>

            {/* Right — pill badges */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {stackTags.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardFade}
                  className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    borderColor: `${tag.color}30`,
                    color: tag.color,
                    background: `${tag.color}08`,
                  }}
                >
                  {tag.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
