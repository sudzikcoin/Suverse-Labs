import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Bot, 
  Network, 
  BarChart3, 
  Leaf, 
  Cpu,
  Target,
  Zap
} from "lucide-react";

const expertise = [
  { icon: Truck, label: "Green Logistics & Telematics" },
  { icon: Bot, label: "AI Agents & Automation" },
  { icon: Network, label: "Blockchain / DePIN Infrastructure" },
  { icon: BarChart3, label: "Systems Architecture" },
];

const initiatives = [
  {
    icon: Target,
    title: "PingPoint Tracking Core",
    description: "AI-powered freight tracking system for real-time visibility",
  },
  {
    icon: BarChart3,
    title: "SuVerse Fleet & Carbon Dashboard",
    description: "Comprehensive monitoring for fleet performance and emissions",
  },
  {
    icon: Leaf,
    title: "Carbon Vault & REC Marketplace",
    description: "Blockchain-based carbon credit and REC tracking system",
  },
  {
    icon: Bot,
    title: "AgentOS Robot Applications",
    description: "LLM-powered agents for business process automation",
  },
  {
    icon: Network,
    title: "Validator Infrastructure",
    description: "Decentralized network security for modern blockchain ecosystems",
  },
];

export default function Founder() {
  return (
    <PageShell>
      <PageHeader 
        title="Founder"
        subtitle="The vision and leadership behind SuVerse Labs"
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-chart-1/30 to-chart-2/30 flex items-center justify-center mx-auto md:mx-0">
                <Cpu className="w-16 h-16 md:w-20 md:h-20 text-chart-2/70" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Dmitrii Sudzerovskii
              </h2>
              <p className="text-lg text-chart-2 font-medium mb-6">
                Founder & Systems Architect
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dmitrii Sudzerovskii brings deep experience across the trucking and logistics 
                  industry, artificial intelligence, and blockchain technology. His background 
                  spans hands-on operations in freight transportation to designing complex 
                  distributed systems.
                </p>
                <p>
                  As the architect of SuVerse Labs' technology stack, Dmitrii leads the 
                  development of end-to-end systems that connect physical fleets with digital 
                  infrastructure. His vision drives the company's focus on practical, 
                  measurable solutions for sustainable transportation.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-section-alt">
        <ContentSection>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Areas of Expertise
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {expertise.map((item, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 bg-gray-100 text-foreground border-border text-sm"
                data-testid={`badge-expertise-${index}`}
              >
                <item.icon className="w-4 h-4 mr-2 text-chart-2" />
                {item.label}
              </Badge>
            ))}
          </div>
        </ContentSection>
      </Section>

      <Section>
        <ContentSection>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
            Key Initiatives
          </h3>
          
          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <Card 
                key={index}
                className="bg-white border-border shadow-sm p-5"
                data-testid={`card-initiative-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{initiative.title}</h4>
                    <p className="text-sm text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
