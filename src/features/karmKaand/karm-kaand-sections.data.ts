export type KarmKaandSection = {
  anchorId: string;
  title: string;
  paragraphs: string[];
};

/** Single-page Karm Kaand — Maanglik; `anchorId` matches URL hash (e.g. #gau-daan). */
export const karmKaandSections: KarmKaandSection[] = [
  {
    anchorId: "upanayan-janeu-shaadi-vivaah",
    title: "Upnayan Janeu / Shaadi Vivaah",
    paragraphs: [
      "Upanayana and vivah are cornerstone sanskaras. We combine clear rehearsal timelines, havan needs, and plain-English explanation for guests where helpful.",
      "From lagna patrika alignment to saptapadi, pandit ji keeps dignity and authenticity at the centre.",
    ],
  },
  {
    anchorId: "bhoomi-pujan-grih-pravesh",
    title: "Bhoomi Pujan / Grih Pravesh",
    paragraphs: [
      "Bhoomi puja stabilises a new build; grih pravesh welcomes devatas and family into a protected home with havan and ashirvad.",
      "We review floor plans for directions, entry muhurat, and minimal samagri you can source locally.",
    ],
  },
  {
    anchorId: "rudrabhishek-maha-mrityunjay",
    title: "Rudrabhishek / Maha Mrityunjay",
    paragraphs: [
      "Rudrabhishek with Rudram and Maha Mrityunjaya path supports recovery, longevity sankalpa, and mental steadiness when done with shraddha.",
      "Choose single-day or extended jap counts; we provide tally cards and prasad options.",
    ],
  },
  {
    anchorId: "ramayan-bhagwad-katha",
    title: "Ramayan / Bhagwad Katha",
    paragraphs: [
      "Saptah or shorter katha formats bring scripture alive for families and mandals; havan and arti slots integrate with the vyas’s paddhati.",
      "Discuss audience size, how explanations should be paced in English, and audio needs for larger halls.",
    ],
  },
  {
    anchorId: "satchandi-durga-paath",
    title: "Satchandi / Durga Paath",
    paragraphs: [
      "Satchandi and Durga paath require disciplined recitation counts and clean akhand arrangements for lamp and sthapana where included.",
      "We clarify duration, paath team size, and homa culmination for your sankalpa.",
    ],
  },
  {
    anchorId: "gau-daan",
    title: "Gau Daan",
    paragraphs: [
      "Gau daan is among the highest mahadaan; vidhi must align with ethical sourcing and local regulation. We coordinate with trusted goshalas and documentation.",
      "Families perform sankalpa, puja of the cow, and feeding under pandit guidance.",
    ],
  },
  {
    anchorId: "other-hawan-pujan-and-katha",
    title: "Other Hawan Pujan and Katha",
    paragraphs: [
      "If your need is not listed—annual satyanarayan, navgrah shanti, baglamukhi, or mixed sankalpa—we design a clean programme with transparent pricing.",
      "Share deity preference, duration, and attendee profile; we revert with a proposed outline.",
    ],
  },
];
