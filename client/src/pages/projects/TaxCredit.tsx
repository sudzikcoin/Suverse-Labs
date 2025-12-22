import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Receipt, Shield, FileCheck, ExternalLink } from "lucide-react";

const TAX_CREDIT_DEMO_URL = "https://app.suverse.io";

const features = [
  {
    icon: Receipt,
    name: "Credit Discovery",
    description: "Browse available transferable tax credits including ITC, PTC, 45Q, 48C, and 48E with transparent pricing and verified seller information.",
  },
  {
    icon: Shield,
    name: "Broker-Verified",
    description: "All transactions go through a broker-verified closing flow ensuring compliance and security for both buyers and sellers.",
  },
  {
    icon: FileCheck,
    name: "Compliance Ready",
    description: "Built-in compliance documentation and audit trails to meet regulatory requirements for tax credit transfers.",
  },
];

export default function TaxCredit() {
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
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Tax Credits</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Marketplace</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Compliance</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          SuVerse Tax Credit
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-4">
          Transferable Tax Credits Marketplace
        </p>
        <div className="mb-6">
          <a
            href={TAX_CREDIT_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-tax-credit-demo"
          >
            <Button className="bg-gradient-to-r from-chart-1 to-chart-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Demo
            </Button>
          </a>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Discover, reserve, and purchase transferable tax credits (ITC, PTC, 45Q, 48C, 48E) 
          with transparent pricing and a broker-verified closing flow.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8 mb-8" data-testid="card-project-overview">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                <Receipt className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The SuVerse Tax Credit marketplace connects buyers seeking transferable tax credits 
                  with verified sellers. Our platform simplifies the complex process of tax credit 
                  transfers by providing transparent pricing, due diligence tools, and a streamlined 
                  closing process managed by experienced brokers. Whether you're looking to monetize 
                  credits from renewable energy projects or purchase credits to offset your tax liability, 
                  our marketplace provides a secure and efficient solution.
                </p>
              </div>
            </div>
          </Card>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white border-border shadow-sm p-6"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-chart-2" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.name}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Explore Tax Credits?
          </h2>
          <p className="text-muted-foreground mb-6">
            Start browsing available tax credits on our marketplace.
          </p>
          <a
            href={TAX_CREDIT_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-chart-1 to-chart-1/80" data-testid="button-project-demo-bottom">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Marketplace
            </Button>
          </a>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
