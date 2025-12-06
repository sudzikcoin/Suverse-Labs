import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Bot, Gauge, Leaf, Network, Clock } from "lucide-react";

const focusAreas = [
  {
    icon: Bot,
    title: "AI AgentOS & Robot Applications",
    description: "LLM-powered agents that automate logistics and finance workflows",
  },
  {
    icon: Gauge,
    title: "Telematics & Fleet Monitoring",
    description: "Real-time data collection and analysis for operational insights",
  },
  {
    icon: Leaf,
    title: "Carbon Measurement & Tokenization",
    description: "Accurate emissions tracking with blockchain-based verification",
  },
  {
    icon: Network,
    title: "Validators & Decentralized Infrastructure",
    description: "Secure and scalable blockchain network participation",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Initial Experiments",
    description: "Began exploring fleet monitoring and telematics integration possibilities",
  },
  {
    year: "2023",
    title: "PingPoint Prototype",
    description: "Developed the core tracking technology that would become PingPoint",
  },
  {
    year: "2023",
    title: "Carbon Dashboard",
    description: "Launched initial versions of fleet carbon monitoring dashboards",
  },
  {
    year: "2024",
    title: "Carbon Vault Concept",
    description: "Began development of blockchain-based carbon credit tracking",
  },
  {
    year: "2024",
    title: "Validator Infrastructure",
    description: "Launched validator operations for aligned blockchain networks",
  },
];

export default function About() {
  return (
    <PageShell>
      <PageHeader 
        title="About SuVerse Labs"
        subtitle="Building technology at the intersection of AI, blockchain, and sustainable logistics"
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                SuVerse Labs is a technology company dedicated to transforming the transportation 
                industry through innovation. We operate at the intersection of artificial intelligence, 
                blockchain infrastructure, and sustainable logistics, creating tools that help carriers, 
                brokers, and shippers measure, optimize, and reduce their environmental impact while 
                improving operational efficiency.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a future where every mile traveled by freight is measurable, intelligent, 
                and low-carbon. Through AI-driven automation, real-time telematics, and transparent 
                blockchain infrastructure, we're building the foundation for a transportation industry 
                that meets the demands of the modern economy while actively contributing to global 
                climate goals.
              </p>
            </div>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-slate-900/30">
        <SectionHeading 
          title="Focus Areas"
          subtitle="The key technology domains where we concentrate our efforts"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-white/10 p-6 md:p-8"
              data-testid={`card-focus-area-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading 
          title="Our Journey"
          subtitle="Key milestones in the development of SuVerse Labs"
        />
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-chart-1/50 via-chart-2/50 to-transparent" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-item-${index}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="ml-12 md:ml-0">
                    <span className="inline-block text-sm font-medium text-chart-2 mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:static md:left-auto w-8 h-8 rounded-full bg-chart-1/20 border-2 border-chart-1 flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-0">
                  <Clock className="w-4 h-4 text-chart-1" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
