import Image from "next/image";
import { Button } from "@/features/common/Button";

/** Served from `public/images/mobile_banner.png` */
const heroImage = "/images/mobile_banner.png";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[78vh] w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Evening aarti and lamps on the Ganges at Varanasi ghats"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[78vh] max-w-lg flex-col justify-end px-4 pb-14 pt-28">
        <h1 className="font-serif text-3xl font-semibold leading-snug text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85)] sm:text-4xl">
          Authentic Vedic Rituals in the Holy City of Kashi
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.75)]">
          Pandit Prashant Shukla provides expert spiritual guidance and puja
          services at Naya Mahadev, Rajghat.
        </p>
        <div className="mt-8 w-full">
          <Button className="w-full rounded-md py-4 text-base font-bold tracking-normal">
            Book Your Puja +
          </Button>
        </div>
      </div>
    </section>
  );
}
