"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { BookMarked, Users } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const calendarTheme = {
  dark: ["#1A1A24", "#312E81", "#4338CA", "#6366F1", "#A5B4FC"],
  light: ["#F4F4F5", "#C7D2FE", "#818CF8", "#4F46E5", "#3730A3"],
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Dart: "#00B4AB",
  Java: "#B07219",
  "C++": "#F34B7D",
  C: "#555555",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Python: "#3572A5",
  Shell: "#89E051",
};

interface GhStats {
  repos: number;
  followers: number;
  languages: [string, number][];
}

/** Elegant fallback if the GitHub contributions API is unreachable. */
class CalendarBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function CalendarFallback() {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <SiGithub className="size-8 text-muted-foreground" aria-hidden />
      <p className="max-w-sm text-sm text-muted-foreground">
        The contribution graph couldn’t load right now — you can browse
        everything directly on GitHub instead.
      </p>
      <a
        href={site.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <SiGithub className="size-3.5" aria-hidden />
        View GitHub profile
      </a>
    </div>
  );
}

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<GhStats | null>(null);

  useEffect(() => {
    setMounted(true);

    let cancelled = false;
    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${site.githubUsername}`),
          fetch(
            `https://api.github.com/users/${site.githubUsername}/repos?per_page=100&sort=pushed`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos: { language: string | null }[] = await reposRes.json();
        const counts: Record<string, number> = {};
        for (const repo of repos) {
          if (repo.language) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
        }
        const languages = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5) as [string, number][];
        if (!cancelled) {
          setStats({
            repos: user.public_repos ?? 0,
            followers: user.followers ?? 0,
            languages,
          });
        }
      } catch {
        // Stats are decorative — fail silently and keep the section clean.
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="border-y border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Consistency, in green squares"
          description="A living picture of what I build outside of client work."
        />

        <Reveal>
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <SiGithub className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">@{site.githubUsername}</h3>
                  <p className="text-xs text-muted-foreground">
                    Contribution activity, past 12 months
                  </p>
                </div>
              </div>
              {stats ? (
                <div className="flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <BookMarked className="size-4" aria-hidden />
                    {stats.repos} repositories
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-4" aria-hidden />
                    {stats.followers} followers
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-8 overflow-x-auto pb-2">
              {mounted ? (
                <CalendarBoundary fallback={<CalendarFallback />}>
                  <GitHubCalendar
                    username={site.githubUsername}
                    colorScheme={resolvedTheme === "light" ? "light" : "dark"}
                    theme={calendarTheme}
                    blockSize={11}
                    blockMargin={4}
                    fontSize={12}
                    throwOnError
                  />
                </CalendarBoundary>
              ) : (
                <div className="h-32 animate-pulse rounded-xl bg-elevated" aria-hidden />
              )}
            </div>

            {stats && stats.languages.length > 0 ? (
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-6">
                <span className="mr-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Top languages
                </span>
                {stats.languages.map(([language]) => (
                  <span
                    key={language}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1 text-xs font-medium"
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{
                        backgroundColor: languageColors[language] ?? "#6366F1",
                      }}
                      aria-hidden
                    />
                    {language}
                  </span>
                ))}
              </div>
            ) : null}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
