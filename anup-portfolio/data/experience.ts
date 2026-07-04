export interface ExperienceMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  metrics: ExperienceMetric[];
}

export const experience: Experience[] = [
  {
    company: "Anocloud",
    role: "Software Developer",
    location: "Jamshedpur, India",
    period: "August 2024 – Present",
    current: true,
    summary:
      "Building multi-tenant SaaS platforms, POS/SAP synchronization pipelines, and AI-integrated products for retail, healthcare, and finance clients.",
    bullets: [
      "Built POS↔SAP synchronization workflows handling 5,000+ daily records across billing, invoices, warehouse, inventory, and sales — validation and error handling reduced sync failures by ~40%.",
      "Developed secure backend modules and admin-portal features (NestJS, Prisma, SQL) powering sync monitoring, role-based access, and Flutter mobile integration for a production retail client platform.",
      "Spearheaded end-to-end architecture of a Hospital Visitor Tracking System (NestJS, Next.js, Prisma); optimized the GCP deployment, reducing core transaction latency by 300ms.",
      "Designed and deployed a multi-tenant Invoice Generation Platform with strict tenant data isolation, GST-compliant PDF generation, and real-time WebSocket updates — onboarded 10+ client companies.",
      "Strengthened security and delivery with granular RBAC, OTP authentication, Dockerized deployments, Nginx reverse proxies, SSL, and CI/CD on GCP — cut deployment time by ~60%.",
      "Applied AI-assisted engineering workflows (ChatGPT, Claude, Codex, custom agents) for debugging, code review, documentation, test-case generation, and security edge-case analysis under manual production review.",
    ],
    metrics: [
      { value: 5000, suffix: "+", label: "daily records synced" },
      { value: 40, prefix: "~", suffix: "%", label: "fewer sync failures" },
      { value: 300, suffix: "ms", label: "latency reduction" },
      { value: 10, suffix: "+", label: "clients onboarded" },
      { value: 60, prefix: "~", suffix: "%", label: "faster deployments" },
    ],
  },
];
