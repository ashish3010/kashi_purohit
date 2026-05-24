import { ArticleDetailContent } from "@/features/common/ArticleDetailContent";
import type { ServiceItem } from "@/features/services/services.data";

export function ServiceDetailContent({ service }: { service: ServiceItem }) {
  return (
    <ArticleDetailContent
      backHref="/#services"
      backLabel="← Back to Divine Services"
      eyebrow={service.category}
      title={service.title}
      paragraphs={service.paragraphs}
      imageSrc={service.imageSrc}
      imageAlt={service.imageAlt}
    />
  );
}
