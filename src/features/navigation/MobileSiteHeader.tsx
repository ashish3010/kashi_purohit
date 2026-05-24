"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { SiteCopy } from "@/lib/site-locale";
import type { SiteLocale } from "@/lib/site-locale-constants";
import { IconClose, IconHamburger } from "@/features/common/icons";
import { LanguageSwitcher } from "@/features/navigation/LanguageSwitcher";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-kashi-brown/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

export function MobileSiteHeader({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: SiteLocale;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const closeDrawer = useCallback(() => {
    setMenuOpen(false);
    setExpandedId(null);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    setExpandedId(null);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeDrawer]);

  const scrollSamePageHash = (href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return false;
    const path = href.slice(0, hashIndex);
    if (path !== pathname) return false;
    const id = href.slice(hashIndex + 1);
    if (!id) return false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.replaceState(null, "", href);
    if (!el) {
      try {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } catch {
        window.dispatchEvent(new Event("hashchange"));
      }
    }
    return true;
  };

  const toggleSection = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const drawer =
    menuOpen ? (
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className="pointer-events-auto fixed inset-0 z-[300]"
      >
        <button
          type="button"
          className="absolute inset-0 cursor-pointer bg-black/40"
          aria-label="Close menu"
          onClick={closeDrawer}
        />
        <nav className="pointer-events-auto absolute right-0 top-0 z-[1] flex h-full w-[min(100%,22rem)] flex-col bg-kashi-cream shadow-xl">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-4">
            <span className="font-serif text-lg font-semibold text-kashi-red">{copy.navigation.drawerTitle}</span>
            <button
              type="button"
              onClick={closeDrawer}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg active:bg-black/10 hover:bg-black/5"
              aria-label="Close menu"
            >
              <IconClose className="pointer-events-none text-kashi-brown" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-2 overflow-y-auto p-3 pb-8">
            {copy.navigation.flatLinks.slice(0, 1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-kashi-brown hover:bg-white"
                  onClick={() => closeDrawer()}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {copy.navigation.dropdowns.map((group) => {
              const isOpen = expandedId === group.id;
              return (
                <li key={group.id} className="rounded-lg">
                  <button
                    type="button"
                    onClick={() => toggleSection(group.id)}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-3 text-left text-base font-medium text-kashi-brown hover:bg-white"
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${group.id}`}
                    id={`trigger-${group.id}`}
                  >
                    <span className="leading-snug">{group.label}</span>
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen ? (
                    <ul
                      id={`submenu-${group.id}`}
                      role="list"
                      className="mt-1 space-y-0.5 border-l-2 border-kashi-gold/35 py-1 pl-3"
                      aria-labelledby={`trigger-${group.id}`}
                    >
                      {group.items.map((item) => (
                        <li key={item.label}>
                          {item.href.startsWith("/") ? (
                            <Link
                              href={item.href}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-kashi-brown/90 hover:bg-white"
                              onClick={(e) => {
                                if (scrollSamePageHash(item.href)) {
                                  e.preventDefault();
                                  closeDrawer();
                                } else {
                                  closeDrawer();
                                }
                              }}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-kashi-brown/90 hover:bg-white"
                              onClick={() => closeDrawer()}
                            >
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}

            {copy.navigation.flatLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-kashi-brown hover:bg-white"
                  onClick={() => closeDrawer()}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    ) : null;

  return (
    <>
      <header className="z-[100] isolate border-b border-black/5 bg-kashi-cream [touch-action:manipulation] max-[999px]:fixed max-[999px]:left-0 max-[999px]:right-0 max-[999px]:top-0 max-[999px]:pt-[env(safe-area-inset-top,0px)] min-[1000px]:sticky min-[1000px]:top-0">
        <div className="relative mx-auto grid h-[4.25rem] w-full max-w-none grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 min-[1000px]:h-[4.5rem] min-[1000px]:max-w-7xl min-[1000px]:grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] min-[1000px]:gap-6 min-[1000px]:px-8">
          <div className="flex min-h-[4.25rem] min-w-0 items-center justify-start justify-self-start self-stretch min-[1000px]:min-h-[4.5rem]">
            <Link
              href="/#home"
              lang={locale === "hi" ? "hi" : "en"}
              className="relative z-0 block w-fit max-w-full py-2 pr-1"
            >
              <div className="min-w-0 max-w-full leading-tight">
                <span className="block truncate font-serif text-lg font-semibold text-kashi-red min-[1000px]:text-xl">
                  {copy.site.name}
                </span>
                <p className="line-clamp-2 text-[9px] font-semibold uppercase leading-snug tracking-wider text-kashi-gold sm:text-[10px]">
                  {copy.site.tagline}
                </p>
              </div>
            </Link>
          </div>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-3 min-[1000px]:flex lg:gap-6"
            aria-label="Primary"
          >
            {copy.navigation.desktop.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-kashi-brown transition hover:text-kashi-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-20 flex shrink-0 items-center justify-self-end gap-2.5 [touch-action:manipulation] min-[1000px]:gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={openMenu}
              className="relative flex h-11 min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-lg text-kashi-brown max-[999px]:active:bg-black/15 min-[1000px]:hidden touch-manipulation [-webkit-tap-highlight-color:transparent]"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label="Open menu"
            >
              <IconHamburger className="pointer-events-none text-kashi-red" />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden
        className="max-[999px]:h-[calc(4.25rem+env(safe-area-inset-top,0px))] max-[999px]:shrink-0 min-[1000px]:hidden"
      />

      {drawer ? createPortal(drawer, document.body) : null}
    </>
  );
}
