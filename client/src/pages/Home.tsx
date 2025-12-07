import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageShell, Section } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ValueCard } from "@/components/shared/ValueCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/siteConfig";
import { 
  Leaf, 
  Bot, 
  Network, 
  ArrowRight, 
  TrendingDown, 
  BarChart3, 
  Globe,
  Wind,
  Sun,
  Truck,
  Link2,
  Cloud,
  Server,
  LucideIcon
} from "lucide-react";

const visualAreas: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wind,
    title: "Wind Power",
    description: "Modern wind turbines feeding clean electricity into digital logistics and data infrastructure.",
  },
  {
    icon: Sun,
    title: "Solar Farms",
    description: "Utility-scale solar supporting low-carbon energy for fleets, data centers, and blockchains.",
  },
  {
    icon: Truck,
    title: "Freight Trucks",
    description: "Real-world trucking data: routes, fuel, and operations that SuVerse Labs connects to AI and blockchain.",
  },
  {
    icon: Link2,
    title: "Blockchain Networks",
    description: "Decentralized ledgers and validators securing the data and incentives behind sustainable logistics.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "AgentOS and AI-driven automation orchestrating decisions across fleets, finance, and operations.",
  },
  {
    icon: Cloud,
    title: "CO2 & Climate Data",
    description: "Emissions metrics and carbon signals that can be measured, reported, and tokenized over time.",
  },
  {
    icon: Server,
    title: "Data Centers",
    description: "Infrastructure where AI models run and blockchain nodes live, powered by smarter energy choices.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <PageShell>
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-chart-1/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-chart-1/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center py-20">
          <Badge 
            variant="secondary" 
            className="mb-6 bg-gray-100 text-muted-foreground border-border px-4 py-1.5"
            data-testid="badge-hero-tagline"
          >
            {siteConfig.siteName} · AI · Blockchain · Green Logistics
          </Badge>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
            data-testid="text-hero-title"
          >
            AI & Blockchain Infrastructure for{" "}
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              Sustainable Transportation
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            SuVerse Labs builds AI agents, telematics tools, and blockchain infrastructure 
            to decarbonize trucking and modernize real-world logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-chart-1 to-chart-1/80 hover:from-chart-1/90 hover:to-chart-1/70 text-white border-0"
                data-testid="button-explore-projects"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/partners">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-white border-border hover:bg-gray-50"
                data-testid="button-for-partners"
              >
                For Partners & Investors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section className="bg-section-alt">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Energy & Infrastructure Landscape
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            SuVerse Labs connects real-world energy and logistics—wind and solar assets, freight trucks,
            data centers, and decentralized networks—into one AI- and blockchain-powered stack.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {visualAreas.map((area) => (
            <div
              key={area.title}
              className="relative overflow-hidden rounded-xl border border-border bg-white shadow-sm"
              data-testid={`card-visual-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-chart-2/80 via-chart-1/60 to-chart-3/80">
                  <area.icon className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-background">
        <SectionHeading 
          title="What We Build" 
          subtitle="Technology solutions that connect physical logistics with digital infrastructure"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ValueCard
            icon={Leaf}
            title="Green Logistics"
            description="Focus on reducing emissions and increasing transparency in trucking and freight through data-driven measurement and optimization."
            testId="card-value-green-logistics"
          />
          <ValueCard
            icon={Bot}
            title="AI Robot Applications"
            description="LLM-powered agents that automate operations for carriers, brokers, and finance teams, reducing manual work and improving efficiency."
            testId="card-value-ai-robots"
          />
          <ValueCard
            icon={Network}
            title="Decentralized Infrastructure"
            description="Validators and DePIN systems ensuring secure, scalable infrastructure for the next generation of logistics technology."
            testId="card-value-depin"
          />
        </div>
      </Section>

      <Section className="bg-section-alt">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Explore the initiatives driving our vision for sustainable transportation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button 
              variant="outline" 
              className="bg-white border-border hover:bg-gray-50"
              data-testid="button-view-all-projects"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Why This Matters" 
            subtitle="Transportation is responsible for a significant share of global emissions. Here's how we're making a difference."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-7 h-7 text-chart-2" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Decarbonization</h4>
              <p className="text-sm text-muted-foreground">
                Actively working to reduce emissions through better routing, monitoring, and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-chart-1/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-chart-1" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Digital Infrastructure</h4>
              <p className="text-sm text-muted-foreground">
                Building the measurement and tracking systems needed for transparent emissions reporting
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-chart-3" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Climate Alignment</h4>
              <p className="text-sm text-muted-foreground">
                Innovation aligned with national and global climate goals for a sustainable future
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-chart-1/5 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a carrier, broker, investor, or technology partner, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-chart-1 to-chart-1/80"
                data-testid="button-cta-contact"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-white border-border hover:bg-gray-50"
                data-testid="button-cta-about"
              >
                About SuVerse Labs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
