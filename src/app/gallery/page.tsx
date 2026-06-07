import type { Metadata } from "next";
import { Suspense } from "react";
import { JsonLdScript } from "@/app/JsonLdScript";
import { galleryYoutubeVideos } from "@/features/gallery/gallery-media.data";
import { GalleryScreen } from "@/features/gallery/GalleryScreen";
import { readLocalGalleryPhotos } from "@/features/gallery/readLocalGalleryPhotos";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  const g = copy.pages.gallery;
  return buildPageMetadata({
    title: `${g.title} — ${g.eyebrow}`,
    description: g.subtitle,
    path: "/gallery",
    keywords: [
      "Varanasi puja photos",
      "Vedic ritual gallery",
      "hawan photos Varanasi",
      "Kashi Purohit gallery",
    ],
  });
}

function GalleryFallback() {
  return (
    <div className="min-h-[50vh] bg-kashi-cream pt-24">
      <div className="mx-auto h-8 max-w-lg animate-pulse rounded bg-black/5 px-4" />
    </div>
  );
}

export default async function GalleryPage() {
  const photos = readLocalGalleryPhotos();
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const g = copy.pages.gallery;

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: copy.navigation.desktop[0]?.label ?? "Home", path: "/" },
    { name: g.title, path: "/gallery" },
  ]);

  return (
    <div className="min-h-screen">
      <JsonLdScript data={breadcrumb} />
      <MobileSiteHeader copy={copy} locale={locale} />
      <main>
        <Suspense fallback={<GalleryFallback />}>
          <GalleryScreen copy={copy} photos={photos} videos={galleryYoutubeVideos} />
        </Suspense>
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
