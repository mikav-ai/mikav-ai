import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllPapers } from "@/lib/paper";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mikav.in";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-07-05"), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/research`, lastModified: new Date("2026-07-05"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/resources/blog`, lastModified: new Date("2026-07-05"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/company`, lastModified: new Date("2026-07-05"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/legal/privacy`, lastModified: new Date("2026-07-05"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date("2026-07-05"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal/cookies`, lastModified: new Date("2026-07-05"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const researchPages: MetadataRoute.Sitemap = getAllPapers().map((paper) => ({
    url: `${baseUrl}/research/${paper.slug}`,
    lastModified: new Date(paper.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...researchPages];
}
