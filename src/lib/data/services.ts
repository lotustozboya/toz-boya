import type { LucideIcon } from "lucide-react";
import { Flame, SprayCan, Layers, Droplets } from "lucide-react";

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
      "Metal yüzeylerde solvent içermeyen, çevre dostu ve dayanıklı bir kaplama elde etmek için elektrostatik toz boya yöntemini kullanıyoruz. Polyester, epoksi ve hibrit toz boya seçenekleriyle dış cephe, beyaz eşya ve ağır endüstri projelerinde RAL kataloğundaki tüm renklere ve Jotun renk kodlarına ulaşıyoruz.",
    features: [
      "Polyester, epoksi ve hibrit toz boya seçenekleri",
      "Mat, parlak, yarı mat, dokulu ve metalik yüzey",
      "RAL kataloğu ve Jotun renk kodları desteği",
      "60–120 mikron kontrollü film kalınlığı",
      "Aderans ve film kalınlığı ölçüm raporu",
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
        detail:
          "180–200°C aralığında 15–20 dk pişirme, sertleşme ve film oluşumu.",
      },
      {
        title: "Kalite Kontrol & Sevkiyat",
        detail:
          "Mikron, parlaklık ve aderans kontrollerinin ardından paketleme ve teslimat.",
      },
    ],
    benefits: [
      "Solvent içermez, VOC emisyonu sıfır",
      "UV ve dış hava şartlarına yüksek dayanım",
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
        a: "RAL kataloğundaki tüm renkleri ve Jotun renk kodlarını destekliyoruz. Numune göndererek özel renk eşleştirme de talep edebilirsiniz.",
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
      "6 × 1.9 × 2 m fırın kapasitesi",
      "Çift kat sistem desteği (primer + topcoat)",
      "Standartlara uygun parlaklık ve aderans testi",
    ],
    applications: [
      "Beyaz eşya ve elektrikli ev aletleri",
      "Endüstriyel makine kabinleri",
      "Asansör kabin ve kapı panelleri",
      "Aydınlatma armatürleri",
    ],
    process: [
      {
        title: "Ön Yıkama",
        detail: "Alkali yıkama ve durulama hattında kir-yağ uzaklaştırma.",
      },
      {
        title: "Fosfatlama",
        detail: "Demir veya çinko fosfat ile koruyucu yüzey oluşturma.",
      },
      { title: "Kurutma", detail: "Düşük sıcaklıkta nem giderme adımı." },
      {
        title: "Boya Uygulama",
        detail: "Otomatik veya manuel tabanca ile homojen kaplama.",
      },
      {
        title: "Pişirme",
        detail: "Kontrollü rampa ile 160–200°C polimerizasyon.",
      },
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
    slug: "vernik-kaplama",
    title: "Vernik Kaplama Uygulaması",
    shortTitle: "Vernik Kaplama",
    icon: Droplets,
    excerpt:
      "Boyalı veya doğal yüzeylerde renk derinliğini koruyan, çizilmeye ve UV'ye dayanıklı şeffaf vernik kaplama.",
    description:
      "Metal yüzeylerde dekoratif görünümü güçlendirmek ve kaplamanın ömrünü uzatmak için tek ya da çift kat vernik uyguluyoruz. Mat, yarı mat ve parlak seçeneklerimizle altta kalan rengin tonunu değiştirmeden yüzeye ek koruma ve estetik derinlik kazandırıyoruz.",
    features: [
      "Mat, yarı mat ve parlak vernik seçenekleri",
      "Tek kat veya çift kat sistem desteği",
      "UV ve hava koşullarına dayanım",
      "Çizilme ve sürtünme direncini artırır",
      "Boyanın altındaki renk tonunu korur",
    ],
    applications: [
      "Dekoratif metal mobilya",
      "Mimari aksesuar ve aydınlatma",
      "Beyaz eşya estetik panelleri",
      "Boyalı parçaların ömrünü uzatma",
    ],
    process: [
      {
        title: "Yüzey Hazırlığı",
        detail:
          "Toz, yağ ve önceki kaplamadaki kusurların temizlenmesi ve düzeltilmesi.",
      },
      {
        title: "Vernik Hazırlama",
        detail:
          "Reçeteye uygun karışım, viskozite kontrolü ve filtreleme adımları.",
      },
      {
        title: "Uygulama",
        detail:
          "Kontrollü tabanca ile homojen film kalınlığında tek veya çift kat püskürtme.",
      },
      {
        title: "Kurutma & Sertleşme",
        detail:
          "Fırın veya kontrollü oda sıcaklığında sertleşme süreci.",
      },
      {
        title: "Kalite Kontrolü",
        detail: "Parlaklık, film kalınlığı ve yüzey dokusu kontrolleri.",
      },
    ],
    benefits: [
      "Renk tonunu koruyarak ek koruma",
      "Yüzeyde derinlik ve premium görünüm",
      "Çizilme ve kirlenme direncinde artış",
      "UV nedenli renk solmasını yavaşlatır",
    ],
    faq: [
      {
        q: "Vernik kaplama hangi yüzeylere uygulanır?",
        a: "Elektrostatik toz boya veya fırın boya uygulanmış metal yüzeylerin yanı sıra galvaniz, alüminyum ve paslanmaz çelik üzerine de uygulanabilir.",
      },
      {
        q: "Mat, yarı mat ve parlak farkı nedir?",
        a: "Parlaklık tercihi tamamen estetik bir karardır; üçü de aynı koruma seviyesini sağlar. Dekoratif parçalarda genellikle mat veya yarı mat, ticari ürünlerde parlak vernik tercih edilir.",
      },
      {
        q: "Vernik kaplamanın boya üzerine etkisi nedir?",
        a: "Vernik şeffaf bir koruyucu katmandır; altta uygulanmış boyanın rengini değiştirmez, sadece dayanımını ve görsel derinliğini artırır.",
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
      "Kaplama performansının %70’ini belirleyen aşama yüzey ön işlemedir. 5 kademeli yıkama hattımızda metal yüzeyleri boyaya hazır hale getiriyoruz; bu sayede tuz püskürtme testlerinde uzun süreli dayanım elde ediliyor.",
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
      {
        title: "Yağ Alma",
        detail:
          "Alkali çözeltide kir, yağ ve oksit kalıntılarının uzaklaştırılması.",
      },
      {
        title: "Durulama",
        detail: "Çift kademeli durulama ile yüzey nötralizasyonu.",
      },
      {
        title: "Fosfatlama",
        detail: "Korozyona karşı koruyucu kristal bariyer oluşumu.",
      },
      {
        title: "Pasivasyon",
        detail: "İnce film ile boya tutunmasını artırma.",
      },
      {
        title: "Kurutma",
        detail: "Boya öncesi yüzeyin tamamen kurutulması.",
      },
    ],
    benefits: [
      "Boyada 3 kat daha iyi aderans",
      "Korozyon ömrünü 2–3 katına çıkarır",
      "Uzun süreli tuz püskürtme dayanımı",
      "Uzun vadeli garanti edilebilir kaplama",
    ],
    faq: [
      {
        q: "Yüzey ön işlem neden önemlidir?",
        a: "Yağ ve oksit kalıntısı bulunan bir yüzeye uygulanan boya kısa sürede dökülür. Doğru ön işlem, kaplama ömrünü doğrudan belirler.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
