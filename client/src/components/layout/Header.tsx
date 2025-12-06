import { Link, useLocation } from "wouter";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              {siteConfig.siteName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => {
              const isActive = location === item.href || 
                (item.href !== "/" && location.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-chart-2"
                        : "text-muted-foreground hover:text-foreground"
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
                  data-testid="button-mobile-menu"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white border-l border-border">
                <div className="flex flex-col gap-4 mt-8">
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
                          className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                            isActive
                              ? "text-chart-2 bg-chart-2/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
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
