/** Canonical production host — all other domains redirect here. */
export const CANONICAL_HOST = "www.kashipurohit.in";

/** Canonical site origin for metadata, sitemap, robots, and JSON-LD. */
export const CANONICAL_SITE_URL = `https://${CANONICAL_HOST}`;

/** Alternate domains that should 301 to the canonical host. */
export const ALTERNATE_HOSTS = [
  "kashipurohit.in",
  "kashipurohit.com",
  "www.kashipurohit.com",
] as const;

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit && /^https?:\/\//i.test(explicit)) {
    return explicit.replace(/\/$/, "");
  }
  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const SITE_LOGO_PATH = "/images/logo.png";

/** Default Open Graph / Twitter card image (Varanasi ghat banner). */
export const SITE_OG_IMAGE_PATH = "/images/desktop_banner.png";
export const SITE_OG_IMAGE_WIDTH = 1536;
export const SITE_OG_IMAGE_HEIGHT = 1024;

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

/** Approximate coordinates for Naya Mahadev, Rajghat — used in LocalBusiness schema. */
export const SITE_GEO = {
  latitude: 25.3392,
  longitude: 83.005,
} as const;

export const SITE_SOCIAL = {
  whatsapp: SITE_CONTACT.whatsappUrl,
} as const;

export const SITE_SEO_KEYWORDS = [
  "Kashi Purohit",
  "Pandit Prashant Shukla",
  "Varanasi pandit",
  "Banaras purohit",
  "pandit in Varanasi",
  "purohit in Kashi",
  "Naya Mahadev Rajghat",
  "Vedic rituals Varanasi",
  "Hawan Varanasi",
  "havan puja Varanasi",
  "Karm kaand Varanasi",
  "karmakandi pandit",
  "Shraddha Varanasi",
  "Pind daan Kashi",
  "Pind daan Gaya",
  "pitru karm",
  "Upanayan sanskar Varanasi",
  "Janeu ceremony Varanasi",
  "Hindu wedding pandit Varanasi",
  "Vivah sanskar",
  "Rudrabhishek Varanasi",
  "Bhagwat katha Varanasi",
  "Kundali dosh puja",
  "Grih pravesh puja",
  "Bhoomi pujan Varanasi",
  "Asthi visarjan Ganga",
  "Shraadhiya karm",
  "tarpan pitru paksha",
] as const;
