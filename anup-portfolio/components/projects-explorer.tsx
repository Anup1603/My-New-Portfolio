"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, SearchX } from "lucide-react";
import { projects, allTechnologies, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CompactProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (tech ? p.stack.includes(tech) : true))
      .filter((p) =>
        q
          ? [p.title, p.tagline, p.description, ...p.stack]
              .join(" ")
              .toLowerCase()
              .includes(q)
          : true
      )
      // Featured projects pinned to the top.
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [query, tech]);

  function reset() {
    setQuery("");
    setTech(null);
  }

  return (
    <div>
      {/* Search + technology filter */}
      <div className="mb-10 space-y-5">
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="pl-11"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by technology">
          <button
            type="button"
            onClick={() => setTech(null)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              tech === null
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {allTechnologies.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTech(tech === t ? null : t)}
              aria-pressed={tech === t}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                tech === t
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <CompactProjectCard
                project={project}
                onOpen={() => setSelected(project)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-20 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden />
          <div>
            <p className="font-medium">No projects match that filter</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different technology or clear the search.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={reset}>
            Clear filters
          </Button>
        </div>
      )}

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
