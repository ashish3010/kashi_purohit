import type { Metadata } from "next";
import { SITE, SITE_LOGO_ALT, SITE_LOGO_PATH } from "@/config/site";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { ShraadhiyaHashScroll } from "@/features/shraadhiya/ShraadhiyaHashScroll";
import { ShraadhiyaKarmIntro, ShraadhiyaKarmSections } from "@/features/shraadhiya/ShraadhiyaKarmSections";

export const metadata: Metadata = {
  title: "Shraadhiya Karm",
  description:
    "Gaya Pind, Varanasi Pind, Mrityuparant shradh, Shad Pind Daan, Dashgaatra, Ekadashaah, Dwadashah, Shaiyya Daan, Narayan Bali / Tripindi — full guidance in one place.",
  alternates: { canonical: "/shraadhiya-karm" },
  openGraph: {
    title: `Shraadhiya Karm | ${SITE.name}`,
    description:
      "Gaya Pind, Varanasi Pind, Mrityuparant shradh, Shad Pind Daan, Dashgaatra, Ekadashaah, Dwadashah, Shaiyya Daan, Narayan Bali / Tripindi — full guidance in one place.",
    url: "/shraadhiya-karm",
    images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: SITE_LOGO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Shraadhiya Karm | ${SITE.name}`,
    description:
      "Gaya Pind, Varanasi Pind, Mrityuparant shradh, Shad Pind Daan, Dashgaatra, Ekadashaah, Dwadashah, Shaiyya Daan, Narayan Bali / Tripindi — full guidance in one place.",
    images: [SITE_LOGO_PATH],
  },
};

export default function ShraadhiyaKarmPage() {
  return (
    <div className="min-h-screen">
      <MobileSiteHeader />
      <ShraadhiyaHashScroll />
      <main>
        <ShraadhiyaKarmIntro />
        <ShraadhiyaKarmSections />
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
