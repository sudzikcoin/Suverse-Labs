import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Network, Target } from "lucide-react";

export default function Validators() {
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
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">Validators</Badge>
          <Badge variant="secondary" className="bg-white/[0.04] text-[#8899AA] border-white/[0.06]">DePIN</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4" style={{ fontFamily: 'var(--font-heading)' }} data-testid="text-project-title">
          Validator & DePIN Infrastructure
        </h1>
        <p className="text-xl text-[#00FF88] font-medium mb-6">
          Decentralized Network Security
        </p>
        <p className="text-lg text-[#8899AA] max-w-3xl leading-relaxed">
          Running validator nodes and supporting decentralized physical infrastructure
          networks that align with our vision for sustainable, transparent logistics.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Shield, title: "Our Role", color: "#00D4FF", description: "SuVerse Labs operates validator nodes on blockchain networks that align with our mission. As validators, we participate in consensus mechanisms, validate transactions, and help secure these networks. This active participation gives us deep insight into the technologies we build upon.", testId: "card-project-role" },
            { icon: Network, title: "Importance", color: "#00FF88", description: "Validators are the backbone of proof-of-stake blockchain networks. They provide security through economic commitment, ensure decentralization by distributing consensus power, and enable the reliability that makes blockchain useful for real-world applications like supply chain tracking.", testId: "card-project-importance" },
            { icon: Target, title: "Relevance", color: "#6366F1", description: "Our validator operations align with our long-term vision of distributed infrastructure for logistics, data, and climate solutions. By participating in DePIN networks, we help build the decentralized layer that could one day power transparent, trustless supply chain operations.", testId: "card-project-relevance" },
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
            Interested in Our Infrastructure Operations?
          </h2>
          <p className="text-[#8899AA] mb-6">
            Contact us to learn more about our validator services and DePIN participation.
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
