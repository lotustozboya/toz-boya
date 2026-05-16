import { site } from "@/lib/site";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo.png`,
    description: site.description,
    telephone: site.contact.phoneHref,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: [
      "Çorlu",
      "Çerkezköy",
      "Velimeşe",
      "Ergene",
      "Kapaklı",
      "Tekirdağ",
      "Marmara Ereğlisi",
      "Silivri",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    foundingDate: site.founded,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}#organization` },
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${site.url}#business` },
    areaServed: [
      "Çorlu",
      "Çerkezköy",
      "Velimeşe",
      "Ergene",
      "Kapaklı",
      "Tekirdağ",
      "Marmara Ereğlisi",
      "Silivri",
    ],
    serviceType: service.title,
    url: `${site.url}/hizmetler/${service.slug}`,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function localServiceSchema(args: {
  name: string;
  description: string;
  url: string;
  cityName: string;
  geo: { lat: number; lng: number };
  radiusKm: number;
  serviceTypes: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    provider: { "@id": `${site.url}#business` },
    serviceType: args.serviceTypes,
    areaServed: {
      "@type": "City",
      name: args.cityName,
      address: {
        "@type": "PostalAddress",
        addressLocality: args.cityName,
        addressRegion: "Tekirdağ",
        addressCountry: "TR",
      },
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: args.geo.lat,
        longitude: args.geo.lng,
      },
      geoRadius: args.radiusKm * 1000,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${args.cityName} Endüstriyel Kaplama Hizmetleri`,
      itemListElement: args.serviceTypes.map((t, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: t },
      })),
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
