import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

export interface PostSource {
  title: string;
  url: string;
}

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  /** Optional "Sources & References" list rendered at the end of the post. */
  sources?: PostSource[];
}

export interface Post {
  meta: PostMeta;
  content: string;
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const categories = [
  "Tech News",
  "Startups",
  "Engineering",
  "Data Visualization",
] as const;

function parseFile(filename: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as PostMeta, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => parseFile(f).meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseFile(`${slug}.mdx`);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): PostMeta[] {
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === category);
  const rest = others.filter((p) => p.category !== category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/**
 * Extracts h2/h3 headings for the table of contents. Ids are generated with
 * github-slugger, matching the ids rehype-slug adds at render time.
 */
export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  // Strip fenced code blocks so `## comments` inside code are ignored.
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");
  for (const line of withoutCode.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugger.slug(text), text, level });
  }
  return headings;
}
