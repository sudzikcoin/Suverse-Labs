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
  Globe 
} from "lucide-react";

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
