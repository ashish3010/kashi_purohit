import Link from "next/link";
import type { SiteCopy } from "@/lib/site-locale";
import { IconPhone, IconWhatsApp } from "@/features/common/icons";
import { SITE_CONTACT } from "@/config/site";

function formatIndiaTelForDisplay(tel: string) {
  const d = tel.replace(/\D/g, "");
  if (d.length >= 12 && d.startsWith("91")) {
    const n = d.slice(2, 12);
    return `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
  }
  return tel;
}

export function HomeCtaBanner({ copy }: { copy: SiteCopy }) {
  const phoneDisplay = formatIndiaTelForDisplay(SITE_CONTACT.telephone);
  const phoneTel = SITE_CONTACT.telephone.replace(/\s/g, "");

  return (
    <section aria-label={copy.cta.ariaLabel} className="hidden bg-kashi-cream py-12 md:block md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:max-w-7xl lg:px-8">
        <div className="rounded-3xl bg-kashi-red px-8 py-12 text-center text-white shadow-xl ring-1 ring-black/10 lg:px-14 lg:py-14">
          <h2 className="font-serif text-3xl font-semibold leading-snug lg:text-4xl">{copy.cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
            {copy.site.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-kashi-gold px-6 py-3.5 text-sm font-bold text-kashi-charcoal shadow-md transition hover:bg-kashi-gold/90"
            >
              <IconPhone className="h-5 w-5 shrink-0" />
              {phoneDisplay}
            </a>
            <Link
              href={SITE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" />
              {copy.cta.whatsappButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
