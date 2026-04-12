import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
  testId?: string;
}

export function ValueCard({ icon: Icon, title, description, accentColor = "#00D4FF", testId }: ValueCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/[0.04] bg-[#0C1018] p-6 md:p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 gradient-border h-full"
      data-testid={testId}
    >
      <div className="flex flex-col items-start">
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 icon-glow transition-all duration-400"
          style={{
            background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)`,
            boxShadow: `0 0 0 1px ${accentColor}15`,
          }}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: accentColor }} />
        </div>
        <h3
          className="text-xl md:text-2xl font-semibold text-[#F0F4F8] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <p className="text-[#8899AA]/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
