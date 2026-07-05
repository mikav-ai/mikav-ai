import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/components/pages/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      title: data.title ?? "",
      slug: data.slug ?? file.replace(".md", ""),
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      tags: data.tags ?? [],
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? "",
      slug: data.slug ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      tags: data.tags ?? [],
    } as BlogPost,
    content,
  };
}
