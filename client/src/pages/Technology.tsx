import { PageShell, PageHeader, Section, ContentSection } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Bot, Network, Cpu, Radio } from "lucide-react";

export default function Technology() {
  return (
    <PageShell>
      <PageHeader
        title="Technology & Innovation"
        subtitle="The technical foundations powering our sustainable transportation solutions"
      />

      <Section className="pt-0">
        <ContentSection>
          <div className="space-y-8">
            <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Architecture Overview</h3>
                  <p className="text-[#8899AA] leading-relaxed">
                    Our technology stack integrates three core layers: AI agents that process
                    and act on information, telematics systems that collect real-world data,
                    and blockchain components that provide transparency and trust. These layers
                    work together to create a unified platform for sustainable logistics operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-[#060910]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-[#00FF88]/15 gradient-border" data-testid="card-tech-ai">
            <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-6" style={{ boxShadow: '0 0 0 1px rgba(0, 255, 136, 0.1)' }}>
              <Bot className="w-6 h-6 text-[#00FF88]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>AI & Agents</h3>
            <p className="text-[#8899AA] leading-relaxed mb-4">
              At the core of our technology are LLM-based agents designed for specific
              business domains. These agents go beyond simple automation—they understand
              context, make decisions, and can communicate naturally with human operators.
            </p>
            <ul className="text-sm text-[#8899AA]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#00FF88] mt-0.5">•</span>
                <span>Multi-step reasoning and decision support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF88] mt-0.5">•</span>
                <span>Agent orchestration for complex workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF88] mt-0.5">•</span>
                <span>Human-in-the-loop for critical decisions</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-[#00D4FF]/15 gradient-border" data-testid="card-tech-blockchain">
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6" style={{ boxShadow: '0 0 0 1px rgba(0, 212, 255, 0.1)' }}>
              <Network className="w-6 h-6 text-[#00D4FF]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Blockchain & DePIN</h3>
            <p className="text-[#8899AA] leading-relaxed mb-4">
              We leverage blockchain technology where it adds real value: providing
              transparency, enabling trustless verification, and creating interoperability
              between different systems and organizations.
            </p>
            <ul className="text-sm text-[#8899AA]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#00D4FF] mt-0.5">•</span>
                <span>Validator operations on aligned networks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D4FF] mt-0.5">•</span>
                <span>Immutable audit trails for carbon credits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D4FF] mt-0.5">•</span>
                <span>DePIN integration for decentralized data</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-300 hover:border-[#6366F1]/15 gradient-border" data-testid="card-tech-iot">
            <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mb-6" style={{ boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.1)' }}>
              <Radio className="w-6 h-6 text-[#6366F1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>IoT & Telematics</h3>
            <p className="text-[#8899AA] leading-relaxed mb-4">
              The physical world is our data source. Vehicles and devices provide the
              real-world telemetry that powers our emissions calculations, operational
              analytics, and tracking systems.
            </p>
            <ul className="text-sm text-[#8899AA]/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#6366F1] mt-0.5">•</span>
                <span>ELD and telematics device integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6366F1] mt-0.5">•</span>
                <span>Mobile device location and sensor data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6366F1] mt-0.5">•</span>
                <span>Real-time data processing pipelines</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <ContentSection>
          <SectionHeading
            title="Our Approach"
            subtitle="Principles that guide our technical decisions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Practical Over Theoretical", description: "We apply technologies where they solve real problems, not for their own sake. Blockchain for transparency, AI for automation, IoT for data—each has its place." },
              { title: "Modular & Extensible", description: "Our systems are designed as composable components that can be adopted individually or combined. Start with what you need, expand as you grow." },
              { title: "Integration-First", description: "Rather than replacing existing systems, we build bridges. Our tools are designed to work with the TMS, accounting, and telematics platforms you already use." },
              { title: "Security & Privacy", description: "Transportation data is sensitive. We implement strong security practices and give organizations control over their data while enabling the insights they need." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#0C1018] border border-white/[0.04] transition-all duration-300 hover:border-white/[0.08]">
                <h4 className="font-semibold text-[#F0F4F8] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                <p className="text-sm text-[#8899AA]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
