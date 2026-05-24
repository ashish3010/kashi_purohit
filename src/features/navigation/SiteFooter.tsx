import Link from "next/link";
import { Container } from "@/features/common/Container";
import { IconMapPin } from "@/features/common/icons";

const rituals = ["Havan Pujan", "Karma Kandi", "Upnayan Sanskar", "Shadi Vivah"];

const quickLinks = ["Home", "Photo Gallery", "Temple", "Contact"];

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-kashi-charcoal pb-28 pt-12 text-kashi-cream/90 md:pb-12">
      <Container>
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-semibold text-kashi-gold">Kashi Purohit</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Expert Hindu puja and ceremony services in the spiritual heart of India.
          </p>
          <div className="mt-5 flex gap-3 text-sm text-white/80">
            <IconMapPin className="mt-0.5 shrink-0 text-kashi-gold" />
            <address className="not-italic leading-relaxed">
              A 11/42 Naya Mahadev Rajghat, Varanasi, UP 221001
            </address>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-kashi-gold">Rituals</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              {rituals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-kashi-gold">
              Quick links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              {quickLinks.map((item) => (
                <li key={item}>
                  {item === "Home" ? (
                    <Link href="/#home" className="hover:text-white">
                      {item}
                    </Link>
                  ) : item === "Contact" ? (
                    <Link href="/#contact" className="hover:text-white">
                      {item}
                    </Link>
                  ) : item === "Photo Gallery" ? (
                    <Link href="/gallery" className="hover:text-white">
                      {item}
                    </Link>
                  ) : item === "Temple" ? (
                    <Link href="/rituals/temple-darshan" className="hover:text-white">
                      {item}
                    </Link>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-[11px] leading-relaxed text-white/45">
          © {new Date().getFullYear()} Kashi Purohit. Digital services by Digital Dreamers Studio.
          <br />
          Naya Mahadev, Rajghat, Varanasi.
        </p>
      </Container>
    </footer>
  );
}
