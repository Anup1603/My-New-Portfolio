export type MilestoneIcon = "graduation" | "briefcase" | "badge" | "award" | "rocket";

export interface Milestone {
  date: string;
  title: string;
  org?: string;
  description: string;
  icon: MilestoneIcon;
  current?: boolean;
}

export const timeline: Milestone[] = [
  {
    date: "July 2024",
    title: "B.Tech in Information Technology",
    org: "RCC Institute of Information Technology, Kolkata",
    description: "Graduated with a CGPA of 8.52/10.",
    icon: "graduation",
  },
  {
    date: "August 2024",
    title: "Software Developer at Anocloud",
    org: "Anocloud · Jamshedpur, India",
    description:
      "Joined as a Software Developer, building production systems for enterprise retail clients from day one.",
    icon: "briefcase",
  },
  {
    date: "2024",
    title: "Associate Cloud Engineer",
    org: "Google Cloud Certified",
    description:
      "Validated hands-on skills across GCP compute, networking, storage, and deployment fundamentals.",
    icon: "badge",
  },
  {
    date: "2025",
    title: "Professional Cloud Database Engineer",
    org: "Google Cloud Certified",
    description:
      "Professional-level certification in designing, managing, and optimizing cloud database systems.",
    icon: "award",
  },
  {
    date: "2026",
    title: "Professional Cloud Architect & Professional ML Engineer",
    org: "Google Cloud Certified",
    description:
      "Two more professional-level certifications — cloud architecture and productionizing machine learning on Google Cloud.",
    icon: "award",
  },
  {
    date: "Now",
    title: "Multi-tenant SaaS & AI-integrated products",
    description:
      "Building multi-tenant SaaS platforms and AI/LLM-integrated products across retail, healthcare, and finance.",
    icon: "rocket",
    current: true,
  },
];

export const currentFocus = [
  "Secure multi-tenant backends",
  "POS/SAP synchronization",
  "RBAC systems",
  "AI/LLM-integrated platforms",
];
