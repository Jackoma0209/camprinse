import type { MetadataRoute } from "next";
import { legalPages } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...legalPages.map((page) => page.href)];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
