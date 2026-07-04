"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { FeaturedProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { buttonVariants } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Systems that carry production traffic"
        description="AI platforms, multi-tenant SaaS, and healthcare systems — built end-to-end and shipped to real users."
      />

      <div className="space-y-8">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <FeaturedProjectCard
              project={project}
              flip={i % 2 === 1}
              onOpen={() => setSelected(project)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href="/projects"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          View all projects
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Reveal>

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
