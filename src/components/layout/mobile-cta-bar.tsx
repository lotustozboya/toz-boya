import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[var(--color-bg)]"
      role="navigation"
      aria-label="Hızlı iletişim"
    >
      <div className="grid grid-cols-3 [&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a]:justify-center [&>a]:gap-1 [&>a]:py-3 [&>a]:text-[11px] [&>a]:font-medium [&>a]:tracking-wide">
        <a
          href={telLink()}
          className="text-[var(--color-text)] active:bg-[var(--color-surface-2)]"
          aria-label="Bizi arayın"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          Ara
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
          className="text-white bg-[var(--color-whatsapp)]"
          aria-label="WhatsApp ile yaz"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          WhatsApp
        </a>
        <Link
          href="/teklif-al"
          className="text-[#0a0a0b] bg-[var(--color-accent)]"
          aria-label="Teklif al"
        >
          <FileText className="h-5 w-5" strokeWidth={2} />
          Teklif
        </Link>
      </div>
    </div>
  );
}
