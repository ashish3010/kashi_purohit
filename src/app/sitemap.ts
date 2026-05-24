import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { getAllMenuDetailSlugs } from "@/features/navigation/menu-detail-queries";
import { getAllServiceSlugs } from "@/features/services/service-queries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPaths = ["", "/gallery", "/shraadhiya-karm", "/karm-kaand-maanglik"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/gallery" ? 0.8 : 0.85,
  }));

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const ritualEntries: MetadataRoute.Sitemap = getAllMenuDetailSlugs().map((slug) => ({
    url: `${base}/rituals/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...serviceEntries, ...ritualEntries];
}
