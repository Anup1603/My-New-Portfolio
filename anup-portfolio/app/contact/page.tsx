import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — open to opportunities in full-stack, cloud, and AI engineering.`,
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: site.social.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Read the code",
    href: site.social.github,
    icon: SiGithub,
    external: true,
  },
  {
    label: "LeetCode",
    value: "Problem-solving profile",
    href: site.social.leetcode,
    icon: SiLeetcode,
    external: true,
  },
  {
    label: site.company.name,
    value: "Where I build things",
    href: site.company.url,
    icon: Globe,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — headline + channels */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-success">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {site.availability}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s build something
            <span className="aurora-text"> worth shipping</span>
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Whether it’s an enterprise platform, a multi-tenant SaaS, or an
            AI-integrated product — I’d love to hear about it. I usually reply
            within a day or two.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-elevated"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <channel.icon className="size-4.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{channel.label}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {channel.value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {site.location} · IST (UTC+5:30)
          </p>
        </div>

        {/* Right — form */}
        <Card className="h-fit p-6 sm:p-10">
          <h2 className="text-lg font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the form and it lands straight in my inbox.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Card>
      </div>
    </div>
  );
}
