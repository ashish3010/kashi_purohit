import type { Metadata } from "next";
import { SITE, SITE_LOGO_ALT, SITE_LOGO_PATH } from "@/config/site";
import { KarmKaandMaanglikHashScroll } from "@/features/karmKaand/KarmKaandMaanglikHashScroll";
import {
  KarmKaandMaanglikIntro,
  KarmKaandMaanglikSections,
} from "@/features/karmKaand/KarmKaandMaanglikSections";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";

export const metadata: Metadata = {
  title: "Karm Kaand — Maanglik",
  description:
    "Upnayan, vivah, bhoomi puja, grih pravesh, Rudrabhishek, Maha Mrityunjay, Ramayan / Bhagwat katha, Satchandi, gau daan, and custom havans — guidance in one place.",
  alternates: { canonical: "/karm-kaand-maanglik" },
  openGraph: {
    title: `Karm Kaand — Maanglik | ${SITE.name}`,
    description:
      "Upnayan, vivah, bhoomi puja, grih pravesh, Rudrabhishek, Maha Mrityunjay, Ramayan / Bhagwat katha, Satchandi, gau daan, and custom havans — guidance in one place.",
    url: "/karm-kaand-maanglik",
    images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: SITE_LOGO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Karm Kaand — Maanglik | ${SITE.name}`,
    description:
      "Upnayan, vivah, bhoomi puja, grih pravesh, Rudrabhishek, Maha Mrityunjay, Ramayan / Bhagwat katha, Satchandi, gau daan, and custom havans — guidance in one place.",
    images: [SITE_LOGO_PATH],
  },
};

export default function KarmKaandMaanglikPage() {
  return (
    <div className="min-h-screen">
      <MobileSiteHeader />
      <KarmKaandMaanglikHashScroll />
      <main>
        <KarmKaandMaanglikIntro />
        <KarmKaandMaanglikSections />
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
