"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/site";

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${site.url}/blog/${slug}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/insecure context) — ignore.
    }
  }

  const iconButton =
    "inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground";

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className={iconButton}
      >
        <SiX className="size-3.5" aria-hidden />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconButton}
      >
        <FaLinkedin className="size-4" aria-hidden />
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className={iconButton}
      >
        {copied ? (
          <Check className="size-4 text-success" aria-hidden />
        ) : (
          <Link2 className="size-4" aria-hidden />
        )}
      </button>
    </div>
  );
}
