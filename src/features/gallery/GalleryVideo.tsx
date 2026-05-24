"use client";

type Props = {
  embedUrl: string;
  title: string;
};

function embedSrcWithParams(embedUrl: string): string {
  try {
    const u = new URL(embedUrl);
    u.searchParams.set("modestbranding", "1");
    u.searchParams.set("rel", "0");
    u.searchParams.set("playsinline", "1");
    return u.toString();
  } catch {
    return embedUrl;
  }
}

/** Responsive YouTube embed via official embed URL. */
export function GalleryVideo({ embedUrl, title }: Props) {
  const src = embedSrcWithParams(embedUrl);

  return (
    <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full border-0"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
