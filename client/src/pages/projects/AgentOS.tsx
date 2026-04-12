import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, Calculator, Package, Gauge, Plug, ExternalLink } from "lucide-react";

const AGENTOS_DEMO_URL = "https://suverseagentos.replit.app/loads";

const agents = [
  {
    icon: Calculator,
    name: "Accountant Agent",
    description: "Automates invoice processing, cash flow monitoring, and financial reconciliation for carriers and brokers.",
    color: "#00D4FF",
  },
  {
    icon: Package,
    name: "Broker Agent",
    description: "Manages load matching, capacity sourcing, and automated communication with drivers and shippers.",
    color: "#00FF88",
  },
  {
    icon: Gauge,
    name: "Fleet Monitor Agent",
    description: "Watches telematics data streams, generates alerts for anomalies, and provides operational recommendations.",
    color: "#6366F1",
  },
];

export default function AgentOS() {
  return (
    <PageShell>
      <Section>
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="text-[#8899AA] hover:text-[#F0F4F8] hover:bg-white/[0.04]" data-testid="button-back-projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">AI</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Automation</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Enterprise</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          AgentOS
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-4">
          AI Robot Applications for Business
        </p>
        <div className="mb-6">
          <a href={AGENTOS_DEMO_URL} target="_blank" rel="noopener noreferrer" data-testid="link-agentos-demo">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-[#080B0F] font-semibold border-0 btn-shimmer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open AgentOS Demo
            </Button>
          </a>
        </div>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          A platform of AI agents—robot applications—that automate routine workflows in
          logistics and finance, freeing teams to focus on high-value work.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 mb-8" data-testid="card-project-overview">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 0 1px rgba(0, 212, 255, 0.1)' }}>
                <Bot className="w-6 h-6 text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Overview</h3>
                <p className="text-[#8899AA]/80 leading-relaxed">
                  AgentOS is our platform for deploying LLM-powered AI agents that handle
                  specific business functions. Unlike traditional automation, these agents
                  can understand context, make decisions within defined parameters, and
                  communicate naturally with human operators when needed. Each agent is
                  purpose-built for a specific domain within logistics and finance operations.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Example Agents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 transition-all duration-300 hover:border-white/[0.08] gradient-border"
                data-testid={`card-agent-${index}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${agent.color}10`, boxShadow: `0 0 0 1px ${agent.color}15` }}>
                  <agent.icon className="w-5 h-5" style={{ color: agent.color }} />
                </div>
                <h4 className="text-lg font-semibold text-[#F0F4F8] mb-2">{agent.name}</h4>
                <p className="text-sm text-[#8899AA]/80">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#060910]">
        <div className="max-w-4xl">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8" data-testid="card-project-integration">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.1)' }}>
                <Plug className="w-6 h-6 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Integration</h3>
                <p className="text-[#8899AA]/80 leading-relaxed">
                  AgentOS agents are designed to work with existing systems. They can
                  connect to TMS platforms, accounting software, telematics providers,
                  and blockchain components where needed. The modular architecture allows
                  organizations to start with one agent and expand as needs grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <ContentSection className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Automate Your Operations?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Let's discuss how AgentOS can transform your workflows.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#080B0F] font-semibold border-0 btn-shimmer" data-testid="button-project-contact">
              Get in Touch
            </Button>
          </Link>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
