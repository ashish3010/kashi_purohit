import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE, SITE_LOGO_ALT, SITE_LOGO_PATH } from "@/config/site";
import { galleryYoutubeVideos } from "@/features/gallery/gallery-media.data";
import { GalleryScreen } from "@/features/gallery/GalleryScreen";
import { readLocalGalleryPhotos } from "@/features/gallery/readLocalGalleryPhotos";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";

export const metadata: Metadata = {
  title: "Gallery — Divine Moments",
  description:
    "Photos and videos from rituals, ghats, and temple seva with Kashi Purohit in Varanasi — sacred visuals from the holy city.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery — Divine Moments | ${SITE.name}`,
    description:
      "Photos and videos from rituals, ghats, and temple seva with Kashi Purohit in Varanasi — sacred visuals from the holy city.",
    url: "/gallery",
    images: [{ url: SITE_LOGO_PATH, width: 512, height: 512, alt: SITE_LOGO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gallery — Divine Moments | ${SITE.name}`,
    description:
      "Photos and videos from rituals, ghats, and temple seva with Kashi Purohit in Varanasi.",
    images: [SITE_LOGO_PATH],
  },
};

function GalleryFallback() {
  return (
    <div className="min-h-[50vh] bg-kashi-cream pt-24">
      <div className="mx-auto h-8 max-w-lg animate-pulse rounded bg-black/5 px-4" />
    </div>
  );
}

export default function GalleryPage() {
  const photos = readLocalGalleryPhotos();

  return (
    <div className="min-h-screen">
      <MobileSiteHeader />
      <main>
        <Suspense fallback={<GalleryFallback />}>
          <GalleryScreen photos={photos} videos={galleryYoutubeVideos} />
        </Suspense>
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
