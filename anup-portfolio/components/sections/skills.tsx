"use client";

import {
  Bot,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiClaude,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSap,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skillCategories, type CategoryIcon } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Card } from "@/components/ui/card";

const categoryIcons: Record<CategoryIcon, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  cloud: Cloud,
  bot: Bot,
};

const techIcons: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  dart: SiDart,
  cpp: SiCplusplus,
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  mui: SiMui,
  flutter: SiFlutter,
  nestjs: SiNestjs,
  node: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  redis: SiRedis,
  gcloud: SiGooglecloud,
  sap: SiSap,
  docker: SiDocker,
  nginx: SiNginx,
  jest: SiJest,
  postman: SiPostman,
  swagger: SiSwagger,
  gemini: SiGooglegemini,
  claude: SiClaude,
  git: SiGit,
  linux: SiLinux,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack, cloud-native toolkit"
        description="The technology ecosystem I work in daily — from typed frontends to production cloud infrastructure."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const CategoryIconComponent = categoryIcons[category.icon];
          return (
            <StaggerItem key={category.title}>
              <Card className="group h-full p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <CategoryIconComponent className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const TechIcon = skill.icon ? techIcons[skill.icon] : undefined;
                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {TechIcon ? (
                          <TechIcon className="size-3.5" aria-hidden />
                        ) : (
                          <Sparkles className="size-3 opacity-50" aria-hidden />
                        )}
                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
