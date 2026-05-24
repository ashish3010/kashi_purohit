"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { IconClose } from "@/features/common/icons";
import { Container } from "@/features/common/Container";
import type {
  GalleryPhotoItem,
  GalleryVideoItem,
} from "@/features/gallery/gallery-media.data";
import { GalleryVideo } from "@/features/gallery/GalleryVideo";

type Tab = "photos" | "videos";

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

function resolveTab(queryTab: string | null, locationHash: string): Tab {
  if (queryTab === "videos") return "videos";
  if (queryTab === "photos") return "photos";
  if (locationHash === "#videos") return "videos";
  if (locationHash === "#photos") return "photos";
  return "photos";
}

function setUrlForTab(next: Tab) {
  const path = next === "videos" ? "/gallery#videos" : "/gallery#photos";
  window.history.replaceState(null, "", path);
  try {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } catch {
    window.dispatchEvent(new Event("hashchange"));
  }
}

type GalleryScreenProps = {
  photos: GalleryPhotoItem[];
  videos: GalleryVideoItem[];
};

export function GalleryScreen({ photos, videos }: GalleryScreenProps) {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab");
  const locationHash = useSyncExternalStore(
    subscribeHash,
    getHashSnapshot,
    getServerHashSnapshot,
  );

  const tab = useMemo(
    () => resolveTab(queryTab, locationHash),
    [queryTab, locationHash],
  );

  const applyTab = useCallback((next: Tab) => {
    setUrlForTab(next);
  }, []);

  const [lightbox, setLightbox] = useState<GalleryPhotoItem | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="bg-kashi-cream pb-24 pt-6 md:pb-12">
      <Container className="max-w-lg">
        <Link
          href="/#home"
          className="text-sm font-semibold text-kashi-red underline-offset-4 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-kashi-gold/45" aria-hidden />
          <p className="shrink-0 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-kashi-gold">
            Sacred visuals
          </p>
          <span className="h-px flex-1 bg-kashi-gold/45" aria-hidden />
        </div>

        <h1 className="mt-5 text-center font-serif text-3xl font-bold leading-tight text-kashi-red sm:text-4xl">
          Divine Moments
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-neutral-600">
          A visual journey through the ancient rituals and spiritual essence of Kashi.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => applyTab("photos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
              tab === "photos"
                ? "bg-kashi-red text-white shadow-sm"
                : "bg-white/90 text-kashi-red ring-1 ring-kashi-red/25 hover:bg-white"
            }`}
          >
            Photos
          </button>
          <button
            type="button"
            onClick={() => applyTab("videos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
              tab === "videos"
                ? "bg-kashi-red text-white shadow-sm"
                : "bg-white/90 text-kashi-red ring-1 ring-kashi-red/25 hover:bg-white"
            }`}
          >
            Videos
          </button>
        </div>

        {tab === "photos" ? (
          photos.length === 0 ? (
            <p className="mt-10 rounded-xl bg-white/60 px-4 py-8 text-center text-sm leading-relaxed text-neutral-600 ring-1 ring-black/5">
              No photos in{" "}
              <code className="rounded bg-kashi-cream px-1.5 py-0.5 text-xs text-kashi-brown">
                public/images/gallery
              </code>{" "}
              yet. Add JPG or PNG files there to fill this grid.
            </p>
          ) : (
            <div className="mt-10 columns-2 gap-3 [column-fill:_balance]">
              {photos.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="mb-3 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-xl bg-white/60 text-left shadow-sm ring-1 ring-black/5 outline-none transition hover:ring-kashi-gold/50 focus-visible:ring-2 focus-visible:ring-kashi-gold"
                >
                  {/* Intrinsic height masonry — each row height follows the image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-[10px] align-middle"
                  />
                </button>
              ))}
            </div>
          )
        ) : videos.length === 0 ? (
          <p className="mt-10 rounded-xl bg-white/60 px-4 py-8 text-center text-sm leading-relaxed text-neutral-600 ring-1 ring-black/5">
            No videos yet. Add YouTube embed URLs to{" "}
            <code className="rounded bg-kashi-cream px-1.5 py-0.5 text-xs text-kashi-brown">
              galleryYoutubeVideos
            </code>{" "}
            in <code className="rounded bg-kashi-cream px-1.5 py-0.5 text-xs text-kashi-brown">gallery-media.data.ts</code>.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6">
            {videos.map((item) => (
              <GalleryVideo
                key={item.id}
                embedUrl={item.embedUrl}
                title={item.title}
              />
            ))}
          </div>
        )}

        <div className="mt-14 border-t border-kashi-gold/25 pt-8 text-center">
          <p className="font-serif text-xl font-semibold text-kashi-red">Kashi Purohit</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Sacred services in Varanasi
          </p>
        </div>
      </Container>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 pt-14"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery photo"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute right-3 top-3 z-[101] flex h-11 w-11 items-center justify-center rounded-full bg-white text-kashi-brown shadow-lg ring-1 ring-black/15 hover:bg-kashi-cream"
            aria-label="Close"
          >
            <IconClose className="h-6 w-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[min(88dvh,920px)] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
