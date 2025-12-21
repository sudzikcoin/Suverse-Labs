import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Bot, 
  Network, 
  BarChart3, 
  Cpu,
  Target,
  Leaf,
  Shield,
  Zap,
  FileText
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

export default function Founder() {
  return (
    <PageShell>
      <PageHeader 
        title="Founder"
        subtitle="The vision and leadership behind SuVerse Labs and its mission to modernize sustainable logistics and digital infrastructure in the United States."
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-chart-1/30 to-chart-2/30 flex items-center justify-center mx-auto md:mx-0 overflow-hidden ring-4 ring-chart-2/20">
                {/* TODO: Upload founder photo to client/public/images/founder.jpg */}
                <img
                  src="/images/founder.jpg"
                  alt="Dmitrii Sudzerovskii — Founder & Systems Architect"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Cpu className="w-16 h-16 md:w-20 md:h-20 text-chart-2/70 hidden" />
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
                  Dmitrii Sudzerovskii is an engineer and systems architect whose work sits at the intersection of transportation, energy, and advanced digital infrastructure. Trained as an industrial engineer and starting his career as an electrician, he spent several years on the ground in heavy industry, steadily advancing his rank and responsibilities. He later served as an engineer at Gazprom Energoholding, working with complex energy and electrical systems before relocating to the United States.
                </p>
                <p>
                  After moving to the U.S., Dmitrii gained direct, hands-on experience in American logistics as a long-haul truck driver. This combination of industrial engineering, energy-sector experience, and real-world trucking gives him a rare perspective on how technology can actually improve safety, efficiency, and sustainability in day-to-day freight operations.
                </p>
                <p>
                  Determined to bring modern infrastructure to this space, Dmitrii completed the PostHuman validator school in the Cosmos ecosystem and became deeply involved in blockchain and DePIN (decentralized physical infrastructure) networks. Building on this foundation, he founded SuVerse Labs, a company focused on AI agents, blockchain infrastructure, and tools for decarbonizing transportation.
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
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Key Initiatives at SuVerse Labs
          </h3>
          <p className="text-muted-foreground mb-8">
            At SuVerse Labs, Dmitrii leads several ongoing initiatives, including:
          </p>
          
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

      <Section className="bg-section-alt">
        <ContentSection>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Supporting U.S. National Interests
          </h3>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
