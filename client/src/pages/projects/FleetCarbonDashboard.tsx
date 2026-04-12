import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Database, BarChart3, Leaf } from "lucide-react";

export default function FleetCarbonDashboard() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Green Logistics</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Analytics</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Telematics</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          SuVerse Fleet & Carbon Dashboard
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-6">
          Fleet Performance & Emissions Monitoring
        </p>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          A comprehensive dashboard for tracking fleet performance, fuel consumption, and
          carbon footprint with real-time telematics integration and actionable insights.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: Target, title: "Purpose", color: "#00D4FF", description: "The Fleet & Carbon Dashboard serves as a central hub for monitoring fleet operations. It provides visibility into vehicle performance, driver behavior, fuel consumption, and most importantly, carbon emissions at both individual and fleet-wide levels.", testId: "card-project-purpose" },
            { icon: Database, title: "Data Sources", color: "#00FF88", description: "The dashboard integrates data from multiple sources including telematics devices, ELD systems, DIMO and similar DePIN networks, fuel cards, and manual uploads. This multi-source approach ensures comprehensive coverage and accurate calculations.", testId: "card-project-datasources" },
            { icon: BarChart3, title: "Features", color: "#6366F1", testId: "card-project-features", list: ["Real-time emissions estimates per trip and vehicle", "Historical trend charts and comparative analysis", "Customizable alerts for threshold violations", "Exportable reports for compliance and stakeholders"] },
            { icon: Leaf, title: "Sustainability Angle", color: "#00FF88", description: "By providing accurate, granular emissions data, the dashboard helps carriers identify optimization opportunities and track progress toward reduction goals. It also prepares fleets for future regulatory requirements and market demands for sustainability transparency.", testId: "card-project-sustainability" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.08] gradient-border" data-testid={item.testId}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}10`, boxShadow: `0 0 0 1px ${item.color}15` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  {'list' in item && item.list ? (
                    <ul className="text-[#8899AA]/80 space-y-2">
                      {item.list.map((text, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ color: item.color }} className="mt-1">•</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#8899AA]/80 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#060910]">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Monitor Your Fleet's Carbon Footprint?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Let's discuss how the Fleet & Carbon Dashboard can work for your operations.
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
