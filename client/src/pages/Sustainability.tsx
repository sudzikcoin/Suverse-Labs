import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/layout/PageShell";
import { Truck, BarChart3, TrendingDown, Link2, ArrowRight } from "lucide-react";
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

/* ── Impact stats ── */
const impactStats = [
  {
    value: "16%",
    gradient: "linear-gradient(90deg, #00D4FF 0%, #00FF88 100%)",
    label: "Transportation's share of global greenhouse gas emissions",
  },
  {
    value: "30%",
    gradient: "linear-gradient(90deg, #00FF88 0%, #6366F1 100%)",
    label: "Potential emissions reduction with AI-driven routing optimization",
  },
  {
    value: "2030",
    gradient: "linear-gradient(90deg, #6366F1 0%, #00D4FF 100%)",
    label: "Target year for significant industry-wide decarbonization progress",
  },
];

/* ── Three Pillars ── */
const pillars = [
  {
    icon: BarChart3,
    color: "#00D4FF",
    title: "Measurement",
    description:
      "Accurate, granular carbon measurement through telematics integration and AI-powered analysis. You can't reduce what you can't measure — so we start there.",
    testId: "card-pillar-measurement",
  },
  {
    icon: TrendingDown,
    color: "#00FF88",
    title: "Reduction",
    description:
      "Actionable insights for reducing emissions through better routing, fewer empty miles, and AI-driven operational optimization delivered in real time.",
    testId: "card-pillar-reduction",
  },
  {
    icon: Link2,
    color: "#6366F1",
    title: "Connection to Carbon Markets",
    description:
      "Linking verified emissions reductions to carbon markets through transparent, blockchain-based tracking and certification that stands up to scrutiny.",
    testId: "card-pillar-connection",
  },
];

export default function Sustainability() {
  return (
    <PageShell>
      {/* ════════════════════════════════════════════
          HERO — Full-width background image
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sustain-hero.png')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/90 via-[#060910]/65 to-[#060910]/20" />
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
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00FF88]/30 text-[#00FF88] tracking-widest uppercase bg-[#00FF88]/5">
                Decarbonizing Transportation
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
              Sustainability &amp;{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00FF88 0%, #00D4FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Impact
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              How SuVerse Labs is working to decarbonize transportation
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060910] to-transparent" />
      </section>

      {/* ════════════════════════════════════════════
          IMPACT STAT BANNER
      ════════════════════════════════════════════ */}
      <section className="relative z-10 bg-[#060910] py-4">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.06] rounded-2xl overflow-hidden"
          >
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.value}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFade}
                className="flex flex-col items-center justify-center py-12 px-8 text-center border-b md:border-b-0 md:border-r border-white/[0.06] last:border-0"
              >
                <div
                  className="text-5xl md:text-6xl font-bold mb-3 tabular-nums"
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundImage: stat.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-xs text-white/40 leading-relaxed max-w-[180px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY IT MATTERS
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#060910]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <span className="text-xs text-[#00FF88] uppercase tracking-widest font-medium">
                The Problem
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why it matters
              </h2>
            </motion.div>

            {/* Right — paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              <p className="text-white/55 leading-relaxed text-lg">
                The transportation sector is responsible for approximately{" "}
                <span className="text-white font-medium">
                  16% of global greenhouse gas emissions
                </span>
                . Heavy-duty trucking is one of the hardest segments to
                decarbonize. Unlike passenger vehicles, commercial trucks
                require solutions that work at scale while maintaining the
                operational efficiency that modern supply chains depend on.
              </p>
              <p className="text-white/55 leading-relaxed text-lg mt-5">
                We're building the measurement, optimization, and incentive
                infrastructure to change that — starting with the data layer
                that makes real accountability possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THREE PILLARS
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#060910] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <span className="text-xs text-[#00D4FF] uppercase tracking-widest font-medium">
              Our Framework
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Three Pillars of Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardFade}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 bg-[#0C1018] text-center p-8"
                data-testid={pillar.testId}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: `${pillar.color}12`,
                    boxShadow: `0 0 0 1px ${pillar.color}22`,
                  }}
                >
                  <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>

                <h3
                  className="text-xl font-semibold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h3>

                <p className="text-white/45 leading-relaxed text-sm">
                  {pillar.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OUR APPROACH — 2-column with image left
      ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060910] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative rounded-2xl overflow-hidden my-12 md:my-16"
              style={{ minHeight: 360 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/about.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/0 via-[#060910]/20 to-[#060910]/80 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060910]/70 via-[#060910]/20 to-[#060910]/0 md:hidden" />
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="flex flex-col justify-center py-12 md:py-16 md:pl-14"
            >
              <span className="text-xs text-[#00D4FF] uppercase tracking-widest font-medium mb-4">
                Our Approach
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AI-Powered Emissions Intelligence
              </h2>
              <p className="text-white/50 leading-relaxed text-base mb-5">
                Our AI continuously processes telematics streams — GPS tracks,
                fuel consumption, idle time, load data — and generates
                emissions insights in real time. Not estimates. Not averages.
                Actual carbon accountability tied to individual vehicles and trips.
              </p>
              <p className="text-white/50 leading-relaxed text-base">
                These insights surface through carrier dashboards,
                automated reports, and direct feeds into carbon market
                platforms — creating a closed loop between measuring
                emissions and monetizing reductions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 bg-[#060910]">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00FF88]/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00FF88]/25 text-[#00FF88] tracking-widest uppercase bg-[#00FF88]/5 mb-8">
              Get Involved
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to make your fleet{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #00FF88 0%, #00D4FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                more sustainable?
              </span>
            </h2>
            <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Let's discuss how SuVerse Labs can help you measure, reduce, and
              report on your carbon footprint — starting with your existing data.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00FF88] to-[#00D4FF] text-[#060910] font-semibold border-0 px-10 hover:shadow-xl hover:shadow-[#00FF88]/25 transition-all duration-300"
                data-testid="button-sustainability-contact"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
