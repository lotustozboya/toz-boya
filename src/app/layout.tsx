import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import {
  JsonLd,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/json-ld";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Çorlu Elektrostatik Toz Boya & Endüstriyel Kaplama`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "elektrostatik toz boya",
    "Çorlu toz boya",
    "Çerkezköy toz boya",
    "Velimeşe toz boya",
    "Ergene toz boya",
    "Kapaklı toz boya",
    "Tekirdağ toz boya",
    "Marmara Ereğlisi toz boya",
    "Silivri toz boya",
    "fırın boya",
    "vernik kaplama",
    "endüstriyel boya",
    "metal boya",
    "Lotus Boya",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFab />
        <MobileCtaBar />

        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema(),
            websiteSchema(),
          ]}
        />
      </body>
    </html>
  );
}
