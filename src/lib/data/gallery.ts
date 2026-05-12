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

// Using Unsplash placeholders — replace with real project images.
export const gallery: GalleryItem[] = [
  {
    title: "Endüstriyel Profil Toz Boya",
    category: "Elektrostatik",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70",
    alt: "Elektrostatik toz boya uygulanmış endüstriyel profiller",
  },
  {
    title: "Beyaz Eşya Fırın Boya Hattı",
    category: "Fırın Boya",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=70",
    alt: "Beyaz eşya parçaları için fırın boya hattı",
  },
  {
    title: "Galvaniz Sac Polyester Kaplama",
    category: "Elektrostatik",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=70",
    alt: "Galvaniz sac üzerine polyester toz boya kaplama",
  },
  {
    title: "Mobilya Aksamı — Şeffaf Vernik",
    category: "Vernik Kaplama",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=70",
    alt: "Şeffaf vernik kaplama ile bitirilmiş dekoratif mobilya aksamı",
  },
  {
    title: "Otomotiv Yan Sanayi Parçaları",
    category: "Elektrostatik",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=70",
    alt: "Otomotiv yan sanayi parçaları için elektrostatik kaplama",
  },
  {
    title: "Asansör Kabin Paneli",
    category: "Fırın Boya",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=70",
    alt: "Asansör kabin paneli fırın boya uygulaması",
  },
  {
    title: "Aydınlatma Armatürü — Parlak Vernik",
    category: "Vernik Kaplama",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=70",
    alt: "Parlak vernik kaplama uygulanmış aydınlatma armatürü",
  },
  {
    title: "Mobilya İskeleti RAL 9005",
    category: "Elektrostatik",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=70",
    alt: "RAL 9005 siyah elektrostatik kaplama mobilya iskeleti",
  },
];
