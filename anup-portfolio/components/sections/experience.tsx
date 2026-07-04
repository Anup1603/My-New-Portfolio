"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCounter } from "@/components/stat-counter";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="border-y border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Production impact, measured"
          description="Shipping enterprise systems since day one — with the numbers to show for it."
        />

        {experience.map((job) => (
          <Reveal key={job.company}>
            <Card className="p-6 hover:border-primary/30 sm:p-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="aurora-gradient flex size-12 items-center justify-center rounded-xl text-lg font-bold text-white">
                    {job.company[0]}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.company} — {job.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" aria-hidden />
                      {job.location}
                    </p>
                  </div>
                </div>
                <Badge variant={job.current ? "success" : "default"} size="md">
                  {job.period}
                </Badge>
              </div>

              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                {job.summary}
              </p>

              {/* Impact metrics — visualized, not buried in bullets */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-elevated/50 p-6 sm:grid-cols-3 lg:grid-cols-5">
                {job.metrics.map((metric) => (
                  <StatCounter
                    key={metric.label}
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    label={metric.label}
                    valueClassName="text-xl sm:text-2xl"
                  />
                ))}
              </div>

              {/* Expandable detail */}
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
              >
                {expanded ? "Hide detailed impact" : "View detailed impact"}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-300",
                    expanded && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-3.5 border-t border-border pt-6">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 40)}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-success"
                            aria-hidden
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
