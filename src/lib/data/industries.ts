// Industries served — listed with a short, factual descriptor so each row
// stands on its own without needing an icon.

export interface Industry {
  name: string;
  detail: string;
}

export const industries: Industry[] = [
  { name: "Demir & Çelik", detail: "Konstrüksiyon profili, levha" },
  { name: "Makine ve Makine Şaseleri", detail: "Ana gövde ve şase boyama" },
  { name: "Alüminyum", detail: "Profil, panel, döküm parça" },
  { name: "Ferforje & Korkuluk", detail: "Mimari aksam, dış cephe" },
  { name: "Makine Parçaları & Şaseler", detail: "Seri üretim, küçük parti" },
  { name: "Jant & Demir Aksam", detail: "Otomotiv jantı, aksesuar" },
  { name: "Beyaz Eşya Yan Sanayi", detail: "Şasi, panel, iç aksam" },
  { name: "Otomotiv Yan Sanayi", detail: "Yan sanayi seri üretim" },
  { name: "Kimya & Petrokimya", detail: "Endüstriyel ekipman" },
  { name: "Tekstil Makineleri", detail: "Makine gövdesi, dolap" },
  { name: "Mobilya & Raf Sistemleri", detail: "Metal iskelet, depo rafı" },
  { name: "İnşaat & Konstrüksiyon", detail: "Çelik kiriş, bağlantı" },
  { name: "Asansör Sistemleri", detail: "Kabin paneli, kapı" },
  { name: "Liman & Deniz Ekipmanları", detail: "Saha dayanımı kritik" },
];
