import type { Metadata } from "next";
import { AboutContactSection } from "@/features/contact/AboutContactSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { MobileSiteHeader } from "@/features/navigation/MobileSiteHeader";
import { SiteFooter } from "@/features/navigation/SiteFooter";
import { StickyActionBar } from "@/features/navigation/StickyActionBar";
import { ServicesSection } from "@/features/services/ServicesSection";
import { SpecialitySection } from "@/features/speciality/SpecialitySection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
  twitter: {
    title: `${SITE.name} — ${SITE.tagline}`,
  },
};

export default function Home() {
  return (
    <div>
      <MobileSiteHeader />
      <main>
        <HeroSection />
        <AboutContactSection />
        <SpecialitySection />
        <ServicesSection />
        <TestimonialsSection />
        <SiteFooter />
      </main>
      <StickyActionBar />
    </div>
  );
}
