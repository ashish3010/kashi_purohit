import {
  getSiteUrl,
  SITE_ADDRESS,
  SITE_CONTACT,
  SITE_LOGO_PATH,
} from "@/config/site";
import type { SiteCopy } from "@/lib/site-locale";

/** Organization + local business structured data for rich results. */
export function JsonLd({ copy }: { copy: SiteCopy }) {
  const base = getSiteUrl();
  const logoUrl = `${base}${SITE_LOGO_PATH}`;
  const { site } = copy;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${base}/#business`,
        name: site.name,
        alternateName: site.tagline,
        description: site.description,
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
