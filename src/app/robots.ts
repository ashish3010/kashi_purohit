import type { MetadataRoute } from "next";
import { CANONICAL_HOST, getSiteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: CANONICAL_HOST,
    sitemap: `${base}/sitemap.xml`,
  };
}
