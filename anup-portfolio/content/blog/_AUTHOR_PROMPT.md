# Author Prompt — paste this to any AI to write a blog post

This file is a ready-made prompt. Fill in the **[TOPIC]** and details near the
top, attach or paste the contents of `_TEMPLATE.mdx`, and send it to any AI.
(This file starts with `_`, so it is ignored by the site.)

---

You are writing a blog post for my Next.js portfolio site. It will be saved as
an MDX file and rendered by an existing system. Follow the attached template
`_TEMPLATE.mdx` exactly. Produce the finished `.mdx` file content only.

TOPIC: [TOPIC — e.g. "How we cut Cloud SQL latency by 300ms"]
CATEGORY: [one of: Tech News | Startups | Engineering | Data Visualization]
AUDIENCE / ANGLE: [e.g. "practising engineers; practical, honest, no hype"]
TARGET LENGTH: [e.g. "~5 min read"]
KEY POINTS TO COVER: [bullet the must-include points, or write "you decide"]
SOURCES (if any): [paste links/titles, or "none"]

RULES — follow every one:
1. Output a single MDX file: frontmatter block, then the article body. Nothing
   else (no explanations before or after).
2. Frontmatter must include: title, slug, date (YYYY-MM-DD), category, excerpt,
   coverImage, readingTime, and sources (omit sources only if there are none).
   - `slug` must be lowercase-hyphenated. Tell me to save the file as
     `<slug>.mdx` — the filename MUST equal the slug.
   - `category` must be EXACTLY one of the four allowed values above.
   - `coverImage` path: `/images/blog/<slug>/cover.jpg` (I will supply the image).
3. Markdown only. Do NOT use raw HTML tags or inline `style=` attributes.
4. If you need a comment, use `{/* ... */}` — never `<!-- ... -->`.
5. Structure with `##` and `###` headings (no `#` H1 in the body — the title
   comes from frontmatter). These build the table of contents.
6. Cite every statistic, quote, or specific claim as an entry in `sources`.
   Do not invent facts or fake URLs. If unsure, say so in the text instead.
7. For images, use: `![alt text](/images/blog/<slug>/name.png "caption")`, put
   them at natural points in the article, and always write real alt text. List
   each image you reference so I know which files to create.
8. Keep code lines short. Fence code with a language tag (```ts, ```bash, etc.).
9. Only use the `<MapEmbed src="..." title="..." />` component if I explicitly
   ask you to embed an interactive tool. Otherwise don't.

STYLE:
- Open with a hook (why this matters) in one or two sentences.
- One idea per section, short paragraphs, lead with the takeaway.
- Plain language; define jargon on first use. Break up text with lists,
  quotes, or images. End with a clear takeaway.

Now write the complete `.mdx` file.
