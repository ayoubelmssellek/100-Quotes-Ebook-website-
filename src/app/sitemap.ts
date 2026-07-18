import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/subscriptions",
    "/channels",
    "/installation-guides",
    "/blog",
    "/why-us",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/dmca-policy",
    "/disclaimer",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${base}/installation-guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...blogRoutes, ...guideRoutes];
}
