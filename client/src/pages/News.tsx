import { PageShell, PageHeader, Section } from "@/components/layout/PageShell";
import { NewsCard } from "@/components/shared/NewsCard";
import { posts } from "@/data/posts";

export default function News() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <PageShell>
      <PageHeader 
        title="News & Insights"
        subtitle="Updates, announcements, and perspectives from SuVerse Labs on sustainable transportation and technology."
      />

      <Section className="pt-0">
        {featuredPost && (
          <div className="mb-8">
            <NewsCard post={featuredPost} featured />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
