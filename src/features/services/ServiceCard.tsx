import Image from "next/image";
import Link from "next/link";
import type { SiteCopy } from "@/lib/site-locale";
import { IconArrowUpRight } from "@/features/common/icons";
import type { ServiceItem } from "@/features/services/services.data";

type ServiceCardProps = {
  copy: SiteCopy;
  service: ServiceItem;
};

export function ServiceCard({ copy, service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-amber-200/70 bg-[#fdfcf8] shadow-[0_2px_16px_rgb(0,0,0,0.04)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-neutral-100">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-medium text-[#d97706] sm:text-sm">{service.category}</p>
        <h3 className="mt-1.5 font-serif text-xl font-bold leading-snug text-[#701a1a] sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 line-clamp-4">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="mt-4 inline-flex w-fit items-center gap-1 border-b border-[#701a1a] pb-0.5 text-sm font-bold text-[#701a1a] transition hover:text-[#5c1515] hover:border-[#5c1515]"
        >
          {copy.common.learnMore}
          <IconArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
