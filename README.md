# Lotus Boya

Çorlu / Tekirdağ merkezli endüstriyel elektrostatik toz boya, fırın boya ve antikorozif kaplama firması için web sitesi.

## Tech stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Radix UI primitives
- Framer Motion
- Hosted as static prerendered pages

## Local development

```bash
npm install
npm run dev
```

Geliştirme sunucusu http://localhost:3000 adresinde çalışır.

## Production build

```bash
npm run build
npm run start
```

26 route fully prerendered as static HTML.

## Project structure

```
src/
├── app/                 Next.js App Router (file = route)
├── components/
│   ├── brand/           Logo + mark
│   ├── layout/          Header, footer, mobile CTA bar, WhatsApp FAB
│   ├── sections/        Marketing sections (hero, services, process, ...)
│   ├── seo/             JSON-LD schema builders
│   └── ui/              Headless primitives (button, card, accordion, ...)
└── lib/
    ├── data/            Content layer (services, cities, FAQ, gallery, references)
    ├── site.ts          Single source of truth for brand, NAP, navigation
    └── utils.ts         cn() helper

public/brand/            Standalone SVG brand assets (mark, lockup variants)
```

## Brand contact

Single source: [`src/lib/site.ts`](src/lib/site.ts). Telefon, WhatsApp, adres, çalışma saatleri, sosyal hesaplar — bu dosyayı güncellemek tüm site genelinde (header, footer, schema, formlar, CTA'lar) yansır.

## SEO

- LocalBusiness + Organization + WebSite + Service + FAQPage + BreadcrumbList JSON-LD
- Dynamic sitemap + robots.txt
- Edge-runtime OG image
- Per-route canonical + Open Graph metadata
- Çorlu sayfası rich local SEO content (8 SSS, alt mahalle listesi, ulaşım matrisi, sektör listesi, GeoCircle 25 km service area)
