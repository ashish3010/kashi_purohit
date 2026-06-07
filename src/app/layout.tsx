import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { JsonLd } from "./JsonLd";
import {
  getSiteUrl,
  SITE_GEO,
  SITE_LOGO_PATH,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_PATH,
  SITE_OG_IMAGE_WIDTH,
  SITE_SEO_KEYWORDS,
} from "@/config/site";
import { languageAlternates } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const { site } = copy;
  const htmlLang = locale === "hi" ? "hi" : "en";
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${site.name} — ${site.tagline} in Varanasi`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.panditName, url: getSiteUrl() }],
    creator: site.name,
    publisher: site.name,
    category: "religion",
    keywords: [...SITE_SEO_KEYWORDS],
    alternates: languageAlternates("/"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: SITE_LOGO_PATH,
      apple: SITE_LOGO_PATH,
    },
    openGraph: {
      type: "website",
      locale: htmlLang === "hi" ? "hi_IN" : "en_IN",
      url: "/",
      siteName: site.name,
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      images: [
        {
          url: SITE_OG_IMAGE_PATH,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
          alt: copy.hero.imageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      images: [SITE_OG_IMAGE_PATH],
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    verification: {
      google: "5kJCmgDaAnqLgqVX7DMp_6efD1MBZ1ffHL_YKIzzaQY",
    },
    other: {
      "geo.region": "IN-UP",
      "geo.placename": "Varanasi",
      "geo.position": `${SITE_GEO.latitude};${SITE_GEO.longitude}`,
      ICBM: `${SITE_GEO.latitude}, ${SITE_GEO.longitude}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const htmlLang = locale === "hi" ? "hi" : "en";

  return (
    <html lang={htmlLang} className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full font-sans text-kashi-brown antialiased">
        <JsonLd copy={copy} />
        {children}
      </body>
    </html>
  );
}
