import Image from "next/image";
import Link from "next/link";
import { Container } from "@/features/common/Container";

export type ArticleDetailProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** When omitted, no hero image is shown (text-only layout). */
  imageSrc?: string;
  imageAlt?: string;
};

export function ArticleDetailContent({
  backHref,
  backLabel,
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: ArticleDetailProps) {
  return (
    <>
      {imageSrc ? (
        <div className="relative aspect-[16/10] w-full bg-neutral-100">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ) : null}

      <Container
        className={
          imageSrc ? "py-8 pb-24 md:pb-8" : "pt-3 pb-24 md:pb-8 sm:pt-4"
        }
      >
        <Link
          href={backHref}
          className="text-sm font-semibold text-kashi-red underline-offset-4 hover:underline"
        >
          {backLabel}
        </Link>

        <p className={`text-sm font-medium text-[#d97706] ${imageSrc ? "mt-8" : "mt-5"}`}>{eyebrow}</p>
        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#701a1a] sm:text-4xl">
          {title}
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </>
  );
}
