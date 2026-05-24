"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  const el = document.querySelector(hash);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** On `/shraadhiya-karm`, scroll to `#anchor` after navigation or hash change. */
export function ShraadhiyaHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/shraadhiya-karm") return;

    const t = window.setTimeout(scrollToHash, 0);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
