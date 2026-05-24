"use client";

import { useCallback, useEffect, useState } from "react";

export type SiteLocale = "en" | "hi";

const STORAGE_KEY = "kashi-locale";

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<SiteLocale>("en");

  useEffect(() => {
    const applyStored = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "hi" || stored === "en") {
        setLocale(stored);
        document.documentElement.lang = stored === "hi" ? "hi" : "en";
      }
    };
    const id = window.requestAnimationFrame(applyStored);
    return () => window.cancelAnimationFrame(id);
  }, []);

  const applyLocale = useCallback((next: SiteLocale) => {
    setLocale(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "hi" ? "hi" : "en";
  }, []);

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
        className={`${pillBtn} ${locale === "en" ? "bg-kashi-red text-white shadow-sm" : "text-kashi-red max-md:active:bg-amber-50/90 md:hover:bg-amber-50/80"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => applyLocale("hi")}
        className={`${pillBtn} ${locale === "hi" ? "bg-kashi-red text-white shadow-sm" : "text-kashi-red max-md:active:bg-amber-50/90 md:hover:bg-amber-50/80"}`}
        aria-pressed={locale === "hi"}
      >
        HI
      </button>
    </div>
  );
}
