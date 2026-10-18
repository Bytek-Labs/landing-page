import type { MetadataRoute } from "next";
import { servicePages, servicePath } from "@/lib/service-pages";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((p) => ({
      url: `${site.url}${servicePath(p.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
