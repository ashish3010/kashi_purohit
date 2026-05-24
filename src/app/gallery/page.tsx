import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_LOGO_PATH } from "@/config/site";
import { galleryYoutubeVideos } from "@/features/gallery/gallery-media.data";
import { GalleryScreen } from "@/features/gallery/GalleryScreen";
import { readLocalGalleryPhotos } from "@/features/gallery/readLocalGalleryPhotos";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  const g = copy.pages.gallery;
  return {
    title: `${g.title} — ${g.eyebrow}`,
    description: g.subtitle,
    alternates: { canonical: "/gallery" },
    openGraph: {
      title: `${g.title} — ${g.eyebrow} | ${copy.site.name}`,
      description: g.subtitle,
      url: "/gallery",
      images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: copy.site.logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${g.title} — ${g.eyebrow} | ${copy.site.name}`,
      description: g.subtitle,
      images: [SITE_LOGO_PATH],
    },
  };
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

  return (
    <div className="min-h-screen">
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
