import type { Metadata } from "next";
import { JsonLdScript } from "@/app/JsonLdScript";
import { KarmKaandMaanglikHashScroll } from "@/features/karmKaand/KarmKaandMaanglikHashScroll";
import {
  KarmKaandMaanglikIntro,
  KarmKaandMaanglikSections,
} from "@/features/karmKaand/KarmKaandMaanglikSections";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  const p = copy.pages.karmKaand;
  return buildPageMetadata({
    title: p.title,
    description: p.intro,
    path: "/karm-kaand-maanglik",
    keywords: [
      "Karm kaand Varanasi",
      "Maanglik puja",
      "Upanayan sanskar",
      "Grih pravesh puja",
      "Bhoomi pujan Varanasi",
      "Vivah sanskar",
      "Rudrabhishek",
      "Bhagwat katha",
    ],
  });
}

export default async function KarmKaandMaanglikPage() {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const p = copy.pages.karmKaand;

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: copy.navigation.desktop[0]?.label ?? "Home", path: "/" },
    { name: p.title, path: "/karm-kaand-maanglik" },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLdScript data={breadcrumb} />
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
