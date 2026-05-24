"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KARM_PATH = "/karm-kaand-maanglik";

function scrollToSectionId(id: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("scroll");
  if (fromQuery) {
    scrollToSectionId(fromQuery);
    window.history.replaceState(null, "", `${KARM_PATH}#${fromQuery}`);
    return;
  }
  const hash = window.location.hash;
  if (hash.length > 1) {
    scrollToSectionId(hash.slice(1));
  }
}

/** On `/karm-kaand-maanglik`, scroll to `#anchor` or `?scroll=` after navigation or hash change. */
export function KarmKaandMaanglikHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== KARM_PATH) return;

    const t = window.setTimeout(scrollFromLocation, 0);
    window.addEventListener("hashchange", scrollFromLocation);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", scrollFromLocation);
    };
  }, [pathname]);

  return null;
}
