import { Link, useParams } from "wouter";
import { PageShell, Section, ContentSection } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/data/posts";
import { ArrowLeft, Calendar } from "lucide-react";

export default function NewsArticle() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PageShell>
        <Section>
          <ContentSection className="text-center py-20">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/news">
              <Button variant="outline" data-testid="button-back-news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </ContentSection>
        </Section>
      </PageShell>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PageShell>
      <Section>
        <ContentSection>
          <div className="mb-8">
            <Link href="/news">
              <Button variant="ghost" size="sm" className="text-muted-foreground" data-testid="button-back-news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>

          <div className="mb-6">
            <Badge 
              variant="secondary" 
              className="text-xs bg-chart-1/10 text-chart-1 border-chart-1/20 mb-4"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {formattedDate}
            </Badge>
            
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              data-testid="text-article-title"
            >
              {post.title}
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-muted-foreground leading-relaxed mb-6"
                data-testid={`text-article-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ContentSection>
      </Section>

      <Section className="bg-slate-900/30">
        <ContentSection className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Want to Learn More?
          </h3>
          <p className="text-muted-foreground mb-6">
            Stay updated on SuVerse Labs developments and sustainable transportation innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/news">
              <Button variant="outline" data-testid="button-more-articles">
                More Articles
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-chart-1 to-chart-1/80" data-testid="button-article-contact">
                Get in Touch
              </Button>
            </Link>
          </div>
        </ContentSection>
      </Section>
    </PageShell>
  );
}
