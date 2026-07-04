import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}

/**
 * Card wrapped in a thin aurora gradient border — reserved for featured
 * elements (certifications, contact CTA, featured project accents).
 */
export function GradientBorderCard({
  className,
  innerClassName,
  children,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-gradient-to-br from-indigo-500/40 via-violet-500/25 to-cyan-400/40 p-px",
        className
      )}
    >
      <div className={cn("h-full rounded-[calc(1rem-1px)] bg-card", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
