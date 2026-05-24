import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/config/site";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { getAllServiceSlugs, getServiceBySlug } from "@/features/services/service-queries";
import { ServiceDetailContent } from "@/features/services/ServiceDetailContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | ${SITE.name}`,
      description: service.description,
      url: `/services/${slug}`,
      type: "article",
      images: [{ url: service.imageSrc, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${SITE.name}`,
      description: service.description,
      images: [service.imageSrc],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  return (
    <div>
      <MobileSiteHeader />
      <main>
        <ServiceDetailContent service={service} />
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
