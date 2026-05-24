import type { SiteCopy } from "@/lib/site-locale";

export function SpecialitySection({ copy }: { copy: SiteCopy }) {
  return (
    <section
      id="speciality"
      className="bg-kashi-red py-12 text-white md:hidden"
      aria-labelledby="speciality-heading"
    >
      <div className="mx-auto w-full max-w-lg px-6">
        <h2
          id="speciality-heading"
          className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl"
        >
          {copy.speciality.heading}
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-white/95 sm:text-base">
          {copy.speciality.longDescription}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
          {copy.speciality.stats.map((stat) => (
            <div key={stat.id} className="text-left">
              <p className="font-serif text-4xl font-semibold leading-none text-[#5dd5ec] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase leading-snug tracking-wide text-white sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
