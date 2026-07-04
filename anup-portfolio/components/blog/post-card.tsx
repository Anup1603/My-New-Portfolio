import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categoryVariant = {
  "Tech News": "cyan",
  Startups: "violet",
  Engineering: "primary",
} as const;

export function categoryBadgeVariant(category: string) {
  return (
    categoryVariant[category as keyof typeof categoryVariant] ?? "default"
  );
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-indigo-500/5">
        <div className="relative aspect-[1200/630] overflow-hidden">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            variant={categoryBadgeVariant(post.category)}
            className="absolute left-4 top-4 backdrop-blur-sm"
          >
            {post.category}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" aria-hidden />
              {post.readingTime}
            </span>
          </div>
          <h3 className="mt-3 font-semibold leading-snug transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </Card>
    </Link>
  );
}
