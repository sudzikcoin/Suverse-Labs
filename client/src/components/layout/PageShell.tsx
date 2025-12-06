import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`min-h-screen pt-16 md:pt-20 ${className}`}>
      {children}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function PageHeader({ title, subtitle, centered = false }: PageHeaderProps) {
  return (
    <div className={`py-16 md:py-24 ${centered ? "text-center" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h1 
          className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
          data-testid="text-page-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            data-testid="text-page-subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

export function ContentSection({ children, className = "" }: ContentSectionProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  );
}
