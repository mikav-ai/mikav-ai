import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mikav.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
