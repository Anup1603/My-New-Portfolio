# Anup Kumar Shaw — Portfolio

Premium multi-page portfolio built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · MDX**. Dark-first "Obsidian Aurora" design system with a working light-mode toggle.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit content

All content lives in typed data files and MDX — no component changes needed:

| What | Where |
|---|---|
| Name, roles, email, socials, GitHub username, availability | `data/site.ts` |
| Hero stats & floating badges | `data/site.ts` |
| Journey timeline & current focus | `data/timeline.ts` |
| Work experience & impact metrics | `data/experience.ts` |
| Skill categories | `data/skills.ts` |
| Projects (all pages) | `data/projects.ts` |
| Certifications & verify links | `data/certifications.ts` |
| Testimonials | `data/testimonials.ts` |
| Blog articles | `content/blog/*.mdx` |

### Add a project

Append an object to `data/projects.ts`. Set `featured: true` to pin it on the home page and at the top of `/projects`. Add a screenshot to `public/images/projects/` and set its path as `image` to replace the gradient placeholder.

### Add a blog post

Create `content/blog/<slug>.mdx` with this frontmatter (all fields required):

```yaml
---
title: "Post title"
slug: "post-slug"            # must match the filename
date: "2026-07-01"
category: "Engineering"      # Tech News | Startups | Engineering
excerpt: "One-sentence hook shown on cards."
coverImage: "https://picsum.photos/seed/post-slug/1200/630"
readingTime: "6 min read"
---
```

The index, article page, TOC, related posts, sitemap, and OpenGraph tags all pick it up automatically.

### Add a testimonial

Replace a placeholder entry in `data/testimonials.ts` (remove its `placeholder: true`). Hide the whole section with `showTestimonials: false` in `data/site.ts`.

## Placeholders to replace

- `public/images/profile.svg` → add `public/images/profile.jpg` and update `profileImage` in `data/site.ts`
- `public/resume.pdf` → replace with the real resume (all "Download Resume" buttons point here)
- Social URLs (`#`) and `githubUsername` in `data/site.ts`
- Certification `verifyUrl` (`#`) in `data/certifications.ts` → real Credly links
- Project `links` (`#`) in `data/projects.ts`
- `url` in `data/site.ts` → production domain (used by sitemap, robots, OpenGraph)
- Contact form delivery → wire `app/api/contact/route.ts` to Resend/Formspree/Nodemailer

## Structure

```
app/                 # routes: / , /projects , /blog , /blog/[slug] , /contact
  api/contact/       # contact form endpoint (stub)
  sitemap.ts         # includes all blog posts
  robots.ts
  opengraph-image.tsx
components/
  sections/          # home page sections (hero, journey, experience, …)
  blog/              # blog explorer, post card, TOC, share, MDX components
  ui/                # button, card, badge, input, textarea (shadcn-style)
content/blog/        # 10 MDX articles
data/                # single source of truth for all site content
lib/                 # blog loader, utils
```

## Deploying to Vercel

Push to GitHub → import in Vercel → deploy (zero config). Then set `url` in `data/site.ts` to the production domain and redeploy.
