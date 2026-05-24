import Image from "next/image";
import type { SiteCopy } from "@/lib/site-locale";
import { Container } from "@/features/common/Container";
import { IconMail, IconPhone, IconWhatsApp } from "@/features/common/icons";
import { SITE_CONTACT } from "@/config/site";

function formatIndiaTelForDisplay(tel: string) {
  const d = tel.replace(/\D/g, "");
  if (d.length >= 12 && d.startsWith("91")) {
    const n = d.slice(2, 12);
    return `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
  }
  return tel;
}

const phoneDisplay = formatIndiaTelForDisplay(SITE_CONTACT.telephone);

function IconSpark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M12 22a7 7 0 007-7c0-4-4-7-4-12 0-3-2-5-3-5s-3 2-3 5c0 5-4 8-4 12a7 7 0 007 7z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPeople({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" />
    </svg>
  );
}

const aboutFeatureIcons = [IconSpark, IconFlame, IconPeople, IconLayers] as const;

const profileImageSrc = "/images/profile.jpeg";

export function AboutContactSection({ copy }: { copy: SiteCopy }) {
  const yearsStat = copy.speciality.stats.find((s) => s.id === "experience");
  const featureStats = copy.speciality.stats.slice(0, 4);

  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <Container>
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div className="relative mx-auto mb-10 hidden max-w-md md:mx-0 md:mb-0 md:block md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-amber-200/60 bg-neutral-100 shadow-lg">
              <Image
                src={profileImageSrc}
                alt={copy.about.profileImageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 600px) 42vw, 100vw"
              />
            </div>
            {yearsStat ? (
              <div className="absolute bottom-5 right-5 max-w-[11rem] bg-kashi-red px-5 py-4 text-center shadow-lg">
                <p className="font-serif text-3xl font-semibold leading-none text-kashi-gold">
                  {yearsStat.value}+
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-wider text-white">
                  {yearsStat.label}
                </p>
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="font-serif text-3xl font-semibold text-kashi-red md:text-4xl">{copy.about.heading}</h2>
            <p className="mt-1 text-sm font-medium text-kashi-brown/80 md:text-base">{copy.about.subtitle}</p>

            <div className="relative mt-8 w-full md:hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-amber-200/60 bg-neutral-100 shadow-lg">
                <Image
                  src={profileImageSrc}
                  alt={copy.about.profileImageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              {yearsStat ? (
                <div className="absolute bottom-5 right-5 max-w-[11rem] bg-kashi-red px-5 py-4 text-center shadow-lg">
                  <p className="font-serif text-3xl font-semibold leading-none text-kashi-gold">
                    {yearsStat.value}+
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-wider text-white">
                    {yearsStat.label}
                  </p>
                </div>
              ) : null}
            </div>

            <blockquote className="mt-6 border-l-4 border-kashi-gold bg-kashi-cream/60 py-4 pl-4 pr-2 text-sm italic leading-relaxed text-kashi-brown/90 md:mt-8 md:text-base">
              {copy.about.quote}
            </blockquote>

            <p className="mt-6 hidden text-sm leading-relaxed text-kashi-brown/90 md:block md:text-base">
              {copy.speciality.longDescription}
            </p>

            <div className="mt-10 hidden grid-cols-2 gap-x-8 gap-y-8 md:grid">
              {featureStats.map((stat, i) => {
                const Icon = aboutFeatureIcons[i] ?? IconSpark;
                return (
                  <div key={stat.id} className="flex gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-kashi-red/25 text-kashi-red">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-serif text-xl font-semibold text-kashi-red">{stat.value}+</p>
                      <p className="mt-1 text-xs font-semibold uppercase leading-snug tracking-wide text-kashi-brown/75">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div id="contact" className="mt-12 md:mt-16">
          <div className="rounded-2xl bg-neutral-100 p-6 shadow-inner md:mx-auto md:max-w-3xl md:p-8">
            <h3 className="text-center text-xs font-bold uppercase tracking-[0.15em] text-kashi-brown/70">
              {copy.about.contactSectionTitle}
            </h3>

            <ul className="mt-6 space-y-5 md:mt-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kashi-red text-white">
                  <IconPhone />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {copy.about.phoneSupportLabel}
                  </p>
                  <a href={`tel:${SITE_CONTACT.telephone.replace(/\s/g, "")}`} className="text-base font-semibold text-kashi-brown">
                    {phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <IconWhatsApp />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {copy.about.whatsappLabel}
                  </p>
                  <a
                    href={SITE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-kashi-brown"
                  >
                    {copy.about.waDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 md:col-span-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kashi-gold text-white">
                  <IconMail />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {copy.about.emailLabel}
                  </p>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="break-all text-sm font-semibold text-kashi-brown sm:text-base"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
