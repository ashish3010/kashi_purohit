import type { Metadata } from "next";
import {
  getSiteUrl,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_PATH,
  SITE_OG_IMAGE_WIDTH,
} from "@/config/site";

type OgImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageSeoOptions = {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: OgImage;
  type?: "website" | "article";
};

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (/^https?:\/\//i.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(path: string): Metadata["alternates"] {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return {
    canonical,
    languages: {
      "en-IN": canonical,
      "hi-IN": canonical,
      "x-default": canonical,
    },
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
}: PageSeoOptions): Metadata {
  const ogImage: OgImage = image ?? {
    url: SITE_OG_IMAGE_PATH,
    alt: "Kashi Purohit — Vedic rituals at Varanasi ghats",
    width: SITE_OG_IMAGE_WIDTH,
    height: SITE_OG_IMAGE_HEIGHT,
  };

  const resolvedTitle = title;
  const ogTitle = title ? `${title} | Kashi Purohit` : undefined;

  return {
    ...(resolvedTitle ? { title: resolvedTitle } : {}),
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: languageAlternates(path),
    openGraph: {
      type,
      url: path,
      title: ogTitle ?? "Kashi Purohit — Traditional Vedic Ritual Services",
      description,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? "Kashi Purohit — Traditional Vedic Ritual Services",
      description,
      images: [ogImage.url],
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function buildServiceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  imageUrl: string;
  providerName: string;
}): Record<string, unknown> {
  const base = getSiteUrl();
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url,
    image: absoluteUrl(opts.imageUrl),
    serviceType: "Hindu Vedic Ritual Service",
    areaServed: {
      "@type": "City",
      name: "Varanasi",
      containedInPlace: { "@type": "Country", name: "India" },
    },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${base}/#business`,
      name: opts.providerName,
    },
  };
}
