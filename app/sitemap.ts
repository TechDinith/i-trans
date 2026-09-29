import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/constants";

const LAST_MODIFIED = new Date("2026-09-29T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = LAST_MODIFIED;

  return [
    {
      url: `${SITE.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/services/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
