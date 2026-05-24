import { services, type ServiceItem } from "@/features/services/services.data";

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.id === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.id);
}
