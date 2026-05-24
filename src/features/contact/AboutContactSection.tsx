import { Container } from "@/features/common/Container";
import { IconMail, IconPhone, IconWhatsApp } from "@/features/common/icons";

const phoneDisplay = "70075 55204";
const waDisplay = "93357 39640";
const email = "panditprashantshuklaji@gmail.com";

export function AboutContactSection() {
  return (
    <section id="about" className="bg-white py-14">
      <Container>
        <div id="contact">
          <h2 className="font-serif text-3xl font-semibold text-kashi-red">Pandit Prashant Shukla</h2>
          <p className="mt-1 text-sm font-medium text-kashi-brown/80">
            Karmakandi Pandit — Naya Mahadev, Varanasi
          </p>

          <blockquote className="mt-8 border-l-4 border-kashi-gold bg-kashi-cream/60 py-4 pl-4 pr-2 text-sm italic leading-relaxed text-kashi-brown/90">
            Qualified, knowledgeable and experienced Pandits who perform pujas as per your
            community, language and region specifications.
          </blockquote>

          <div className="mt-10 rounded-2xl bg-neutral-100 p-6 shadow-inner">
            <h3 className="text-center text-xs font-bold uppercase tracking-[0.15em] text-kashi-brown/70">
              Contact Information
            </h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kashi-red text-white">
                  <IconPhone />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Phone Support
                  </p>
                  <a href="tel:+917007555204" className="text-base font-semibold text-kashi-brown">
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
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919335739640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-kashi-brown"
                  >
                    {waDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kashi-gold text-white">
                  <IconMail />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-sm font-semibold text-kashi-brown sm:text-base"
                  >
                    {email}
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
