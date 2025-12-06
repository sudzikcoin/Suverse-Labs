import { PageShell, PageHeader, Section } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <PageShell>
      <PageHeader 
        title="Projects"
        subtitle="Explore the initiatives and technologies that drive our mission to transform sustainable transportation."
      />

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
