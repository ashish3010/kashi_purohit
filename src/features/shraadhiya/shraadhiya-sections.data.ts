export type ShraadhiyaSection = {
  anchorId: string;
  title: string;
  paragraphs: string[];
};

/** Single-page Shraadhiya Karm content; `anchorId` matches URL hash (e.g. #gaya-pind). */
export const shraadhiyaSections: ShraadhiyaSection[] = [
  {
    anchorId: "gaya-pind",
    title: "Gaya Pind Shraadh",
    paragraphs: [
      "The tradition of pind daan in Gaya goes back many centuries. Shastra holds Gaya among the most fruitful places for ancestors’ liberation. Here, pind daan, tarpan, and brahman bhoj performed according to vidhi are believed to fulfil pitru ṛṇa.",
      "Pind daan at Gaya is offered to nourish and release the subtle body of ancestors. With correct sankalpa, tithi, and mantras—often invoking Lord Vishnu and the lineage of pitrus—families seek mukti and peace for departed souls.",
      "Our purohits help you plan travel or proxy arrangements, list samagri, and follow the sequence suited to your gotra and community. Contact us for muhurat and day-wise guidance before you reach Gaya.",
    ],
  },
  {
    anchorId: "varanasi-pind",
    title: "Varanasi Pind Shraadh",
    paragraphs: [
      "On the banks of the Ganga in Kashi, the glory of pind daan and tarpan is boundless. It is said that Lord Shiva caught the river descending from heaven in his matted hair and released it gently in Kashi, which is why this flow is considered supremely sacred.",
      "It is believed that dying or performing last rites in Varanasi brings special merit; pind daan at ghats such as Dashashwamedh, Manikarnika, or Pisachmochan supports pitru shanti when done with vidhi.",
      "We arrange boat or ghat access where needed, explain each step in English, and align offerings with your family’s paddhati so the day remains focused on remembrance and prayer.",
    ],
  },
  {
    anchorId: "mrityu-parant",
    title: "Mrityuparant Shradh",
    paragraphs: [
      "After death, the soul’s journey and the rites for ancestors once the body is released carry special weight. Dashah, barsi, annual shraddha, and similar karmas are observed according to each family’s tradition.",
      "Mrityuparant rites help the family observe antyeshti follow-up with clarity—tarpan, feeding, path, and periodic shraddha—so emotional and dharmic duties move in an orderly way.",
      "Share dates, gotra, and regional preferences; we suggest proportionate karm at Naya Mahadev, Rajghat, or coordinated support if you join from other cities.",
    ],
  },
  {
    anchorId: "shad-pind-daan-asthi-sanchayan",
    title: "Shad Pind Daan (Asthi Sanchayan)",
    paragraphs: [
      "It is a son’s dharma to perform shraddha, tarpan, and pind daan for the pitrus. Pitru Paksha especially emphasises pind daan and tarpan; shad pind and asthi sanchayan are done as prescribed in specific situations.",
      "Shad pind sequences and asthi sanchayan require counting, purity, and correct order of offerings. Pandit ji guides yajamans step by step, including documentation needs for families travelling from abroad.",
      "Book a consultation with tithi and place of asthi visarjan if applicable; we prepare samagri lists and time estimates for the full programme.",
    ],
  },
  {
    anchorId: "dashgaatra-dashva",
    title: "Dashgaatra (Dashva)",
    paragraphs: [
      "Dashgaatra pinds are among the special pinds offered for the departed; by family tradition, mantra, homa, and bhoj follow a set sequence.",
      "Dashgaatra or dashva marks important post-death milestones; paddhati varies by region. We align mantras and homa with your family’s custom and clarify the role of relatives and dakshina.",
      "Call with dates and gotra—we prepare samagri lists, seating, and a clear flow for the day so every participant understands their part.",
    ],
  },
  {
    anchorId: "ekadashaah-11-din",
    title: "Ekadashaah — eleven-day shraddha",
    paragraphs: [
      "Ekadashaah prescribes regular tarpan, recitation, and brahman bhoj for eleven days. Shraddha on the eleventh day holds special significance; purity and steady focus are needed throughout.",
      "Eleven-day shraddha needs pacing: daily tarpan, feeding, and path without gaps. We help schedule brahman bhoj when included and coordinate relatives joining mid-sequence.",
      "Discuss your preferences for recitation pacing and any dietary notes for bhoj; we keep the calendar transparent for the whole family.",
    ],
  },
  {
    anchorId: "dwadashah-12-din",
    title: "Dwadashah Shraddha",
    paragraphs: [
      "Dwadashah is a shraddha programme spanning twelve days; each day’s rules, mantras, and meals follow the order set by shastra and tradition.",
      "Dwadashah supports sustained remembrance with structured daily duties until completion rites. Kitchen purity, guest lists, and communication plans are part of practical planning.",
      "We clarify who performs each day’s sankalpa and how prasad or daan extends to the needy when that is part of your vow.",
    ],
  },
  {
    anchorId: "shaiyya-daan-brahman-bhoj",
    title: "Shaiyya Daan Brahman Bhoj",
    paragraphs: [
      "Shaiyya daan and brahman bhoj honour scholars and offer food for the ancestors’ satisfaction. With an auspicious muhurat and recitation at the meal, the merit increases.",
      "Bedding (shaiyya) daan and brahman bhoj build merit when done proportionately and respectfully. We advise quantities, menu norms for your community, and recitation that accompanies the meal.",
      "For larger gatherings we help with seating, annaprashana-style purity notes, and orderly distribution of dakshina.",
    ],
  },
  {
    anchorId: "narayan-bali-tripindi-shraadh",
    title: "Narayan Bali / Tripindi Shraadh",
    paragraphs: [
      "Narayan bali and tripindi shraddha aim to give the pitrus onward movement (gati) and to calm specific afflictions. These rites should be done only under a suitable muhurat by experienced purohits.",
      "Hindu tradition speaks of pitru runa, rishi runa, and paramatma runa; these rites are timed to lunar months and tithis as advised by shastra and your jyotish, with transparent expenditure guidance.",
      "Share prior astrological advice if any; we confirm eligibility, duration, follow-up tarpan, and integration with your family’s ongoing shraddha calendar.",
    ],
  },
];
