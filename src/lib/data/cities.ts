export interface City {
  slug: string;
  name: string;
  province: string;
  intro: string;
  zones: string[];
  paragraphs: string[];
  highlights: { label: string; value: string }[];
  /**
   * Optional extended local-SEO content. When present, the city page renders
   * the long-form layout instead of the generic template.
   */
  rich?: CityRichContent;
}

export interface CityRichContent {
  /** Override the short intro under the H1; supports natural keyword placement. */
  lede: string;
  /** Used in <title>, h1 emphasis, and meta description. */
  primaryKeyword: string;
  /** Secondary keywords surfaced in body copy and headings (must read naturally). */
  secondaryKeywords: string[];

  /** GeoCoordinates for Schema.org Place. */
  geo: { lat: number; lng: number };
  /** km — used in Service schema serviceArea radius. */
  serviceRadiusKm: number;

  /** Local trust signals shown as a card grid. */
  trustSignals: { label: string; detail: string }[];

  /** Drive-time matrix from our facility to known sub-zones. */
  routes: { from: string; to: string; minutes: number; note?: string }[];

  /** Long-form sections — each becomes an h2 with body paragraphs. */
  sections: {
    heading: string;
    body: string[];
  }[];

  /** Sectors served in this specific city (for credibility + entity coverage). */
  sectors: string[];

  /** Sub-zones / districts / OSB sites for entity-level local matching. */
  neighborhoods: { name: string; description: string }[];

  /** Pulled-forward testimonial specific to this city. */
  testimonial?: {
    quote: string;
    role: string;
    sector: string;
  };

  /** City-specific FAQ — feeds FAQPage schema and accordion. */
  faq: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: "corlu",
    name: "Çorlu",
    province: "Tekirdağ",
    intro:
      "Çorlu Organize Sanayi Bölgesi, Velimeşe OSB ve çevresinde elektrostatik toz boya ve fırın boya hizmetlerimizle yanınızdayız.",
    zones: [
      "Çorlu OSB",
      "Velimeşe OSB",
      "Türkgücü Sanayi",
      "Marmaracık Bölgesi",
    ],
    paragraphs: [
      "Lotus Elektrostatik Boya, Çorlu’nun yoğun sanayi yapısı içinde kurumsal üreticiler, beyaz eşya yan sanayi firmaları ve tekstil makinesi imalatçılarıyla uzun yıllardır birlikte çalışmaktadır. Çorlu OSB ve Velimeşe OSB içindeki firmalara haftanın 6 günü bölge içi nakliye desteği sağlıyoruz.",
      "Tesisimiz Çorlu merkezine 10 dakika mesafededir. Tek parça maksimum 6 metre uzunluğa kadar fırın hattımız ile büyük gabarili konstrüksiyon, tank ve makine kabinleri için ideal bir çözüm sunarız.",
      "Çorlu içinden gelen acil işler için 48 saatte teslimat seçeneği mevcuttur. Detaylar için WhatsApp üzerinden iletişime geçebilirsiniz.",
    ],
    highlights: [
      { label: "Mesafe", value: "Merkez 10 dk" },
      { label: "Bölge içi nakliye", value: "Var" },
      { label: "Acil teslim", value: "48 saat" },
    ],

    rich: {
      lede:
        "Çorlu’da elektrostatik toz boya, fırın boya ve metal boyama hizmetlerinde 11 yılı aşkın tecrübe. Çorlu OSB ve Velimeşe OSB başta olmak üzere bölgenin tüm sanayi alt bölgelerine bölge içi nakliye, planlı toplama ve 48 saatlik acil teslim seçeneği.",
      primaryKeyword: "Çorlu toz boya",
      secondaryKeywords: [
        "elektrostatik toz boya Çorlu",
        "metal boyama Çorlu",
        "fırın boya Çorlu",
        "Çorlu OSB toz boya",
      ],

      geo: { lat: 41.1597, lng: 27.8003 },
      serviceRadiusKm: 25,

      trustSignals: [
        {
          label: "Yerel kuruluş",
          detail:
            "2014’ten bu yana Çorlu OSB içinde faaliyet gösteren tesis. Sahibimiz ve üretim sorumlumuz aynı kişi.",
        },
        {
          label: "Kurumsal müşteri ağı",
          detail:
            "Çorlu’daki beyaz eşya yan sanayi, tekstil makinesi ve gıda ekipmanı üreticileriyle düzenli üretim ortaklığı.",
        },
        {
          label: "Bölge içi nakliye",
          detail:
            "Çorlu OSB, Velimeşe OSB ve Türkgücü hattına haftanın 6 günü kendi araçlarımızla toplama ve teslim.",
        },
        {
          label: "Mesafe avantajı",
          detail:
            "Çorlu merkezine 10 dakika, OSB’nin tüm kapılarına 15 dakika içinde ulaşım. Yüz yüze tesis ziyareti her an mümkün.",
        },
        {
          label: "ISO 12944 sertifikalı",
          detail:
            "C3–C5 antikorozif sistemler için yazılı performans taahhüdü ve mikron raporlu teslim.",
        },
        {
          label: "Acil teslim",
          detail:
            "Çorlu içindeki acil siparişler için 48 saat içinde teslim seçeneği — üretim hattınız durmasın.",
        },
      ],

      routes: [
        {
          from: "Tesisimiz",
          to: "Çorlu Merkez (D-100)",
          minutes: 10,
          note: "Acil teslim için en hızlı güzergah",
        },
        {
          from: "Tesisimiz",
          to: "Çorlu OSB",
          minutes: 12,
        },
        {
          from: "Tesisimiz",
          to: "Velimeşe OSB",
          minutes: 18,
          note: "Haftada 3 gün düzenli sefer",
        },
        {
          from: "Tesisimiz",
          to: "Türkgücü Sanayi",
          minutes: 15,
        },
        {
          from: "Tesisimiz",
          to: "Marmaracık",
          minutes: 22,
        },
        {
          from: "Tesisimiz",
          to: "Ulaş Mevkii",
          minutes: 20,
        },
      ],

      sectors: [
        "Beyaz eşya yan sanayi",
        "Tekstil makineleri",
        "Otomotiv yan sanayi",
        "Gıda ekipmanları",
        "Mobilya ve raf sistemleri",
        "Aydınlatma armatürleri",
        "İnşaat çelik konstrüksiyon",
        "Asansör kabinleri",
      ],

      neighborhoods: [
        {
          name: "Çorlu OSB",
          description:
            "Çorlu’nun en büyük organize sanayi bölgesi. Beyaz eşya, tekstil makinesi ve metal işleme firmaları için günlük çıkışlı nakliye desteği veriyoruz.",
        },
        {
          name: "Velimeşe OSB",
          description:
            "Otomotiv yan sanayi ve plastik enjeksiyon ağırlıklı bölge. Haftalık planlı toplama–teslim seferimiz mevcuttur.",
        },
        {
          name: "Türkgücü Sanayi",
          description:
            "Küçük ve orta ölçekli imalathaneler için düşük minimum sipariş ve hızlı geri dönüş ile çalışıyoruz.",
        },
        {
          name: "Marmaracık",
          description:
            "Marmaracık bölgesindeki çelik konstrüksiyon firmalarına ISO 12944 antikorozif sistemlerle hizmet sunuyoruz.",
        },
        {
          name: "Ulaş & Misinli",
          description:
            "Tarımsal makine ve gıda ekipmanı üreticileri için gıda uyumlu kaplama reçeteleri uyguluyoruz.",
        },
      ],

      testimonial: {
        quote:
          "Çorlu OSB içindeki imalat hattımızda kullandığımız profillerin tamamını uzun süredir Lotus’a yaptırıyoruz. Renk tutarlılığı, teslim süresi ve geri bildirim hızı açısından bölgede karşılaştırılabilir bir alternatifle henüz karşılaşmadık.",
        role: "Üretim Müdürü",
        sector: "Beyaz Eşya Yan Sanayi · Çorlu OSB",
      },

      sections: [
        {
          heading: "Çorlu’da neden Lotus Elektrostatik Boya?",
          body: [
            "Lotus Elektrostatik Boya, 2014 yılından bu yana Çorlu Organize Sanayi Bölgesi içinde kesintisiz olarak üretim yapan, tek noktadan yönetilen bir endüstriyel kaplama tesisidir. Çorlu’nun yoğun üretim temposunu yakından bilen, bölgedeki kurumsal firmalarla uzun vadeli üretim ortaklıkları kurmuş bir ekibiz.",
            "Tesisimiz bütünüyle Çorlu’da konumlanmıştır; bu sayede teklif, üretim ve teslim aşamalarında müşterimizle aynı saat diliminde, aynı şehirde ve aynı muhatapla iletişim kurarız. Üretim sırasında değişen renk veya ölçü taleplerine, dış il bağlantılı tedarikçilerin sağlayamayacağı hızda yanıt veririz.",
            "Çorlu içindeki imalathaneler için tek bir parçadan binlerce parçaya kadar aynı kalite standardını uyguluyoruz. Beyaz eşya yan sanayisinin seri üretim ihtiyacı, tekstil makinesi imalatçısının renk tutarlılığı talebi ve gıda ekipmanı üreticisinin uygunluk gereklilikleri için ayrı reçete ve süreç planlaması yapıyoruz.",
          ],
        },
        {
          heading: "Çorlu’daki sanayi bölgelerine sunduğumuz hizmetler",
          body: [
            "Elektrostatik toz boya uygulamamızı 60–120 mikron arasında kontrollü film kalınlığıyla yapıyoruz. RAL kataloğundaki tüm renkler, Pantone ve numune üzerinden özel renk eşleştirme dahil her talebe yanıt verebiliyoruz. Polyester, epoksi ve hibrit toz boya seçeneklerimiz, Çorlu’daki dış cephe, beyaz eşya ve mühendislik parçası üretimlerinde uzun ömürlü dayanım sağlar.",
            "Fırın boya hattımız tek parça 6 metre uzunluğa kadar büyük gabarili işleri kabul edebilmektedir. Çorlu OSB’deki konstrüksiyon firmaları ve makine imalatçıları için bu kapasite, parçayı bölmeden tek seferde işlemek anlamına gelir; bu da hem süre hem maliyet avantajı sağlar.",
            "Metal boyama hizmetlerimiz yalnızca uygulama değil, öncesinde 5 kademeli ön yıkama ya da Sa 2.5 standardında kumlama içerir. Yüzey hazırlığı kaplama performansının %70’ini belirler; bu adımı atlayan ya da dış tedarikçiye veren atölyelerin teslim ettiği işlerde 6–12 ay içinde dökülme sorunu yaşandığını biliyoruz. Lotus’ta ön işlem, uygulama ve pişirme aynı çatı altında, aynı ekibin sorumluluğunda yürütülür.",
          ],
        },
        {
          heading: "Çorlu’da hangi sektörlere hizmet veriyoruz?",
          body: [
            "Çorlu, Türkiye’nin en yoğun sanayi yoğunluğuna sahip ilçelerinden biridir. Bu yoğunluk içinde Lotus, sektör bazında uzmanlaşmış bir kaplama yaklaşımı sunar. Beyaz eşya yan sanayisinde renk tutarlılığı ve hızlı seri üretim; tekstil makinelerinde aşınmaya dayanım; otomotiv yan sanayisinde tuz püskürtme testlerinde sertifikalı performans önceliklidir.",
            "Gıda ekipmanı üreticileri için gıdaya uyumlu epoksi reçeteler, asansör kabinleri için düzgün dokulu fırın boya ve aydınlatma armatürleri için anti-bakteriyel opsiyonlar uyguluyoruz. Her sektörün kendine özgü ihtiyacını biliyoruz; bu yüzden teklif aşamasında sektörünüzü ve uygulama koşulunu sormak ilk işimizdir.",
          ],
        },
        {
          heading: "Çorlu içi teslim süreleri ve nakliye",
          body: [
            "Çorlu içindeki firmalar için standart üretim süremiz 3–5 iş günüdür. Acil ihtiyaçlarda — üretim hattının durmasına yol açabilecek durumlarda — 48 saat içinde teslim seçeneği sunuyoruz. Bu seçeneği özellikle Çorlu OSB içindeki firmalar için vardiyalarımızı yeniden planlayarak hayata geçiriyoruz.",
            "Bölge içi nakliye hizmetimiz sayesinde parçanızı tesisimize getirme ya da teslim aldığımız yerden geri bırakma işlemini bizim ekibimiz yapar. Çorlu OSB, Velimeşe OSB, Türkgücü ve Marmaracık hattında haftada 6 gün toplama–teslim seferimiz vardır. Tek parçalık küçük işler için bile bu hizmet ücretsiz olarak çalışır.",
          ],
        },
      ],

      faq: [
        {
          q: "Çorlu’da toz boya yaptırmak istiyorum, sürecin başlangıcı nasıl olur?",
          a: "Parça resmi, miktar, istediğiniz renk (RAL kodu varsa) ve teslim süresi bilgisini WhatsApp veya telefon üzerinden iletmeniz yeterlidir. 24 saat içinde detaylı yazılı teklif sunarız. Onayınızdan sonra Çorlu içindeki firmalardan parçaları kendi aracımızla alıyor, işlem sonrası aynı şekilde teslim ediyoruz.",
        },
        {
          q: "Çorlu OSB içindeki firmalara özel bir hizmet farkınız var mı?",
          a: "Çorlu OSB içindeki firmalar için haftanın 6 günü düzenli toplama–teslim seferimiz vardır; ekstra nakliye ücreti uygulanmaz. Aynı zamanda OSB içindeki acil işler için diğer bölgelerden 24 saat daha kısa teslim süresi sunuyoruz.",
        },
        {
          q: "Elektrostatik toz boya ve fırın boya arasındaki fark nedir, Çorlu’daki üretimimde hangisini tercih etmeliyim?",
          a: "Elektrostatik toz boya, solvent içermeyen ve fırında ergitilen kuru toz halinde uygulanır; çok daha homojen film kalınlığı ve yüksek darbe dayanımı sağlar. Fırın boya genellikle sıvı bazlı pişirilen sistemleri ifade eder. Beyaz eşya, mobilya iskeleti ve dış mekan parçaları için elektrostatik toz boyayı; bazı dekoratif ve özel doku gerektiren parçalar için fırın boyayı öneririz. Tesisimizde her iki yöntem de aynı kalite standardında uygulanır.",
        },
        {
          q: "Çorlu’da metal boyama yaptırırken yüzey hazırlığı dahil mi?",
          a: "Evet. 5 kademeli ön yıkama (yağ alma, durulama, fosfatlama, pasivasyon, kurutma) ve gerektiğinde Sa 2.5 standardında kumlama hizmetlerimiz teklif fiyatına dahildir. Yüzey hazırlığı kaplamanın ömrünü doğrudan belirleyen aşamadır; bu adımı dış tedarikçiye yönlendirmiyoruz.",
        },
        {
          q: "Çorlu içindeki firmalar için minimum sipariş zorunluluğunuz var mı?",
          a: "Hayır. Tek parça veya küçük seri üretimler dahil tüm projeleri değerlendiriyoruz. Çorlu içindeki küçük imalathanelerin tek seferlik ihtiyaçlarına da, kurumsal firmaların aylık seri üretim ihtiyaçlarına da aynı kalite standardını uyguluyoruz.",
        },
        {
          q: "Çorlu’da hangi renk seçeneklerinde toz boya yapıyorsunuz?",
          a: "RAL kataloğundaki tüm renkler standart hizmetimize dahildir. Bunun yanında Pantone, NCS ve numune üzerinden özel renk eşleştirme yapıyoruz. Mat, parlak, yarı mat, dokulu ve metalik yüzey opsiyonları mevcuttur. Özel renk üretim süresi 3–7 iş günüdür.",
        },
        {
          q: "Çorlu içindeki acil bir iş için ne kadar sürede teslim alabilirim?",
          a: "Çorlu içinden gelen acil siparişler için 48 saat içinde teslim seçeneğimiz vardır. Bu süre, parçaların tesisimize ulaşmasından itibaren işler. Acil iş notu için lütfen WhatsApp üzerinden bizimle önceden iletişime geçin; vardiyamızı buna göre planlarız.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Antikorozif sistemlerimizde ISO 12944 standardında C3–C5 sınıfı dayanım garantisi mevcuttur. Her teslimde mikron ve aderans ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "cerkezkoy",
    name: "Çerkezköy",
    province: "Tekirdağ",
    intro:
      "Çerkezköy Organize Sanayi ve Kapaklı bölgesindeki ağır sanayi üreticileri için endüstriyel kaplama çözümleri.",
    zones: [
      "Çerkezköy OSB",
      "Karaağaç Sanayi",
      "Veliköy Mevkii",
      "Kapaklı Bölgesi",
    ],
    paragraphs: [
      "Çerkezköy OSB; kimya, ilaç, otomotiv yan sanayi ve tekstil makineleri açısından Türkiye’nin en yoğun sanayi merkezlerinden biridir. Lotus, bu yoğun talebi karşılayabilecek kapasitedeki tek parça pişirme fırını ve kumlama hattıyla bölgenin tercih ettiği kaplama tedarikçilerinden biridir.",
      "ISO 12944 standardında antikorozif kaplama sistemleri, kimya tesisi ekipmanları için kimyasal dirençli özel reçeteler ve büyük ebatlı parçalar için konveyörlü hat hizmetimiz mevcuttur.",
      "Çerkezköy ve Kapaklı bölgesindeki firmalar için haftalık planlı toplama ve teslim servisi sunmaktayız.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 25 dk" },
      { label: "Servis", value: "Haftalık planlı" },
      { label: "Ağır parça", value: "6 m fırın" },
    ],
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    province: "Tekirdağ",
    intro:
      "Tekirdağ merkez ve ilçelerine elektrostatik toz boya, fırın boya ve antikorozif kaplama hizmetleri.",
    zones: [
      "Tekirdağ Merkez",
      "Süleymanpaşa",
      "Muratlı",
      "Marmara Ereğlisi",
    ],
    paragraphs: [
      "Tekirdağ’ın merkez ilçeleri ve sanayi alt bölgelerine düzenli sefer planımız bulunmaktadır. Süleymanpaşa, Muratlı, Hayrabolu ve Marmara Ereğlisi gibi noktalara haftalık olarak çıkışlı nakliye desteği veriyoruz.",
      "Tarımsal makine, gıda ekipmanı ve liman ekipmanları açısından geniş bir referans portföyüne sahibiz. Liman ve denize yakın tesislerin C5-M sınıfı korozyon ihtiyacı için epoksi + poliüretan çoklu katman uyguluyoruz.",
    ],
    highlights: [
      { label: "Sefer", value: "Haftalık" },
      { label: "Korozyon", value: "C5-M sertifikalı" },
      { label: "Tesis", value: "Çorlu merkez" },
    ],
  },
  {
    slug: "kapakli",
    name: "Kapaklı",
    province: "Tekirdağ",
    intro:
      "Kapaklı bölgesindeki üreticiler için hızlı teslim süreli elektrostatik toz boya ve fırın boya çözümleri.",
    zones: ["Kapaklı Merkez", "İnönü Mahallesi", "Bahçeağıl", "Karlıköy"],
    paragraphs: [
      "Kapaklı bölgesi, Çerkezköy OSB’ye komşu konumuyla küçük ve orta ölçekli imalatçılara ev sahipliği yapar. Lotus, bu üreticilerin küçük seri ve özel renk taleplerine ekonomik ve hızlı çözüm üretir.",
      "RAL kataloğundaki tüm renklerde minimum sipariş zorunluluğu olmadan üretim yapıyor, 3-5 iş günü içinde teslim edebiliyoruz.",
    ],
    highlights: [
      { label: "Min. sipariş", value: "Yok" },
      { label: "Teslim", value: "3–5 gün" },
      { label: "Mesafe", value: "30 dk" },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
