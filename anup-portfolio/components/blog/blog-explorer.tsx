"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Search, SearchX } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { cn, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PostCard, categoryBadgeVariant } from "@/components/blog/post-card";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const allCategories = ["Tech News", "Startups", "Engineering"];

function FeaturedPost({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group mb-14 block">
      <article className="grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-indigo-500/5 lg:grid-cols-2">
        <div className="relative aspect-[1200/630] lg:aspect-auto lg:min-h-80">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Badge variant={categoryBadgeVariant(post.category)}>
              {post.category}
            </Badge>
            <Badge variant="outline">Latest</Badge>
          </div>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" aria-hidden />
              {post.readingTime}
            </span>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Read article
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function BlogExplorer({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const isFiltering = query.trim() !== "" || category !== null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => (category ? p.category === category : true))
      .filter((p) =>
        q
          ? [p.title, p.excerpt, p.category].join(" ").toLowerCase().includes(q)
          : true
      );
  }, [posts, query, category]);

  const [featured, ...rest] = posts;
  const gridPosts = isFiltering ? filtered : rest;

  return (
    <div>
      {/* Featured hero — the newest post */}
      {!isFiltering && featured ? <FeaturedPost post={featured} /> : null}

      {/* Category chips + search */}
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              category === null
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {allCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(category === c ? null : c)}
              aria-pressed={category === c}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                category === c
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="pl-11"
          />
        </div>
      </div>

      {gridPosts.length > 0 ? (
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-20 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden />
          <div>
            <p className="font-medium">No articles match</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try another search term or category.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery("");
              setCategory(null);
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
