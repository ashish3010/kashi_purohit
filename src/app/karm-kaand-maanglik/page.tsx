import type { Metadata } from "next";
import { SITE_LOGO_PATH } from "@/config/site";
import { KarmKaandMaanglikHashScroll } from "@/features/karmKaand/KarmKaandMaanglikHashScroll";
import {
  KarmKaandMaanglikIntro,
  KarmKaandMaanglikSections,
} from "@/features/karmKaand/KarmKaandMaanglikSections";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  const p = copy.pages.karmKaand;
  return {
    title: p.title,
    description: p.intro,
    alternates: { canonical: "/karm-kaand-maanglik" },
    openGraph: {
      title: `${p.title} | ${copy.site.name}`,
      description: p.intro,
      url: "/karm-kaand-maanglik",
      images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: copy.site.logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} | ${copy.site.name}`,
      description: p.intro,
      images: [SITE_LOGO_PATH],
    },
  };
}

export default async function KarmKaandMaanglikPage() {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);

  return (
    <div className="min-h-screen">
      <MobileSiteHeader copy={copy} locale={locale} />
      <KarmKaandMaanglikHashScroll />
      <main>
        <KarmKaandMaanglikIntro copy={copy} />
        <KarmKaandMaanglikSections copy={copy} />
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
