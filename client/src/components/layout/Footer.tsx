import { Link } from "wouter";
import { siteConfig } from "@/lib/siteConfig";
import { navItems } from "@/data/nav";
import { projects } from "@/data/projects";
import { SiGithub, SiLinkedin, SiX, SiTelegram, SiInstagram, SiMedium } from "react-icons/si";

const socialLinks = [
  { name: "X",         href: siteConfig.socialLinks.twitter,   icon: SiX,         testId: "link-social-twitter"   },
  { name: "LinkedIn",  href: siteConfig.socialLinks.linkedin,  icon: SiLinkedin,  testId: "link-social-linkedin"  },
  { name: "GitHub",    href: siteConfig.socialLinks.github,    icon: SiGithub,    testId: "link-social-github"    },
  { name: "Telegram",  href: siteConfig.socialLinks.telegram,  icon: SiTelegram,  testId: "link-social-telegram"  },
  { name: "Instagram", href: siteConfig.socialLinks.instagram, icon: SiInstagram, testId: "link-social-instagram" },
  { name: "Medium",    href: siteConfig.socialLinks.medium,    icon: SiMedium,    testId: "link-social-medium"    },
];

export function Footer() {
  const quickLinks  = navItems.slice(0, 5);
  const projectLinks = projects.slice(0, 5);

  return (
    <footer
      className="mt-auto relative"
      style={{ background: "#070604", borderTop: "1px solid #2A2720" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5" data-testid="link-footer-logo">
              <span
                className="font-bold text-xl leading-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#E8C547",
                  letterSpacing: "-0.02em",
                }}
              >
                SV
              </span>
              <span
                className="text-lg font-semibold tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#F2EDE4",
                }}
              >
                {siteConfig.siteName}
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed mb-7"
              style={{ color: "#7A7368" }}
            >
              {siteConfig.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200"
                  style={{ color: "rgba(122,115,104,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#E8C547";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(122,115,104,0.6)";
                  }}
                  aria-label={item.name}
                  data-testid={item.testId}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                color: "rgba(242,237,228,0.5)",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(122,115,104,0.8)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.color = "#E8C547";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.color = "rgba(122,115,104,0.8)";
                      }}
                      data-testid={`link-footer-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4
              className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                color: "rgba(242,237,228,0.5)",
              }}
            >
              Projects
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((project) => (
                <li key={project.id}>
                  <Link href={project.href}>
                    <span
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(122,115,104,0.8)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.color = "#E8C547";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.color = "rgba(122,115,104,0.8)";
                      }}
                      data-testid={`link-footer-project-${project.slug}`}
                    >
                      {project.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                color: "rgba(242,237,228,0.5)",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(122,115,104,0.8)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#E8C547";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(122,115,104,0.8)";
                  }}
                  data-testid="link-footer-email"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(122,115,104,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "#E8C547";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "rgba(122,115,104,0.8)";
                    }}
                    data-testid="link-footer-contact"
                  >
                    Get in Touch
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(122,115,104,0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "#E8C547";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.color = "rgba(122,115,104,0.8)";
                    }}
                    data-testid="link-footer-partners"
                  >
                    Partner with Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8"
          style={{ borderTop: "1px solid #2A2720" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-xs tracking-wide"
              style={{ color: "rgba(122,115,104,0.4)" }}
            >
              &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
            </p>
            <p
              className="text-xs tracking-wide"
              style={{ color: "rgba(122,115,104,0.4)" }}
            >
              Building the future of sustainable transportation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
