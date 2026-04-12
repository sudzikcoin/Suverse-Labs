import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Truck, Cpu, Building2, Beaker, Handshake, DollarSign, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Truck,
    title: "Carriers & Brokers",
    description:
      "Fleet operators and freight brokerages looking to improve operational efficiency and sustainability reporting.",
    color: "#00FF88",
  },
  {
    icon: Cpu,
    title: "Technology Partners",
    description:
      "Telematics providers, DePIN networks, and platform companies interested in integration and co-development.",
    color: "#00D4FF",
  },
  {
    icon: Building2,
    title: "Logistics Companies",
    description:
      "3PLs, shippers, and supply chain organizations seeking better visibility and carbon transparency.",
    color: "#6366F1",
  },
  {
    icon: DollarSign,
    title: "Investors",
    description:
      "Impact investors and climate-focused funds interested in sustainable transportation infrastructure.",
    color: "#F59E0B",
  },
];

const collaborationTypes = [
  {
    icon: Beaker,
    title: "Pilot Projects",
    description:
      "Test our solutions with your fleet or operations in a controlled environment. We work closely with pilot partners to ensure successful implementation and gather real-world feedback for continuous improvement.",
    color: "#00FF88",
  },
  {
    icon: Cpu,
    title: "Integration & Co-Development",
    description:
      "For technology partners, we offer deep integration opportunities with our platform. Whether you provide telematics data, operate a DePIN network, or offer complementary services, there's a natural path to working together.",
    color: "#00D4FF",
  },
  {
    icon: Handshake,
    title: "Strategic Investment",
    description:
      "We're open to conversations with investors, grant organizations, and strategic partners who share our vision for building sustainable transportation infrastructure at scale.",
    color: "#6366F1",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Partners() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/partners-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/90 via-[#060910]/65 to-[#060910]/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24 pt-32 md:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
            data-testid="text-page-title"
          >
            Partners &amp; Collaboration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#8899AA]/80 max-w-2xl leading-relaxed"
            data-testid="text-page-subtitle"
          >
            Working together to build the future of sustainable transportation
          </motion.p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-24 bg-[#060910]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who We Work With
            </h2>
            <p className="text-[#8899AA]/80 max-w-2xl">
              SuVerse Labs partners with organizations across the transportation and technology ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 transition-all duration-300 hover:border-white/[0.10] hover:-translate-y-1"
                data-testid={`card-audience-${index}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${audience.color}12`,
                    boxShadow: `0 0 0 1px ${audience.color}18`,
                  }}
                >
                  <audience.icon className="w-5 h-5" style={{ color: audience.color }} />
                </div>
                <h3
                  className="text-lg font-semibold text-[#F0F4F8] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {audience.title}
                </h3>
                <p className="text-sm text-[#8899AA]/80 leading-relaxed">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Collaborate */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How We Collaborate
            </h2>
            <p className="text-[#8899AA]/80 max-w-2xl">
              Different engagement models designed to fit your needs and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {collaborationTypes.map((collab, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-7 transition-all duration-300 hover:border-white/[0.10] hover:-translate-y-1"
                data-testid={`card-collaboration-${index}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${collab.color}12`,
                    boxShadow: `0 0 0 1px ${collab.color}18`,
                  }}
                >
                  <collab.icon className="w-6 h-6" style={{ color: collab.color }} />
                </div>
                <h3
                  className="text-xl font-semibold text-[#F0F4F8] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {collab.title}
                </h3>
                <p className="text-[#8899AA]/80 leading-relaxed text-sm">{collab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] bg-[#0C1018] px-8 md:px-16 py-14 md:py-20 text-center relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00D4FF]/[0.04] rounded-full blur-[80px] pointer-events-none" />

            <h2
              className="relative z-10 text-2xl md:text-4xl font-bold text-[#F0F4F8] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to partner?
            </h2>
            <p className="relative z-10 text-[#8899AA] mb-10 max-w-xl mx-auto leading-relaxed">
              Let's build sustainable transportation infrastructure together.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#00D4FF] text-[#060910] font-semibold border-0 hover:bg-[#00C0E8] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all px-8"
                  data-testid="button-partners-contact"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-[#F0F4F8] bg-transparent hover:bg-white/5 hover:border-white/40 transition-all px-8"
                  data-testid="button-partners-projects"
                >
                  Learn About Our Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
