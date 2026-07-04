# How to Write a Blog Post

Every post is a single `.mdx` file in `content/blog/`. The folder is scanned
automatically — no CMS, no database, no wiring.

- **Local dev** (`npm run dev`): a new/edited post shows up on refresh.
- **Production**: posts are statically generated at build time, so a new post
  only appears on the live site **after you rebuild and redeploy**
  (`npm run build` → deploy). Committing the file alone isn't enough.

The authoritative, copy-ready starting point is
[`content/blog/_TEMPLATE.mdx`](content/blog/_TEMPLATE.mdx). This guide explains
the same rules in prose.

## Quick start

1. Copy `content/blog/_TEMPLATE.mdx` to `content/blog/<slug>.mdx`.
   The filename **must** equal the `slug` you set in the frontmatter.
   (Files starting with `_` are ignored, so the template never appears live.)
2. Fill in the frontmatter (see below).
3. Delete the instruction comment and replace the example body with your article.
4. Run `npm run dev` and open `http://localhost:3000/blog/<slug>` to check it.

## Frontmatter reference

The block between the `---` lines. All fields required except `sources`.

| Field | Rule |
|---|---|
| `title` | Page heading and card title. |
| `slug` | Lowercase-hyphens. **Must equal the filename** (`<slug>.mdx`), or the post 404s. |
| `date` | `YYYY-MM-DD`. Newest post is featured and sorted first. |
| `category` | **Exactly one of**: `Tech News`, `Startups`, `Engineering`, `Data Visualization`. |
| `excerpt` | 1–2 sentences for cards, search, and social previews. |
| `coverImage` | 1200×630. Local file preferred (see Images). |
| `readingTime` | e.g. `"5 min read"` — a rough estimate is fine. |
| `sources` | Optional list of `{ title, url }`; renders as a numbered "Sources & References" box at the end. Delete the block if unused. |

The category list lives in `lib/blog.ts` (and `blog-explorer.tsx` +
`post-card.tsx` for the chip and badge colour). To add a new category, update
all three — otherwise stick to the four above.

## The hard rules (these break posts)

1. **Filename = slug.** A mismatch 404s the post when clicked.
2. **`category` must match** one of the four allowed values exactly.
3. **Markdown only — no raw HTML tags or inline `style=` attributes.**
   Hand-written HTML loses its styling in MDX. Use the blocks below, or a
   registered component (see Embedding tools).
4. **Comments use the MDX form `{/* ... */}`, never `<!-- ... -->`.**
   The HTML comment form crashes the page.
5. **Cite your facts** — put every statistic, quote, or specific claim in `sources`.
6. **Start body sections at `##`.** The `#` H1 comes from the frontmatter title.

## Content blocks

All styled automatically — just write them:

- Headings: `## Section` and `### Sub-section` (these build the table of contents)
- Emphasis: `**bold**`, `_italic_`, `` `inline code` ``
- Links: `[text](https://example.com)` — external links open in a new tab
- Bullets: lines starting with `- ` · Numbered: lines starting with `1. `
- Quote / callout: a line starting with `> `
- Divider: a line containing only `---`

## Images

- Put files in `public/images/blog/<slug>/`.
- Reference them with markdown; the quoted text becomes a caption:

  ```markdown
  ![Descriptive alt text](/images/blog/<slug>/diagram.png "Optional caption")
  ```

- Always write real **alt text** (accessibility + SEO). The caption is optional.
- **Prefer local files.** A remote image URL only works if its host is added to
  `remotePatterns` in `next.config.ts` — otherwise Next's image optimizer
  rejects it (400). Remote links can also expire.

## Code

Fence with a language tag for syntax highlighting, a language label, and a
copy button:

    ```ts
    const answer = 42;
    ```

Keep lines short so they read well on phones. Inline code uses single
backticks: `` `like this` ``.

## Embedding an interactive tool

Never hand-write an `<iframe>`. Use the `MapEmbed` component, which shows the
live tool on desktop and a tidy "open full screen" card on mobile:

```mdx
<MapEmbed src="/tools/<name>.html" title="Short description of the tool" />
```

The tool must be a single self-contained HTML file at `public/tools/<name>.html`.

## What renders automatically

- Table of contents (from your `##` / `###` headings)
- "Sources & References" list (from `sources` in frontmatter)
- Author card with your GitHub / LinkedIn (from `data/site.ts`)
- Share buttons (X, LinkedIn, copy link) and related posts
- SEO / OpenGraph / Twitter metadata from the frontmatter

## Writing with an AI

Hand the AI both `content/blog/_TEMPLATE.mdx` and
[`content/blog/_AUTHOR_PROMPT.md`](content/blog/_AUTHOR_PROMPT.md) — the latter
is a ready-to-paste prompt that tells the AI exactly how to use the template.
