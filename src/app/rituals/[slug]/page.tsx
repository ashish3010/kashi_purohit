import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, SITE_LOGO_ALT, SITE_LOGO_PATH } from "@/config/site";
import { ArticleDetailContent } from "@/features/common/ArticleDetailContent";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import {
  getAllMenuDetailSlugs,
  getMenuDetailBySlug,
} from "@/features/navigation/menu-detail-queries";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllMenuDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuDetailBySlug(slug);
  if (!item) {
    return { title: "Gallery" };
  }
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/rituals/${slug}` },
    openGraph: {
      title: `${item.title} | ${SITE.name}`,
      description: item.description,
      url: `/rituals/${slug}`,
      images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: SITE_LOGO_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | ${SITE.name}`,
      description: item.description,
      images: [SITE_LOGO_PATH],
    },
  };
}

export default async function MenuDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getMenuDetailBySlug(slug);
  if (!item) {
    notFound();
  }

  return (
    <div>
      <MobileSiteHeader />
      <main>
        <ArticleDetailContent
          backHref="/#home"
          backLabel="← Back to Home"
          eyebrow={item.sectionLabel}
          title={item.title}
          paragraphs={item.paragraphs}
        />
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
