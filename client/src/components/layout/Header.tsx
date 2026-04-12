import { Link, useLocation } from "wouter";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(10, 9, 5, 0.95)",
              borderBottom: "1px solid #2A2720",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" data-testid="link-logo">
            {/* "SV" mark — no background box, amber color */}
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
            {/* Wordmark */}
            <span
              className="text-lg md:text-xl font-semibold tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#F2EDE4",
              }}
            >
              {siteConfig.siteName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" data-testid="nav-desktop">
            {navItems.map((item) => {
              const isActive =
                location === item.href ||
                (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-b-2"
                        : "border-b-2 border-transparent hover:border-transparent"
                    }`}
                    style={
                      isActive
                        ? {
                            color: "#E8C547",
                            borderBottomColor: "#E8C547",
                          }
                        : {
                            color: "#7A7368",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLSpanElement).style.color =
                          "#F2EDE4";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLSpanElement).style.color =
                          "#7A7368";
                      }
                    }}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-colors duration-200"
                  style={{ color: "#7A7368" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#F2EDE4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#7A7368";
                  }}
                  data-testid="button-mobile-menu"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] border-l"
                style={{
                  background: "rgba(10, 9, 5, 0.98)",
                  borderLeftColor: "#2A2720",
                }}
              >
                <div className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => {
                    const isActive =
                      location === item.href ||
                      (item.href !== "/" && location.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span
                          className="block px-4 py-3 text-base font-medium transition-colors duration-200"
                          style={
                            isActive
                              ? { color: "#E8C547" }
                              : { color: "#7A7368" }
                          }
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              (e.currentTarget as HTMLSpanElement).style.color =
                                "#F2EDE4";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              (e.currentTarget as HTMLSpanElement).style.color =
                                "#7A7368";
                            }
                          }}
                          data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
