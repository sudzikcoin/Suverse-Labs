import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Bot,
  Network,
  ArrowRight,
  TrendingDown,
  BarChart3,
  Globe,
  Wind,
  Sun,
  Truck,
  Link2,
  Cloud,
  Server,
  LucideIcon,
} from "lucide-react";

const GlobeScene = lazy(() => import("@/components/three/GlobeScene"));

/* ── Animated counter ── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
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

  const formatted =
    target >= 1000000
      ? (count / 1000000).toFixed(1)
      : target >= 1000
      ? Math.floor(count).toLocaleString()
      : count;

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ── Metrics ── */
const metrics = [
  { value: 2850000, suffix: "M+", prefix: "", label: "Miles Tracked" },
  { value: 58, suffix: "", prefix: "", label: "Carriers" },
  { value: 15, suffix: "", prefix: "", label: "States" },
  { value: 7, suffix: "", prefix: "", label: "Products" },
];

/* ── What We Build ── */
const buildItems: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Leaf,
    title: "Green Logistics",
    description:
      "Reducing emissions and increasing transparency in trucking and freight through data-driven measurement and optimization.",
  },
  {
    icon: Bot,
    title: "AI Robot Applications",
    description:
      "LLM-powered agents that automate operations for carriers, brokers, and finance teams, reducing manual work and improving efficiency.",
  },
  {
    icon: Network,
    title: "Decentralized Infrastructure",
    description:
      "Validators and DePIN systems ensuring secure, scalable infrastructure for the next generation of logistics technology.",
  },
];

/* ── Why This Matters ── */
const whyItems: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingDown,
    title: "Decarbonization",
    description:
      "Actively working to reduce emissions through better routing, monitoring, and optimization.",
  },
  {
    icon: BarChart3,
    title: "Digital Infrastructure",
    description:
      "Building the measurement and tracking systems needed for transparent emissions reporting.",
  },
  {
    icon: Globe,
    title: "Climate Alignment",
    description:
      "Innovation aligned with national and global climate goals for a sustainable future.",
  },
];

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative min-h-[760px] md:min-h-[860px] flex items-center overflow-hidden bg-background">
        {/* Thin amber accent line at very top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "2px", background: "#E8C547" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-28">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left: 60% text */}
            <div className="w-full lg:w-[60%] lg:pr-16">
              {/* Eyebrow */}
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] mb-6"
                style={{ color: "#7A7368" }}
              >
                EST. 2022 · SUVERSE LABS
              </motion.p>

              {/* Hero headline */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-bold leading-[1.0] mb-8 tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(3.5rem, 7vw, 7rem)",
                  color: "#F2EDE4",
                }}
                data-testid="text-hero-title"
              >
                AI &amp; Blockchain
                <br />
                for{" "}
                <span style={{ color: "#E8C547" }}>Sustainable</span>
                <br />
                Transport
              </motion.h1>

              {/* Sub copy */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed max-w-md mb-12"
                style={{ color: "#7A7368" }}
                data-testid="text-hero-subtitle"
              >
                SuVerse Labs builds AI agents, telematics tools, and blockchain
                infrastructure to decarbonize trucking and modernize real-world
                logistics.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="btn-shimmer px-8 font-semibold border-0"
                    style={{
                      background: "#E8C547",
                      color: "#0A0905",
                    }}
                    data-testid="button-explore-projects"
                  >
                    Explore Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 transition-all duration-300"
                    style={{
                      background: "transparent",
                      border: "1px solid #2A2720",
                      color: "#F2EDE4",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#E8C547";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#2A2720";
                    }}
                    data-testid="button-for-partners"
                  >
                    For Partners &amp; Investors
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: 3D Globe (40%) — smaller, no glow backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="w-full lg:w-[40%] flex items-center justify-center"
              style={{ height: "360px" }}
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="w-28 h-28 rounded-full animate-pulse"
                      style={{ border: "1px solid #2A2720" }}
                    />
                  </div>
                }
              >
                <GlobeScene />
              </Suspense>
            </motion.div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 rule" />
      </section>

      {/* ── METRICS BAR ── */}
      <section style={{ background: "#0A0905" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6 md:px-8"
        >
          <div
            className="flex items-stretch"
            style={{ borderBottom: "1px solid #2A2720" }}
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex-1 py-10 text-center relative"
                style={{
                  borderLeft: i > 0 ? "1px solid #2A2720" : "none",
                }}
              >
                <div
                  className="font-bold leading-none tabular-nums mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "#F2EDE4",
                  }}
                >
                  {m.value >= 1000000 ? (
                    <AnimatedCounter
                      target={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix}
                    />
                  ) : (
                    <AnimatedCounter
                      target={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix}
                    />
                  )}
                </div>
                <div
                  className="text-[10px] md:text-xs uppercase tracking-[0.18em] font-medium"
                  style={{ color: "#7A7368" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section style={{ background: "#0A0905", borderBottom: "1px solid #2A2720" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          {/* Section header row */}
          <div className="flex items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ color: "#7A7368" }}
              >
                Capabilities
              </p>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  color: "#F2EDE4",
                }}
              >
                What We Build
              </h2>
            </motion.div>
            {/* Section number */}
            <span
              className="hidden md:block font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 8vw, 8rem)",
                color: "#1A1710",
              }}
              aria-hidden
            >
              01
            </span>
          </div>

          {/* Three columns with dividers */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #2A2720" }}
          >
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardFade}
                className="py-10 md:py-12 md:px-10 first:pl-0 last:pr-0"
                style={{
                  borderLeft: i > 0 ? "1px solid #2A2720" : "none",
                }}
                data-testid={`card-value-${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {/* Icon */}
                <div className="mb-5">
                  <item.icon
                    className="w-5 h-5"
                    style={{ color: "#E8C547" }}
                  />
                </div>
                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    color: "#F2EDE4",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7A7368" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROJECTS ── */}
      <section style={{ background: "#111009", borderBottom: "1px solid #2A2720" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          {/* Header row */}
          <div className="flex items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ color: "#7A7368" }}
              >
                Portfolio
              </p>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  color: "#F2EDE4",
                }}
              >
                Our Projects
              </h2>
              <p
                className="mt-3 text-sm max-w-md"
                style={{ color: "#7A7368" }}
              >
                Explore the initiatives driving our vision for sustainable
                transportation.
              </p>
            </motion.div>
            <span
              className="hidden md:block font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 8vw, 8rem)",
                color: "#1A1710",
              }}
              aria-hidden
            >
              02
            </span>
          </div>

          {/* 2x2 project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#2A2720" }}>
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardFade}
                className="group relative p-8 md:p-10 transition-colors duration-300"
                style={{ background: "#111009" }}
                data-testid={`card-project-${project.slug}`}
              >
                {/* Hover: amber border overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 0 0 1px #E8C547" }}
                />

                {/* Category tag */}
                {project.category && (
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] font-medium mb-4 block"
                    style={{ color: "#E8C547" }}
                  >
                    {project.category}
                  </span>
                )}

                {/* Project name */}
                <h3
                  className="font-bold mb-3 leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                    color: "#F2EDE4",
                  }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 max-w-sm"
                  style={{ color: "#7A7368" }}
                >
                  {project.description}
                </p>

                {/* View link */}
                <Link href={project.href}>
                  <span
                    className="text-sm font-medium transition-colors duration-200 group-hover:text-[#E8C547]"
                    style={{ color: "#C8A882" }}
                    data-testid={`link-project-${project.slug}`}
                  >
                    View →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View all */}
          <div className="mt-10">
            <Link href="/projects">
              <Button
                variant="outline"
                className="transition-all duration-300"
                style={{
                  background: "transparent",
                  border: "1px solid #2A2720",
                  color: "#F2EDE4",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#E8C547";
                  (e.currentTarget as HTMLButtonElement).style.color = "#E8C547";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#2A2720";
                  (e.currentTarget as HTMLButtonElement).style.color = "#F2EDE4";
                }}
                data-testid="button-view-all-projects"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section style={{ background: "#0A0905", borderBottom: "1px solid #2A2720" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          {/* Header row */}
          <div className="flex items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ color: "#7A7368" }}
              >
                Mission
              </p>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  color: "#F2EDE4",
                }}
              >
                Why This Matters
              </h2>
              <p
                className="mt-3 text-sm max-w-md"
                style={{ color: "#7A7368" }}
              >
                Transportation is responsible for a significant share of global
                emissions. Here's how we're making a difference.
              </p>
            </motion.div>
            <span
              className="hidden md:block font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 8vw, 8rem)",
                color: "#1A1710",
              }}
              aria-hidden
            >
              03
            </span>
          </div>

          {/* Three reason items */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #2A2720" }}
          >
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardFade}
                className="py-10 md:py-12 md:px-10 first:pl-0 last:pr-0"
                style={{
                  borderLeft: i > 0 ? "1px solid #2A2720" : "none",
                }}
              >
                {/* Large ordinal number */}
                <span
                  className="block font-bold leading-none mb-6"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.5rem",
                    color: "#2A2720",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Small icon */}
                <item.icon
                  className="w-4 h-4 mb-4"
                  style={{ color: "#E8C547" }}
                />

                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    color: "#F2EDE4",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7A7368" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background:
            "linear-gradient(to right, rgba(232, 197, 71, 0.08), transparent)",
          borderBottom: "1px solid #2A2720",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left: headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h2
                className="font-bold leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F2EDE4",
                }}
              >
                Ready to Connect?
              </h2>
              <p className="text-sm md:text-base" style={{ color: "#7A7368" }}>
                Whether you're a carrier, broker, investor, or technology
                partner, we'd love to connect.
              </p>
            </motion.div>

            {/* Right: two buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-shimmer px-8 font-semibold border-0"
                  style={{ background: "#E8C547", color: "#0A0905" }}
                  data-testid="button-cta-contact"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 transition-all duration-300"
                  style={{
                    background: "transparent",
                    border: "1px solid #2A2720",
                    color: "#F2EDE4",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#E8C547";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#2A2720";
                  }}
                  data-testid="button-cta-about"
                >
                  About SuVerse Labs
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
