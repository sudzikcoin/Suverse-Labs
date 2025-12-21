import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";
import { navItems } from "@/data/nav";
import { projects } from "@/data/projects";
import { SiGithub, SiLinkedin, SiX, SiTelegram, SiInstagram, SiMedium } from "react-icons/si";

const socialLinks = [
  { name: "X", href: siteConfig.socialLinks.twitter, icon: SiX, testId: "link-social-twitter" },
  { name: "LinkedIn", href: siteConfig.socialLinks.linkedin, icon: SiLinkedin, testId: "link-social-linkedin" },
  { name: "GitHub", href: siteConfig.socialLinks.github, icon: SiGithub, testId: "link-social-github" },
  { name: "Telegram", href: siteConfig.socialLinks.telegram, icon: SiTelegram, testId: "link-social-telegram" },
  { name: "Instagram", href: siteConfig.socialLinks.instagram, icon: SiInstagram, testId: "link-social-instagram" },
  { name: "Medium", href: siteConfig.socialLinks.medium, icon: SiMedium, testId: "link-social-medium" },
];

export function Footer() {
  const quickLinks = navItems.slice(0, 5);
  const projectLinks = projects.slice(0, 4);

  return (
    <footer className="bg-footer-bg border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" data-testid="link-footer-logo">
              <span className="text-xl font-bold text-foreground">{siteConfig.siteName}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                  data-testid={item.testId}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
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

        <div className="mt-12 pt-8 border-t border-border">
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
