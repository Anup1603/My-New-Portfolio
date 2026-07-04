"use client";

import { Quote, UserRound } from "lucide-react";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  if (!site.showTestimonials) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Testimonials"
        title="Words from collaborators"
        description="Real feedback from clients and teammates will live here soon."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <StaggerItem key={`${testimonial.name}-${i}`}>
            <Card className="flex h-full flex-col p-6">
              <Quote className="size-6 text-primary/40" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-elevated text-muted-foreground">
                  <UserRound className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{testimonial.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                {testimonial.placeholder ? (
                  <Badge variant="outline" className="ml-auto shrink-0">
                    Reserved
                  </Badge>
                ) : null}
              </figcaption>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
