import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import type { Post } from "@/data/posts";

interface NewsCardProps {
  post: Post;
  featured?: boolean;
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/news/${post.slug}`}>
      <Card 
        className={`group relative overflow-visible bg-slate-900/50 border-white/10 transition-all duration-300 hover:border-chart-1/30 hover:shadow-xl hover:shadow-chart-1/5 ${
          featured ? "md:col-span-2" : ""
        }`}
        data-testid={`card-news-${post.slug}`}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge 
              variant="secondary" 
              className="text-xs bg-chart-1/10 text-chart-1 border-chart-1/20"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {formattedDate}
            </Badge>
          </div>
          
          <h3 
            className={`font-semibold text-foreground mb-3 group-hover:text-chart-1 transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
            data-testid={`text-news-title-${post.slug}`}
          >
            {post.title}
          </h3>
          
          <p 
            className="text-muted-foreground text-sm leading-relaxed line-clamp-3"
            data-testid={`text-news-summary-${post.slug}`}
          >
            {post.summary}
          </p>
          
          <div className="flex items-center gap-2 mt-6 text-sm font-medium text-chart-1 group-hover:gap-3 transition-all">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
