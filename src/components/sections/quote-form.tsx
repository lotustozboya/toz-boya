"use client";

import * as React from "react";
import { Send, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, telLink, site } from "@/lib/site";
import { services } from "@/lib/data/services";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  qty: string;
  message: string;
}

const initial: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: services[0].slug,
  qty: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = React.useState<FormState>(initial);
  const [submitted, setSubmitted] = React.useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const service = services.find((s) => s.slug === form.service)?.title ?? "";
    const text = [
      "Merhaba, web sitesi üzerinden teklif almak istiyorum.",
      "",
      `İsim: ${form.name}`,
      `Firma: ${form.company || "—"}`,
      `Telefon: ${form.phone}`,
      `E-posta: ${form.email || "—"}`,
      `Hizmet: ${service}`,
      `Miktar / Ölçü: ${form.qty || "—"}`,
      "",
      `Mesaj: ${form.message || "—"}`,
    ].join("\n");

    window.open(whatsappLink(text), "_blank", "noopener");
    setSubmitted(true);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div>
          <span className="eyebrow">Teklif İste</span>
          <h2 className="mt-4 h-section text-balance">
            24 saat içinde detaylı fiyat teklifi
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
            Aşağıdaki formu doldurun; bilgileriniz WhatsApp üzerinden bize
            iletilsin. İsterseniz doğrudan arayabilir veya WhatsApp’tan da
            ulaşabilirsiniz.
          </p>
        </div>
        <ul className="border-t border-[var(--color-line-strong)]">
          <li className="border-b border-[var(--color-line)]">
            <a
              href={telLink()}
              className="grid grid-cols-12 gap-3 items-baseline py-4 group"
            >
              <Phone
                className="col-span-1 h-4 w-4 text-[var(--color-accent)]"
                strokeWidth={1.5}
              />
              <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                Telefon
              </span>
              <span className="col-span-8 font-semibold text-[var(--color-text)] tabular-nums group-hover:text-[var(--color-accent)] transition-colors">
                {site.contact.phoneDisplay}
              </span>
            </a>
          </li>
          <li className="border-b border-[var(--color-line)]">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="grid grid-cols-12 gap-3 items-baseline py-4 group"
            >
              <MessageCircle
                className="col-span-1 h-4 w-4 text-[var(--color-whatsapp)]"
                strokeWidth={1.5}
              />
              <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                WhatsApp
              </span>
              <span className="col-span-8 font-semibold text-[var(--color-text)] tabular-nums group-hover:text-[var(--color-whatsapp)] transition-colors">
                {site.contact.whatsappDisplay}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:col-span-7 flex flex-col gap-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Ad Soyad *" htmlFor="name">
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={onChange}
              className={inputCls}
              autoComplete="name"
            />
          </Field>
          <Field label="Firma" htmlFor="company">
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={onChange}
              className={inputCls}
              autoComplete="organization"
            />
          </Field>
          <Field label="Telefon *" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={onChange}
              className={inputCls}
              autoComplete="tel"
              inputMode="tel"
            />
          </Field>
          <Field label="E-posta" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={inputCls}
              autoComplete="email"
            />
          </Field>
          <Field label="Hizmet *" htmlFor="service">
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={onChange}
              className={inputCls}
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.shortTitle}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Miktar / Ölçü" htmlFor="qty">
            <input
              id="qty"
              name="qty"
              value={form.qty}
              onChange={onChange}
              placeholder="Örn. 200 adet, 50 m²"
              className={inputCls}
            />
          </Field>
        </div>
        <Field label="Mesaj" htmlFor="message">
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Parça açıklaması, renk ve teslim süresi bilgilerini yazabilirsiniz."
            className={`${inputCls} resize-none`}
          />
        </Field>

        <p className="text-xs text-[var(--color-text-subtle)] leading-relaxed">
          Form gönderildiğinde bilgileriniz WhatsApp üzerinden iletilir.
          KVKK kapsamında verileriniz yalnızca teklif sürecinde kullanılır.
        </p>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Teklifi Gönder <Send className="h-4 w-4" />
        </Button>

        {submitted && (
          <p className="text-sm text-[var(--color-success)] mt-1">
            ✓ WhatsApp penceresi açıldı. Mesajı göndermeyi unutmayın.
          </p>
        )}
      </form>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-[var(--color-line-strong)] bg-transparent px-3.5 h-11 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-col gap-1.5 sm:col-span-1 last:[&>textarea]:h-32"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
        {label}
      </span>
      {children}
    </label>
  );
}
