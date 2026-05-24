import { Container } from "@/features/common/Container";
import { TestimonialCard } from "@/features/testimonials/TestimonialCard";
import { testimonials } from "@/features/testimonials/testimonials.data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-kashi-cream py-14">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-kashi-red">Blessed Experiences</h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Words from our devotees
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
