export type NavDropdownItem = {
  label: string;
  href: string;
};

export type NavDropdown = {
  id: string;
  label: string;
  items: NavDropdownItem[];
};

const shraadhiyaBase = "/shraadhiya-karm";
const karmKaandBase = "/karm-kaand-maanglik";

/** Top-level accordions + flat in-page links */
export const navDropdowns: NavDropdown[] = [
  {
    id: "shraadhiya",
    label: "Shraadhiya Karm",
    items: [
      { label: "Gaya Pind", href: `${shraadhiyaBase}#gaya-pind` },
      { label: "Varanasi Pind", href: `${shraadhiyaBase}#varanasi-pind` },
      { label: "Mrityu Parant", href: `${shraadhiyaBase}#mrityu-parant` },
      { label: "Shad Pind Daan (Asthi sanchayan)", href: `${shraadhiyaBase}#shad-pind-daan-asthi-sanchayan` },
      { label: "Dashgaatra (Dashva)", href: `${shraadhiyaBase}#dashgaatra-dashva` },
      { label: "Ekadashaah (11 din)", href: `${shraadhiyaBase}#ekadashaah-11-din` },
      { label: "Dwadashah (12 din)", href: `${shraadhiyaBase}#dwadashah-12-din` },
      { label: "Shaiyya Daan Brahman Bhoj", href: `${shraadhiyaBase}#shaiyya-daan-brahman-bhoj` },
      { label: "Narayan Bali / Tripindi Shraadh", href: `${shraadhiyaBase}#narayan-bali-tripindi-shraadh` },
    ],
  },
  {
    id: "karm-kaand",
    label: "Karm Kaand - Maanglik",
    items: [
      { label: "Upnayan Janeu / Shaadi Vivaah", href: `${karmKaandBase}#upanayan-janeu-shaadi-vivaah` },
      { label: "Bhoomi Pujan / Grih Pravesh", href: `${karmKaandBase}#bhoomi-pujan-grih-pravesh` },
      { label: "Rudrabhishek / Maha Mrityunjay", href: `${karmKaandBase}#rudrabhishek-maha-mrityunjay` },
      { label: "Ramayan / Bhagwad Katha", href: `${karmKaandBase}#ramayan-bhagwad-katha` },
      { label: "Satchandi / Durga Paath", href: `${karmKaandBase}#satchandi-durga-paath` },
      { label: "Gau Daan", href: `${karmKaandBase}#gau-daan` },
      { label: "Other Hawan Pujan and Katha", href: `${karmKaandBase}#other-hawan-pujan-and-katha` },
    ],
  },
  {
    id: "gallery",
    label: "Gallery",
    items: [
      { label: "Photos", href: "/gallery#photos" },
      { label: "Videos", href: "/gallery#videos" },
    ],
  },
];

export const navFlatLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#speciality", label: "Speciality" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
] as const;
