import { Link } from "wouter";
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
      <div
        className={`group relative overflow-hidden rounded-xl border border-white/5 bg-[#0C1018] transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/20 hover:shadow-xl hover:shadow-[#00D4FF]/5 h-full flex flex-col`}
        data-testid={`card-news-${post.slug}`}
      >
        {/* Image */}
        {post.image && (
          <div className="relative overflow-hidden" style={{ height: featured ? "280px" : "200px" }}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/20 to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Badge
              variant="secondary"
              className="text-xs bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {formattedDate}
            </Badge>
          </div>

          <h3
            className={`font-semibold text-[#F0F4F8] mb-3 group-hover:text-[#00D4FF] transition-colors leading-tight ${
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
            data-testid={`text-news-title-${post.slug}`}
          >
            {post.title}
          </h3>

          <p
            className="text-[#8899AA] text-sm leading-relaxed line-clamp-3 flex-1"
            data-testid={`text-news-summary-${post.slug}`}
          >
            {post.summary}
          </p>

          <div className="flex items-center gap-2 mt-6 text-sm font-medium text-[#00D4FF] group-hover:gap-3 transition-all">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
