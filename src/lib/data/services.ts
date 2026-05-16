import type { LucideIcon } from "lucide-react";
import { Flame, SprayCan, Layers, Droplets, CircleDot, Hammer, Shield } from "lucide-react";

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
  {
    slug: "jant-boyama",
    title: "Jant Boyama — Elektrostatik Toz Boya",
    shortTitle: "Jant Boyama",
    icon: CircleDot,
    excerpt:
      "Otomobil ve hafif ticari araç jantları için elektrostatik toz boya ile uzun ömürlü, fabrika kalitesinde kaplama.",
    description:
      "Alüminyum alaşımlı ve çelik jantları sökülmüş şekilde tesisimize teslim alıp kumlama, ön işlem ve elektrostatik toz boya hattımızdan geçiriyoruz. Bordür darbesi, kimyasal lekelenme ve fren tozu nedeniyle yıpranmış jantlar; orijinal renge ya da seçtiğiniz RAL koduna geri döner. Mat siyah, antrasit, parlak gümüş ve özel renkler stoğumuzda bulunur.",
    features: [
      "14\"–22\" arası tüm jant ölçüleri",
      "Alüminyum alaşım ve çelik jant",
      "Kumlama ile mevcut boya/oksit kaldırma",
      "Mat, parlak, metalik ve dokulu seçenekler",
      "RAL kataloğu ve Jotun renk eşleştirme",
    ],
    applications: [
      "Otomobil jantları (alaşım ve çelik)",
      "Hafif ticari araç jantları",
      "Motosiklet jantı ve rotor",
      "Klasik / restorasyon araç jantları",
      "Filo araç jantları (toplu)",
    ],
    process: [
      {
        title: "Lastik Sökümü ve Kumlama",
        detail:
          "Janttan lastik ve balans ağırlıkları sökülür, kumlama hattında eski boya ve oksit tamamen kaldırılır.",
      },
      {
        title: "Yüzey Ön İşleme",
        detail:
          "Yağ alma, durulama ve fosfatlama ile alüminyum yüzey boyaya hazırlanır.",
      },
      {
        title: "Toz Boya Uygulaması",
        detail:
          "Elektrostatik tabanca ile homojen tek kat veya astar+renk+vernik üçlü sistem.",
      },
      {
        title: "Polimerizasyon",
        detail: "180–200°C fırında pişirme; sertleşme ve yüksek aderans.",
      },
      {
        title: "Kalite Kontrol",
        detail:
          "Film kalınlığı, renk tonu ve yüzey kusur kontrolünden sonra paketleme.",
      },
    ],
    benefits: [
      "Fren tozuna ve yol kimyasallarına dayanım",
      "UV ve hava koşullarında renk solmaz",
      "Çizilme ve bordür darbesine dirençli yüzey",
      "Sıvı boyaya kıyasla 3–5 kat daha uzun ömür",
    ],
    faq: [
      {
        q: "Jant boyama ne kadar sürer?",
        a: "Tek set (4 jant) standart koşullarda 2–3 iş gününde teslim edilir. Acil işler için 24 saat seçeneği vardır.",
      },
      {
        q: "Hangi renkler mevcut?",
        a: "RAL kataloğundaki tüm renklerin yanı sıra mat siyah, antrasit, parlak gümüş, bronz, altın gibi özel jant renklerini stokluyoruz.",
      },
      {
        q: "Jantın orijinal değeri/balansı bozulur mu?",
        a: "Kumlama düşük basınçta yapılır, yapısal bütünlük korunur. Boyama sonrası TIR balans makinemizde balans kontrolü yaparız.",
      },
    ],
  },
  {
    slug: "aluminyum-boyama",
    title: "Alüminyum Boyama — Toz Boya ve Fırın Boya",
    shortTitle: "Alüminyum Boyama",
    icon: Hammer,
    excerpt:
      "Alüminyum profil, doğrama, panel ve döküm parçalar için aderansı yüksek, korozyon dirençli elektrostatik kaplama.",
    description:
      "Alüminyum yüzeylerin boyaya tutunması özel bir ön işlem gerektirir; bu nedenle pasivasyon adımımızı kromsuz bir reçete ile uyguluyoruz. Mimari alüminyum doğrama, vitrin profili, panjur, alüminyum sandviç panel, döküm parça ve enjeksiyon kalıplarına elektrostatik toz boya veya fırın boya seçenekleriyle hizmet veriyoruz.",
    features: [
      "Kromsuz pasivasyon ile yüksek aderans",
      "Mimari standartlara uygun renkler",
      "QUALICOAT seviyesinde yüzey performansı",
      "RAL, Jotun ve özel renk eşleştirme",
      "Mat, parlak, dokulu yüzeyler",
    ],
    applications: [
      "Alüminyum doğrama ve kapı-pencere profili",
      "Vitrin ve cephe profili",
      "Alüminyum panjur ve kepenk",
      "Sandviç panel ve kompozit kaplama",
      "Alüminyum döküm ve enjeksiyon parça",
    ],
    process: [
      {
        title: "Yağ Alma",
        detail:
          "Alüminyum yüzeyindeki haddeleme yağları ve kalıntılar alkali yıkamayla giderilir.",
      },
      {
        title: "Pasivasyon",
        detail:
          "Kromsuz pasivasyon ile boyanın tutunacağı koruyucu film oluşturulur.",
      },
      {
        title: "Toz Boya Uygulama",
        detail:
          "Elektrostatik tabanca ile mimari kaliteye uygun film kalınlığı.",
      },
      {
        title: "Polimerizasyon",
        detail: "180–200°C kontrollü fırın eğrisi ile pişirme.",
      },
      {
        title: "Kalite Kontrolü",
        detail: "Aderans, film kalınlığı ve parlaklık ölçümü.",
      },
    ],
    benefits: [
      "Mimari uygulamalarda 10+ yıl renk garantisi",
      "Korozyon ve UV dayanımı yüksek",
      "Çizilme ve kimyasallara dirençli",
      "Kromsuz reçete — çevre dostu",
    ],
    faq: [
      {
        q: "Alüminyumda neden özel bir ön işlem gerekir?",
        a: "Alüminyum yüzeyinde doğal oluşan oksit tabakası boyanın tutunmasını zorlaştırır. Pasivasyon bu yüzeyi hem aderans hem korozyon için optimize eder.",
      },
      {
        q: "Mimari projelerde QUALICOAT uyumu var mı?",
        a: "Reçete ve fırın parametrelerimiz QUALICOAT seviyesinde yüzey performansı verir. İstenirse aderans ve tuz püskürtme test raporu sunarız.",
      },
      {
        q: "Hangi alüminyum tipleri kaplanır?",
        a: "6063, 6061 mimari profiller, alaşımlı döküm parçalar ve hadde alüminyum saclar dahil tüm yaygın alaşımlar kaplanır.",
      },
    ],
  },
  {
    slug: "paslanmaz-boyama",
    title: "Paslanmaz Çelik Boyama",
    shortTitle: "Paslanmaz Boyama",
    icon: Shield,
    excerpt:
      "304 ve 316 paslanmaz çelik yüzeylerde aderans sorununu çözen özel astar + toz boya kombinasyonu.",
    description:
      "Paslanmaz çelik düşük yüzey enerjisi nedeniyle boya tutmakta zorlanır; bu yüzden mimari, mutfak ekipmanı ve dekoratif paslanmaz parçaları için özel epoksi astar + elektrostatik toz boya kombinasyonu uyguluyoruz. 304 ve 316 kalite tüm yüzeylere uygulanabilir; renk seçimi RAL kataloğunun tamamından yapılabilir.",
    features: [
      "Özel epoksi astar ile aderans çözümü",
      "304 ve 316 paslanmaz uyumu",
      "RAL kataloğu tam renk desteği",
      "Mat, parlak ve dokulu seçenekler",
      "Mimari ve gıda hijyenik yüzey opsiyonu",
    ],
    applications: [
      "Paslanmaz çelik korkuluk ve merdiven",
      "Endüstriyel mutfak ekipmanı",
      "Dekoratif paslanmaz cephe paneli",
      "Asansör kabin paneli (paslanmaz)",
      "Reklam tabela ve mağaza ekipmanı",
    ],
    process: [
      {
        title: "Yüzey Aşındırma",
        detail:
          "Aderans için yüzey kontrollü kumlama veya kimyasal aşındırma ile pürüzlendirilir.",
      },
      {
        title: "Yağ Alma ve Aktivasyon",
        detail: "Alkali yıkama ve aktivasyon reçetesi uygulanır.",
      },
      {
        title: "Epoksi Astar",
        detail: "Paslanmaz için özel epoksi astar tabakası fırınlanır.",
      },
      {
        title: "Toz Boya Uygulama",
        detail: "Astar üzerine elektrostatik toz boya katmanı.",
      },
      {
        title: "Polimerizasyon",
        detail: "180–200°C pişirme ve sertleşme.",
      },
    ],
    benefits: [
      "Paslanmazda yıllarca dayanan aderans",
      "Korozyon ve kimyasal dirençte artış",
      "RAL ile renkli paslanmaz görünüm imkânı",
      "Dekoratif ve hijyenik yüzey seçeneği",
    ],
    faq: [
      {
        q: "Paslanmaz çelik neden zor boyanır?",
        a: "304 ve 316 paslanmaz, düşük yüzey enerjisi ve oksit tabakası nedeniyle boya tutunmasını zorlaştırır. Özel astar + yüzey aşındırma bu sorunu çözer.",
      },
      {
        q: "Boya zamanla soyulur mu?",
        a: "Doğru astar + ön işlem ile boya yüzeye kimyasal olarak bağlanır; iç mekânda uzun yıllar, dış mekânda 5–10 yıl performans verir.",
      },
      {
        q: "Hangi paslanmaz tipleri kaplanır?",
        a: "304 ve 316 kalite tüm mimari paslanmaz çelik yüzeyler kaplanabilir. Galvaniz ve elektrolit kaplama yüzeyler için ayrı reçete kullanırız.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
