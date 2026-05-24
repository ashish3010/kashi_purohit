"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  SITE_LOCALE_COOKIE,
  SITE_LOCALE_STORAGE_KEY,
  type SiteLocale,
} from "@/lib/site-locale-constants";

export type { SiteLocale };

export function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState<SiteLocale>("en");

  useEffect(() => {
    const applyStored = () => {
      const stored = window.localStorage.getItem(SITE_LOCALE_STORAGE_KEY);
      if (stored === "hi" || stored === "en") {
        setLocale(stored);
        document.documentElement.lang = stored === "hi" ? "hi" : "en";
        const match = document.cookie.match(
          new RegExp(`(?:^|; )${SITE_LOCALE_COOKIE}=([^;]*)`),
        );
        const cookieVal = match?.[1];
        if (cookieVal !== stored) {
          document.cookie = `${SITE_LOCALE_COOKIE}=${stored};path=/;max-age=31536000;SameSite=Lax`;
          router.refresh();
        }
      }
    };
    const id = window.requestAnimationFrame(applyStored);
    return () => window.cancelAnimationFrame(id);
  }, [router]);

  const applyLocale = useCallback(
    (next: SiteLocale) => {
      setLocale(next);
      window.localStorage.setItem(SITE_LOCALE_STORAGE_KEY, next);
      document.documentElement.lang = next === "hi" ? "hi" : "en";
      document.cookie = `${SITE_LOCALE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
      router.refresh();
    },
    [router],
  );

  const pillBtn =
    "touch-manipulation flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-2 text-xs font-bold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-kashi-red [-webkit-tap-highlight-color:transparent]";

  return (
    <div
      role="group"
      aria-label="Choose language"
      className="relative z-10 flex shrink-0 rounded-full border border-amber-200/90 bg-white p-0.5 shadow-sm"
    >
      <button
        type="button"
        onClick={() => applyLocale("en")}
        className={`${pillBtn} ${locale === "en" ? "bg-kashi-red text-white shadow-sm" : "text-kashi-red max-[999px]:active:bg-amber-50/90 min-[1000px]:hover:bg-amber-50/80"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => applyLocale("hi")}
        className={`${pillBtn} ${locale === "hi" ? "bg-kashi-red text-white shadow-sm" : "text-kashi-red max-[999px]:active:bg-amber-50/90 min-[1000px]:hover:bg-amber-50/80"}`}
        aria-pressed={locale === "hi"}
      >
        HI
      </button>
    </div>
  );
}
