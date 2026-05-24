import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import {
  getSiteUrl,
  SITE,
  SITE_LOGO_ALT,
  SITE_LOGO_PATH,
} from "@/config/site";
import { JsonLd } from "./JsonLd";
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

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE.name} — ${SITE.tagline} in Varanasi`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Pandit Prashant Shukla", url: getSiteUrl() }],
  creator: SITE.name,
  publisher: SITE.name,
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
    locale: "en_IN",
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: SITE_LOGO_PATH,
        width: 512,
        height: 512,
        alt: SITE_LOGO_ALT,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE_LOGO_PATH],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full font-sans text-kashi-brown antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
