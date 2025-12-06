import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Bot, Calculator, Package, Gauge, Plug } from "lucide-react";

const agents = [
  {
    icon: Calculator,
    name: "Accountant Agent",
    description: "Automates invoice processing, cash flow monitoring, and financial reconciliation for carriers and brokers.",
  },
  {
    icon: Package,
    name: "Broker Agent",
    description: "Manages load matching, capacity sourcing, and automated communication with drivers and shippers.",
  },
  {
    icon: Gauge,
    name: "Fleet Monitor Agent",
    description: "Watches telematics data streams, generates alerts for anomalies, and provides operational recommendations.",
  },
];

export default function AgentOS() {
  return (
    <PageShell>
      <Section>
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="text-muted-foreground" data-testid="button-back-projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">AI</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Automation</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Enterprise</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          AgentOS
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-6">
          AI Robot Applications for Business
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          A platform of AI agents—robot applications—that automate routine workflows in 
          logistics and finance, freeing teams to focus on high-value work.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8 mb-8" data-testid="card-project-overview">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AgentOS is our platform for deploying LLM-powered AI agents that handle 
                  specific business functions. Unlike traditional automation, these agents 
                  can understand context, make decisions within defined parameters, and 
                  communicate naturally with human operators when needed. Each agent is 
                  purpose-built for a specific domain within logistics and finance operations.
                </p>
              </div>
            </div>
          </Card>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Example Agents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card 
                key={index}
                className="bg-white border-border shadow-sm p-6"
                data-testid={`card-agent-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <agent.icon className="w-5 h-5 text-chart-2" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{agent.name}</h4>
                <p className="text-sm text-muted-foreground">{agent.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-section-alt">
        <div className="max-w-4xl">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-integration">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                <Plug className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AgentOS agents are designed to work with existing systems. They can 
                  connect to TMS platforms, accounting software, telematics providers, 
                  and blockchain components where needed. The modular architecture allows 
                  organizations to start with one agent and expand as needs grow.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how AgentOS can transform your workflows.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-chart-1 to-chart-1/80" data-testid="button-project-contact">
              Get in Touch
            </Button>
          </Link>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
