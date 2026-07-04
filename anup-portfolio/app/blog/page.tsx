import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogExplorer } from "@/components/blog/blog-explorer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on engineering, cloud, startups, and the world of tech — from a full-stack developer shipping production systems.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="aurora-text text-xs font-semibold uppercase tracking-[0.2em]">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Field notes from production
        </h1>
        <p className="mt-4 text-muted-foreground">
          Engineering deep-dives, startup analysis, and tech-world commentary —
          written between deploys.
        </p>
      </div>
      <BlogExplorer posts={posts} />
    </div>
  );
}
