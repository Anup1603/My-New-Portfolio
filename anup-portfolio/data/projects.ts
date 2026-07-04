export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  links: ProjectLinks;
  featured: boolean;
  professional?: boolean;
  /** Optional real screenshot in /public/images/projects — falls back to a gradient placeholder. */
  image?: string;
  /**
   * Gallery shown in the project detail modal. Currently branded mock-UI
   * placeholders — swap for real screenshots in /public/images/projects/<slug>/.
   */
  images: string[];
  /** Tailwind gradient classes for the placeholder artwork. */
  gradient: string;
  monogram: string;
}

export const projects: Project[] = [
  {
    slug: "ai-linkedin-content-assistant",
    title: "AI-Powered LinkedIn Content Assistant",
    tagline: "Generate, edit, schedule, and publish — from one knowledge base.",
    description:
      "Full-stack AI content platform to generate, edit, schedule, and publish LinkedIn content from a centralized knowledge base, with a provider-agnostic AI abstraction layer (Registry Pattern) integrating multiple LLM providers.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Gemini AI", "Docker"],
    highlights: [
      "Cut content-drafting time by ~70% with knowledge-base-driven generation",
      "Provider-agnostic AI layer (Gemini, with OpenAI/Claude support) — new-provider integration went from days to hours",
      "TipTap rich-text editor, drag-and-drop media, visual image/carousel designer, FullCalendar scheduling dashboard",
      "Dockerized services, scalable REST APIs, Swagger documentation",
    ],
    metrics: [
      { value: "~70%", label: "drafting time saved" },
      { value: "Hours", label: "to add an LLM provider" },
    ],
    links: { demo: "#", github: "#", caseStudy: "#" },
    featured: true,
    image: "/images/projects/ai-linkedin-content-assistant/shot-1.svg",
    images: [
      "/images/projects/ai-linkedin-content-assistant/shot-1.svg",
      "/images/projects/ai-linkedin-content-assistant/shot-2.svg",
      "/images/projects/ai-linkedin-content-assistant/shot-3.svg",
    ],
    gradient: "from-indigo-500/40 via-violet-500/30 to-cyan-400/30",
    monogram: "AI",
  },
  {
    slug: "multi-tenant-invoice-platform",
    title: "Multi-Tenant Invoice Generation Platform",
    tagline: "Strict tenant isolation. GST-compliant. Real-time.",
    description:
      "Production invoicing platform with strict tenant data isolation, GST-compliant PDF generation, and real-time WebSocket updates — onboarded 10+ client companies through an admin dashboard.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "WebSockets", "Docker", "GCP"],
    highlights: [
      "Strict tenant data isolation enforced at the service and data layers",
      "GST-compliant PDF generation pipeline",
      "Real-time updates over WebSockets",
      "10+ client companies onboarded via the admin dashboard",
    ],
    metrics: [
      { value: "10+", label: "companies onboarded" },
      { value: "100%", label: "tenant data isolation" },
    ],
    links: { demo: "#", github: "#", caseStudy: "#" },
    featured: true,
    professional: true,
    image: "/images/projects/multi-tenant-invoice-platform/shot-1.svg",
    images: [
      "/images/projects/multi-tenant-invoice-platform/shot-1.svg",
      "/images/projects/multi-tenant-invoice-platform/shot-2.svg",
      "/images/projects/multi-tenant-invoice-platform/shot-3.svg",
    ],
    gradient: "from-cyan-400/40 via-indigo-500/30 to-violet-500/30",
    monogram: "IN",
  },
  {
    slug: "hospital-visitor-tracking",
    title: "Hospital Visitor Tracking System",
    tagline: "End-to-end architecture for healthcare operations.",
    description:
      "End-to-end architecture of a visitor tracking system for a hospital environment — robust SQL data layer with an optimized GCP deployment that cut core transaction latency by 300ms.",
    stack: ["NestJS", "Next.js", "Prisma", "GCP"],
    highlights: [
      "Owned architecture end-to-end: API design, data modeling, deployment",
      "Robust SQL data layer built on Prisma",
      "GCP deployment optimization cut core transaction latency by 300ms",
    ],
    metrics: [
      { value: "300ms", label: "latency reduction" },
      { value: "E2E", label: "architecture ownership" },
    ],
    links: { demo: "#", github: "#", caseStudy: "#" },
    featured: true,
    professional: true,
    image: "/images/projects/hospital-visitor-tracking/shot-1.svg",
    images: [
      "/images/projects/hospital-visitor-tracking/shot-1.svg",
      "/images/projects/hospital-visitor-tracking/shot-2.svg",
      "/images/projects/hospital-visitor-tracking/shot-3.svg",
    ],
    gradient: "from-violet-500/40 via-indigo-500/30 to-cyan-400/30",
    monogram: "HV",
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.stack))
).sort();
