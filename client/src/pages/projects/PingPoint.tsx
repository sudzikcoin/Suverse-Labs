import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, Lightbulb, Cpu, TrendingUp } from "lucide-react";

export default function PingPoint() {
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
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Tracking</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Logistics</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          PingPoint
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-6">
          AI-powered Freight Tracking Core
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          A simple yet powerful tracking system that provides real-time status updates and 
          reduces empty miles through AI-driven automation and intelligent prediction.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-problem">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Freight tracking today is fragmented and inefficient. Drivers, brokers, and 
                  shippers struggle with limited visibility, delayed updates, and poor 
                  communication. This leads to missed appointments, empty miles, and frustrated 
                  customers across the supply chain.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-solution">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PingPoint provides a simple mobile and web tracking core that delivers 
                  real-time status updates to all stakeholders. AI-driven automation predicts 
                  potential delays and suggests actions before problems occur, reducing empty 
                  miles and improving on-time performance.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-technology">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built on telemetry data from smartphones and connected devices, PingPoint 
                  uses machine learning to analyze patterns and predict issues. The system 
                  is designed for easy integration with existing TMS platforms and broker 
                  systems.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-impact">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Early implementations have shown significant improvements in on-time 
                  delivery performance, reduced empty miles, and improved transparency 
                  for all stakeholders. Better visibility means better decisions across 
                  the supply chain.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-section-alt">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Interested in PingPoint?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn more about piloting PingPoint with your fleet or brokerage.
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
