"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  className,
  valueClassName,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
  valueClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p
        className={cn(
          "text-2xl font-semibold tabular-nums tracking-tight text-success sm:text-3xl",
          valueClassName
        )}
      >
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}
