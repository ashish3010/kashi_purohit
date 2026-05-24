import fs from "node:fs";
import path from "node:path";
import type { GalleryPhotoItem } from "@/features/gallery/gallery-media.data";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

/** All image files under `public/images/gallery` (build / server only). */
export function readLocalGalleryPhotos(): GalleryPhotoItem[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && IMAGE_EXT.test(d.name) && !d.name.startsWith("."))
    .map((d) => d.name);

  files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  );

  return files.map((filename) => {
    const stem = path.basename(filename, path.extname(filename));
    const label = stem.replace(/[-_]+/g, " ").trim() || "photo";
    return {
      id: filename,
      src: `/images/gallery/${filename}`,
      alt: `Kashi Purohit gallery — ${label}`,
    };
  });
}
