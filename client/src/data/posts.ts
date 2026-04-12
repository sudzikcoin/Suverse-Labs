export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
}

export const posts: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
