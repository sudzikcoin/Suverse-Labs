import { Link } from "wouter";
import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Truck, Cpu, Building2, Beaker, Handshake, DollarSign, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Truck,
    title: "Carriers & Brokers",
    description: "Fleet operators and freight brokerages looking to improve operational efficiency and sustainability reporting.",
  },
  {
    icon: Cpu,
    title: "Technology Partners",
    description: "Telematics providers, DePIN networks, and platform companies interested in integration and co-development.",
  },
  {
    icon: Building2,
    title: "Logistics Companies",
    description: "3PLs, shippers, and supply chain organizations seeking better visibility and carbon transparency.",
  },
  {
    icon: DollarSign,
    title: "Investors",
    description: "Impact investors and climate-focused funds interested in sustainable transportation infrastructure.",
  },
];

const collaborationTypes = [
  {
    icon: Beaker,
    title: "Pilot Projects",
    description: "Test our solutions with your fleet or operations in a controlled environment. We work closely with pilot partners to ensure successful implementation and gather feedback for continuous improvement.",
  },
  {
    icon: Cpu,
    title: "Integration & Co-Development",
    description: "For technology partners, we offer integration opportunities with our platform. Whether you provide telematics data, run a DePIN network, or offer complementary services, there's likely a way to work together.",
  },
  {
    icon: Handshake,
    title: "Strategic Investment",
    description: "We're open to conversations with investors, grant organizations, and strategic partners who share our vision for sustainable transportation infrastructure.",
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
            <Card 
              key={index}
              className="bg-slate-900/50 border-white/10 p-6"
              data-testid={`card-audience-${index}`}
            >
              <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center mb-4">
                <audience.icon className="w-5 h-5 text-chart-1" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900/30">
        <SectionHeading 
          title="Ways to Collaborate"
          subtitle="Different engagement models to fit your needs"
        />
        
        <div className="space-y-6">
          {collaborationTypes.map((collab, index) => (
            <Card 
              key={index}
              className="bg-background border-white/10 p-6 md:p-8"
              data-testid={`card-collaboration-${index}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <collab.icon className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{collab.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{collab.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a carrier looking to improve sustainability, a technology 
            partner seeking integration, or an investor interested in our mission, 
            we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-chart-1 to-chart-1/80" 
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
