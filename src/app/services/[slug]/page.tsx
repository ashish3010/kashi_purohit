import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/JsonLdScript";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { getAllServiceSlugs, getServiceBySlug } from "@/features/services/service-queries";
import { ServiceDetailContent } from "@/features/services/ServiceDetailContent";
import { buildBreadcrumbJsonLd, buildPageMetadata, buildServiceJsonLd } from "@/lib/seo";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const copy = getSiteCopy(await getRequestSiteLocale());
  const service = getServiceBySlug(copy, slug);
  if (!service) {
    return { title: "Service" };
  }
  return buildPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    image: { url: service.imageSrc, alt: service.imageAlt },
    type: "article",
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);
  const service = getServiceBySlug(copy, slug);
  if (!service) {
    notFound();
  }

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: copy.navigation.desktop[0]?.label ?? "Home", path: "/" },
    { name: copy.services.section.title, path: "/#services" },
    { name: service.title, path: `/services/${slug}` },
  ]);

  const serviceSchema = buildServiceJsonLd({
    name: service.title,
    description: service.description,
    path: `/services/${slug}`,
    imageUrl: service.imageSrc,
    providerName: copy.site.name,
  });

  return (
    <div>
      <JsonLdScript data={[breadcrumb, serviceSchema]} />
      <MobileSiteHeader copy={copy} locale={locale} />
      <main>
        <ServiceDetailContent service={service} backLabel={copy.common.backToServices} />
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
