import type { LucideIcon } from "lucide-react";
import {
  Flame,
  SprayCan,
  Layers,
  Wrench,
  Factory,
  ShieldCheck,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  excerpt: string;
  description: string;
  features: string[];
  applications: string[];
  process: { title: string; detail: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "elektrostatik-toz-boya",
    title: "Elektrostatik Toz Boya Uygulaması",
    shortTitle: "Elektrostatik Toz Boya",
    icon: SprayCan,
    excerpt:
      "Yüksek aderans, eşit film kalınlığı ve uzun ömürlü kaplama için tam otomatik elektrostatik toz boya tesisi.",
    description:
      "Metal yüzeylerde solvent içermeyen, çevre dostu ve dayanıklı bir kaplama elde etmek için elektrostatik toz boya yöntemini kullanıyoruz. Polyester, epoksi ve hibrit toz boya seçenekleriyle dış cephe, beyaz eşya ve ağır endüstri projelerinde RAL kataloğundaki tüm renklere ulaşıyoruz.",
    features: [
      "Polyester, epoksi ve hibrit toz boya seçenekleri",
      "Mat, parlak, yarı mat, dokulu ve metalik yüzey",
      "RAL kataloğundaki tüm renkler",
      "60–120 mikron kontrollü film kalınlığı",
      "Tuz püskürtme ve QUV testleriyle dayanıklılık raporu",
    ],
    applications: [
      "Çelik konstrüksiyon ve profil",
      "Beyaz eşya ve mutfak ekipmanları",
      "Mobilya iskeleti ve raf sistemleri",
      "Otomotiv yan sanayi parçaları",
      "Bahçe mobilyası ve dekoratif aksam",
    ],
    process: [
      {
        title: "Yüzey Hazırlama",
        detail:
          "Yağ, pas ve kalıntılardan arındırma; fosfatlama ve aktivasyon işlemleri.",
      },
      {
        title: "Kuru ve Ön Isıtma",
        detail:
          "Kontrollü kurutma fırınında nem ve ön ısıtma adımları tamamlanır.",
      },
      {
        title: "Elektrostatik Tabanca",
        detail:
          "Yüksek voltajla negatif yüklü toz boya, topraklanmış parça yüzeyine homojen olarak yapışır.",
      },
      {
        title: "Polimerizasyon Fırını",
        detail: "180–200°C aralığında 15–20 dk pişirme, sertleşme ve film oluşumu.",
      },
      {
        title: "Kalite Kontrol & Sevkiyat",
        detail:
          "Mikron, parlaklık ve aderans kontrollerinin ardından paketleme ve teslimat.",
      },
    ],
    benefits: [
      "Solvent içermez, VOC emisyonu sıfır",
      "Korozyon ve UV dayanımı 10+ yıl",
      "Tek kat ile mükemmel örtücülük",
      "Geri dönüşümlü toz, düşük fire",
    ],
    faq: [
      {
        q: "Elektrostatik toz boya neden tercih edilmeli?",
        a: "Sıvı boyaya kıyasla daha homojen film kalınlığı, çok daha yüksek darbe ve aşınma direnci ve solvent içermediği için çevre dostu bir uygulamadır.",
      },
      {
        q: "Hangi malzemelere uygulanabilir?",
        a: "Çelik, dökme demir, alüminyum ve galvaniz gibi iletken metal yüzeylerin tamamına uygulanabilir.",
      },
      {
        q: "Renk seçimi nasıl yapılır?",
        a: "RAL ve özel renk kartelaları üzerinden seçim yapabilir veya numune göndererek özel renk üretimi talep edebilirsiniz.",
      },
    ],
  },
  {
    slug: "firin-boya",
    title: "Endüstriyel Fırın Boya Uygulaması",
    shortTitle: "Fırın Boya",
    icon: Flame,
    excerpt:
      "Yüksek sıcaklıkta polimerize edilen fırın boyalarla beyaz eşya ve mühendislik parçalarında premium yüzey.",
    description:
      "Geniş hacimli fırınlarımızda kontrollü sıcaklık eğrisi ile fırın boya uygulaması yapıyoruz. Polyester ve poliüretan esaslı sistemler, çizilme dayanımı kritik olan parçalarda uzun ömürlü ve estetik bir görünüm sağlar.",
    features: [
      "Tam otomatik sıcaklık kontrolü",
      "Büyük ebatlı parçalar için 6m konveyör hat",
      "Çift kat sistem desteği (primer + topcoat)",
      "ISO standartlarında parlaklık ve aderans testi",
    ],
    applications: [
      "Beyaz eşya ve elektrikli ev aletleri",
      "Endüstriyel makine kabinleri",
      "Asansör kabin ve kapı panelleri",
      "Aydınlatma armatürleri",
    ],
    process: [
      { title: "Ön Yıkama", detail: "Alkali yıkama ve durulama hattında kir-yağ uzaklaştırma." },
      { title: "Fosfatlama", detail: "Demir veya çinko fosfat ile korozyon barajı oluşturma." },
      { title: "Kurutma", detail: "Düşük sıcaklıkta nem giderme adımı." },
      { title: "Boya Uygulama", detail: "Otomatik veya manuel tabanca ile homojen kaplama." },
      { title: "Pişirme", detail: "Kontrollü rampa ile 160–200°C polimerizasyon." },
    ],
    benefits: [
      "Yüksek sıcaklık dayanımı",
      "Çizilmeye karşı üstün direnç",
      "Pürüzsüz, dekoratif yüzey",
      "Uzun servis ömrü",
    ],
    faq: [
      {
        q: "Fırın boya ile elektrostatik boya farkı nedir?",
        a: "Fırın boya genellikle sıvı bazlı pişirilen sistemlerdir; elektrostatik toz boya ise toz halinde uygulanıp fırında ergitilir. Her ikisi de fırınımızda profesyonel olarak uygulanmaktadır.",
      },
      {
        q: "Hangi sıcaklıklarda uygulama yapılır?",
        a: "Ürün ve reçeteye göre 140°C ile 200°C arasında kontrollü pişirme yapılır.",
      },
    ],
  },
  {
    slug: "yuzey-on-isleme",
    title: "Yüzey Ön Hazırlık ve Fosfatlama",
    shortTitle: "Yüzey Ön İşleme",
    icon: Layers,
    excerpt:
      "Boya öncesi tüm metal yüzeylerin korozyona karşı hazırlandığı kritik aşama: yağ alma, fosfatlama, pasivasyon.",
    description:
      "Kaplama performansının %70’ini belirleyen aşama yüzey ön işlemedir. 5 kademeli yıkama hattımızda metal yüzeyleri boyaya hazır hale getiriyoruz; bu sayede tuz püskürtme testlerinde 750+ saat dayanım elde ediliyor.",
    features: [
      "5 kademeli daldırmalı yıkama hattı",
      "Demir ve çinko fosfat seçeneği",
      "Pasivasyon ve kurutma fırını",
      "Su iletkenliği ve pH takibi",
    ],
    applications: [
      "Karbon çelik konstrüksiyon",
      "Galvaniz sac",
      "Alüminyum profil",
      "Döküm parçalar",
    ],
    process: [
      { title: "Yağ Alma", detail: "Alkali çözeltide kir, yağ ve oksit kalıntılarının uzaklaştırılması." },
      { title: "Durulama", detail: "Çift kademeli durulama ile yüzey nötralizasyonu." },
      { title: "Fosfatlama", detail: "Korozyona karşı koruyucu kristal bariyer oluşumu." },
      { title: "Pasivasyon", detail: "İnce film ile boya tutunmasını artırma." },
      { title: "Kurutma", detail: "Boya öncesi yüzeyin tamamen kurutulması." },
    ],
    benefits: [
      "Boyada 3 kat daha iyi aderans",
      "Korozyon ömrünü 2–3 katına çıkarır",
      "Tuz püskürtme testinde 750+ saat",
      "Uzun vadeli garanti edilebilir kaplama",
    ],
    faq: [
      {
        q: "Yüzey ön işlem neden önemlidir?",
        a: "Yağ ve oksit kalıntısı bulunan bir yüzeye uygulanan boya kısa sürede dökülür. Doğru ön işlem, kaplama ömrünü doğrudan belirler.",
      },
    ],
  },
  {
    slug: "kumlama",
    title: "Kumlama ve Mekanik Yüzey Temizliği",
    shortTitle: "Kumlama",
    icon: Wrench,
    excerpt:
      "Sa 2.5 standardında kumlama ile pas, eski boya ve curufun tamamen uzaklaştırıldığı endüstriyel hazırlık.",
    description:
      "Kapalı kabin sistemli kumlama hattımızda çelik bilye ve granül ile Sa 2.5 yüzey temizliği sağlıyoruz. Köprü, gemi sanayi ve ağır çelik konstrüksiyon parçaları için kritik bir öncesi aşamadır.",
    features: [
      "ISO 8501-1 Sa 2.5 yüzey temizliği",
      "Çelik bilye ve granül seçenekleri",
      "Boya öncesi pürüzlülük (Rz) ölçümü",
      "Tozsuz kapalı sistem kabin",
    ],
    applications: [
      "Çelik konstrüksiyon ve kiriş",
      "Boru ve flanş",
      "Tank ve basınçlı kap",
      "Ağır iş makinesi parçaları",
    ],
    process: [
      { title: "Ön İnceleme", detail: "Yüzey durumu ve istenen pürüzlülük standardının belirlenmesi." },
      { title: "Maskeleme", detail: "Kumlanmayacak alanlar için koruyucu maskeleme." },
      { title: "Kumlama", detail: "Basınçlı hava ile granül püskürtme." },
      { title: "Toz Alma", detail: "Yüzeyin basınçlı hava ile temizlenmesi." },
      { title: "Astar Uygulama", detail: "Maksimum 4 saat içinde antikorozif astar uygulaması." },
    ],
    benefits: [
      "Boyanın metale mekanik olarak kenetlenmesi",
      "Pas ve eski boyanın tam temizliği",
      "Ağır endüstride uzun ömürlü kaplama",
    ],
    faq: [
      {
        q: "Kumlama sonrası ne kadar süre içinde boya yapılmalı?",
        a: "Yüzey nemden ve oksitlenmeden korunmak için maksimum 4 saat içinde astarlanmalıdır.",
      },
    ],
  },
  {
    slug: "ozel-endustriyel-kaplama",
    title: "Özel Endüstriyel Kaplama Çözümleri",
    shortTitle: "Özel Endüstriyel Kaplama",
    icon: Factory,
    excerpt:
      "Yüksek sıcaklık, kimyasal direnç veya gıda uyumluluğu gerektiren özel projeler için reçete bazlı kaplama.",
    description:
      "Standart RAL renklerinin dışında özel reçete gerektiren projelerde mühendislik desteği sağlıyoruz. Yüksek sıcaklık dayanımlı silikon esaslı boyalar, kimyasal dirençli epoksi sistemler ve gıdaya uyumlu kaplamalar.",
    features: [
      "600°C’ye kadar yüksek sıcaklık dayanımı",
      "Kimyasal direnç (asit, baz, çözücü)",
      "Gıda uyumlu epoksi kaplamalar",
      "Anti-bakteriyel ve anti-grafiti opsiyonlar",
    ],
    applications: [
      "Egzoz ve baca sistemleri",
      "Kimya tesisi ekipmanları",
      "Gıda makineleri",
      "Kamuya açık alan ekipmanları",
    ],
    process: [
      { title: "Mühendislik Görüşmesi", detail: "Çalışma koşulları ve performans hedefinin belirlenmesi." },
      { title: "Reçete & Numune", detail: "Uygulama numunesi ve test raporu." },
      { title: "Pilot Üretim", detail: "Küçük seri ile saha doğrulaması." },
      { title: "Seri Üretim", detail: "Onaylanan reçete ile seri uygulama." },
    ],
    benefits: [
      "Standart üretimle ulaşılamayan performans",
      "Mühendislik destekli reçete",
      "Test raporu ile garanti",
    ],
    faq: [
      {
        q: "Numune üretimi yapılabilir mi?",
        a: "Evet. Onaylama süreci için 3–7 iş günü içinde test numunesi hazırlıyoruz.",
      },
    ],
  },
  {
    slug: "antikorozif-kaplama",
    title: "Antikorozif Kaplama ve Astar Sistemleri",
    shortTitle: "Antikorozif Kaplama",
    icon: ShieldCheck,
    excerpt:
      "Deniz, dış cephe ve kimyasal ortamlarda 15+ yıl ömür için epoksi astar + poliüretan topcoat sistemler.",
    description:
      "C3–C5 korozyon kategorilerine uygun çok katmanlı antikorozif sistemler uyguluyoruz. Çinko zengin astar, epoksi ara kat ve poliüretan üst kat ile metal yüzeylere uzun süreli koruma sağlanır.",
    features: [
      "ISO 12944 C3–C5 sınıfı sistemler",
      "Çinko zengin astar (Zn-rich primer)",
      "Epoksi ara kat (intermediate)",
      "Poliüretan dayanıklı topcoat",
      "Kuru film kalınlığı (DFT) ölçümlü teslim",
    ],
    applications: [
      "Saha tankları ve siloları",
      "Çelik köprü ve direkler",
      "Liman ve deniz kenarı yapıları",
      "Petrokimya ekipmanları",
    ],
    process: [
      { title: "Yüzey Hazırlık", detail: "Kumlama Sa 2.5 standardı." },
      { title: "Çinko Astar", detail: "Galvanik koruma sağlayan ilk kat." },
      { title: "Epoksi Ara Kat", detail: "Kimyasal ve mekanik koruma." },
      { title: "Poliüretan Topcoat", detail: "UV ve hava şartlarına dayanım." },
      { title: "DFT Ölçümü", detail: "Her katmanın mikron ölçümü ve raporu." },
    ],
    benefits: [
      "ISO 12944’e uygun sertifikasyon",
      "15+ yıl saha performansı",
      "Tuz püskürtme 1500+ saat",
    ],
    faq: [
      {
        q: "ISO 12944 sınıfı nedir?",
        a: "Korozyon riskinin atmosfer şartlarına göre sınıflandırıldığı uluslararası standarttır. C3 orta, C5 yüksek korozyon ortamını ifade eder.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
