"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import {
  SiDocker,
  SiGooglecloud,
  SiGooglegemini,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { StatCounter } from "@/components/stat-counter";
import { ParticleField } from "@/components/particle-field";

const badgeIcons: Record<string, IconType> = {
  NestJS: SiNestjs,
  "Next.js": SiNextdotjs,
  GCP: SiGooglecloud,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  "Gemini AI": SiGooglegemini,
};

const badgePositions = [
  "left-[-14%] top-[6%]",
  "right-[-12%] top-[16%]",
  "left-[-20%] top-[42%]",
  "right-[-18%] top-[52%]",
  "left-[-10%] bottom-[14%]",
  "right-[-8%] bottom-[4%]",
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((v) => (v + 1) % site.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.6em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="whitespace-nowrap font-medium text-primary"
        >
          {site.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const words = site.headline.split(" ");

  return (
    <section className="relative overflow-hidden">
      {/* Aurora gradient mesh + dot grid + particle constellation background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="dot-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]" />
        <ParticleField className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
        <motion.div
          className="absolute -top-32 left-1/4 size-[480px] rounded-full bg-primary/20 blur-[140px]"
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-16 right-1/5 size-[380px] rounded-full bg-accent-violet/15 blur-[130px]"
          animate={{ x: [0, -32, 0], y: [0, 32, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-64 left-1/2 size-[320px] rounded-full bg-accent-cyan/10 blur-[120px]"
          animate={{ x: [0, 28, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {site.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
              <BadgeCheck className="size-3.5" aria-hidden />
              4× Google Cloud Certified
            </span>
          </motion.div>

          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.05 }}
                className={cn(
                  "inline-block",
                  word === "AI-Powered" && "aurora-text"
                )}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            <span className="font-semibold text-foreground">{site.name}</span>
            <span className="mx-2 text-border">·</span>
            <RoleRotator />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="mt-4 max-w-xl leading-relaxed text-muted-foreground"
          >
            I ship multi-tenant SaaS to 10+ enterprise clients on NestJS, Next.js,
            and GCP — secure backends, POS/SAP synchronization, and AI/LLM-integrated
            platforms across retail, healthcare, and finance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                <FaLinkedin className="size-4" aria-hidden />
                Connect on LinkedIn
              </a>
            </Magnetic>
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.85 }}
            className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {site.heroStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="text-left"
              />
            ))}
          </motion.div>
        </div>

        {/* Portrait with floating tech badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative mx-auto w-60 sm:w-72 md:w-80"
        >
          <div
            className="aurora-gradient absolute -inset-8 rounded-full opacity-25 blur-3xl"
            aria-hidden
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-card">
            {/* Plain img on purpose: next/image's responsive srcset re-selects
                (aborting loads) while the entrance scale animation runs. The
                source file is already optimized (~130 KB, 900px wide). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {site.heroBadges.map((badge, i) => {
            const Icon = badgeIcons[badge];
            return (
              <motion.span
                key={badge}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className={cn(
                  "absolute hidden items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md md:inline-flex",
                  badgePositions[i]
                )}
              >
                {Icon ? <Icon className="size-3.5 text-primary" aria-hidden /> : null}
                {badge}
              </motion.span>
            );
          })}

          <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-medium shadow-xl">
            <SiGooglecloud className="size-4 text-primary" aria-hidden />
            Google Cloud Certified ×4
          </span>
        </motion.div>
      </div>
    </section>
  );
}
