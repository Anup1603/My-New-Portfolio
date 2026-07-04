import { ArrowUpRight, Map } from "lucide-react";

/**
 * Interactive-tool embed for blog posts. On desktop/tablet it frames the live
 * iframe in a site-styled card; on phones (< md) it hides the embed and shows
 * a call-to-action that opens the tool full-screen on its own page — the tool
 * is built for a larger screen, so nested-scrolling it on a phone is poor UX.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="not-prose my-8">
      {/* Desktop / tablet — live embed, framed to match site cards */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <Map className="size-4 text-primary" aria-hidden />
            Interactive map
          </span>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-foreground"
          >
            Open full screen
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="block h-205 w-full border-0 bg-[#14181d]"
        />
      </div>

      {/* Mobile — link out to the full-screen map instead of embedding it */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:hidden"
      >
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Map className="size-6" aria-hidden />
        </span>
        <div>
          <p className="font-semibold">Open the interactive map</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            The visualiser is built for a larger screen. Tap below to open it
            full-screen in a new tab.
          </p>
        </div>
        <span className="aurora-gradient inline-flex w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white">
          Launch visualiser
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </a>
    </div>
  );
}
