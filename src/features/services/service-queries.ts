import en from "@/content/en.json";
import type { SiteCopy } from "@/lib/site-locale";
import { SERVICE_MEDIA, type ServiceItem } from "@/features/services/services.data";

export function getAllServiceSlugs(): string[] {
  return [...en.services.order];
}

export function getServiceList(copy: SiteCopy): ServiceItem[] {
  return copy.services.order.map((id) => {
    const body = copy.services.byId[id as keyof typeof copy.services.byId];
    const imageSrc = SERVICE_MEDIA[id as keyof typeof SERVICE_MEDIA];
    return { id, imageSrc, ...body };
  });
}

export function getServiceBySlug(
  copy: SiteCopy,
  slug: string,
): ServiceItem | undefined {
  return getServiceList(copy).find((s) => s.id === slug);
}
