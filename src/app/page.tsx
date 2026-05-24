import type { Metadata } from "next";
import { AboutContactSection } from "@/features/contact/AboutContactSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { HomeCtaBanner } from "@/features/home/HomeCtaBanner";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { ServicesSection } from "@/features/services/ServicesSection";
import { SpecialitySection } from "@/features/speciality/SpecialitySection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { getRequestSiteLocale, getSiteCopy } from "@/lib/site-locale";

export async function generateMetadata(): Promise<Metadata> {
  const copy = getSiteCopy(await getRequestSiteLocale());
  return {
    alternates: { canonical: "/" },
    openGraph: { url: "/" },
    twitter: {
      title: `${copy.site.name} — ${copy.site.tagline}`,
    },
  };
}

export default async function Home() {
  const locale = await getRequestSiteLocale();
  const copy = getSiteCopy(locale);

  return (
    <div>
      <MobileSiteHeader copy={copy} locale={locale} />
      <main>
        <HeroSection copy={copy} />
        <AboutContactSection copy={copy} />
        <SpecialitySection copy={copy} />
        <ServicesSection copy={copy} />
        <TestimonialsSection copy={copy} />
        <HomeCtaBanner copy={copy} />
        <SiteFooter copy={copy} />
      </main>
      <StickyActionBar copy={copy} />
    </div>
  );
}
