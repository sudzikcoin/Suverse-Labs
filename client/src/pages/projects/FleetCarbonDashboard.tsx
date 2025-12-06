import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Target, Database, BarChart3, Leaf } from "lucide-react";

export default function FleetCarbonDashboard() {
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
          <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10">Green Logistics</Badge>
          <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10">Analytics</Badge>
          <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/10">Telematics</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          SuVerse Fleet & Carbon Dashboard
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-6">
          Fleet Performance & Emissions Monitoring
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          A comprehensive dashboard for tracking fleet performance, fuel consumption, and 
          carbon footprint with real-time telematics integration and actionable insights.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8" data-testid="card-project-purpose">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Purpose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Fleet & Carbon Dashboard serves as a central hub for monitoring 
                  fleet operations. It provides visibility into vehicle performance, 
                  driver behavior, fuel consumption, and most importantly, carbon 
                  emissions at both individual and fleet-wide levels.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8" data-testid="card-project-datasources">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Data Sources</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The dashboard integrates data from multiple sources including telematics 
                  devices, ELD systems, DIMO and similar DePIN networks, fuel cards, and 
                  manual uploads. This multi-source approach ensures comprehensive 
                  coverage and accurate calculations.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8" data-testid="card-project-features">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Features</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-chart-2 mt-1">•</span>
                    <span>Real-time emissions estimates per trip and vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-2 mt-1">•</span>
                    <span>Historical trend charts and comparative analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-2 mt-1">•</span>
                    <span>Customizable alerts for threshold violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-2 mt-1">•</span>
                    <span>Exportable reports for compliance and stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-white/10 p-6 md:p-8" data-testid="card-project-sustainability">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability Angle</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By providing accurate, granular emissions data, the dashboard helps 
                  carriers identify optimization opportunities and track progress toward 
                  reduction goals. It also prepares fleets for future regulatory 
                  requirements and market demands for sustainability transparency.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-900/30">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Monitor Your Fleet's Carbon Footprint?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how the Fleet & Carbon Dashboard can work for your operations.
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
