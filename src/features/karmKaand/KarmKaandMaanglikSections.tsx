import Link from "next/link";
import { Container } from "@/features/common/Container";
import { karmKaandSections } from "@/features/karmKaand/karm-kaand-sections.data";

const sectionEyebrow = "Karm Kaand - Maanglik";

export function KarmKaandMaanglikSections() {
  return (
    <>
      {karmKaandSections.map((section, index) => (
        <section
          key={section.anchorId}
          id={section.anchorId}
          className="scroll-mt-[5.5rem] pt-12 md:scroll-mt-24"
        >
          <Container
            className={
              index === karmKaandSections.length - 1 ? "pb-24 md:pb-8" : ""
            }
          >
            <p className="text-sm font-medium text-[#d97706]">{sectionEyebrow}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#701a1a] sm:text-3xl">
              {section.title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

export function KarmKaandMaanglikIntro() {
  return (
    <Container className="pt-3 pb-6 sm:pt-4">
      <Link
        href="/#home"
        className="text-sm font-semibold text-kashi-red underline-offset-4 hover:underline"
      >
        ← Back to Home
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-bold leading-tight text-[#701a1a] sm:text-4xl">
        Karm Kaand — Maanglik
      </h1>
      <p className="mt-8 text-base leading-relaxed text-neutral-700">
        Auspicious lifecycle and worship rites in one place. Use the menu to jump here; the page scrolls to the matching section.
      </p>
    </Container>
  );
}
