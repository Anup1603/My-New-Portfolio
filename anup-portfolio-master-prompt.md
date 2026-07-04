# Master Prompt — Premium Portfolio Website for Anup Kumar Shaw

> **How to use:** Paste this entire prompt into your AI tool (Claude, ChatGPT, v0, Cursor, Bolt, Lovable, etc.). It contains the complete design brief, technical requirements, and all real résumé data. The AI must use ONLY the data provided here — it must never invent metrics, companies, projects, or testimonials.

---

## 1. Role & Objective

Act as a world-class **Senior Product Designer + Staff Frontend Engineer** who has shipped marketing sites for Vercel, Linear, Stripe, and Raycast.

Build a **complete, production-ready, multi-page personal portfolio website** for **Anup Kumar Shaw** — Full-Stack Developer, Cloud Engineer, and AI Application Builder.

The site must communicate: **"Enterprise-grade engineering combined with modern AI innovation."**

It should impress recruiters, startup founders, enterprise companies, and high-value clients **within the first 10 seconds**.

---

## 2. Technology Stack (Mandatory)

- **Framework:** Next.js 14+ (App Router, TypeScript, Server Components where appropriate)
- **Styling:** Tailwind CSS (+ CSS variables for theming)
- **UI Components:** shadcn/ui as the base component layer
- **Animations:** Framer Motion (scroll-triggered reveals, page transitions, hover micro-interactions)
- **Icons:** Lucide + Simple Icons (for technology logos)
- **Fonts:** Geist (primary) with Inter as fallback, loaded via `next/font`
- **Theme:** Dark mode FIRST (default), with a working light-mode toggle (`next-themes`)
- **Content:** All page content stored in typed data files (`/data/*.ts`) so text/projects can be edited without touching components
- **Deployment target:** Vercel (include SEO metadata, OpenGraph tags, sitemap, favicon setup)

Code quality requirements: fully responsive (mobile → ultra-wide), accessible (semantic HTML, focus states, ARIA where needed), Lighthouse-friendly (lazy-loaded images, minimal layout shift), clean folder structure, no dead code.

---

## 3. Site Structure (Multi-Page)

| Route | Purpose |
|---|---|
| `/` | Home — Hero, About/Journey, Experience, Skills, Certifications, Featured Projects, GitHub Activity, Testimonials (placeholder), Contact CTA |
| `/projects` | All projects with filtering by technology + search |
| `/blog` | Fully populated blog — 10 complete, professionally written articles (see Section 5.10) with cover images, categories, search, and individual article pages |
| `/blog/[slug]` | Individual article page with premium reading experience |
| `/contact` | Contact form + social links + availability status |

Global: sticky glassmorphic navbar with active-link indicator, smooth page transitions, premium footer on every page.

---

## 4. Design System

### Colors — "Obsidian Aurora" System (use exactly this)
**Dark mode (default):**
- Background: Obsidian `#0A0A0F`
- Surfaces: `#12121A` (cards), `#1A1A24` (elevated/hover)
- Borders: `rgba(255,255,255,0.08)` hairlines; on hover, borders glow faintly with the accent
- Text: `#FAFAFA` (primary), `#A1A1AA` (secondary/muted)
- **Primary accent:** Electric Indigo `#6366F1`
- **Secondary accent:** Cyan `#22D3EE`
- **Tertiary accent:** Soft Violet `#A78BFA`
- **Metric/success highlight:** Emerald `#34D399` (used ONLY for impact numbers like "300ms" and "10+ clients")
- **Aurora gradient** (Indigo → Violet → Cyan): reserved for the hero background mesh, primary CTA button, and small "eyebrow" section labels. Nowhere else.

**Light mode (toggle):** Warm paper `#FAFAF9` background, `#FFFFFF` cards with soft shadows, `#0A0A0F` text, same accents deepened one shade for contrast.

**Texture & depth:** Apply a very subtle film-grain/noise overlay (~3% opacity) on dark backgrounds, soft accent glow behind key elements (hero portrait, featured project card), and thin gradient borders on featured cards. This creates the "next-generation" premium feel — depth through light, not through color quantity.

Rule: 90% of the interface is neutral obsidian/slate; accents appear only where attention should go. Never use more than one gradient element per viewport.

### Aesthetic
Premium, futuristic, minimal, sophisticated — inspired by **Vercel, Stripe, Linear, Framer, Raycast, Supabase, Notion, Apple product pages**.

Layout characteristics: generous whitespace, strong hierarchy, glassmorphism accents, floating cards, subtle shadows, rounded corners (`rounded-2xl`), clean grids.

Strictly avoid: generic portfolio templates, clutter, rainbow color chaos, cheap-looking UI, progress-bar skill meters.

### Micro-interactions
Smooth scrolling, hover elevation on cards, magnetic buttons on primary CTAs, scroll-triggered section reveals, subtle particle/gradient-mesh animation in the hero, loading states, purposeful (never excessive) motion. Respect `prefers-reduced-motion`.

---

## 5. Page-by-Page Specification

### 5.1 Home — Hero Section (must be breathtaking)
- Animated headline: **"Building Enterprise-Grade Software & AI-Powered Digital Experiences"**
- Name: **Anup Kumar Shaw** with role rotation/designation: *Full-Stack Developer · Cloud Engineer · AI Application Builder · Multi-Tenant SaaS Architect*
- Short value proposition (1–2 lines) drawn from the summary in Section 6
- Professional portrait/avatar → use placeholder `/public/images/profile.jpg` (I will replace it)
- CTAs: **View Projects** (primary, gradient), **Download Resume** (links to `/resume.pdf` in `/public`), **Contact Me**
- Floating technology badges (NestJS, Next.js, GCP, PostgreSQL, Docker, Gemini AI)
- Google Cloud certification badge highlight
- Animated stat counters: `10+ Enterprise Clients` · `5,000+ Daily Records Processed` · `300ms Latency Reduced` · `2× Google Cloud Certified`
- Subtle animated background (particles or gradient mesh) — elegant, not noisy

### 5.2 Home — About / Journey
Visual storytelling, NOT text blocks. Interactive vertical timeline combining education → certifications → career milestones:
1. **July 2024** — B.Tech in Information Technology, RCC Institute of Information Technology, Kolkata (CGPA 8.52/10)
2. **August 2024** — Joined Anocloud as Software Developer
3. **2024** — Google Cloud Certified: Associate Cloud Engineer
4. **2025** — Google Cloud Certified: Professional Cloud Database Engineer
5. **Now** — Building multi-tenant SaaS platforms and AI/LLM-integrated products across retail, healthcare, and finance

Include a "Current Focus" card: secure multi-tenant backends, POS/SAP synchronization, RBAC systems, AI/LLM-integrated platforms.

### 5.3 Home — Experience
Elegant expandable timeline card for:

**Anocloud — Software Developer** · Jamshedpur, India · *August 2024 – Present*
- Built POS↔SAP synchronization workflows handling **5,000+ daily records** across billing, invoices, warehouse, inventory, and sales — validation and error handling reduced sync failures by **~40%**
- Developed secure backend modules and admin-portal features (NestJS, Prisma, SQL) powering sync monitoring, role-based access, and Flutter mobile integration for a production retail client platform
- Spearheaded end-to-end architecture of a **Hospital Visitor Tracking System** (NestJS, Next.js, Prisma); optimized the GCP deployment, reducing core transaction latency by **300ms**
- Designed and deployed a **multi-tenant Invoice Generation Platform** with strict tenant data isolation, GST-compliant PDF generation, and real-time WebSocket updates — onboarded **10+ client companies**
- Strengthened security and delivery with granular RBAC, OTP authentication, Dockerized deployments, Nginx reverse proxies, SSL, and CI/CD on GCP — cut deployment time by **~60%**
- Applied AI-assisted engineering workflows (ChatGPT, Claude, Codex, custom agents) for debugging, code review, documentation, test-case generation, and security edge-case analysis under manual production review

Impact metrics (5,000+, ~40%, 300ms, 10+, ~60%) must be visualized as animated stat highlights, not buried in bullet text.

### 5.4 Home — Skills
NO progress bars. Use category-based interactive panels or a technology ecosystem map with recognizable icons and premium hover states:
- **Languages:** TypeScript, JavaScript (ES6+), Dart, Java, C/C++
- **Frontend & Mobile:** React.js, Next.js, Redux Toolkit, Tailwind CSS, shadcn/ui, Material UI, Flutter, React Native
- **Backend & Architecture:** NestJS, Node.js, Express.js, RESTful APIs, WebSockets, SOA, RBAC, JWT/OTP Authentication
- **Databases & Integrations:** PostgreSQL, MySQL, MongoDB, Prisma ORM, Redis, Google Cloud SQL, POS Sync, SAP Sync
- **Cloud, DevOps & QA:** GCP, Docker, Nginx, CI/CD Pipelines, Compute Engine, Cloud Storage, AWS S3, SSL, Jest, Postman, Swagger
- **AI & Tools:** LLM API Integration (Gemini), Provider-Agnostic AI Layers, ChatGPT/Claude/Codex Agents, Prompt-Driven Debugging, Test-Case Generation, Git, Linux/Shell

### 5.5 Home — Certifications (prestigious treatment)
Two premium certification cards with Google Cloud branding emphasis, badge visual, year, and a "Verify" button (placeholder link `#` — I will add real Credly/verification URLs):
1. **Professional Cloud Database Engineer** — Google Cloud Certified, 2025
2. **Associate Cloud Engineer** — Google Cloud Certified, 2024

### 5.6 Home — Featured Projects (strongest section)
Large premium project cards with preview image placeholder, title, description, tech stack chips, key achievement metrics, and hover interactions. Buttons: **Live Demo**, **GitHub**, **Case Study** (placeholder links where unknown).

**Project 1 — AI-Powered LinkedIn Content Assistant**
*Stack: NestJS, Next.js, Prisma, PostgreSQL, Gemini AI, Docker*
- Full-stack AI content platform to generate, edit, schedule, and publish LinkedIn content from a centralized knowledge base — cut content-drafting time by **~70%**
- Provider-agnostic AI abstraction layer (Registry Pattern) integrating multiple LLM providers (Gemini, with OpenAI/Claude support) — reduced new-provider integration from days to hours
- Advanced authoring UX: TipTap rich-text editor, drag-and-drop media, visual image/carousel designer, FullCalendar scheduling dashboard
- Dockerized services, scalable REST APIs, Swagger documentation

**Project 2 — Multi-Tenant Invoice Generation Platform** *(professional work showcase)*
*Stack: NestJS, Prisma, PostgreSQL, WebSockets, Docker, GCP*
- Strict tenant data isolation, GST-compliant PDF generation, real-time updates, 10+ companies onboarded via admin dashboard

**Project 3 — Hospital Visitor Tracking System** *(professional work showcase)*
*Stack: NestJS, Next.js, Prisma, GCP*
- End-to-end architecture, robust SQL data layer, 300ms core transaction latency reduction

Structure project data in `/data/projects.ts` so more projects can be added easily.

### 5.7 `/projects` Page
All projects in a filterable grid — filter by technology tags + text search. Featured projects pinned at top. Empty-state design if a filter returns nothing.

### 5.8 Home — GitHub Activity
Visual developer showcase: contribution heatmap, repository stats, top languages. Implement with `react-github-calendar` (or equivalent) pointed at a configurable GitHub username variable. Elegant fallback UI if the API fails.

### 5.9 Home — Testimonials (placeholder, future-ready)
Build the full testimonial card carousel/grid component, but ship it with 2–3 clearly-marked placeholder entries (e.g., "Testimonial coming soon") styled tastefully, driven by `/data/testimonials.ts`. It must be trivially easy for me to swap in real testimonials later. Optionally hide the section behind a single boolean flag.

### 5.10 `/blog` — Fully Populated Blog (10 complete articles)

Build a REAL, living blog — Medium/Linear-blog quality. Not placeholders, not lorem ipsum: **write all 10 articles in full (800–1,200 words each)** as MDX files in `/content/blog/`, in a professional, insightful tone written from Anup's perspective as a working full-stack/cloud/AI engineer.

**Blog index page:** featured article hero (the newest post, large cover), category filter chips (`Tech News`, `Startups`, `Engineering`), search, post cards with cover image, category badge, publish date, reading time, and 2-line excerpt.

**Article page:** premium typography, cover image, table of contents (sticky on desktop), syntax-highlighted code blocks where relevant, author card (Anup Kumar Shaw), social share buttons, related articles, estimated reading time.

**Cover images:** every post gets a cover. Use `https://picsum.photos/seed/{post-slug}/1200/630` as high-quality photographic placeholders (or tasteful abstract gradient SVG covers matching the Obsidian Aurora palette), stored via a `coverImage` frontmatter field so I can swap in real images later.

**The 10 articles to write** (dates spread across May–July 2026, newest first):

*Category: Tech News (world of tech)*
1. **"Apple's 2027 Hardware Reset: New iPad Pro and a Redesigned MacBook Pro"** — analysis of Apple's reported 2027 roadmap and what it signals for the developer ecosystem.
2. **"The UK Just Passed One of the World's Toughest Social-Media Rules for Kids"** — what the new UK under-16 social media restrictions mean for product teams, age-verification tech, and compliance engineering.
3. **"Humanoid Robots Are Now Rentable — and Reality Is Setting In"** — commentary on China's humanoid-robot rental market exposing the gap between demos and dependable automation.

*Category: Startups*
4. **"Together AI's $800M Series C: AI Infrastructure Is Eating Venture Capital"** — breakdown of the July 2026 mega-round led by Aramco Ventures and why compute/inference infrastructure keeps attracting the largest checks.
5. **"Nearly 80% of Global Startup Funding Went to the US This Year — Here's Why That Matters"** — analysis of 2026's lopsided AI funding concentration (with most AI capital flowing to a handful of labs) and what it means for builders in India and emerging markets.
6. **"Proof Over Hype: How Fundraising Actually Works in 2026"** — practical take on the shift from AI buzzwords to traction, retention, and clean economics; what technical founders should demonstrate.

*Category: Engineering (Anup's own expertise — these double as portfolio proof)*
7. **"Designing Multi-Tenant SaaS: Lessons from Onboarding 10+ Enterprise Clients"** — tenant isolation strategies, RBAC design, and mistakes to avoid, grounded in real production experience.
8. **"POS ↔ SAP Sync at 5,000+ Records a Day: Validation, Retries, and Sleep"** — a war-story-style engineering post about building reliable data synchronization pipelines and cutting failures by ~40%.
9. **"AI-Assisted Engineering Without Breaking Trust: My Production Workflow"** — how to use LLM agents (ChatGPT/Claude/Codex) for debugging, code review, and test generation while keeping human review in the loop.
10. **"From Associate to Professional: What Google Cloud Certifications Actually Taught Me"** — honest reflection on the two GCP certification journeys and what transfers to real cloud work.

**Writing rules for these articles:** original commentary and analysis in Anup's voice — never copy text from news sources; state facts as of mid-2026; each post ends with a short takeaway section; Engineering posts include at least one code snippet; every post has frontmatter (`title`, `slug`, `date`, `category`, `excerpt`, `coverImage`, `readingTime`).

### 5.11 `/contact` Page
- Inviting headline + availability badge ("Open to opportunities")
- Contact form (name, email, message) with validation, loading, and success states — wire it to a simple API route stub or Formspree placeholder
- Direct channels: **Email:** anupshaw1603@gmail.com · **LinkedIn**, **GitHub**, **LeetCode** (placeholder URLs `#` — I will replace with real profile links)
- Location: Howrah, West Bengal, India

### 5.12 Footer (all pages)
Navigation links, resume download, social icons, mini newsletter input, copyright © Anup Kumar Shaw. Elegant and clean.

---

## 6. Canonical Personal Data (single source of truth — do NOT invent anything beyond this)

- **Name:** Anup Kumar Shaw
- **Location:** Howrah, West Bengal, India
- **Email:** anupshaw1603@gmail.com
- **Summary:** Full-Stack Developer (NestJS, Next.js, GCP) who has shipped multi-tenant SaaS to 10+ enterprise clients and cut core transaction latency by 300ms. Google Cloud–certified (Professional Cloud Database Engineer), specializing in secure multi-tenant backends, POS/SAP synchronization, RBAC, and AI/LLM-integrated platforms across retail, healthcare, and finance.
- **Education:** B.Tech, Information Technology — RCC Institute of Information Technology, Kolkata (July 2024), CGPA 8.52/10
- **Social:** LinkedIn, GitHub, LeetCode, Portfolio — use placeholder constants in `/data/site.ts`

---

## 7. Asset Placeholders (I will supply these later)

| Asset | Path | Instruction |
|---|---|---|
| Profile photo | `/public/images/profile.jpg` | Use a tasteful gradient-avatar placeholder until replaced |
| Resume PDF | `/public/resume.pdf` | Wire all "Download Resume" buttons here |
| Project screenshots | `/public/images/projects/*` | Use elegant gradient/mesh placeholder cards until replaced |
| Social URLs | `/data/site.ts` | Single config object: `github`, `linkedin`, `leetcode`, `githubUsername` |

---

## 8. Deliverables & Quality Bar

1. Complete Next.js project: all routes, all components, typed data files, theme toggle, animations
2. **All 10 blog articles fully written as MDX files** — no placeholders, no lorem ipsum
2. Clear folder structure with a short README (setup, where to edit content, how to add projects/blog posts/testimonials)
3. SEO: per-page metadata, OpenGraph/Twitter cards, sitemap, robots.txt
4. Fully responsive across mobile, tablet, desktop, ultra-wide
5. Accessible and performant (reduced-motion support, lazy images, semantic HTML)

**Final test:** The site must look like a premium SaaS product website — not a traditional developer portfolio — and pass the "10-second impression" test with recruiters, founders, and enterprise clients.

If any requirement is ambiguous, choose the more premium, more minimal option. Never fabricate data about Anup — every fact must trace back to Section 6 and Section 5's content.
