import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Vault, Eye, Rocket } from "lucide-react";

export default function CarbonVault() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Blockchain</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Carbon Credits</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Sustainability</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          SuVerse Carbon Vault
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-6">
          REC Marketplace & Carbon Tracking
        </p>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          A system for organizing, tracking, and eventually tokenizing real-world carbon
          credits and Renewable Energy Certificates with full transparency and auditability.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Vault, title: "Concept", color: "#00D4FF", description: "Carbon Vault is designed to be a secure, auditable system for managing carbon credits and Renewable Energy Certificates (RECs). It tracks the full lifecycle from generation to retirement, providing clear documentation and preventing double-counting.", testId: "card-project-concept" },
            { icon: Eye, title: "Transparency", color: "#00FF88", description: "Every credit and certificate in the Vault is fully traceable. Blockchain technology provides an immutable record of ownership and transfers, while our verification layer ensures that underlying assets meet quality standards and documentation requirements.", testId: "card-project-transparency" },
            { icon: Rocket, title: "Future Direction", color: "#6366F1", description: "As the system matures, Carbon Vault aims to connect emissions reductions from trucking operations directly with verified climate assets and carbon markets. This creates a pathway for fleets to monetize their sustainability efforts.", testId: "card-project-future" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.08] gradient-border" data-testid={item.testId}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: `${item.color}10`, boxShadow: `0 0 0 1px ${item.color}15` }}>
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
              <p className="text-[#8899AA]/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#060910]">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Interested in Carbon Asset Management?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Contact us to learn about Carbon Vault development and partnership opportunities.
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
