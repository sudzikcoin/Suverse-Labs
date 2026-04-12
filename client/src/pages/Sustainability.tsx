import { Link } from "wouter";
import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Truck, BarChart3, TrendingDown, ArrowRight, Check, X } from "lucide-react";

export default function Sustainability() {
  return (
    <PageShell>
      <PageHeader
        title="Sustainability & Impact"
        subtitle="How SuVerse Labs is working to decarbonize transportation and build a more sustainable logistics industry"
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 0 1px rgba(0, 255, 136, 0.1)' }}>
                <Truck className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Why Logistics Emissions Matter</h3>
                <p className="text-[#8899AA] leading-relaxed">
                  The transportation sector is responsible for approximately 16% of global
                  greenhouse gas emissions, and heavy-duty trucking represents one of the
                  most challenging segments to decarbonize. Unlike passenger vehicles,
                  commercial trucks require solutions that work at scale while maintaining
                  the operational efficiency that modern supply chains depend on. Every
                  improvement in trucking emissions has an outsized impact on global climate goals.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-[#060910]">
        <SectionHeading
          title="How SuVerse Labs Contributes"
          subtitle="Our three-pillar approach to sustainable transportation"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 text-center transition-all duration-300 hover:border-[#00D4FF]/15 gradient-border" data-testid="card-pillar-measurement">
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 0 0 1px rgba(0, 212, 255, 0.1)' }}>
              <BarChart3 className="w-7 h-7 text-[#00D4FF]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Measurement</h3>
            <p className="text-[#8899AA]/80 leading-relaxed">
              Accurate, granular carbon measurement through telematics integration and
              AI-powered analysis. You can't reduce what you can't measure.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 text-center transition-all duration-300 hover:border-[#00FF88]/15 gradient-border" data-testid="card-pillar-reduction">
            <div className="w-14 h-14 rounded-2xl bg-[#00FF88]/10 flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 0 0 1px rgba(0, 255, 136, 0.1)' }}>
              <TrendingDown className="w-7 h-7 text-[#00FF88]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Reduction</h3>
            <p className="text-[#8899AA]/80 leading-relaxed">
              Actionable insights for reducing emissions through better routing, fewer
              empty miles, and AI-driven operational optimization.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 text-center transition-all duration-300 hover:border-[#6366F1]/15 gradient-border" data-testid="card-pillar-connection">
            <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.1)' }}>
              <Truck className="w-7 h-7 text-[#6366F1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Connection</h3>
            <p className="text-[#8899AA]/80 leading-relaxed">
              Linking verified emissions reductions to carbon markets through transparent,
              blockchain-based tracking and certification.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <ContentSection>
          <SectionHeading
            title="Traditional vs. SuVerse-Enabled Operations"
            subtitle="How our technology transforms fleet sustainability"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8" data-testid="card-comparison-traditional">
              <h4 className="text-lg font-semibold text-[#F0F4F8] mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <X className="w-5 h-5 text-red-400" />
                Traditional Operations
              </h4>
              <ul className="space-y-3">
                {[
                  "Emissions estimated using industry averages",
                  "Limited visibility into per-trip carbon footprint",
                  "Manual reporting and compliance processes",
                  "No clear path to monetize sustainability efforts",
                  "Reactive optimization based on fuel costs alone",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8899AA]/80">
                    <span className="text-red-400/70 mt-0.5">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#00FF88]/10 bg-[#0C1018] p-6 md:p-8" data-testid="card-comparison-suverse">
              <h4 className="text-lg font-semibold text-[#F0F4F8] mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <Check className="w-5 h-5 text-[#00FF88]" />
                SuVerse-Enabled Operations
              </h4>
              <ul className="space-y-3">
                {[
                  "Real-time emissions calculated from actual telemetry",
                  "Granular per-vehicle, per-trip carbon tracking",
                  "Automated dashboards and stakeholder reporting",
                  "Connection to carbon markets and REC opportunities",
                  "Proactive AI recommendations for emissions reduction",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8899AA]/80">
                    <span className="text-[#00FF88] mt-0.5">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentSection>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <ContentSection className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Make Your Fleet More Sustainable?
          </h2>
          <p className="text-[#8899AA] mb-8">
            Let's discuss how SuVerse Labs can help you measure, reduce, and report on your carbon footprint.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#00FF88] to-[#00D4FF] text-[#080B0F] font-semibold border-0 hover:shadow-lg hover:shadow-[#00FF88]/20 btn-shimmer" data-testid="button-sustainability-contact">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
