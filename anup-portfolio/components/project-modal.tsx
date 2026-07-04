"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const count = project.images.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:bg-elevated hover:text-foreground"
        >
          <X className="size-4" aria-hidden />
        </button>

        <div className="overflow-y-auto">
          {/* Gallery */}
          <div className="relative aspect-video w-full shrink-0 bg-elevated">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={project.images[index]}
              src={project.images[index]}
              alt={`${project.title} — screenshot ${index + 1} of ${count}`}
              className="h-full w-full object-cover"
            />
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Screenshot ${i + 1}`}
                      aria-current={i === index}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === index
                          ? "w-6 bg-primary"
                          : "w-3 bg-foreground/30 hover:bg-foreground/50"
                      )}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {/* Thumbnails */}
          {count > 1 ? (
            <div className="flex gap-2.5 border-b border-border px-6 py-3">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={cn(
                    "aspect-video w-20 shrink-0 overflow-hidden rounded-lg border transition-all",
                    i === index
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border opacity-60 hover:opacity-100"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.professional ? (
                <Badge variant="violet">Professional Work</Badge>
              ) : (
                <Badge variant="cyan">Personal Project</Badge>
              )}
              {project.metrics.map((metric) => (
                <Badge key={metric.label} variant="success">
                  <span className="font-semibold">{metric.value}</span>{" "}
                  {metric.label}
                </Badge>
              ))}
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-primary">
              {project.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Key highlights
            </h3>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 40)}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-success"
                    aria-hidden
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tech stack
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-border pt-6">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "primary", size: "sm" })}
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
              {project.links.caseStudy ? (
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
