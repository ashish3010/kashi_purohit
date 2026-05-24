import Link from "next/link";
import type { SiteCopy } from "@/lib/site-locale";
import { Container } from "@/features/common/Container";
import { shraadhiyaSections } from "@/features/shraadhiya/shraadhiya-sections.data";

export function ShraadhiyaKarmSections({ copy }: { copy: SiteCopy }) {
  const sectionEyebrow = copy.pages.shraadhiya.sectionEyebrow;

  return (
    <>
      {shraadhiyaSections.map((section, index) => (
        <section
          key={section.anchorId}
          id={section.anchorId}
          className="scroll-mt-[5.5rem] pt-12 min-[1000px]:scroll-mt-24"
        >
          <Container
            className={
              index === shraadhiyaSections.length - 1 ? "pb-24 md:pb-8" : ""
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

export function ShraadhiyaKarmIntro({ copy }: { copy: SiteCopy }) {
  const p = copy.pages.shraadhiya;

  return (
    <Container className="pt-3 pb-6 sm:pt-4">
      <Link
        href="/#home"
        className="text-sm font-semibold text-kashi-red underline-offset-4 hover:underline"
      >
        {copy.common.backToHome}
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-bold leading-tight text-[#701a1a] sm:text-4xl">
        {p.title}
      </h1>
      <p className="mt-8 text-base leading-relaxed text-neutral-700">{p.intro}</p>
    </Container>
  );
}
