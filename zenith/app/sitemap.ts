import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const BASE = "https://zss.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/plan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industrial-training`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const coursePages: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.track === "international" ? 0.8 : 0.7,
  }));

  return [...staticPages, ...coursePages];
}
