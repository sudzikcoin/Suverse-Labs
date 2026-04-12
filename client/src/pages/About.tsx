import { PageShell } from "@/components/layout/PageShell";
import { motion } from "framer-motion";
import { Bot, Gauge, Leaf, Network } from "lucide-react";

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
const focusAreas = [
  {
    icon: Bot,
    title: "AI AgentOS",
    description:
      "LLM-powered autonomous agents that automate logistics workflows, financial processes, and operational decision-making across the freight ecosystem.",
    color: "#00D4FF",
    bg: "rgba(0, 212, 255, 0.08)",
    ring: "rgba(0, 212, 255, 0.15)",
  },
  {
    icon: Gauge,
    title: "Telematics & Fleet Monitoring",
    description:
      "Real-time telemetry collection, ELD integration, and data pipelines that turn raw vehicle signals into actionable operational intelligence.",
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.08)",
    ring: "rgba(0, 255, 136, 0.15)",
  },
  {
    icon: Leaf,
    title: "Carbon Measurement",
    description:
      "Accurate, auditable emissions tracking with on-chain verification — from per-mile CO₂ calculations to tokenized carbon credit accounting.",
    color: "#00FF88",
    bg: "rgba(0, 255, 136, 0.08)",
    ring: "rgba(0, 255, 136, 0.15)",
  },
  {
    icon: Network,
    title: "Validators & DePIN",
    description:
      "Secure participation in decentralized physical infrastructure networks, providing trust, transparency, and scalable blockchain infrastructure.",
    color: "#6366F1",
    bg: "rgba(99, 102, 241, 0.08)",
    ring: "rgba(99, 102, 241, 0.15)",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Initial Experiments",
    description:
      "Began exploring fleet monitoring and telematics integration possibilities, identifying the core gaps between real-world trucking data and modern analytics tooling.",
  },
  {
    year: "2023",
    title: "PingPoint Prototype",
    description:
      "Developed the core tracking technology that would become PingPoint — a freight visibility system designed around carrier workflows, not just data collection.",
  },
  {
    year: "2023",
    title: "Carbon Dashboard",
    description:
      "Launched initial versions of fleet carbon monitoring dashboards, translating telematics data into per-mile emissions estimates for carrier reporting.",
  },
  {
    year: "2024",
    title: "Carbon Vault Concept",
    description:
      "Began development of blockchain-based carbon credit tracking, creating an auditable ledger for emissions reductions across logistics operations.",
  },
  {
    year: "2024",
    title: "Validator Infrastructure",
    description:
      "Launched validator operations on aligned blockchain networks, building expertise in DePIN infrastructure to support real-world logistics use cases.",
  },
];

/* ══════════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════════ */
export default function About() {
  return (
    <PageShell>
      {/* ──────────────────────────────────────────
          HERO — Full-width image with gradient
      ────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-hero.png')" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/90 via-[#060910]/60 to-[#060910]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060910]/40 via-transparent to-[#060910]/90" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00D4FF]/30 text-[#00D4FF] tracking-widest uppercase bg-[#00D4FF]/5 mb-6"
            >
              About SuVerse Labs
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About SuVerse Labs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Building technology at the intersection of AI, blockchain, and sustainable logistics
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          MISSION
      ────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
                Our Mission
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Decarbonizing freight through{" "}
                <span className="text-[#00D4FF]">AI</span> and{" "}
                <span className="text-[#00FF88]">blockchain</span>
              </h2>
              <p className="text-lg text-[#8899AA] leading-relaxed mb-6">
                SuVerse Labs is a technology company dedicated to transforming the transportation
                industry through innovation. We operate at the intersection of artificial intelligence,
                blockchain infrastructure, and sustainable logistics — creating tools that help carriers,
                brokers, and shippers measure, optimize, and reduce their environmental impact while
                improving operational efficiency.
              </p>
              <p className="text-lg text-[#8899AA] leading-relaxed">
                Every product we build starts with a real-world problem observed from inside the
                freight industry. From the cab of a long-haul truck to complex energy infrastructure,
                our experience informs technology that is not only technically sound but operationally
                practical — designed for the fleets and logistics companies that will actually use it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          VISION
      ────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "#080C14" }}
      >
        {/* Subtle cyan glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00D4FF]/[0.03] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00FF88] mb-6 block">
              Our Vision
            </span>
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug tracking-tight mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "We envision a future where every mile traveled is{" "}
              <span className="text-[#00D4FF]">measurable</span>,{" "}
              <span className="text-[#00FF88]">intelligent</span>, and{" "}
              <span className="text-[#6366F1]">low-carbon</span>"
            </blockquote>
            <p className="text-lg text-[#8899AA] leading-relaxed max-w-3xl mx-auto">
              Through AI-driven automation, real-time telematics, and transparent blockchain
              infrastructure, we're building the foundation for a transportation industry that meets
              the demands of the modern economy while actively contributing to global climate goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          FOCUS AREAS — 2×2 grid
      ────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
              What We Build
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Focus Areas
            </h2>
            <p className="text-[#8899AA] text-lg max-w-2xl">
              The key technology domains where we concentrate our efforts and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#0C1018" }}
                data-testid={`card-focus-area-${index}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    background: area.bg,
                    boxShadow: `0 0 0 1px ${area.ring}`,
                  }}
                >
                  <area.icon className="w-7 h-7" style={{ color: area.color }} />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {area.title}
                </h3>
                <p className="text-[#8899AA] leading-relaxed">{area.description}</p>
                <div
                  className="mt-6 h-px w-12"
                  style={{ background: area.color, opacity: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          TIMELINE
      ────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "#080C14" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="mb-14"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00D4FF] mb-4 block">
              Our Journey
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Milestones
            </h2>
            <p className="text-[#8899AA] text-lg max-w-2xl">
              The path that led us from initial experiments to a full AI and blockchain stack for
              sustainable logistics
            </p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Left vertical line */}
            <div className="absolute left-[22px] md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/40 via-[#00FF88]/20 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className="relative flex items-start gap-8 pl-16"
                  data-testid={`timeline-item-${index}`}
                >
                  {/* Cyan dot on the line */}
                  <div
                    className="absolute left-0 top-1 w-11 h-11 rounded-full flex items-center justify-center border-2 border-[#00D4FF] flex-shrink-0 z-10"
                    style={{
                      background: "rgba(0, 212, 255, 0.1)",
                      boxShadow: "0 0 16px rgba(0, 212, 255, 0.2)",
                    }}
                  >
                    <span className="text-[#00D4FF] text-[10px] font-bold leading-none text-center">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl border border-white/[0.05] p-6 transition-all duration-300 hover:border-[#00D4FF]/20"
                    style={{ background: "#0C1018" }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                        style={{
                          background: "rgba(0, 212, 255, 0.1)",
                          color: "#00D4FF",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                        }}
                      >
                        {item.year}
                      </span>
                      <h4
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#8899AA] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
