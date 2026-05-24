import type { SiteCopy } from "@/lib/site-locale";
import { IconPhone, IconWhatsApp } from "@/features/common/icons";
import { SITE_CONTACT } from "@/config/site";

const phone = SITE_CONTACT.telephone.replace(/\s/g, "");

export function StickyActionBar({ copy }: { copy: SiteCopy }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-black/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-0">
        <a
          href={SITE_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
        >
          <IconWhatsApp className="h-5 w-5" />
          {copy.sticky.whatsapp}
        </a>
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 bg-kashi-red py-3.5 text-sm font-bold text-white transition hover:bg-kashi-red/90"
        >
          <IconPhone className="h-5 w-5" />
          {copy.sticky.callNow}
        </a>
      </div>
    </div>
  );
}
