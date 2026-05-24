import Image from "next/image";
import type { SiteCopy } from "@/lib/site-locale";

/** `public/images/mobile_banner.png` — viewports below 1000px. */
const heroImageMobile = "/images/mobile_banner.png";
/** `public/images/desktop_banner.png` — viewports 1000px and wider. */
const heroImageDesktop = "/images/desktop_banner.png";

export function HeroSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="home" className="relative min-h-[78vh] w-full overflow-hidden md:min-h-[88vh]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 block min-[1000px]:hidden">
          <Image
            src={heroImageMobile}
            alt={copy.hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden min-[1000px]:block">
          <Image
            src={heroImageDesktop}
            alt={copy.hero.imageAlt}
            fill
            loading="eager"
            className="object-cover object-left"
            sizes="100vw"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[78vh] max-w-lg flex-col justify-end px-4 pb-14 pt-28 md:min-h-[88vh] md:max-w-4xl md:justify-center md:pb-20 md:pt-24 lg:max-w-5xl">
        <p className="mb-4 hidden w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm md:inline-block">
          {copy.site.tagline}
        </p>
        <h1 className="font-serif text-3xl font-semibold leading-snug text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85)] md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl">
          {copy.hero.headline}
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.75)] md:mt-6 md:max-w-xl md:text-base lg:text-lg">
          {copy.hero.subheadline}
        </p>

        <a
          href="#about"
          className="mx-auto mt-10 hidden flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white md:mt-12 md:flex"
        >
          <span className="sr-only">{copy.hero.scrollToAboutSr}</span>
          <span aria-hidden className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 pt-1">
            <span className="block h-1.5 w-1 rounded-full bg-white/90" />
          </span>
          {copy.hero.scrollLabel}
        </a>
      </div>
    </section>
  );
}
