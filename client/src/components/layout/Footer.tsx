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
  const projectLinks = projects.slice(0, 5);

  return (
    <footer className="mt-auto relative" style={{ background: '#050810' }}>
      <div className="gradient-line" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00D4FF]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF88]/[0.02] rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" data-testid="link-footer-logo">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00D4FF] to-[#00FF88] flex items-center justify-center">
                <span className="text-[#080B0F] font-bold text-xs" style={{ fontFamily: 'var(--font-heading)' }}>S</span>
              </div>
              <span className="text-xl font-bold text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
                {siteConfig.siteName}
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#8899AA] leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8899AA]/60 hover:text-[#00D4FF] transition-all duration-300 hover:scale-110"
                  aria-label={item.name}
                  data-testid={item.testId}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#F0F4F8]/70 uppercase tracking-[0.15em] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className="text-sm text-[#8899AA]/70 hover:text-[#00D4FF] transition-colors duration-300"
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
            <h4 className="text-xs font-semibold text-[#F0F4F8]/70 uppercase tracking-[0.15em] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Projects
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((project) => (
                <li key={project.id}>
                  <Link href={project.href}>
                    <span
                      className="text-sm text-[#8899AA]/70 hover:text-[#00D4FF] transition-colors duration-300"
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
            <h4 className="text-xs font-semibold text-[#F0F4F8]/70 uppercase tracking-[0.15em] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-[#8899AA]/70 hover:text-[#00D4FF] transition-colors duration-300"
                  data-testid="link-footer-email"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span
                    className="text-sm text-[#8899AA]/70 hover:text-[#00D4FF] transition-colors duration-300"
                    data-testid="link-footer-contact"
                  >
                    Get in Touch
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <span
                    className="text-sm text-[#8899AA]/70 hover:text-[#00D4FF] transition-colors duration-300"
                    data-testid="link-footer-partners"
                  >
                    Partner with Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8899AA]/40 tracking-wide">
              {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
            </p>
            <p className="text-xs text-[#8899AA]/40 tracking-wide">
              Building the future of sustainable transportation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
