import { ArticleDetailContent } from "@/features/common/ArticleDetailContent";
import type { ServiceItem } from "@/features/services/services.data";

export function ServiceDetailContent({
  service,
  backLabel,
}: {
  service: ServiceItem;
  backLabel: string;
}) {
  return (
    <ArticleDetailContent
      backHref="/#services"
      backLabel={backLabel}
      eyebrow={service.category}
      title={service.title}
      paragraphs={service.paragraphs}
      imageSrc={service.imageSrc}
      imageAlt={service.imageAlt}
    />
  );
}
