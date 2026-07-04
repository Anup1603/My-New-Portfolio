"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Globe, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/site";

const pages = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Stub — wire to a newsletter provider (Resend, Buttondown, Mailchimp).
    setSubscribed(true);
  }

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 sm:gap-10 lg:grid-cols-4">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 font-semibold">
            <span className="aurora-gradient flex size-8 items-center justify-center rounded-lg text-sm font-bold text-white">
              A
            </span>
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.shortBio}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {site.location}
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-sm font-semibold">Pages</h3>
          <ul className="mt-4 space-y-2.5">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {page.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden /> Email
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4" aria-hidden /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <SiGithub className="size-4" aria-hidden /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaLinkedin className="size-4" aria-hidden /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <SiLeetcode className="size-4" aria-hidden /> LeetCode
              </a>
            </li>
            <li>
              <a
                href={site.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="size-4" aria-hidden /> {site.company.name}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-sm font-semibold">Stay in the loop</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Occasional notes on engineering, cloud, and AI. No spam.
          </p>
          {subscribed ? (
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-2.5 text-sm text-success">
              <Check className="size-4" aria-hidden />
              Subscribed — thank you!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-10 w-full min-w-0 rounded-xl border border-border bg-elevated/60 px-3.5 text-sm placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
              >
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left sm:text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p>
            Developed & designed by{" "}
            <a
              href="https://www.linkedin.com/in/anupkumarshaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold transition-colors hover:text-primary"
            >
              {site.name}💖
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
