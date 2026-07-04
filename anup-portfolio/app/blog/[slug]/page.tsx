import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { ArrowLeft, BookMarked, Clock, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {
  extractHeadings,
  getAllPosts,
  getPost,
  getRelatedPosts,
} from "@/lib/blog";
import { site } from "@/data/site";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/blog/mdx-components";
import { TableOfContents } from "@/components/blog/toc";
import { ShareButtons } from "@/components/blog/share-buttons";
import { PostCard, categoryBadgeVariant } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  return {
    title: meta.title,
    description: meta.excerpt,
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.excerpt,
      publishedTime: meta.date,
      authors: [site.name],
      images: [{ url: meta.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
      images: [meta.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;
  const headings = extractHeadings(content);
  const related = getRelatedPosts(slug, meta.category, 3);

  return (
    <article className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All articles
        </Link>
        <div className="mt-6 flex items-center gap-3">
          <Badge variant={categoryBadgeVariant(meta.category)}>
            {meta.category}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" aria-hidden />
            {meta.readingTime}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {meta.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="aurora-gradient flex size-10 items-center justify-center rounded-full text-sm font-bold text-white">
              {site.firstName[0]}
            </span>
            <div>
              <p className="text-sm font-medium">{site.name}</p>
              <time dateTime={meta.date} className="text-xs text-muted-foreground">
                {formatDate(meta.date)}
              </time>
            </div>
          </div>
          <ShareButtons slug={meta.slug} title={meta.title} />
        </div>
      </div>

      {/* Cover */}
      <div className="relative mx-auto mt-10 aspect-[1200/630] max-w-4xl overflow-hidden rounded-2xl border border-border">
        <Image
          src={meta.coverImage}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Body + sticky TOC */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-12 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_240px] lg:px-16">
        <div className="prose prose-zinc mx-auto w-full min-w-0 max-w-3xl dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-foreground">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />

          {meta.sources && meta.sources.length > 0 ? (
            <div className="not-prose mt-14 rounded-2xl border border-border bg-card/50 p-6">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <BookMarked className="size-4" aria-hidden />
                Sources &amp; References
              </h2>
              <ol className="mt-4 space-y-2.5">
                {meta.sources.map((source, i) => (
                  <li key={source.url} className="flex gap-3 text-sm">
                    <span className="font-mono text-muted-foreground">
                      {i + 1}.
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                    >
                      {source.title}
                      <ExternalLink
                        className="size-3.5 opacity-60 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>

      {/* Author card */}
      <div className="mx-auto mt-16 max-w-3xl">
        <Card className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="aurora-gradient flex size-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white">
            {site.initials}
          </span>
          <div className="flex-1">
            <p className="font-semibold">{site.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {site.shortBio}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              <SiGithub className="size-4" aria-hidden />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              <FaLinkedin className="size-4" aria-hidden />
            </a>
          </div>
        </Card>
      </div>

      {/* Related articles */}
      {related.length > 0 ? (
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
