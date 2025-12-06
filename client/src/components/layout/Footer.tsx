import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";
import { navItems } from "@/data/nav";
import { projects } from "@/data/projects";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  const quickLinks = navItems.slice(0, 5);
  const projectLinks = projects.slice(0, 4);

  return (
    <footer className="bg-background border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" data-testid="link-footer-logo">
              <span className="text-xl font-bold text-foreground">{siteConfig.siteName}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.socialLinks.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                data-testid="link-social-github"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Projects
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((project) => (
                <li key={project.id}>
                  <Link href={project.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-project-${project.slug}`}
                    >
                      {project.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Get in Touch
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <span 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-partners"
                  >
                    Partner with Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future of sustainable transportation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
