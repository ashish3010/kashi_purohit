import { menuDetails } from "@/features/navigation/menu-detail.data";
import type { MenuDetailItem } from "@/features/navigation/menu-detail.types";

export function getMenuDetailBySlug(slug: string): MenuDetailItem | undefined {
  return menuDetails.find((item) => item.slug === slug);
}

export function getAllMenuDetailSlugs(): string[] {
  return menuDetails.map((item) => item.slug);
}
