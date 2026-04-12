import { Link } from "wouter";
import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Truck, Cpu, Building2, Beaker, Handshake, DollarSign, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Truck,
    title: "Carriers & Brokers",
    description: "Fleet operators and freight brokerages looking to improve operational efficiency and sustainability reporting.",
    color: "#00FF88",
  },
  {
    icon: Cpu,
    title: "Technology Partners",
    description: "Telematics providers, DePIN networks, and platform companies interested in integration and co-development.",
    color: "#00D4FF",
  },
  {
    icon: Building2,
    title: "Logistics Companies",
    description: "3PLs, shippers, and supply chain organizations seeking better visibility and carbon transparency.",
    color: "#6366F1",
  },
  {
    icon: DollarSign,
    title: "Investors",
    description: "Impact investors and climate-focused funds interested in sustainable transportation infrastructure.",
    color: "#F59E0B",
  },
];

const collaborationTypes = [
  {
    icon: Beaker,
    title: "Pilot Projects",
    description: "Test our solutions with your fleet or operations in a controlled environment. We work closely with pilot partners to ensure successful implementation and gather feedback for continuous improvement.",
    color: "#00FF88",
  },
  {
    icon: Cpu,
    title: "Integration & Co-Development",
    description: "For technology partners, we offer integration opportunities with our platform. Whether you provide telematics data, run a DePIN network, or offer complementary services, there's likely a way to work together.",
    color: "#00D4FF",
  },
  {
    icon: Handshake,
    title: "Strategic Investment",
    description: "We're open to conversations with investors, grant organizations, and strategic partners who share our vision for sustainable transportation infrastructure.",
    color: "#6366F1",
  },
];

export default function Partners() {
  return (
    <PageShell>
      <PageHeader
        title="Partners & Collaboration"
        subtitle="Working together to build the future of sustainable transportation"
      />

      <Section className="pt-0">
        <SectionHeading
          title="Who We Work With"
          subtitle="SuVerse Labs partners with organizations across the transportation and technology ecosystem"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 transition-all duration-300 hover:border-white/[0.08] hover:-translate-y-1 gradient-border"
              data-testid={`card-audience-${index}`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${audience.color}10`, boxShadow: `0 0 0 1px ${audience.color}15` }}>
                <audience.icon className="w-5 h-5" style={{ color: audience.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#F0F4F8] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{audience.title}</h3>
              <p className="text-sm text-[#8899AA]/80">{audience.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#060910]">
        <SectionHeading
          title="Ways to Collaborate"
          subtitle="Different engagement models to fit your needs"
        />

        <div className="space-y-6">
          {collaborationTypes.map((collab, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.08]"
              data-testid={`card-collaboration-${index}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${collab.color}10`, boxShadow: `0 0 0 1px ${collab.color}15` }}>
                  <collab.icon className="w-6 h-6" style={{ color: collab.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{collab.title}</h3>
                  <p className="text-[#8899AA]/80 leading-relaxed">{collab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <ContentSection className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Start a Conversation
          </h2>
          <p className="text-[#8899AA] mb-8 max-w-2xl mx-auto">
            Whether you're a carrier looking to improve sustainability, a technology
            partner seeking integration, or an investor interested in our mission,
            we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#080B0F] font-semibold border-0 hover:shadow-lg hover:shadow-[#00D4FF]/25 btn-shimmer px-8"
              data-testid="button-partners-contact"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
