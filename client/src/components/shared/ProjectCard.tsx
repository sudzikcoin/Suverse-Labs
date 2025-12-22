import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card 
      className={`group relative overflow-visible bg-white border-border p-6 md:p-8 transition-all duration-300 hover:border-chart-2/50 hover:shadow-lg ${
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
              className="text-xs bg-gray-100 text-muted-foreground border-border"
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
        
        <div className="flex flex-wrap items-center gap-4 mt-6">
          {project.href.startsWith("http") ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-chart-2 group-hover:gap-3 transition-all cursor-pointer"
              data-testid={`link-learn-more-${project.slug}`}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link href={project.href}>
              <span className="flex items-center gap-2 text-sm font-medium text-chart-2 group-hover:gap-3 transition-all cursor-pointer">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-testid={`link-demo-${project.slug}`}
            >
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
