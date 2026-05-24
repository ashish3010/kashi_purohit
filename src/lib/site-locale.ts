import { cookies } from "next/headers";
import en from "@/content/en.json";
import hi from "@/content/hi.json";
import {
  SITE_LOCALE_COOKIE,
  type SiteLocale,
} from "@/lib/site-locale-constants";

export type SiteCopy = typeof en;

export async function getRequestSiteLocale(): Promise<SiteLocale> {
  const jar = await cookies();
  const v = jar.get(SITE_LOCALE_COOKIE)?.value;
  return v === "hi" ? "hi" : "en";
}

export function getSiteCopy(locale: SiteLocale): SiteCopy {
  return (locale === "hi" ? hi : en) as SiteCopy;
}
