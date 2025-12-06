import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Vault, Eye, Rocket } from "lucide-react";

export default function CarbonVault() {
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
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Blockchain</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Carbon Credits</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Sustainability</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          SuVerse Carbon Vault
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-6">
          REC Marketplace & Carbon Tracking
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          A system for organizing, tracking, and eventually tokenizing real-world carbon 
          credits and Renewable Energy Certificates with full transparency and auditability.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-concept">
            <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-6">
              <Vault className="w-6 h-6 text-chart-1" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Concept</h3>
            <p className="text-muted-foreground leading-relaxed">
              Carbon Vault is designed to be a secure, auditable system for managing 
              carbon credits and Renewable Energy Certificates (RECs). It tracks the 
              full lifecycle from generation to retirement, providing clear documentation 
              and preventing double-counting.
            </p>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-transparency">
            <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every credit and certificate in the Vault is fully traceable. Blockchain 
              technology provides an immutable record of ownership and transfers, while 
              our verification layer ensures that underlying assets meet quality standards 
              and documentation requirements.
            </p>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-future">
            <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Future Direction</h3>
            <p className="text-muted-foreground leading-relaxed">
              As the system matures, Carbon Vault aims to connect emissions reductions 
              from trucking operations directly with verified climate assets and carbon 
              markets. This creates a pathway for fleets to monetize their sustainability 
              efforts.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-section-alt">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Interested in Carbon Asset Management?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn about Carbon Vault development and partnership opportunities.
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
