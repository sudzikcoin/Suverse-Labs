import { Link } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Network, Target } from "lucide-react";

export default function Validators() {
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
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">Validators</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-muted-foreground border-border">DePIN</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-project-title">
          Validator & DePIN Infrastructure
        </h1>
        <p className="text-xl text-chart-2 font-medium mb-6">
          Decentralized Network Security
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Running validator nodes and supporting decentralized physical infrastructure 
          networks that align with our vision for sustainable, transparent logistics.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-role">
            <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-chart-1" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              SuVerse Labs operates validator nodes on blockchain networks that align 
              with our mission. As validators, we participate in consensus mechanisms, 
              validate transactions, and help secure these networks. This active 
              participation gives us deep insight into the technologies we build upon.
            </p>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-importance">
            <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-6">
              <Network className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Importance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Validators are the backbone of proof-of-stake blockchain networks. They 
              provide security through economic commitment, ensure decentralization by 
              distributing consensus power, and enable the reliability that makes 
              blockchain useful for real-world applications like supply chain tracking.
            </p>
          </Card>

          <Card className="bg-white border-border shadow-sm p-6 md:p-8" data-testid="card-project-relevance">
            <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Relevance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our validator operations align with our long-term vision of distributed 
              infrastructure for logistics, data, and climate solutions. By participating 
              in DePIN networks, we help build the decentralized layer that could one 
              day power transparent, trustless supply chain operations.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-section-alt">
        <ContentSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Interested in Our Infrastructure Operations?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn more about our validator services and DePIN participation.
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
