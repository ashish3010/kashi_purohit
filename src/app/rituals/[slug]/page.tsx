import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/JsonLdScript";
import { ArticleDetailContent } from "@/features/common/ArticleDetailContent";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import {
  getAllMenuDetailSlugs,
  getMenuDetailBySlug,
} from "@/features/navigation/menu-detail-queries";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllMenuDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const copy = getSiteCopy(await getRequestSiteLocale());
  const item = getMenuDetailBySlug(slug);
  if (!item) {
    return { title: "Gallery" };
  }
  return buildPageMetadata({
    title: item.title,
    description: item.description,
    path: `/rituals/${slug}`,
    type: "article",
  });
}

export default async function MenuDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const item = getMenuDetailBySlug(slug);
  if (!item) {
    notFound();
  }

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: copy.navigation.desktop[0]?.label ?? "Home", path: "/" },
    { name: item.sectionLabel, path: `/#${item.sectionLabel.toLowerCase().replace(/\s+/g, "-")}` },
    { name: item.title, path: `/rituals/${slug}` },
  ]);

  return (
    <div>
      <JsonLdScript data={breadcrumb} />
      <MobileSiteHeader copy={copy} locale={locale} />
      <main>
        <ArticleDetailContent
          backHref="/#home"
          backLabel={copy.common.backToHome}
          eyebrow={item.sectionLabel}
          title={item.title}
          paragraphs={item.paragraphs}
        />
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
