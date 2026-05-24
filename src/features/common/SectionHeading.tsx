type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, titleClassName = "" }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-kashi-gold/60" aria-hidden />
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kashi-gold">
          {eyebrow}
        </p>
        <span className="h-px w-10 bg-kashi-gold/60" aria-hidden />
      </div>
      <h2
        className={`font-serif text-3xl font-semibold leading-tight text-kashi-red md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}
