"use client";

import {
  Award,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { currentFocus, timeline, type MilestoneIcon } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { GradientBorderCard } from "@/components/ui/card";

const icons: Record<MilestoneIcon, LucideIcon> = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  badge: BadgeCheck,
  award: Award,
  rocket: Rocket,
};

export function Journey() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="The Journey"
        title="From Kolkata classrooms to production cloud systems"
        description="Education, certifications, and career milestones — compressed into two intense years of shipping."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
        <ol className="relative">
          <span
            className="absolute bottom-6 left-[15px] top-2 w-px bg-gradient-to-b from-primary/60 via-accent-violet/30 to-transparent"
            aria-hidden
          />
          {timeline.map((milestone, i) => {
            const Icon = icons[milestone.icon];
            return (
              <Reveal key={milestone.title} delay={i * 0.06}>
                <li className="relative pb-10 pl-14 last:pb-0">
                  <span
                    className={cn(
                      "absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border",
                      milestone.current
                        ? "aurora-gradient border-transparent text-white shadow-lg shadow-indigo-500/30"
                        : "border-border bg-card text-primary"
                    )}
                  >
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {milestone.date}
                  </p>
                  <h3 className="mt-1.5 font-semibold">{milestone.title}</h3>
                  {milestone.org ? (
                    <p className="mt-0.5 text-sm text-primary">{milestone.org}</p>
                  ) : null}
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.2} className="lg:sticky lg:top-28 lg:self-start">
          <GradientBorderCard>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="size-4.5" aria-hidden />
                </span>
                <h3 className="font-semibold">Current Focus</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                What I’m building and deepening right now.
              </p>
              <ul className="mt-5 space-y-2.5">
                {currentFocus.map((focus) => (
                  <li
                    key={focus}
                    className="rounded-xl border border-border bg-elevated/60 px-4 py-2.5 text-sm"
                  >
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </GradientBorderCard>
        </Reveal>
      </div>
    </section>
  );
}
