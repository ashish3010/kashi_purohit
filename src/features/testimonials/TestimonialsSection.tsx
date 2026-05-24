import type { SiteCopy } from "@/lib/site-locale";
import { Container } from "@/features/common/Container";
import { TestimonialCard } from "@/features/testimonials/TestimonialCard";

export function TestimonialsSection({ copy }: { copy: SiteCopy }) {
  const familiesStat = copy.speciality.stats.find((s) => s.id === "clientele");
  const typesStat = copy.speciality.stats.find((s) => s.id === "hawanTypes");

  return (
    <section id="testimonials" className="bg-kashi-cream py-14 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-semibold text-kashi-red md:text-4xl">
              {copy.testimonials.title}
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {copy.testimonials.eyebrow}
            </p>
          </div>

          <div className="hidden gap-10 md:flex">
            {familiesStat ? (
              <div>
                <p className="font-serif text-3xl font-semibold text-kashi-red lg:text-4xl">
                  {familiesStat.value}+
                </p>
                <p className="mt-1 max-w-[10rem] text-[10px] font-bold uppercase leading-snug tracking-wide text-kashi-brown/70">
                  {familiesStat.label}
                </p>
              </div>
            ) : null}
            {typesStat ? (
              <div>
                <p className="font-serif text-3xl font-semibold text-kashi-red lg:text-4xl">
                  {typesStat.value}+
                </p>
                <p className="mt-1 max-w-[12rem] text-[10px] font-bold uppercase leading-snug tracking-wide text-kashi-brown/70">
                  {typesStat.label}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
          {copy.testimonials.items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
