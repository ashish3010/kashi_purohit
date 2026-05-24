import { getSiteUrl, SITE, SITE_ADDRESS, SITE_CONTACT, SITE_LOGO_PATH } from "@/config/site";

/** Organization + local business structured data for rich results. */
export function JsonLd() {
  const base = getSiteUrl();
  const logoUrl = `${base}${SITE_LOGO_PATH}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${base}/#business`,
        name: SITE.name,
        alternateName: SITE.tagline,
        description: SITE.description,
        url: base,
        image: logoUrl,
        logo: logoUrl,
        telephone: SITE_CONTACT.telephone,
        email: SITE_CONTACT.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_ADDRESS.streetAddress,
          addressLocality: SITE_ADDRESS.addressLocality,
          addressRegion: SITE_ADDRESS.addressRegion,
          postalCode: SITE_ADDRESS.postalCode,
          addressCountry: SITE_ADDRESS.addressCountry,
        },
        areaServed: {
          "@type": "City",
          name: "Varanasi",
          containedInPlace: { "@type": "Country", name: "India" },
        },
        sameAs: [SITE_CONTACT.whatsappUrl],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
