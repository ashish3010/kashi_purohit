import Link from "next/link";
import type { SiteCopy } from "@/lib/site-locale";
import { Container } from "@/features/common/Container";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/features/common/icons";
import { SITE_CONTACT, SITE_ADDRESS } from "@/config/site";
import { getServiceList } from "@/features/services/service-queries";

function formatIndiaTelForDisplay(tel: string) {
  const d = tel.replace(/\D/g, "");
  if (d.length >= 12 && d.startsWith("91")) {
    const n = d.slice(2, 12);
    return `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
  }
  return tel;
}

const addressLine = `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`;

export function SiteFooter({ copy }: { copy: SiteCopy }) {
  const phoneDisplay = formatIndiaTelForDisplay(SITE_CONTACT.telephone);
  const services = getServiceList(copy);

  return (
    <footer id="footer" className="bg-kashi-charcoal pb-28 pt-12 text-kashi-cream/90 md:pb-12 md:pt-16">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-kashi-gold">{copy.site.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{copy.site.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-kashi-gold">{copy.footer.quickLinksHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {copy.footer.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-kashi-gold">{copy.footer.servicesHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-kashi-gold">{copy.footer.getInTouchHeading}</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-kashi-gold" />
                <address className="not-italic leading-relaxed">{addressLine}</address>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-kashi-gold" />
                <a href={`tel:${SITE_CONTACT.telephone.replace(/\s/g, "")}`} className="font-medium hover:text-white">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconWhatsApp className="h-5 w-5 shrink-0 text-kashi-gold" />
                <Link
                  href={SITE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-white"
                >
                  {copy.footer.whatsappLinkLabel}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-kashi-gold" />
                <a href={`mailto:${SITE_CONTACT.email}`} className="break-all font-medium hover:text-white">
                  {SITE_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[11px] leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {copy.site.name}. {copy.footer.copyrightSuffix}
          </p>
          <p className="md:text-right">{copy.footer.locationLine}</p>
        </div>
      </Container>
    </footer>
  );
}
