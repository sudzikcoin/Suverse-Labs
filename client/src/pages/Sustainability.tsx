import { Link } from "wouter";
import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
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
          <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Why Logistics Emissions Matter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The transportation sector is responsible for approximately 16% of global 
                  greenhouse gas emissions, and heavy-duty trucking represents one of the 
                  most challenging segments to decarbonize. Unlike passenger vehicles, 
                  commercial trucks require solutions that work at scale while maintaining 
                  the operational efficiency that modern supply chains depend on. Every 
                  improvement in trucking emissions has an outsized impact on global climate goals.
                </p>
              </div>
            </div>
          </Card>
        </ContentSection>
      </Section>

      <Section className="bg-slate-900/30">
        <SectionHeading 
          title="How SuVerse Labs Contributes"
          subtitle="Our three-pillar approach to sustainable transportation"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-background border-white/10 p-6 md:p-8 text-center" data-testid="card-pillar-measurement">
            <div className="w-14 h-14 rounded-full bg-chart-1/10 flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-7 h-7 text-chart-1" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Measurement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Accurate, granular carbon measurement through telematics integration and 
              AI-powered analysis. You can't reduce what you can't measure.
            </p>
          </Card>

          <Card className="bg-background border-white/10 p-6 md:p-8 text-center" data-testid="card-pillar-reduction">
            <div className="w-14 h-14 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-7 h-7 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Reduction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Actionable insights for reducing emissions through better routing, fewer 
              empty miles, and AI-driven operational optimization.
            </p>
          </Card>

          <Card className="bg-background border-white/10 p-6 md:p-8 text-center" data-testid="card-pillar-connection">
            <div className="w-14 h-14 rounded-full bg-chart-3/10 flex items-center justify-center mx-auto mb-6">
              <Truck className="w-7 h-7 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Connection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Linking verified emissions reductions to carbon markets through transparent, 
              blockchain-based tracking and certification.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <ContentSection>
          <SectionHeading 
            title="Traditional vs. SuVerse-Enabled Operations"
            subtitle="How our technology transforms fleet sustainability"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8" data-testid="card-comparison-traditional">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                Traditional Operations
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive/70 mt-0.5">•</span>
                  <span>Emissions estimated using industry averages</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive/70 mt-0.5">•</span>
                  <span>Limited visibility into per-trip carbon footprint</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive/70 mt-0.5">•</span>
                  <span>Manual reporting and compliance processes</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive/70 mt-0.5">•</span>
                  <span>No clear path to monetize sustainability efforts</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive/70 mt-0.5">•</span>
                  <span>Reactive optimization based on fuel costs alone</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-900/50 border-chart-2/30 p-6 md:p-8" data-testid="card-comparison-suverse">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-chart-2" />
                SuVerse-Enabled Operations
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-chart-2 mt-0.5">•</span>
                  <span>Real-time emissions calculated from actual telemetry</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-chart-2 mt-0.5">•</span>
                  <span>Granular per-vehicle, per-trip carbon tracking</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-chart-2 mt-0.5">•</span>
                  <span>Automated dashboards and stakeholder reporting</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-chart-2 mt-0.5">•</span>
                  <span>Connection to carbon markets and REC opportunities</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-chart-2 mt-0.5">•</span>
                  <span>Proactive AI recommendations for emissions reduction</span>
                </li>
              </ul>
            </Card>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-gradient-to-b from-chart-2/5 to-background">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Make Your Fleet More Sustainable?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how SuVerse Labs can help you measure, reduce, and report on your carbon footprint.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-chart-2 to-chart-2/80" data-testid="button-sustainability-contact">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
