import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  testId?: string;
}

export function ValueCard({ icon: Icon, title, description, testId }: ValueCardProps) {
  return (
    <Card 
      className="bg-white border-border p-6 md:p-8 transition-all duration-300 hover:border-chart-1/50 hover:shadow-md"
      data-testid={testId}
    >
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-chart-2" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
