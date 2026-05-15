import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";

interface InfoEntry {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export function ContactInfo() {
  const items: InfoEntry[] = [
    {
      icon: <Phone className="h-4 w-4" strokeWidth={1.5} />,
      label: "Telefon",
      value: site.contact.phoneDisplay,
      href: telLink(),
    },
    {
      icon: <Phone className="h-4 w-4" strokeWidth={1.5} />,
      label: "Telefon 2",
      value: site.contact.phone2Display,
      href: `tel:${site.contact.phone2Href}`,
    },
    {
      icon: <MessageCircle className="h-4 w-4" strokeWidth={1.5} />,
      label: "WhatsApp",
      value: site.contact.whatsappDisplay,
      href: whatsappLink(),
      external: true,
    },
    {
      icon: <Mail className="h-4 w-4" strokeWidth={1.5} />,
      label: "E-posta",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: <MapPin className="h-4 w-4" strokeWidth={1.5} />,
      label: "Adres",
      value: `${site.address.street}, ${site.address.district} / ${site.address.city}`,
      href: site.address.mapsUrl,
      external: true,
    },
    {
      icon: <Clock className="h-4 w-4" strokeWidth={1.5} />,
      label: "Çalışma Saatleri",
      value: `Pzt–Cum ${site.hours.weekday} · Cmt ${site.hours.saturday}`,
    },
  ];

  return (
    <ul className="border-t border-[var(--color-line-strong)]">
      {items.map((it) => (
        <Row key={it.label} item={it} />
      ))}
    </ul>
  );
}

function Row({ item }: { item: InfoEntry }) {
  const isNumeric = item.label === "Telefon" || item.label === "Telefon 2" || item.label === "WhatsApp";

  const inner = (
    <div className="grid grid-cols-12 gap-4 items-baseline py-5 md:py-6">
      <div className="col-span-1 flex items-center text-[var(--color-accent)] pt-0.5">
        {item.icon}
      </div>
      <div className="col-span-3 md:col-span-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
          {item.label}
        </span>
      </div>
      <div className="col-span-8 md:col-span-9">
        <span
          className={`text-sm md:text-[15px] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] ${
            isNumeric ? "tabular-nums" : ""
          }`}
        >
          {item.value}
        </span>
      </div>
    </div>
  );

  return (
    <li className="border-b border-[var(--color-line)]">
      {item.href ? (
        <a
          href={item.href}
          className="block group"
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener" : undefined}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
