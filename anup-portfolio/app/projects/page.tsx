import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI platforms, multi-tenant SaaS, and enterprise systems built with NestJS, Next.js, and Google Cloud.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="aurora-text text-xs font-semibold uppercase tracking-[0.2em]">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything I’ve shipped
        </h1>
        <p className="mt-4 text-muted-foreground">
          Filter by technology or search across the stack — from AI content
          platforms to production healthcare systems.
        </p>
      </div>
      <ProjectsExplorer />
    </div>
  );
}
