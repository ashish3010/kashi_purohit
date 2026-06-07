import type { Metadata } from "next";
import { JsonLdScript } from "@/app/JsonLdScript";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { ShraadhiyaHashScroll } from "@/features/shraadhiya/ShraadhiyaHashScroll";
import { ShraadhiyaKarmIntro, ShraadhiyaKarmSections } from "@/features/shraadhiya/ShraadhiyaKarmSections";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  const p = copy.pages.shraadhiya;
  return buildPageMetadata({
    title: p.title,
    description: p.intro,
    path: "/shraadhiya-karm",
    keywords: [
      "Shraddha Varanasi",
      "Pind daan Kashi",
      "Pind daan Gaya",
      "pitru karm",
      "tarpan Varanasi",
      "Asthi visarjan Ganga",
      "Shraadhiya karm",
    ],
  });
}

export default async function ShraadhiyaKarmPage() {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const p = copy.pages.shraadhiya;

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: copy.navigation.desktop[0]?.label ?? "Home", path: "/" },
    { name: p.title, path: "/shraadhiya-karm" },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLdScript data={breadcrumb} />
      <MobileSiteHeader copy={copy} locale={locale} />
      <ShraadhiyaHashScroll />
      <main>
        <ShraadhiyaKarmIntro copy={copy} />
        <ShraadhiyaKarmSections copy={copy} />
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
