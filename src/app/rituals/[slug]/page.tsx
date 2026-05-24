import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_LOGO_PATH } from "@/config/site";
import { ArticleDetailContent } from "@/features/common/ArticleDetailContent";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import {
  getAllMenuDetailSlugs,
  getMenuDetailBySlug,
} from "@/features/navigation/menu-detail-queries";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
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
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/rituals/${slug}` },
    openGraph: {
      title: `${item.title} | ${copy.site.name}`,
      description: item.description,
      url: `/rituals/${slug}`,
      images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: copy.site.logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | ${copy.site.name}`,
      description: item.description,
      images: [SITE_LOGO_PATH],
    },
  };
}

export default async function MenuDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const item = getMenuDetailBySlug(slug);
  if (!item) {
    notFound();
  }

  return (
    <div>
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
