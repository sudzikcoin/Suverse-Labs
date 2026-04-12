import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
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

const expertise = [
  { icon: Truck, label: "Green Logistics & Telematics" },
  { icon: Bot, label: "AI Agents & Automation" },
  { icon: Network, label: "Blockchain / DePIN Infrastructure" },
  { icon: BarChart3, label: "Systems Architecture" },
];

const initiatives = [
  {
    icon: Bot,
    title: "AgentOS",
    description: "An AI robot-application platform that automates key workflows for carriers, brokers, and finance teams.",
  },
  {
    icon: FileText,
    title: "SuVerse Tax Credit",
    description: "Tooling to help logistics companies and small businesses access and manage tax credits and incentives in a transparent, data-driven way.",
  },
  {
    icon: Target,
    title: "PingPoint",
    description: "A tracking core for freight that improves visibility, reduces empty miles, and supports more efficient use of equipment and fuel.",
  },
  {
    icon: Leaf,
    title: "CO2 Blockchain Infrastructure",
    description: "Systems for measuring, recording, and eventually tokenizing emissions-related data in a secure, auditable way.",
  },
  {
    icon: Shield,
    title: "Validator Portal",
    description: "Infrastructure and tools that support validators and decentralized networks aligned with real-world use cases.",
  },
  {
    icon: Network,
    title: "AI & Blockchain Tooling",
    description: "Frameworks that connect AI agents with on-chain logic and off-chain data.",
  },
  {
    icon: Zap,
    title: "REC Certificate RWA",
    description: "Concepts for bringing Renewable Energy Certificates and similar climate assets on-chain as real-world assets (RWA).",
  },
];

const timeline = [
  {
    icon: Wrench,
    year: "Early Career",
    title: "Industrial Engineer & Electrician",
    description: "Started as an electrician, advancing through heavy industry. Served as engineer at Gazprom Energoholding working with complex energy and electrical systems.",
    color: "#8899AA",
  },
  {
    icon: Truck,
    year: "USA Chapter",
    title: "Long-Haul Truck Driver",
    description: "Gained hands-on experience in American logistics as an OTR truck driver. Saw firsthand the inefficiencies and opportunities in freight transportation.",
    color: "#00FF88",
  },
  {
    icon: Code2,
    year: "Transition",
    title: "Blockchain & DePIN",
    description: "Completed PostHuman validator school in the Cosmos ecosystem. Built deep expertise in decentralized infrastructure and validator operations.",
    color: "#00D4FF",
  },
  {
    icon: Rocket,
    year: "Present",
    title: "Founder — SuVerse Labs",
    description: "Founded SuVerse Labs combining industrial engineering, trucking experience, and blockchain expertise to build AI and blockchain infrastructure for sustainable transportation.",
    color: "#6366F1",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Founder() {
  return (
    <PageShell>
      {/* ── FOUNDER HERO ── */}
      <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00D4FF]/[0.03] blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-10"
          >
            {/* Avatar with cyan gradient border */}
            <div className="relative mb-8">
              <div className="w-[200px] h-[200px] rounded-full p-[3px] bg-gradient-to-br from-[#00D4FF] via-[#00FF88] to-[#6366F1]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0C1018]">
                  <img
                    src="/images/IMG_1423.jpeg"
                    alt="Dmitrii Sudzerovskii"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Glow behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#00FF88]/20 blur-[30px] -z-10" />
            </div>

            <h1
              className="text-3xl md:text-5xl font-bold text-[#F0F4F8] mb-3 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Dmitrii Sudzerovskii
            </h1>
            <p className="text-lg md:text-xl text-[#00FF88] font-medium mb-6">
              Founder & Systems Architect
            </p>
            <p className="text-[#8899AA] max-w-2xl leading-relaxed">
              Engineer and systems architect whose work sits at the intersection of transportation,
              energy, and advanced digital infrastructure — building the bridge between real-world
              logistics and the next generation of AI and blockchain technology.
            </p>
          </motion.div>

          {/* Expertise badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {expertise.map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 bg-white/[0.04] text-[#F0F4F8] border-white/[0.06] text-sm hover:bg-white/[0.08] transition-colors"
                data-testid={`badge-expertise-${index}`}
              >
                <item.icon className="w-4 h-4 mr-2 text-[#00FF88]" />
                {item.label}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <Section className="bg-[#060910]">
        <ContentSection>
          <h2
            className="text-2xl md:text-3xl font-semibold text-[#F0F4F8] mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Journey
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8899AA]/30 via-[#00D4FF]/30 to-[#6366F1]/30" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                    style={{
                      borderColor: item.color,
                      background: `${item.color}15`,
                      boxShadow: `0 0 20px ${item.color}20`,
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}>
                  <span
                    className="text-xs font-medium uppercase tracking-wider mb-1 block"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="text-lg font-semibold text-[#F0F4F8] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8899AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </ContentSection>
      </Section>

      {/* ── FULL BIO ── */}
      <Section>
        <ContentSection>
          <div className="space-y-4 text-[#8899AA] leading-relaxed">
            <p>
              Dmitrii Sudzerovskii is an engineer and systems architect whose work sits at the intersection of transportation, energy, and advanced digital infrastructure. Trained as an industrial engineer and starting his career as an electrician, he spent several years on the ground in heavy industry, steadily advancing his rank and responsibilities. He later served as an engineer at Gazprom Energoholding, working with complex energy and electrical systems before relocating to the United States.
            </p>
            <p>
              After moving to the U.S., Dmitrii gained direct, hands-on experience in American logistics as a long-haul truck driver. This combination of industrial engineering, energy-sector experience, and real-world trucking gives him a rare perspective on how technology can actually improve safety, efficiency, and sustainability in day-to-day freight operations.
            </p>
            <p>
              Determined to bring modern infrastructure to this space, Dmitrii completed the PostHuman validator school in the Cosmos ecosystem and became deeply involved in blockchain and DePIN (decentralized physical infrastructure) networks. Building on this foundation, he founded SuVerse Labs, a company focused on AI agents, blockchain infrastructure, and tools for decarbonizing transportation.
            </p>
          </div>
        </ContentSection>
      </Section>

      {/* ── KEY INITIATIVES ── */}
      <Section className="bg-[#060910]">
        <ContentSection>
          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Key Initiatives at SuVerse Labs
          </h3>
          <p className="text-[#8899AA] mb-8">
            At SuVerse Labs, Dmitrii leads several ongoing initiatives, including:
          </p>

          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-5 transition-all duration-300 hover:border-white/[0.08] hover:-translate-y-0.5"
                data-testid={`card-initiative-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF]/10 to-[#00FF88]/10 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-5 h-5 text-[#00FF88]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F0F4F8] mb-1">{initiative.title}</h4>
                    <p className="text-sm text-[#8899AA]">{initiative.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ContentSection>
      </Section>

      {/* ── NATIONAL INTERESTS ── */}
      <Section>
        <ContentSection>
          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Supporting U.S. National Interests
          </h3>

          <div className="space-y-4 text-[#8899AA] leading-relaxed">
            <p>
              Through these projects, Dmitrii's work is directly aligned with U.S. national interests: strengthening critical digital infrastructure, supporting cleaner and more efficient freight transportation, and enabling better use of data for climate and energy decisions. By combining practical trucking experience with deep technical knowledge, he designs systems that are not only innovative on paper but also realistic for adoption by American fleets and logistics companies.
            </p>
            <p>
              Dmitrii lives in the United States with his wife and two children and is committed to building long-term solutions that support sustainable economic growth, modern infrastructure, and the transition to a lower-carbon future.
            </p>
          </div>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
