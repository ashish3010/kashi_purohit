/** Image paths only — titles, descriptions, and body copy live in `src/content/en.json`. */
export const SERVICE_MEDIA = {
  "hawan-pujan": "/images/hawan.png",
  "karma-kaand": "/images/karm-kand.png",
  "upnayan-sanskar": "/images/upnayan.jpg",
  "shaadi-vivah": "/images/vivah.jpg",
  "kundali-dosh-pujan": "/images/kundali-dosh.png",
  rudrabhishek: "/images/rudravishek.png",
} as const;

export type ServiceItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};
