"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion";
import { GradientBorderCard } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
      <Reveal>
        <GradientBorderCard>
          <div className="relative overflow-hidden rounded-[calc(1rem-1px)] p-10 text-center sm:p-16">
            <div
              className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
              aria-hidden
            />
            <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have an ambitious product to ship?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              I’m open to opportunities — enterprise platforms, multi-tenant SaaS,
              and AI-integrated products. Let’s talk about what you’re building.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Start a conversation
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Magnetic>
              <a
                href={`mailto:${site.email}`}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Mail className="size-4" aria-hidden />
                {site.email}
              </a>
            </div>
          </div>
        </GradientBorderCard>
      </Reveal>
    </section>
  );
}
