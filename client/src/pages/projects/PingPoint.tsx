import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, Lightbulb, Cpu, TrendingUp, ExternalLink } from "lucide-react";

const PINGPOINT_DEMO_URL = "https://telematics.suverse.io/";

export default function PingPoint() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Tracking</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Logistics</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          PingPoint
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-4">
          AI-powered Freight Tracking Core
        </p>
        <div className="mb-6">
          <a href={PINGPOINT_DEMO_URL} target="_blank" rel="noopener noreferrer" data-testid="link-pingpoint-demo">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-[#080B0F] font-semibold border-0 btn-shimmer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Demo
            </Button>
          </a>
        </div>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          A simple yet powerful tracking system that provides real-time status updates and
          reduces empty miles through AI-driven automation and intelligent prediction.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: AlertTriangle, title: "The Problem", color: "#EF4444", description: "Freight tracking today is fragmented and inefficient. Drivers, brokers, and shippers struggle with limited visibility, delayed updates, and poor communication. This leads to missed appointments, empty miles, and frustrated customers across the supply chain.", testId: "card-project-problem" },
            { icon: Lightbulb, title: "Our Solution", color: "#00FF88", description: "PingPoint provides a simple mobile and web tracking core that delivers real-time status updates to all stakeholders. AI-driven automation predicts potential delays and suggests actions before problems occur, reducing empty miles and improving on-time performance.", testId: "card-project-solution" },
            { icon: Cpu, title: "Technology", color: "#00D4FF", description: "Built on telemetry data from smartphones and connected devices, PingPoint uses machine learning to analyze patterns and predict issues. The system is designed for easy integration with existing TMS platforms and broker systems.", testId: "card-project-technology" },
            { icon: TrendingUp, title: "Impact", color: "#6366F1", description: "Early implementations have shown significant improvements in on-time delivery performance, reduced empty miles, and improved transparency for all stakeholders. Better visibility means better decisions across the supply chain.", testId: "card-project-impact" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.08] gradient-border" data-testid={item.testId}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}10`, boxShadow: `0 0 0 1px ${item.color}15` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  <p className="text-[#8899AA]/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#060910]">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Interested in PingPoint?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Contact us to learn more about piloting PingPoint with your fleet or brokerage.
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
