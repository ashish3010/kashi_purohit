import type { MenuDetailItem } from "@/features/navigation/menu-detail.types";

/** Ritual detail pages: Temple only (Shraadhiya → `/shraadhiya-karm`; Karm Kaand → `/karm-kaand-maanglik`; Gallery → `/gallery`). */
export const menuDetails: MenuDetailItem[] = [
  {
    slug: "temple-darshan",
    title: "Temple Darshan",
    sectionLabel: "Gallery",
    description: "Naya Mahadev, Rajghat, and yatra notes.",
    paragraphs: [
      "Naya Mahadev at Rajghat anchors much of our seva. Learn about darshan timings, special abhisheks, and how to join community events.",
      "Pilgrim tips include footwear, offering counters, and respectful photography rules on festival days.",
    ],
  },
];
