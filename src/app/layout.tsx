import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { JsonLd } from "./JsonLd";
import { getSiteUrl, SITE_LOGO_PATH } from "@/config/site";
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
    keywords: [
      "Kashi Purohit",
      "Varanasi pandit",
      "Banaras purohit",
      "Naya Mahadev Rajghat",
      "Vedic rituals",
      "Hawan Varanasi",
      "Karm kaand",
      "Shraddha Gaya",
      "Pind daan Kashi",
      "Upanayan sanskar",
      "Hindu wedding rituals",
      "Rudrabhishek",
      "Bhagwat katha",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
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
          url: SITE_LOGO_PATH,
          width: 512,
          height: 512,
          alt: site.logoAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      images: [SITE_LOGO_PATH],
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
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
