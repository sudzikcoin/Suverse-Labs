import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectIllustrations } from "./ProjectIllustrations";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Illustration = projectIllustrations[project.slug];

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 gradient-border ${
        featured ? "md:col-span-2" : ""
      }`}
      data-testid={`card-project-${project.slug}`}
    >
      <div className="flex flex-col h-full">
        {/* SVG Illustration */}
        {Illustration && (
          <div className="mb-5 rounded-lg bg-[#080B0F]/60 border border-white/[0.03] p-3 overflow-hidden">
            <Illustration className="opacity-80 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-white/[0.04] text-[#8899AA] border-white/[0.06] hover:bg-white/[0.08]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3
          className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-2 group-hover:text-[#00D4FF] transition-colors duration-400"
          style={{ fontFamily: 'var(--font-heading)' }}
          data-testid={`text-project-name-${project.slug}`}
        >
          {project.name}
        </h3>

        <p
          className="text-sm text-[#00FF88] font-medium mb-3"
          data-testid={`text-project-tagline-${project.slug}`}
        >
          {project.shortTagline}
        </p>

        <p
          className="text-[#8899AA]/80 text-sm leading-relaxed flex-1"
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
              className="flex items-center gap-2 text-sm font-medium text-[#00D4FF] group-hover:gap-3 transition-all cursor-pointer"
              data-testid={`link-learn-more-${project.slug}`}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link href={project.href}>
              <span className="flex items-center gap-2 text-sm font-medium text-[#00D4FF] group-hover:gap-3 transition-all cursor-pointer">
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
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white/[0.06] text-[#8899AA] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] hover:bg-[#00D4FF]/[0.04] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
