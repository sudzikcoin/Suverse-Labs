import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/projects.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060910]/90 via-[#060910]/65 to-[#060910]/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-24 pt-32 md:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
            data-testid="text-page-title"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#8899AA]/80 max-w-2xl leading-relaxed"
            data-testid="text-page-subtitle"
          >
            Explore the initiatives driving our vision for sustainable transportation
          </motion.p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
