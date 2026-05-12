// Single source of truth for brand, contact, regions, and SEO defaults.
// TODO: Replace placeholders marked with `[TODO:` before going live.

export const site = {
  name: "Lotus Elektrostatik Boya",
  legalName: "Lotus Elektrostatik Toz Boya San. Tic. Ltd. Şti.",
  shortName: "Lotus Boya",
  tagline: "Endüstriyel Elektrostatik Toz Boya Çözümleri",
  description:
    "Çorlu, Çerkezköy ve Tekirdağ bölgesinde elektrostatik toz boya, fırın boya ve endüstriyel yüzey kaplama hizmetleri. Kurumsal kalite, hızlı teslimat ve uzun ömürlü kaplama garantisi.",
  url: "https://lotuselektrostatik.com", // [TODO: domain]
  locale: "tr_TR",
  founded: "2014",

  contact: {
    phoneDisplay: "+90 536 695 48 49",
    phoneHref: "+905366954849",
    whatsappDisplay: "+90 536 695 48 49",
    whatsappNumber: "905366954849",
    whatsappMessage:
      "Merhaba, web siteniz üzerinden elektrostatik toz boya hizmetleriniz için teklif almak istiyorum.",
    email: "info@lotuselektrostatik.com", // [TODO: real email]
  },

  address: {
    street: "Hatip Mahallesi, Akasma Sokak H Blok No:4CA",
    district: "Çorlu",
    city: "Tekirdağ",
    postalCode: "59860",
    country: "TR",
    geo: { lat: 41.1597, lng: 27.8003 }, // Çorlu approx — [TODO: real coords from Google Maps]
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hatip+Mahallesi+Akasma+Sokak+H+Blok+No+4CA+%C3%87orlu+Tekirda%C4%9F",
  },

  hours: {
    weekday: "08:00 – 18:00",
    saturday: "08:00 – 14:00",
    sunday: "Kapalı",
  },

  social: {
    instagram: "https://instagram.com/", // [TODO]
    linkedin: "https://www.linkedin.com/", // [TODO]
  },

  stats: {
    yearsActive: 11,
    projectsDelivered: 1200,
    industrialClients: 180,
    capacityM2PerMonth: 25000,
  },
} as const;

export const navigation = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bölgeler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? site.contact.whatsappMessage);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}

export function telLink() {
  return `tel:${site.contact.phoneHref}`;
}
