import type { MetadataRoute } from "next";
import { getSiteUrl, SITE_LOGO_PATH } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();
  return {
    name: "Kashi Purohit — Traditional Vedic Ritual Services",
    short_name: "Kashi Purohit",
    description:
      "Authentic Vedic ritual services in Varanasi with Pandit Prashant Shukla at Naya Mahadev, Rajghat.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a0f0a",
    theme_color: "#701a1a",
    lang: "en-IN",
    orientation: "portrait-primary",
    categories: ["lifestyle", "spirituality"],
    icons: [
      {
        src: SITE_LOGO_PATH,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: SITE_LOGO_PATH,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    id: base,
  };
}
