"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="aurora-gradient flex size-8 items-center justify-center rounded-lg text-sm font-bold text-white">
            A
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        {/* Desktop links — on smaller screens the bottom app nav takes over */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "relative z-10 rounded-full px-4 py-2 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-elevated"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            download
            aria-label="Download resume"
            className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground sm:px-4"
          >
            <FileDown className="size-4" aria-hidden />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex size-9 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm transition-opacity hover:opacity-85"
          >
            <FaLinkedin className="size-4" aria-hidden />
          </a>
        </div>
      </nav>
    </header>
  );
}
