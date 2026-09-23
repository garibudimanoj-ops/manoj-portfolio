import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23");
  const base = "https://manoj.dev";

  const entries = [
    { path: "/", changefreq: "weekly" as const, priority: 1.0 },
    { path: "/about", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/skills", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/projects", changefreq: "weekly" as const, priority: 0.9 },
    { path: "/projects/tasktally", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/projects/ai-social-media-automation", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/projects/safesight-ai", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/journey", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/education", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/contact", changefreq: "monthly" as const, priority: 0.8 },
  ];

  return entries.map((entry) => ({
    url: `${base}${entry.path}`,
    lastModified,
    changefreq: entry.changefreq,
    priority: entry.priority,
  }));
}