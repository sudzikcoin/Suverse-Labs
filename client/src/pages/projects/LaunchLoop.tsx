import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Rocket, Users, BarChart3, Shield, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    name: "Creator Matching",
    description: "AI-powered matching connects your product with vetted creators who have domain expertise and engaged audiences in your target vertical.",
    color: "#00D4FF",
  },
  {
    icon: BarChart3,
    name: "Performance Analytics",
    description: "Full-funnel tracking from impression to product adoption, with transparent metrics and milestone-based payout structures.",
    color: "#00FF88",
  },
  {
    icon: Shield,
    name: "Verified Creators",
    description: "Every creator is verified through portfolio review, audience analysis, and engagement quality scoring before joining the marketplace.",
    color: "#6366F1",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Predictable CAC",
    description: "Milestone-based pricing replaces unpredictable ad spend with measurable, outcome-driven creator partnerships.",
    color: "#00D4FF",
  },
  {
    icon: Zap,
    title: "Faster Launch Cycles",
    description: "Go from product readiness to market exposure in days, not months, with pre-vetted creators ready to engage.",
    color: "#00FF88",
  },
  {
    icon: Rocket,
    title: "Authentic Distribution",
    description: "Reach audiences through trusted voices rather than interruptive ads — driving higher conversion and retention rates.",
    color: "#6366F1",
  },
];

export default function LaunchLoop() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Marketplace</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">B2B SaaS</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Growth</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          LaunchLoop
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-6">
          Creator-Led Product Growth Marketplace
        </p>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          A B2B SaaS marketplace that connects technology product makers with vetted content
          creators for authentic, performance-driven product launches and ongoing promotion.
          Built on the same principles of transparency and data-driven matching that power
          our logistics infrastructure.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-4xl">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 mb-8" data-testid="card-project-overview">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 0 1px rgba(0, 212, 255, 0.1)' }}>
                <Rocket className="w-6 h-6 text-[#00D4FF]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Overview</h3>
                <p className="text-[#8899AA]/80 leading-relaxed">
                  The traditional go-to-market playbook for technology products is broken.
                  Paid advertising costs continue to rise, organic reach is declining, and
                  enterprise buyers increasingly rely on trusted voices over brand messaging.
                  LaunchLoop creates a structured marketplace where product makers and content
                  creators collaborate on launches with transparent pricing, verified audiences,
                  and measurable outcomes — bringing the same data-driven approach we apply to
                  freight logistics to the challenge of technology distribution.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Core Capabilities
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

      <Section className="bg-[#060910]">
        <div className="max-w-4xl">
          <h3 className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Why LaunchLoop
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-400 group-hover:scale-110" style={{ background: `${benefit.color}10`, boxShadow: `0 0 0 1px ${benefit.color}15` }}>
                  <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>
                <h4 className="text-lg font-semibold text-[#F0F4F8] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#8899AA]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <ContentSection className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Launch Your Product?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Whether you are a product maker or a content creator, we would love to hear from you.
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
