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
          ? "glass border-b border-white/[0.06] shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5" data-testid="link-logo">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00FF88] flex items-center justify-center">
              <span className="text-[#080B0F] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>S</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {siteConfig.siteName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" data-testid="nav-desktop">
            {navItems.map((item) => {
              const isActive = location === item.href ||
                (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-[#00D4FF] bg-[#00D4FF]/[0.08]"
                        : "text-[#8899AA] hover:text-[#F0F4F8] hover:bg-white/[0.04]"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#8899AA] hover:text-[#F0F4F8] hover:bg-white/5"
                  data-testid="button-mobile-menu"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#0A0E14]/95 backdrop-blur-xl border-l border-white/[0.06]">
                <div className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => {
                    const isActive = location === item.href ||
                      (item.href !== "/" && location.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span
                          className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                            isActive
                              ? "text-[#00D4FF] bg-[#00D4FF]/[0.08]"
                              : "text-[#8899AA] hover:text-[#F0F4F8] hover:bg-white/[0.04]"
                          }`}
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
