export type CategoryIcon = "code" | "layout" | "server" | "database" | "cloud" | "bot";

export interface Skill {
  name: string;
  /** Key into the icon map in components/sections/skills-section.tsx */
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: CategoryIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "Dart", icon: "dart" },
      { name: "Java" },
      { name: "C/C++", icon: "cpp" },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: "layout",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui" },
      { name: "Material UI", icon: "mui" },
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react" },
    ],
  },
  {
    title: "Backend & Architecture",
    icon: "server",
    skills: [
      { name: "NestJS", icon: "nestjs" },
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "RESTful APIs" },
      { name: "WebSockets" },
      { name: "SOA" },
      { name: "RBAC" },
      { name: "JWT/OTP Authentication" },
    ],
  },
  {
    title: "Databases & Integrations",
    icon: "database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "Redis", icon: "redis" },
      { name: "Google Cloud SQL", icon: "gcloud" },
      { name: "POS Sync" },
      { name: "SAP Sync", icon: "sap" },
    ],
  },
  {
    title: "Cloud, DevOps & QA",
    icon: "cloud",
    skills: [
      { name: "GCP", icon: "gcloud" },
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "CI/CD Pipelines" },
      { name: "Compute Engine", icon: "gcloud" },
      { name: "Cloud Storage", icon: "gcloud" },
      { name: "AWS S3" },
      { name: "SSL" },
      { name: "Jest", icon: "jest" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger", icon: "swagger" },
    ],
  },
  {
    title: "AI & Tools",
    icon: "bot",
    skills: [
      { name: "LLM API Integration (Gemini)", icon: "gemini" },
      { name: "Provider-Agnostic AI Layers" },
      { name: "ChatGPT/Claude/Codex Agents", icon: "claude" },
      { name: "Prompt-Driven Debugging" },
      { name: "Test-Case Generation" },
      { name: "Git", icon: "git" },
      { name: "Linux/Shell", icon: "linux" },
    ],
  },
];
