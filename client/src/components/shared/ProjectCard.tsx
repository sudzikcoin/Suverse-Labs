import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link href={project.href}>
      <Card 
        className={`group relative overflow-visible bg-slate-900/50 border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-chart-2/30 hover:shadow-xl hover:shadow-chart-2/5 ${
          featured ? "md:col-span-2" : ""
        }`}
        data-testid={`card-project-${project.slug}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs bg-white/5 text-muted-foreground border-white/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 
            className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-chart-2 transition-colors"
            data-testid={`text-project-name-${project.slug}`}
          >
            {project.name}
          </h3>
          
          <p 
            className="text-sm text-chart-2 font-medium mb-3"
            data-testid={`text-project-tagline-${project.slug}`}
          >
            {project.shortTagline}
          </p>
          
          <p 
            className="text-muted-foreground text-sm leading-relaxed flex-1"
            data-testid={`text-project-description-${project.slug}`}
          >
            {project.description}
          </p>
          
          <div className="flex items-center gap-2 mt-6 text-sm font-medium text-chart-2 group-hover:gap-3 transition-all">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
