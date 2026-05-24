export type ServiceItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  /** Full article body shown on the service detail page */
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export const services: ServiceItem[] = [
  {
    id: "hawan-pujan",
    category: "Vedic Fire Ritual",
    title: "Hawan Pujan",
    description:
      "Sacred fire rituals performed for prosperity, health, and spiritual cleansing of your home and family, with proper mantras and ahuti as per your tradition.",
    paragraphs: [
      "While offering ahuti during havan, devotees often ask why we say “svaha.” Svaha means offering into the fire; each ahuti together with mantra recitation is meant to satisfy the devas and rishis.",
      "In Vedic Hinduism, a homa, also called havan, is a fire ritual offered on auspicious days and for specific sankalpa—whether for grih pravesh, health, marriage, or yearly peace. A qualified purohit maintains consecrated fire and offers ghee, grains, and samagri with precise mantras from the Vedas and allied texts.",
      "At Kashi Purohit, hawan is arranged with correct muhurat, clean samagri, and clear guidance in English, matched to your sampradaya. You may join in person in Varanasi or coordinate remotely with sankalpa and prasad options as discussed with Pandit ji.",
    ],
    imageSrc: "/images/hawan.png",
    imageAlt: "Hawan Pujan rituals",
  },
  {
    id: "karma-kaand",
    category: "Karma Kand Services",
    title: "Karma Kaand",
    description:
      "Complete karmakand and ritual services by qualified pandits—havan, paath, and ceremonies aligned with your community, language, and regional vidhi.",
    paragraphs: [
      "Karmkand refers to ritual services performed by adhyayan-shrotriya pandits according to shruti–smriti and local paddhati. Dakshina supports the dharma of learning and teaching; the yajamana receives punya and order in life through correctly performed rites.",
      "The Vedas are broadly studied as Karma Kand (ritual portion: Samhitas, Brahmanas, Purva Mimamsa) and Jnana Kand (knowledge portion: Aranyakas, Upanishads, Brahma Sutras). Karma Kand addresses devarchana, yajna, and sanskar; Jnana Kand points to Brahman and moksha.",
      "We assist with naming ceremonies, shraddha, annual tarpan, temple pujas, and extended karmakand sequences. Tell us your gotra, veda-shakha preference if any, and region—we match the vidhi accordingly.",
    ],
    imageSrc: "/images/karm-kand.png",
    imageAlt: "Karma kaand ritual arrangement",
  },
  {
    id: "upnayan-sanskar",
    category: "Sacred Sanskar",
    title: "Upnayan Sanskar",
    description:
      "Traditional thread ceremony marking the beginning of Vedic study, with sacred yagyopavita and mantras conducted under auspicious muhurat.",
    paragraphs: [
      "Upanayana is a principal samskara marking entrance to brahmacharya and Vedic study under a guru. The yagyopavita (janeu) is worn from the left shoulder across the chest; mantras and homa vary by region and community.",
      "The ceremony includes shaving (optional by custom), maunji mekhala, instruction in sandhya and gayatri, and blessings from elders. Muhurat is chosen for stability and long-term learning.",
      "Book a consultation for date, samagri list, and family participation. We respect regional and paddhati differences across Bharatavarsha.",
    ],
    imageSrc: "/images/upnayan.jpg",
    imageAlt: "Upanayan sanskar ceremony",
  },
  {
    id: "shaadi-vivah",
    category: "Marriage & Vivah",
    title: "Shaadi Vivah",
    description:
      "Hindu wedding rituals from engagement to saptapadi—mantras, kanyadaan, and havan—performed with devotion so your union begins with divine blessings.",
    paragraphs: [
      "Hindu vivah is a samskara uniting two families before Agni as witness. Core steps often include vara-puja, kanyadaan, hastmelap, mangal pheras (saptapadi), and ashirvachan—with regional additions like jaimala or custom vows.",
      "Pandit ji helps align the lagna patrika with practical scheduling, havan requirements, and clear communication for both sides. Pre-wedding grih shanti or ganesh puja can be bundled on request.",
      "Whether a simple temple ceremony or a fuller two-day program, we focus on clarity, dignity, and authentic mantra path so your day remains spiritually meaningful.",
    ],
    imageSrc: "/images/vivah.jpg",
    imageAlt: "Shaadi Vivah wedding ceremony",
  },
  {
    id: "kundali-dosh-pujan",
    category: "Jyotish & Remedies",
    title: "Kundali Dosh Pujan",
    description:
      "Guidance on birth-chart doshas and targeted pujas, jap, and daan to harmonise grahas and support peace, career, and relationships under Vedic astrology.",
    paragraphs: [
      "A kundli maps grahas across twelve bhavas from the time and place of birth. Doshas such as Mangal dosh, Kaal Sarp, or Nadi are analysed not to create fear but to suggest proportionate shanti and ethical conduct.",
      "Remedies may include specific pujas, mantra japa counts, daan on suitable days, and fasting where appropriate—all under muhurat and proportionate to the chart.",
      "Share accurate birth data for initial review; in-person or remote sankalpa can be arranged after discussion with Pandit ji.",
    ],
    imageSrc: "/images/kundali-dosh.png",
    imageAlt: "Kundali dosh pujan",
  },
  {
    id: "rudrabhishek",
    category: "Shiva Puja",
    title: "Rudrabhishek",
    description:
      "Supreme Rudrabhishek with Rudram–Chamakam, panchamrit abhishek, and bilva offerings to invoke Lord Shiva’s grace, protection, and inner calm.",
    paragraphs: [
      "Rudrabhishek is among the highest forms of Shiva archana: abhishek with panchamrit, gangajal, bel patra, and bilva while Rudram–Chamakam is recited with devotion.",
      "Benefits traditionally include removal of obstacles, peace of mind, and family welfare when performed with shraddha and correct paddhati.",
      "We perform at Naya Mahadev, Rajghat, or as arranged after consultation. Prasad and photo updates can be shared for remote families when agreed in advance.",
    ],
    imageSrc: "/images/rudravishek.png",
    imageAlt: "Rudrabhishek puja offerings",
  },
];
