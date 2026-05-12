// Industrial reference strip — sector-based credibility line.
// TODO: When real client logos are authorized, swap `mark` with <Image /> per item.

export interface Reference {
  initials: string;
  name: string;
  sector: string;
}

export const references: Reference[] = [
  { initials: "BS", name: "Beyaz Eşya Sanayi", sector: "Beyaz Eşya Yan Sanayi" },
  { initials: "OY", name: "Otomotiv Yan Sanayi", sector: "Otomotiv" },
  { initials: "KM", name: "Kimya Makineleri", sector: "Kimya" },
  { initials: "TM", name: "Tekstil Makineleri", sector: "Tekstil" },
  { initials: "ML", name: "Mobilya Lojistik", sector: "Mobilya" },
  { initials: "İM", name: "İnşaat Makineleri", sector: "İnşaat" },
  { initials: "GD", name: "Gıda Endüstrisi", sector: "Gıda" },
  { initials: "LM", name: "Liman Ekipmanları", sector: "Lojistik" },
  { initials: "AS", name: "Asansör Sistemleri", sector: "Asansör" },
  { initials: "AY", name: "Aydınlatma", sector: "Aydınlatma" },
];

export const referenceSectors = [
  "Beyaz Eşya Yan Sanayi",
  "Otomotiv Yan Sanayi",
  "Kimya & Petrokimya",
  "Tekstil Makineleri",
  "Mobilya & Raf Sistemleri",
  "İnşaat & Konstrüksiyon",
  "Asansör Sistemleri",
  "Liman & Deniz Ekipmanları",
];
