/** Canonical site origin for metadata, sitemap, robots, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://www.example.com`). */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit && /^https?:\/\//i.test(explicit)) {
    return explicit.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const SITE_LOGO_PATH = "/images/logo.png";

export const SITE_LOGO_ALT =
  "Kashi Purohit — Traditional Vedic Ritual Services logo with temple shikhara and bells";

export const SITE = {
  name: "Kashi Purohit",
  tagline: "Traditional Vedic Ritual Services",
  /** Primary meta description (~155 chars) for homepage and fallbacks */
  description:
    "Traditional Vedic ritual services in Varanasi with Pandit Prashant Shukla at Naya Mahadev, Rajghat — hawan, karm kaand, sanskar, shraddha, vivah, Rudrabhishek, katha, and pitru karm.",
} as const;

export const SITE_CONTACT = {
  email: "panditprashantshuklaji@gmail.com",
  telephone: "+917007555204",
  whatsappUrl: "https://wa.me/919335739640",
} as const;

export const SITE_ADDRESS = {
  streetAddress: "A 11/42 Naya Mahadev Rajghat",
  addressLocality: "Varanasi",
  addressRegion: "Uttar Pradesh",
  postalCode: "221001",
  addressCountry: "IN",
} as const;
