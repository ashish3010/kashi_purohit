import { specialityStats } from "@/features/speciality/speciality.data";

const description =
  "Pandit Prashant Shukla has a team of Qualified, Knowledgeable and Experienced Pandits who perform Pujas as per your community, language and region specifications. We take care of the entire process, right from booking and assigning the right Pandit, with best Muhurat, Puja Items, Puja Samagri, Flowers etc. All you need to do is to book the service, sit back and relax while we work on ensuring that you get a satisfying and divine Puja experience.";

export function SpecialitySection() {
  return (
    <section
      id="speciality"
      className="bg-kashi-red py-12 text-white md:py-16"
      aria-labelledby="speciality-heading"
    >
      <div className="mx-auto w-full max-w-lg px-6">
        <h2
          id="speciality-heading"
          className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl"
        >
          Speciality Of Prashant Shukla Pandit Ji
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-white/95 sm:text-base">{description}</p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
          {specialityStats.map((stat) => (
            <div key={stat.label} className="text-left">
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
