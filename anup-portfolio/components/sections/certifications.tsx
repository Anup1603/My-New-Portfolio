"use client";

import { ExternalLink } from "lucide-react";
import { SiGooglecloud } from "react-icons/si";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { GradientBorderCard } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-border bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Google Cloud, certified four times over"
          description="Architecture, machine learning, databases, and cloud engineering — validated while shipping on GCP in production."
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1}>
              <GradientBorderCard className="h-full">
                <div className="flex h-full flex-col p-8">
                  <div className="flex items-start justify-between">
                    <span className="aurora-gradient flex size-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-indigo-500/25">
                      <SiGooglecloud className="size-7" aria-hidden />
                    </span>
                    <Badge
                      variant={cert.level === "Professional" ? "primary" : "cyan"}
                    >
                      {cert.level}
                    </Badge>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      Verify credential
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </div>
              </GradientBorderCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
