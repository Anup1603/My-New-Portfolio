"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink, Images } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const count = project.images.length;

  // Auto-advance the screenshot slideshow while the card is hovered.
  useEffect(() => {
    if (!hovered || count < 2) {
      setIndex(0);
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 1100);
    return () => clearInterval(id);
  }, [hovered, count]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        project.gradient,
        className
      )}
    >
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
      {count > 0 ? (
        // Plain img: covers are local SVG mocks, which next/image blocks by
        // default. object-contain keeps the full screenshot visible whatever
        // shape the card gives this box.
        <motion.img
          key={project.images[index]}
          src={project.images[index]}
          alt={`${project.title} screenshot ${index + 1} of ${count}`}
          loading="lazy"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : (
        <span
          className="absolute inset-0 flex select-none items-center justify-center text-7xl font-bold tracking-tighter text-white/20"
          aria-hidden
        >
          {project.monogram}
        </span>
      )}
      {project.professional ? (
        <Badge
          variant="violet"
          className="absolute left-4 top-4 bg-black/30 backdrop-blur-sm"
        >
          Professional Work
        </Badge>
      ) : null}
      {count > 1 ? (
        <div
          className={cn(
            "absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        >
          {project.images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              )}
            />
          ))}
        </div>
      ) : null}
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <Images className="size-3.5" aria-hidden />
        {count} screenshots
      </span>
    </div>
  );
}

function ProjectLinksRow({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: () => void;
}) {
  return (
    // Links must not bubble to the card's open-modal click handler.
    <div
      className="flex flex-wrap items-center gap-2.5"
      onClick={(e) => e.stopPropagation()}
    >
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className={buttonVariants({ variant: "primary", size: "sm" })}
        >
          <Images className="size-3.5" aria-hidden />
          View Details
        </button>
      ) : null}
      {project.links.demo ? (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Live Demo
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      ) : null}
      {project.links.github ? (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <SiGithub className="size-3.5" aria-hidden />
          GitHub
        </a>
      ) : null}
      {project.links.caseStudy && !onOpen ? (
        <a
          href={project.links.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Case Study
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      ) : null}
    </div>
  );
}

/** Shared card-level interaction: click/Enter anywhere opens the modal. */
function cardInteraction(onOpen?: () => void) {
  if (!onOpen) return {};
  return {
    role: "button" as const,
    tabIndex: 0,
    onClick: onOpen,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen();
      }
    },
  };
}

export function FeaturedProjectCard({
  project,
  flip = false,
  onOpen,
}: {
  project: Project;
  flip?: boolean;
  onOpen?: () => void;
}) {
  return (
    <Card
      {...cardInteraction(onOpen)}
      className={cn(
        "group grid overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-indigo-500/5 md:grid-cols-2",
        onOpen && "cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
      )}
    >
      <ProjectVisual
        project={project}
        className={cn(
          "aspect-[16/10] w-full md:aspect-auto md:min-h-full",
          flip && "md:order-last"
        )}
      />
      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li
              key={highlight.slice(0, 40)}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <Badge key={metric.label} variant="success" size="md">
              <span className="font-semibold">{metric.value}</span> {metric.label}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <ProjectLinksRow project={project} onOpen={onOpen} />
        </div>
      </div>
    </Card>
  );
}

export function CompactProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: () => void;
}) {
  return (
    <Card
      {...cardInteraction(onOpen)}
      className={cn(
        "group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-indigo-500/5",
        onOpen && "cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
      )}
    >
      <ProjectVisual project={project} className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.stack.length > 4 ? (
            <Badge variant="outline">+{project.stack.length - 4}</Badge>
          ) : null}
        </div>
        <div className="mt-5 border-t border-border pt-5">
          <ProjectLinksRow project={project} onOpen={onOpen} />
        </div>
      </div>
    </Card>
  );
}
