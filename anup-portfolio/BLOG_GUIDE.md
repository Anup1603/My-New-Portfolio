# How to Write a Blog Post

Every post is a single `.mdx` file in `content/blog/`. Publishing = adding a
file and redeploying. No CMS, no database.

## Quick start (5 minutes)

1. Copy `content/blog/_TEMPLATE.mdx` to `content/blog/my-new-post.mdx`.
   (Files starting with `_` are ignored, so the template never shows on the site.)
2. Fill in the frontmatter (the block between the `---` lines):
   - `title` — shown as the page heading and on cards.
   - `slug` — must match the filename (without `.mdx`). Lowercase, hyphens.
   - `date` — `YYYY-MM-DD`. Posts are sorted newest-first.
   - `category` — one of: `Tech News`, `Startups`, `Engineering`
     (the list lives in `lib/blog.ts` if you want to add more).
   - `excerpt` — 1–2 sentences for cards and social previews.
   - `coverImage` — the big image on the post page and cards (1200×630 works best).
   - `readingTime` — e.g. `"6 min read"` (write it yourself).
   - `sources` — optional list of `{ title, url }`; renders as a numbered
     "Sources & References" box at the end of the article. Delete it if unused.
3. Write the body in normal Markdown below the frontmatter.
4. Run `npm run dev` and open `http://localhost:3000/blog/my-new-post` to check it.

## Images

- Put files in `public/images/blog/<your-post-slug>/`.
- Reference them like: `![Alt text](/images/blog/my-new-post/diagram.png "Caption")`
  - The alt text is for accessibility/SEO.
  - The quoted title is optional and renders as a caption under the image.
- For the cover, either use a local file (`/images/blog/my-new-post/cover.jpg`)
  or any external URL.

## Code

Use fenced blocks with a language tag — they get syntax highlighting, a
language label, and a copy button automatically:

    ```ts
    const answer = 42;
    ```

Inline code uses single backticks: `` `like this` ``.

## Headings & Table of Contents

`##` and `###` headings automatically appear in the sticky table of contents
on desktop, so structure the post with them.

## What renders automatically

- Author card with your GitHub/LinkedIn (from `data/site.ts`)
- Share buttons (X, LinkedIn, copy link)
- Related posts (same category first)
- SEO/OpenGraph metadata from the frontmatter
