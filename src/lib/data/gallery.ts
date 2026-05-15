export interface GalleryItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface BeforeAfterItem {
  title: string;
  category: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  detail: string;
}

export const beforeAfter: BeforeAfterItem[] = [
  {
    title: "Dekoratif Mobilya Aksamı — Vernik Üstü",
    category: "Vernik Kaplama",
    before:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=70",
    beforeAlt: "Mat boya uygulanmış mobilya aksamı, vernik öncesi",
    afterAlt: "Yarı mat vernik kaplama sonrası mobilya aksamı",
    detail:
      "RAL 9005 elektrostatik toz boya üzerine yarı mat şeffaf vernik. UV dayanımı ve renk derinliği artırıldı.",
  },
  {
    title: "Endüstriyel Profil — Eski Boya",
    category: "Elektrostatik Toz Boya",
    before:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=70",
    beforeAlt: "Eski ve dökülmüş boyaya sahip endüstriyel profil",
    afterAlt: "Yeniden boyanmış endüstriyel profil",
    detail:
      "5 kademeli ön yıkama sonrası RAL 9005 mat dokulu elektrostatik toz boya, 90 mikron.",
  },
  {
    title: "Beyaz Eşya Şasi — Üretim Hattı Çıkışı",
    category: "Fırın Boya",
    before:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=70",
    beforeAlt: "İşlenmemiş ham metal beyaz eşya şasisi",
    afterAlt: "Fırın boya uygulanmış beyaz eşya şasisi",
    detail:
      "Demir fosfat + RAL 9016 yarı parlak fırın boya. Aderans ölçümü Gt0, ölçüm raporu teslim edildi.",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.13.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.13 (1).jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.14.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.15.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.15 (1).jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.16.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.16 (1).jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-12 at 13.24.57.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
  {
    title: "Elektrostatik Toz Boya Uygulaması",
    category: "Elektrostatik",
    image: "/galeri/WhatsApp Image 2026-05-14 at 11.26.57.jpeg",
    alt: "Elektrostatik toz boya uygulaması",
  },
];
