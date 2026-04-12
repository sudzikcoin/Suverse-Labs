import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell, Section } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ValueCard } from "@/components/shared/ValueCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
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
  LucideIcon
} from "lucide-react";

const GlobeScene = lazy(() => import("@/components/three/GlobeScene"));

/* ── Animated counter with formatting ── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
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

  const formatted = target >= 1000000
    ? (count / 1000000).toFixed(1)
    : target >= 1000
      ? Math.floor(count).toLocaleString()
      : count;

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

/* ── Visual areas data ── */
const visualAreas: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wind,
    title: "Wind Power",
    description: "Modern wind turbines feeding clean electricity into digital logistics and data infrastructure.",
  },
  {
    icon: Sun,
    title: "Solar Farms",
    description: "Utility-scale solar supporting low-carbon energy for fleets, data centers, and blockchains.",
  },
  {
    icon: Truck,
    title: "Freight Trucks",
    description: "Real-world trucking data: routes, fuel, and operations that SuVerse Labs connects to AI and blockchain.",
  },
  {
    icon: Link2,
    title: "Blockchain Networks",
    description: "Decentralized ledgers and validators securing the data and incentives behind sustainable logistics.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "AgentOS and AI-driven automation orchestrating decisions across fleets, finance, and operations.",
  },
  {
    icon: Cloud,
    title: "CO2 & Climate Data",
    description: "Emissions metrics and carbon signals that can be measured, reported, and tokenized over time.",
  },
  {
    icon: Server,
    title: "Data Centers",
    description: "Infrastructure where AI models run and blockchain nodes live, powered by smarter energy choices.",
  },
];

/* ── Metrics — real numbers ── */
const metrics = [
  { value: 2850000, suffix: "+", prefix: "", label: "Miles Tracked", display: "M+" },
  { value: 58, suffix: "", prefix: "", label: "Carriers" },
  { value: 15, suffix: "", prefix: "", label: "States" },
  { value: 7, suffix: "", prefix: "", label: "Products" },
];

/* ── What We Build items ── */
const buildItems = [
  { icon: Leaf, title: "Green Logistics", description: "Focus on reducing emissions and increasing transparency in trucking and freight through data-driven measurement and optimization.", color: "#00FF88" },
  { icon: Bot, title: "AI Robot Applications", description: "LLM-powered agents that automate operations for carriers, brokers, and finance teams, reducing manual work and improving efficiency.", color: "#00D4FF" },
  { icon: Network, title: "Decentralized Infrastructure", description: "Validators and DePIN systems ensuring secure, scalable infrastructure for the next generation of logistics technology.", color: "#6366F1" },
];

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <PageShell>
      {/* ── HERO with 3D Globe ── */}
      <section className="relative min-h-[720px] md:min-h-[840px] flex items-center overflow-hidden">
        {/* Layered animated background */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 iso-grid" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-[#00D4FF]/[0.03] blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-[#00FF88]/[0.03] blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
            {/* Left: Text content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-8"
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-[#8899AA] tracking-wide uppercase">
                  {siteConfig.siteName} · AI · Blockchain · Green Logistics
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F0F4F8] leading-[1.05] mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
                data-testid="text-hero-title"
              >
                AI & Blockchain{" "}
                <br className="hidden md:block" />
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
                className="text-lg md:text-xl text-[#8899AA] max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                data-testid="text-hero-subtitle"
              >
                SuVerse Labs builds AI agents, telematics tools, and blockchain infrastructure
                to decarbonize trucking and modernize real-world logistics.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#080B0F] font-semibold border-0 hover:shadow-lg hover:shadow-[#00D4FF]/25 btn-shimmer px-8"
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
                    className="w-full sm:w-auto bg-transparent border-white/[0.08] text-[#F0F4F8] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 px-8"
                    data-testid="button-for-partners"
                  >
                    For Partners & Investors
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: 3D Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-1 w-full max-w-[600px] h-[400px] md:h-[500px] lg:h-[560px] relative"
            >
              {/* Globe glow backdrop */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#00D4FF]/[0.04] blur-[60px]" />
              </div>
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-[#00D4FF]/20 animate-pulse" />
                </div>
              }>
                <GlobeScene />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <section className="relative z-10 -mt-4 mb-8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-6 md:gap-12 py-8 px-6 rounded-2xl bg-[#0C1018]/80 border border-white/[0.04] backdrop-blur-sm"
          >
            {metrics.map((m, i) => (
              <div key={m.label} className="text-center relative">
                {i > 0 && <div className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-px h-10 bg-white/[0.06]" />}
                <div className="text-2xl md:text-4xl font-bold text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
                  {m.value >= 1000000 ? (
                    <AnimatedCounter target={m.value} suffix={m.display || m.suffix} prefix={m.prefix} />
                  ) : (
                    <AnimatedCounter target={m.value} suffix={m.suffix} prefix={m.prefix} />
                  )}
                </div>
                <div className="text-[10px] md:text-xs text-[#8899AA]/70 mt-1.5 uppercase tracking-wider font-medium">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ENERGY LANDSCAPE ── */}
      <Section className="bg-[#060910]">
        <div className="mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-[#F0F4F8] mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Energy & Infrastructure Landscape
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8899AA] max-w-2xl"
          >
            SuVerse Labs connects real-world energy and logistics—wind and solar assets, freight trucks,
            data centers, and decentralized networks—into one AI- and blockchain-powered stack.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {visualAreas.map((area, i) => (
            <motion.div
              key={area.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
              className="group relative overflow-hidden rounded-xl border border-white/[0.04] bg-[#0C1018] hover:border-[#00D4FF]/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
              data-testid={`card-visual-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00D4FF]/10 to-[#00FF88]/10 group-hover:from-[#00D4FF]/20 group-hover:to-[#00FF88]/20 transition-all duration-400">
                  <area.icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold tracking-tight text-[#F0F4F8]">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8899AA]/80 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── WHAT WE BUILD — horizontal scroll on mobile ── */}
      <Section>
        <SectionHeading
          title="What We Build"
          subtitle="Technology solutions that connect physical logistics with digital infrastructure"
          centered
        />

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {buildItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
            >
              <ValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                accentColor={item.color}
                testId={`card-value-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto scroll-x-mobile pb-4 -mx-6 px-6 snap-x snap-mandatory">
          {buildItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardFade}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              <ValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                accentColor={item.color}
                testId={`card-value-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── OUR PROJECTS ── */}
      <Section className="bg-[#060910]">
        <SectionHeading
          title="Our Projects"
          subtitle="Explore the initiatives driving our vision for sustainable transportation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button
              variant="outline"
              className="bg-transparent border-white/[0.08] text-[#F0F4F8] hover:bg-white/[0.04] hover:border-[#00D4FF]/30 hover:text-[#00D4FF] transition-all duration-300"
              data-testid="button-view-all-projects"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── WHY THIS MATTERS ── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Why This Matters"
            subtitle="Transportation is responsible for a significant share of global emissions. Here's how we're making a difference."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: TrendingDown, title: "Decarbonization", description: "Actively working to reduce emissions through better routing, monitoring, and optimization", color: "#00FF88" },
              { icon: BarChart3, title: "Digital Infrastructure", description: "Building the measurement and tracking systems needed for transparent emissions reporting", color: "#00D4FF" },
              { icon: Globe, title: "Climate Alignment", description: "Innovation aligned with national and global climate goals for a sustainable future", color: "#6366F1" },
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
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-400 group-hover:scale-110"
                  style={{ background: `${item.color}10`, boxShadow: `0 0 0 1px ${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h4
                  className="text-lg font-semibold text-[#F0F4F8] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-[#8899AA]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D4FF]/[0.03] blur-[120px]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F0F4F8] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Learn More?
          </h2>
          <p className="text-lg text-[#8899AA] mb-10">
            Whether you're a carrier, broker, investor, or technology partner, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#080B0F] font-semibold border-0 hover:shadow-lg hover:shadow-[#00D4FF]/25 btn-shimmer px-8"
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
                className="w-full sm:w-auto bg-transparent border-white/[0.08] text-[#F0F4F8] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 px-8"
                data-testid="button-cta-about"
              >
                About SuVerse Labs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
