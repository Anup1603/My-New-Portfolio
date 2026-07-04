import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";
import { Pre } from "@/components/blog/code-block";
import { MapEmbed } from "@/components/blog/map-embed";

function CodeBlock({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const isBlock = typeof className === "string" && className.includes("language-");
  const code = typeof children === "string" ? children : String(children ?? "");

  if (isBlock) {
    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{ __html: highlight(code.trimEnd()) }}
        {...props}
      />
    );
  }

  return (
    <code
      className="rounded-md border border-border bg-elevated px-1.5 py-0.5 font-mono text-[0.875em] before:content-none after:content-none"
      {...props}
    >
      {children}
    </code>
  );
}

export const mdxComponents: MDXComponents = {
  pre: Pre,
  code: CodeBlock,
  // Markdown images: ![alt](/images/blog/example.jpg "Optional caption").
  // span wrappers (not figure/figcaption) because markdown images render
  // inside a <p>, where block elements would be invalid HTML.
  img: ({ src = "", alt = "", title }) => (
    <span className="my-6 block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={typeof src === "string" ? src : ""}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl border border-border"
      />
      {title ? (
        <span className="mt-2 block text-center text-sm text-muted-foreground">
          {title}
        </span>
      ) : null}
    </span>
  ),
  a: ({ href = "", children, ...props }) => (
    <a
      href={href}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
      {...props}
    >
      {children}
    </a>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="scroll-mt-28" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="scroll-mt-28" {...props}>
      {children}
    </h3>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-primary/50 pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border" />,
  // Custom components usable directly in .mdx (capitalised names resolve here).
  MapEmbed,
};
