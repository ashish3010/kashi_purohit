import {
  getSiteUrl,
  SITE_ADDRESS,
  SITE_CONTACT,
  SITE_GEO,
  SITE_LOGO_PATH,
  SITE_OG_IMAGE_PATH,
  SITE_SOCIAL,
} from "@/config/site";
import { getServiceList } from "@/features/services/service-queries";
import type { SiteCopy } from "@/lib/site-locale";
import { JsonLdScript } from "./JsonLdScript";

/** Organization, local business, website, person, services, and reviews for rich results. */
export function JsonLd({ copy }: { copy: SiteCopy }) {
  const base = getSiteUrl();
  const logoUrl = `${base}${SITE_LOGO_PATH}`;
  const bannerUrl = `${base}${SITE_OG_IMAGE_PATH}`;
  const { site } = copy;
  const services = getServiceList(copy);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: site.name,
      description: site.description,
      inLanguage: ["en-IN", "hi-IN"],
      publisher: { "@id": `${base}/#business` },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${base}/#business`,
      name: site.name,
      alternateName: ["Kashi Purohit", site.tagline, "Pandit Prashant Shukla Varanasi"],
      description: site.description,
      url: base,
      image: [logoUrl, bannerUrl],
      logo: logoUrl,
      telephone: SITE_CONTACT.telephone,
      email: SITE_CONTACT.email,
      priceRange: "$$",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_ADDRESS.streetAddress,
        addressLocality: SITE_ADDRESS.addressLocality,
        addressRegion: SITE_ADDRESS.addressRegion,
        postalCode: SITE_ADDRESS.postalCode,
        addressCountry: SITE_ADDRESS.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_GEO.latitude,
        longitude: SITE_GEO.longitude,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Varanasi",
          containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
        },
        { "@type": "Country", name: "India" },
      ],
      founder: { "@id": `${base}/#pandit` },
      employee: { "@id": `${base}/#pandit` },
      sameAs: [SITE_SOCIAL.whatsapp],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vedic Ritual Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${base}/services/${service.id}`,
            image: `${base}${service.imageSrc}`,
          },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: copy.testimonials.items.length,
        bestRating: "5",
        worstRating: "1",
      },
      review: copy.testimonials.items.map((item) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: item.name,
        },
        reviewBody: item.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      })),
    },
    {
      "@type": "Person",
      "@id": `${base}/#pandit`,
      name: site.panditName,
      jobTitle: "Karmakandi Pandit",
      description: copy.about.quote,
      image: `${base}/images/profile.jpeg`,
      worksFor: { "@id": `${base}/#business` },
      knowsAbout: [
        "Vedic rituals",
        "Hawan",
        "Shraddha",
        "Karm kaand",
        "Hindu wedding ceremonies",
        "Rudrabhishek",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_ADDRESS.addressLocality,
        addressRegion: SITE_ADDRESS.addressRegion,
        addressCountry: SITE_ADDRESS.addressCountry,
      },
    },
  ];

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  );
}
