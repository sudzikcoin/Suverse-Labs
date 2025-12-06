import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Bot, Network, Cpu, Radio } from "lucide-react";

export default function Technology() {
  return (
    <PageShell>
      <PageHeader 
        title="Technology & Innovation"
        subtitle="The technical foundations powering our sustainable transportation solutions"
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="space-y-8">
            <Card className="bg-white border-border shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-chart-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Architecture Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our technology stack integrates three core layers: AI agents that process 
                    and act on information, telematics systems that collect real-world data, 
                    and blockchain components that provide transparency and trust. These layers 
                    work together to create a unified platform for sustainable logistics operations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-section-alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-tech-ai">
            <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">AI & Agents</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At the core of our technology are LLM-based agents designed for specific 
              business domains. These agents go beyond simple automation—they understand 
              context, make decisions, and can communicate naturally with human operators.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-0.5">•</span>
                <span>Multi-step reasoning and decision support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-0.5">•</span>
                <span>Agent orchestration for complex workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-2 mt-0.5">•</span>
                <span>Human-in-the-loop for critical decisions</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-tech-blockchain">
            <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-6">
              <Network className="w-6 h-6 text-chart-1" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Blockchain & DePIN</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We leverage blockchain technology where it adds real value: providing 
              transparency, enabling trustless verification, and creating interoperability 
              between different systems and organizations.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-chart-1 mt-0.5">•</span>
                <span>Validator operations on aligned networks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-1 mt-0.5">•</span>
                <span>Immutable audit trails for carbon credits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-1 mt-0.5">•</span>
                <span>DePIN integration for decentralized data</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-tech-iot">
            <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-6">
              <Radio className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">IoT & Telematics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The physical world is our data source. Vehicles and devices provide the 
              real-world telemetry that powers our emissions calculations, operational 
              analytics, and tracking systems.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-chart-3 mt-0.5">•</span>
                <span>ELD and telematics device integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-3 mt-0.5">•</span>
                <span>Mobile device location and sensor data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-chart-3 mt-0.5">•</span>
                <span>Real-time data processing pipelines</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <ContentSection>
          <SectionHeading 
            title="Our Approach"
            subtitle="Principles that guide our technical decisions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-section-alt border border-border">
              <h4 className="font-semibold text-foreground mb-2">Practical Over Theoretical</h4>
              <p className="text-sm text-muted-foreground">
                We apply technologies where they solve real problems, not for their own sake. 
                Blockchain for transparency, AI for automation, IoT for data—each has its place.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-section-alt border border-border">
              <h4 className="font-semibold text-foreground mb-2">Modular & Extensible</h4>
              <p className="text-sm text-muted-foreground">
                Our systems are designed as composable components that can be adopted 
                individually or combined. Start with what you need, expand as you grow.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-section-alt border border-border">
              <h4 className="font-semibold text-foreground mb-2">Integration-First</h4>
              <p className="text-sm text-muted-foreground">
                Rather than replacing existing systems, we build bridges. Our tools are 
                designed to work with the TMS, accounting, and telematics platforms you already use.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-section-alt border border-border">
              <h4 className="font-semibold text-foreground mb-2">Security & Privacy</h4>
              <p className="text-sm text-muted-foreground">
                Transportation data is sensitive. We implement strong security practices 
                and give organizations control over their data while enabling the insights they need.
              </p>
            </div>
          </div>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
