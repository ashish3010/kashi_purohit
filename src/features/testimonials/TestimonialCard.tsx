import type { TestimonialItem } from "@/features/testimonials/testimonials.data";

type TestimonialCardProps = {
  item: TestimonialItem;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_6px_24px_rgb(0,0,0,0.05)]">
      <div className="text-kashi-gold">★★★★★</div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.text}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kashi-cream font-serif text-sm font-bold text-kashi-red">
          {item.initials}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-kashi-brown">{item.name}</p>
          <p className="text-xs text-neutral-500">{item.location}</p>
        </div>
      </div>
    </article>
  );
}
