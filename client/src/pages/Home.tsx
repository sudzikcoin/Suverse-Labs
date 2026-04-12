import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell, Section } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Bot,
  Network,
  ArrowRight,
  TrendingDown,
  BarChart3,
  Globe,
} from "lucide-react";

/* ── Animated counter ── */
function AnimatedCounter({
  target,
  suffix = "",
  display,
}: {
  target: number;
  suffix?: string;
  display?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (display) {
    const millions = (count / 1000000).toFixed(1);
    return (
      <span ref={ref}>
        {millions}
        {display}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
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

/* ── Metrics ── */
const metrics = [
  { target: 2850000, display: "M+", label: "Miles Tracked" },
  { target: 58, suffix: "", label: "Carriers" },
  { target: 15, suffix: "", label: "States" },
  { target: 7, suffix: "", label: "Products" },
];

/* ── What We Build ── */
const buildItems = [
  {
    icon: Leaf,
    title: "Green Logistics",
    description:
      "Reducing emissions and increasing transparency in trucking through data-driven measurement and optimization.",
    color: "#00FF88",
  },
  {
    icon: Bot,
    title: "AI Robot Applications",
    description:
      "LLM-powered agents that automate operations for carriers, brokers, and finance teams.",
    color: "#00D4FF",
  },
  {
    icon: Network,
    title: "Decentralized Infrastructure",
    description:
      "Validators and DePIN systems ensuring secure, scalable infrastructure for next-gen logistics.",
    color: "#6366F1",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <PageShell>
      {/* ══════════════════════════════════════════
          HERO — Full-screen cinematic background
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Dark overlay — ensures text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/95 via-[#060910]/75 to-[#060910]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060910]/40 via-transparent to-[#060910]/90" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-[#00D4FF]/30 text-[#00D4FF] tracking-widest uppercase bg-[#00D4FF]/5">
                {siteConfig.siteName} · AI · Blockchain · Green Logistics
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI & Blockchain
              <br />
              Infrastructure for{" "}
              <span className="text-gradient">
                Sustainable Transportation
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/60 max-w-xl mb-12 leading-relaxed"
            >
              SuVerse Labs builds AI agents, telematics tools, and blockchain
              infrastructure to decarbonize trucking and modernize real-world
              logistics.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#00D4FF] text-[#060910] font-semibold hover:bg-[#00B8E0] border-0 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D4FF]/30"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-8 backdrop-blur-sm"
                >
                  For Partners & Investors
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060910] to-transparent" />
      </section>

      {/* ══════════════════════════════════════════
          METRICS BAR
      ══════════════════════════════════════════ */}
      <section className="relative z-10 bg-[#060910]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.06] rounded-2xl overflow-hidden"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center py-10 px-6 text-center border-r border-white/[0.06] last:border-r-0 odd:border-b md:border-b-0"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <AnimatedCounter
                    target={m.target}
                    suffix={m.suffix}
                    display={m.display}
                  />
                </div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE BUILD — 3 columns with image bg
      ══════════════════════════════════════════ */}
      <Section className="bg-[#060910]">
        <SectionHeading
          title="What We Build"
          subtitle="Technology solutions that connect physical logistics with digital infrastructure"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {buildItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardFade}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 bg-[#0C1018]"
            >
              <div className="p-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    boxShadow: `0 0 0 1px ${item.color}20`,
                  }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          PROJECTS — Full-width image section
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/projects.png')" }}
        />
        <div className="absolute inset-0 bg-[#060910]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Projects
            </h2>
            <p className="text-white/50 max-w-xl">
              Explore the initiatives driving our vision for sustainable transportation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardFade}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGY — Neural network image
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/technology.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#060910]/95 via-[#060910]/70 to-[#060910]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="ml-auto max-w-xl text-right">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs text-[#00D4FF] uppercase tracking-widest mb-4 font-medium"
            >
              Technology Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI-Powered
              <br />
              <span className="text-gradient">Intelligence Layer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/50 leading-relaxed mb-8"
            >
              Our AgentOS platform connects real-world freight data with AI models
              and blockchain validators — building the intelligence layer for
              sustainable logistics at scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-3 justify-end"
            >
              {["AgentOS", "DePIN", "Telematics", "Carbon Data", "Blockchain"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-medium border border-[#00D4FF]/20 text-[#00D4FF]/80 bg-[#00D4FF]/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY IT MATTERS
      ══════════════════════════════════════════ */}
      <Section className="bg-[#060910]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Why This Matters"
            subtitle="Transportation is responsible for a significant share of global emissions. Here's how we're making a difference."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: TrendingDown,
                title: "Decarbonization",
                description:
                  "Actively reducing emissions through better routing, monitoring, and optimization of freight operations.",
                color: "#00FF88",
              },
              {
                icon: BarChart3,
                title: "Digital Infrastructure",
                description:
                  "Building measurement and tracking systems needed for transparent, verifiable emissions reporting.",
                color: "#00D4FF",
              },
              {
                icon: Globe,
                title: "Climate Alignment",
                description:
                  "Innovation aligned with national and global climate goals for a sustainable transportation future.",
                color: "#6366F1",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardFade}
                className="text-center group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: `${item.color}12`,
                    boxShadow: `0 0 0 1px ${item.color}20`,
                  }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>
                <h4
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════
          ABOUT / PORT — CTA section with image
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.png')" }}
        />
        <div className="absolute inset-0 bg-[#060910]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060910]/95 via-[#060910]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Learn More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-white/50 mb-10 max-w-2xl mx-auto"
          >
            Whether you're a carrier, broker, investor, or technology partner,
            we'd love to connect.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#00D4FF] text-[#060910] font-semibold hover:bg-[#00B8E0] border-0 px-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#00D4FF]/30"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-8 backdrop-blur-sm"
              >
                About SuVerse Labs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
