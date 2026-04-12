import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { NewsCard } from "@/components/shared/NewsCard";
import { posts } from "@/data/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function News() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#060910" }}>
        {/* Subtle cyan glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00D4FF]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[200px] bg-[#00D4FF]/[0.02] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
            data-testid="text-page-title"
          >
            News &amp; Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#8899AA]/80 max-w-2xl leading-relaxed"
            data-testid="text-page-subtitle"
          >
            Updates and perspectives from SuVerse Labs.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#060910" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Featured post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4FF] mb-5">
                Featured
              </p>
              <NewsCard post={featuredPost} featured />
            </motion.div>
          )}

          {/* Divider */}
          {otherPosts.length > 0 && (
            <div className="border-t border-white/[0.06] mb-12" />
          )}

          {/* Other posts grid */}
          {otherPosts.length > 0 && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs font-semibold uppercase tracking-widest text-[#8899AA]/60 mb-8"
              >
                More articles
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <NewsCard post={post} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}
