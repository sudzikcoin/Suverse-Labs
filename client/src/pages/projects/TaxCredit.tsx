import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Receipt, Shield, FileCheck, ExternalLink } from "lucide-react";

const TAX_CREDIT_DEMO_URL = "https://app.suverse.io";

const features = [
  {
    icon: Receipt,
    name: "Credit Discovery",
    description: "Browse available transferable tax credits including ITC, PTC, 45Q, 48C, and 48E with transparent pricing and verified seller information.",
    color: "#00D4FF",
  },
  {
    icon: Shield,
    name: "Broker-Verified",
    description: "All transactions go through a broker-verified closing flow ensuring compliance and security for both buyers and sellers.",
    color: "#00FF88",
  },
  {
    icon: FileCheck,
    name: "Compliance Ready",
    description: "Built-in compliance documentation and audit trails to meet regulatory requirements for tax credit transfers.",
    color: "#6366F1",
  },
];

export default function TaxCredit() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Tax Credits</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Marketplace</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Compliance</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          SuVerse Tax Credit
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-4">
          Transferable Tax Credits Marketplace
        </p>
        <div className="mb-6">
          <a href={TAX_CREDIT_DEMO_URL} target="_blank" rel="noopener noreferrer" data-testid="link-tax-credit-demo">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-[#080B0F] font-semibold border-0 btn-shimmer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Demo
            </Button>
          </a>
        </div>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          Discover, reserve, and purchase transferable tax credits (ITC, PTC, 45Q, 48C, 48E)
          with transparent pricing and a broker-verified closing flow.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 mb-8" data-testid="card-project-overview">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 0 1px rgba(0, 212, 255, 0.1)' }}>
                <Receipt className="w-6 h-6 text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Overview</h3>
                <p className="text-[#8899AA]/80 leading-relaxed">
                  The SuVerse Tax Credit marketplace connects buyers seeking transferable tax credits
                  with verified sellers. Our platform simplifies the complex process of tax credit
                  transfers by providing transparent pricing, due diligence tools, and a streamlined
                  closing process managed by experienced brokers. Whether you're looking to monetize
                  credits from renewable energy projects or purchase credits to offset your tax liability,
                  our marketplace provides a secure and efficient solution.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Key Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 transition-all duration-300 hover:border-white/[0.08] gradient-border"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${feature.color}10`, boxShadow: `0 0 0 1px ${feature.color}15` }}>
                  <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h4 className="text-lg font-semibold text-[#F0F4F8] mb-2">{feature.name}</h4>
                <p className="text-sm text-[#8899AA]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <ContentSection className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Explore Tax Credits?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Start browsing available tax credits on our marketplace.
          </p>
          <a href={TAX_CREDIT_DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#080B0F] font-semibold border-0 btn-shimmer" data-testid="button-project-demo-bottom">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Marketplace
            </Button>
          </a>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
