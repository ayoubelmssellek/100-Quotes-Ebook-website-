import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

/** Payment shell — no public catalog pages to index. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteOrigin}/return`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
