import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Paper {
  title: string;
  slug: string;
  description: string;
  date: string;
  authors: string[];
  tags: string[];
  status: string;
}

const PAPER_DIR = path.join(process.cwd(), "content/paper");

export function getAllPapers(): Paper[] {
  if (!fs.existsSync(PAPER_DIR)) return [];

  const files = fs.readdirSync(PAPER_DIR).filter((f) => f.endsWith(".md"));

  const papers = files.map((file) => {
    const raw = fs.readFileSync(path.join(PAPER_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      title: data.title ?? "",
      slug: data.slug ?? file.replace(".md", ""),
      description: data.description ?? "",
      date: data.date ?? "",
      authors: data.authors ?? [],
      tags: data.tags ?? [],
      status: data.status ?? "draft",
    } as Paper;
  });

  return papers.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPaperBySlug(slug: string) {
  const filePath = path.join(PAPER_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? "",
      slug: data.slug ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      authors: data.authors ?? [],
      tags: data.tags ?? [],
      status: data.status ?? "draft",
    } as Paper,
    content,
  };
}
