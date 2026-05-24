import type { NextConfig } from "next";

const karmKaandRitualSlugs = [
  "upanayan-janeu-shaadi-vivaah",
  "bhoomi-pujan-grih-pravesh",
  "rudrabhishek-maha-mrityunjay",
  "ramayan-bhagwad-katha",
  "satchandi-durga-paath",
  "gau-daan",
  "other-hawan-pujan-and-katha",
] as const;

const nextConfig: NextConfig = {
  /**
   * Dev-only: allow loading `/_next/*` when you open the site by LAN IP (e.g. `http://192.168.1.5:3000`)
   * or `http://127.0.0.1:3000`. Without this, Next.js returns 403 for RSC/chunks and client JS never runs.
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
   */
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*", "172.*.*.*"],
  async redirects() {
    const karmRedirects = karmKaandRitualSlugs.map((slug) => ({
      source: `/rituals/${slug}`,
      destination: `/karm-kaand-maanglik?scroll=${slug}`,
      permanent: true,
    }));
    const galleryLegacy = [
      {
        source: "/rituals/photo-gallery",
        destination: "/gallery?tab=photos",
        permanent: true,
      },
      {
        source: "/rituals/video-gallery",
        destination: "/gallery?tab=videos",
        permanent: true,
      },
    ];
    return [...karmRedirects, ...galleryLegacy];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
