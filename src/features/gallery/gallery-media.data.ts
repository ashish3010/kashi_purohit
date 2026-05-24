/** Photo tiles for the gallery — filled from `public/images/gallery` on the server (`readLocalGalleryPhotos`). */

export type GalleryPhotoItem = {
  id: string;
  src: string;
  alt: string;
};

/** YouTube embed — rendered with `<iframe>` on the gallery Videos tab. */
export type GalleryVideoItem = {
  id: string;
  /** Full URL, e.g. `https://www.youtube.com/embed/VIDEO_ID` */
  embedUrl: string;
  /** Iframe `title` for accessibility */
  title: string;
};

/** Curated ritual clips (embed URLs you provided). */
export const galleryYoutubeVideos: GalleryVideoItem[] = [
  {
    id: "yt-1",
    embedUrl: "https://www.youtube.com/embed/Aa7E1E7pCqo",
    title: "Kashi Purohit — gallery video 1",
  },
  {
    id: "yt-2",
    embedUrl: "https://www.youtube.com/embed/EM1FbmFBuDI",
    title: "Kashi Purohit — gallery video 2",
  },
  {
    id: "yt-3",
    embedUrl: "https://www.youtube.com/embed/iwd60hZylLw",
    title: "Kashi Purohit — gallery video 3",
  },
  {
    id: "yt-4",
    embedUrl: "https://www.youtube.com/embed/An0e4v5Rb3w",
    title: "Kashi Purohit — gallery video 4",
  },
  {
    id: "yt-5",
    embedUrl: "https://www.youtube.com/embed/8kARVY-ddkw",
    title: "Kashi Purohit — gallery video 5",
  },
  {
    id: "yt-6",
    embedUrl: "https://www.youtube.com/embed/i88fH9w3q3g",
    title: "Kashi Purohit — gallery video 6",
  },
  {
    id: "yt-7",
    embedUrl: "https://www.youtube.com/embed/B71gC0SFljE",
    title: "Kashi Purohit — gallery video 7",
  },
  {
    id: "yt-8",
    embedUrl: "https://www.youtube.com/embed/TyDqXRLTXMs",
    title: "Kashi Purohit — gallery video 8",
  },
];
