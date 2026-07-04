"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Client wrapper for fenced code blocks: adds a language label and a
 * copy-to-clipboard button on top of the server-highlighted code.
 */
export function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const code = ref.current?.querySelector('code[class*="language-"]');
    const match = /language-([\w-]+)/.exec(code?.className ?? "");
    if (match) setLanguage(match[1]);
  }, []);

  async function copy() {
    const text = ref.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions/insecure context) — ignore.
    }
  }

  return (
    <div className="not-prose group relative my-6">
      {language ? (
        <span className="absolute right-12 top-3 select-none font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {language}
        </span>
      ) : null}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-3 top-2.5 inline-flex size-7 items-center justify-center rounded-md border border-border bg-card/80 text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        {copied ? (
          <Check className="size-3.5 text-success" aria-hidden />
        ) : (
          <Copy className="size-3.5" aria-hidden />
        )}
      </button>
      <pre
        ref={ref}
        className="overflow-x-auto rounded-xl border border-border bg-elevated/60 p-4 pt-9 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
        {...props}
      />
    </div>
  );
}
