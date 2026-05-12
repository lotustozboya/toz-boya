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
      "Tesisimiz Çorlu merkezine 10 dakika mesafededir. 6 × 1.9 × 2 metre kapasiteli fırın hattımız ile büyük gabarili konstrüksiyon, makine kabini ve mobilya çerçeveleri için ideal bir çözüm sunarız.",
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

      geo: { lat: 41.1501036, lng: 27.7347544 },
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
          label: "Ölçüm raporlu teslim",
          detail:
            "Aderans, mikron ve renk dayanımı için yazılı performans taahhüdü ve teslimle birlikte ölçüm raporu paylaşılır.",
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
            "Marmaracık bölgesindeki çelik konstrüksiyon ve makine imalat firmalarına elektrostatik toz boya ve fırın boya hizmeti sunuyoruz.",
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
            "Elektrostatik toz boya uygulamamızı 60–120 mikron arasında kontrollü film kalınlığıyla yapıyoruz. RAL kataloğundaki tüm renkleri, Jotun renk kodlarını ve numune üzerinden özel renk eşleştirmeyi destekliyoruz. Polyester, epoksi ve hibrit toz boya seçeneklerimiz, Çorlu’daki dış cephe, beyaz eşya ve mühendislik parçası üretimlerinde uzun ömürlü dayanım sağlar.",
            "Fırın boya hattımız 6 × 1.9 × 2 metre kapasitesindedir. Çorlu OSB’deki konstrüksiyon firmaları ve makine imalatçıları için bu kapasite, parçayı bölmeden tek seferde işlemek anlamına gelir; bu da hem süre hem maliyet avantajı sağlar.",
            "Metal boyama hizmetlerimiz yalnızca uygulama değil, öncesinde 5 kademeli yıkama ve fosfatlama içeren tam bir yüzey ön işleme süreci ile birlikte sunulur. Yüzey hazırlığı kaplama performansının %70’ini belirler; bu adımı atlayan ya da dış tedarikçiye veren atölyelerin teslim ettiği işlerde 6–12 ay içinde dökülme sorunu yaşandığını biliyoruz. Lotus’ta ön işlem, uygulama ve pişirme aynı çatı altında, aynı ekibin sorumluluğunda yürütülür.",
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
          a: "Parça resmi, miktar, istediğiniz renk (RAL veya Jotun kodu) ve teslim süresi bilgisini WhatsApp veya telefon üzerinden iletmeniz yeterlidir. 24 saat içinde detaylı yazılı teklif sunarız. Onayınızdan sonra Çorlu içindeki firmalardan parçaları kendi aracımızla alıyor, işlem sonrası aynı şekilde teslim ediyoruz.",
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
          a: "Evet. 5 kademeli ön yıkama (yağ alma, durulama, fosfatlama, pasivasyon, kurutma) hizmetlerimiz teklif fiyatına dahildir. Yüzey hazırlığı kaplamanın ömrünü doğrudan belirleyen aşamadır; bu adımı dış tedarikçiye yönlendirmiyoruz.",
        },
        {
          q: "Çorlu içindeki firmalar için minimum sipariş zorunluluğunuz var mı?",
          a: "Hayır. Tek parça veya küçük seri üretimler dahil tüm projeleri değerlendiriyoruz. Çorlu içindeki küçük imalathanelerin tek seferlik ihtiyaçlarına da, kurumsal firmaların aylık seri üretim ihtiyaçlarına da aynı kalite standardını uyguluyoruz.",
        },
        {
          q: "Çorlu’da hangi renk seçeneklerinde toz boya yapıyorsunuz?",
          a: "RAL kataloğundaki tüm renkleri ve Jotun renk kodlarını destekliyoruz. Mat, parlak, yarı mat, dokulu ve metalik yüzey opsiyonları mevcuttur. Numune üzerinden özel renk eşleştirme süresi 3–7 iş günüdür.",
        },
        {
          q: "Çorlu içindeki acil bir iş için ne kadar sürede teslim alabilirim?",
          a: "Çorlu içinden gelen acil siparişler için 48 saat içinde teslim seçeneğimiz vardır. Bu süre, parçaların tesisimize ulaşmasından itibaren işler. Acil iş notu için lütfen WhatsApp üzerinden bizimle önceden iletişime geçin; vardiyamızı buna göre planlarız.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde mikron, parlaklık ve aderans ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "cerkezkoy",
    name: "Çerkezköy",
    province: "Tekirdağ",
    intro:
      "Çerkezköy Organize Sanayi ve çevresindeki ağır sanayi üreticileri için endüstriyel kaplama çözümleri.",
    zones: [
      "Çerkezköy OSB",
      "Karaağaç Sanayi",
      "Veliköy Mevkii",
      "Pınarca",
    ],
    paragraphs: [
      "Çerkezköy OSB; kimya, ilaç, otomotiv yan sanayi ve tekstil makineleri açısından Türkiye’nin en yoğun sanayi merkezlerinden biridir. Lotus, bu yoğun talebi karşılayabilecek kapasitedeki tek parça pişirme fırınıyla bölgenin tercih ettiği kaplama tedarikçilerinden biridir.",
      "Beyaz eşya yan sanayi, makine imalatı ve büyük ebatlı parçalar için konveyörlü hat hizmetimiz; isteğe bağlı dekoratif vernik kaplama opsiyonumuz mevcuttur.",
      "Çerkezköy ve çevresindeki firmalar için haftalık planlı toplama ve teslim servisi sunmaktayız.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 25 dk" },
      { label: "Servis", value: "Haftalık planlı" },
      { label: "Fırın", value: "6 × 1.9 × 2 m" },
    ],
    rich: {
      lede:
        "Çerkezköy OSB ve çevresindeki kimya, ilaç, otomotiv yan sanayi ve tekstil makinesi üreticilerine elektrostatik toz boya, fırın boya ve vernik kaplama. Çorlu’daki tesisimizden Çerkezköy bölgesine haftalık planlı sefer ve büyük gabarili parçalar için 6 × 1.9 × 2 m fırın kapasitesi.",
      primaryKeyword: "Çerkezköy toz boya",
      secondaryKeywords: [
        "elektrostatik toz boya Çerkezköy",
        "Çerkezköy OSB toz boya",
        "fırın boya Çerkezköy",
        "metal boyama Çerkezköy",
      ],
      geo: { lat: 41.2855, lng: 27.9758 },
      serviceRadiusKm: 30,
      trustSignals: [
        {
          label: "Yakın bölge",
          detail:
            "Çorlu OSB merkezli tesisimiz Çerkezköy OSB’ye 25 dakika mesafede. Aynı sanayi koridorunun içinde olduğumuz için lojistik maliyeti ve süresi minimumdur.",
        },
        {
          label: "Ağır sanayi kapasitesi",
          detail:
            "Kimya ve ilaç ekipmanı imalatçılarının ihtiyaç duyduğu büyük ebatlı parçaları 6 × 1.9 × 2 m fırın hattımızda tek seferde işliyoruz.",
        },
        {
          label: "Renk tutarlılığı",
          detail:
            "Tekstil makinesi ve otomotiv yan sanayisinin seri üretiminde kritik olan partiler arası renk tutarlılığını ölçüm raporlu teslimle garantiliyoruz.",
        },
        {
          label: "Planlı haftalık sefer",
          detail:
            "Çerkezköy OSB ve çevresindeki firmalar için haftada 2 gün planlı toplama–teslim hattımız var; ayrıca acil siparişlerde özel sefer düzenlenir.",
        },
        {
          label: "Standartlara uygun",
          detail:
            "ISO 2360 mikron ölçümü ve ISO 2409 aderans testi ile her teslim ölçüm raporlu yapılır.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "RAL kataloğundaki tüm renkler ve Jotun renk kodlarıyla çalışıyor; numune üzerinden özel renk eşleştirme yapıyoruz.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Çerkezköy OSB",
          minutes: 25,
          note: "Haftada 2 gün planlı sefer",
        },
        { from: "Tesisimiz", to: "Çerkezköy Merkez", minutes: 22 },
        { from: "Tesisimiz", to: "Karaağaç Sanayi", minutes: 27 },
        { from: "Tesisimiz", to: "Veliköy", minutes: 30 },
        { from: "Tesisimiz", to: "Pınarca", minutes: 28 },
      ],
      sectors: [
        "Kimya & petrokimya ekipmanı",
        "İlaç ekipmanı imalatı",
        "Otomotiv yan sanayi",
        "Tekstil makineleri",
        "Beyaz eşya yan sanayi",
        "Çelik konstrüksiyon",
        "Plastik enjeksiyon makineleri",
        "Mobilya & raf sistemleri",
      ],
      neighborhoods: [
        {
          name: "Çerkezköy OSB",
          description:
            "Bölgenin ana üretim merkezi. Kimya, ilaç ve otomotiv yan sanayi ağırlıklı. Haftalık planlı sefer hattımız bu bölgeye düzenli çalışır.",
        },
        {
          name: "Karaağaç Sanayi",
          description:
            "Çerkezköy OSB komşusu küçük-orta ölçekli imalatçı yoğunluklu bölge. Tek parça veya küçük seri işler için ekonomik çözüm sunarız.",
        },
        {
          name: "Veliköy",
          description:
            "Otomotiv yan sanayisinin yoğunlaştığı alt bölge. Renk tutarlılığı ve seri üretim hızı kritik olduğu için ölçüm raporlu teslim öne çıkar.",
        },
        {
          name: "Pınarca",
          description:
            "Tekstil makinesi ve metal işleme firmalarına ev sahipliği yapan bölge. Büyük gabarili makine gövdeleri için 6 m fırın kapasitemiz uygundur.",
        },
      ],
      testimonial: {
        quote:
          "Çerkezköy OSB içindeki üretim hattımızda kullandığımız metal kabinleri uzun süredir Lotus’a yaptırıyoruz. Renk tutarlılığı ve teslim disiplini açısından bölgede çalıştığımız en iyi tedarikçi.",
        role: "Üretim Müdürü",
        sector: "Tekstil Makineleri · Çerkezköy OSB",
      },
      sections: [
        {
          heading: "Çerkezköy’de hangi sektörlere hizmet veriyoruz?",
          body: [
            "Çerkezköy Organize Sanayi Bölgesi, Türkiye’nin en yoğun sanayi merkezlerinden biridir; kimya, ilaç, otomotiv yan sanayi, tekstil makineleri ve beyaz eşya yan sanayisi başta olmak üzere geniş bir üretim profili barındırır. Lotus, bu sektörlerin her birinin kendine özgü kaplama gereksinimine uygun reçete ve süreç planlaması sunar.",
            "Kimya ve ilaç ekipmanlarında temizlenebilirlik ve dayanıklılık öncelikli, otomotiv yan sanayide renk tutarlılığı ve seri üretim hızı, tekstil makinelerinde aşınmaya direnç ve uzun ömür kritik. Sektör bazlı bu farklılıkları teklif aşamasında belirler ve uygun reçeteyi öneririz.",
          ],
        },
        {
          heading: "Çerkezköy’den bize ulaşım ve teslim süresi",
          body: [
            "Çorlu OSB merkezli tesisimiz Çerkezköy OSB’ye 25 dakika mesafededir. Bölgedeki üreticiler için haftada 2 gün planlı toplama–teslim seferimiz vardır; acil işlerde ise özel sefer organize edilebilir.",
            "Standart üretim süremiz 3–5 iş günü olup, üretim hattının durmasına yol açabilecek acil durumlar için 48 saat içinde teslim seçeneği mevcuttur. Çerkezköy bölgesine bölge içi nakliye desteğimiz ücretsiz olarak çalışır.",
          ],
        },
        {
          heading: "Çerkezköy için kapasite ve teknik altyapı",
          body: [
            "6 metre uzunluk, 1.9 metre genişlik ve 2 metre yükseklik kapasiteli pişirme fırınımız, Çerkezköy OSB’deki kimya tesisi ekipmanları, büyük makine gövdeleri ve konstrüksiyon parçalarının çoğunu tek parça olarak işlemeye olanak tanır.",
            "RAL kataloğundaki tüm renkleri ve Jotun renk kodlarını destekliyoruz; gerektiğinde numune üzerinden özel renk eşleştirme de yapıyoruz. Polyester, epoksi ve hibrit toz boya seçenekleriyle her sektörün performans beklentisini karşılıyoruz.",
          ],
        },
      ],
      faq: [
        {
          q: "Çerkezköy’den parçalarımı tesisinize nasıl iletirim?",
          a: "Çerkezköy OSB ve çevresindeki firmalar için haftada 2 gün planlı toplama–teslim seferimiz vardır. WhatsApp veya telefon üzerinden bildirilen siparişler için araç organizasyonunu biz yaparız; bölge içi nakliye ücretsizdir.",
        },
        {
          q: "Çerkezköy OSB’deki büyük makine gövdelerini boyayabilir misiniz?",
          a: "Evet. 6 × 1.9 × 2 m fırın kapasitemiz, kimya ve tekstil makinelerinin büyük gövdelerini parça bölmeden tek seferde işlemeye olanak tanır.",
        },
        {
          q: "Çerkezköy’den gelen acil işler için teslim süresi nedir?",
          a: "Standart üretim süresi 3–5 iş günüdür. Acil durumlarda — özellikle üretim hattının durmasına yol açabilecek işler için — 48 saat içinde teslim seçeneği sunuyoruz. Bu seçeneği WhatsApp üzerinden önceden bildirmeniz gerekir.",
        },
        {
          q: "Renk eşleşmesinde RAL dışında hangi katalogları destekliyorsunuz?",
          a: "RAL kataloğunun yanı sıra Jotun renk kodlarını da destekliyoruz. Müşteri elindeki numune ile özel renk eşleştirme yapılabilir; bu durumda 3–7 iş günü içinde renk hazırlanır.",
        },
        {
          q: "Çerkezköy’deki kimya/ilaç ekipmanları için özel kaplama yapılıyor mu?",
          a: "Standart elektrostatik toz boya ve fırın boya seçeneklerimiz, kimya ve ilaç ekipmanlarının büyük çoğunluğu için yeterlidir. Yüksek sıcaklık veya kimyasal direnç gerektiren özel reçeteli işler için teklif aşamasında uygun sistemi belirleriz.",
        },
        {
          q: "Çerkezköy’deki firmalar için minimum sipariş zorunluluğu var mı?",
          a: "Hayır. Tek parça veya küçük seri üretimler dahil tüm projeleri değerlendiriyoruz. Çerkezköy OSB’deki büyük üreticilerin yan sanayi ihtiyaçları kadar küçük imalathanelerin tek seferlik işlerine de aynı kalite standardını uygularız.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde mikron, parlaklık ve aderans ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    province: "Tekirdağ",
    intro:
      "Tekirdağ merkez ve ilçelerine elektrostatik toz boya, fırın boya ve vernik kaplama hizmetleri.",
    zones: [
      "Tekirdağ Merkez",
      "Süleymanpaşa",
      "Muratlı",
      "Hayrabolu",
    ],
    paragraphs: [
      "Tekirdağ’ın merkez ilçeleri ve sanayi alt bölgelerine düzenli sefer planımız bulunmaktadır. Süleymanpaşa, Muratlı ve Hayrabolu gibi noktalara haftalık olarak çıkışlı nakliye desteği veriyoruz.",
      "Tarımsal makine, gıda ekipmanı ve mobilya yan sanayisi açısından geniş bir referans portföyüne sahibiz. Estetik ön plana çıkan parçalarda vernik kaplama opsiyonumuz ile dekoratif derinlik ve uzun ömür sağlıyoruz.",
    ],
    highlights: [
      { label: "Sefer", value: "Haftalık" },
      { label: "Vernik", value: "Mat / parlak" },
      { label: "Tesis", value: "Çorlu merkez" },
    ],
    rich: {
      lede:
        "Tekirdağ il merkezi, Süleymanpaşa, Muratlı ve Hayrabolu’daki tarımsal makine, gıda ekipmanı ve mobilya yan sanayi üreticilerine elektrostatik toz boya, fırın boya ve vernik kaplama. Çorlu’daki tesisimizden Tekirdağ ilinin tüm üretim noktalarına haftalık planlı sefer.",
      primaryKeyword: "Tekirdağ toz boya",
      secondaryKeywords: [
        "elektrostatik toz boya Tekirdağ",
        "Süleymanpaşa toz boya",
        "fırın boya Tekirdağ",
        "metal boyama Tekirdağ",
      ],
      geo: { lat: 40.9833, lng: 27.5167 },
      serviceRadiusKm: 60,
      trustSignals: [
        {
          label: "Tüm il kapsama",
          detail:
            "Çorlu merkezli tesisimizden Tekirdağ il merkezi, Süleymanpaşa, Muratlı, Hayrabolu ve diğer ilçe sanayi bölgelerine haftalık sefer planımız vardır.",
        },
        {
          label: "Tarımsal makine deneyimi",
          detail:
            "Tekirdağ’ın güçlü tarım sektörüne hizmet veren tarımsal makine ve ekipman üreticileri için dış mekan dayanımı yüksek polyester sistemleri uygularız.",
        },
        {
          label: "Gıda ekipmanı uyumlu",
          detail:
            "Süt, et ve gıda işleme ekipmanlarında temizlenebilirlik öncelikli kaplama reçeteleri sunuyor; düz, gözeneksiz yüzey elde ediyoruz.",
        },
        {
          label: "Vernik kaplama opsiyonu",
          detail:
            "Mobilya yan sanayisi ve dekoratif metal aksamlar için mat, yarı mat ve parlak vernik seçeneklerimizle ek koruma + estetik derinlik sağlıyoruz.",
        },
        {
          label: "Ölçüm raporlu teslim",
          detail:
            "Her teslimde aderans (ISO 2409) ve mikron (ISO 2360) ölçüm raporu paylaşılır; kalite kontrol süreçlerinizin parçası oluruz.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "RAL kataloğundaki tüm renkler ve Jotun renk kodları + numune üzerinden özel renk eşleştirme.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Tekirdağ Merkez (Süleymanpaşa)",
          minutes: 50,
          note: "Haftalık planlı sefer",
        },
        { from: "Tesisimiz", to: "Muratlı", minutes: 30 },
        { from: "Tesisimiz", to: "Hayrabolu", minutes: 55 },
        { from: "Tesisimiz", to: "Saray", minutes: 45 },
        { from: "Tesisimiz", to: "Şarköy", minutes: 90, note: "Talep üzerine sefer" },
      ],
      sectors: [
        "Tarımsal makine ve ekipman",
        "Gıda ve içecek işleme ekipmanı",
        "Mobilya yan sanayi",
        "Hayvancılık ekipmanı",
        "Çelik konstrüksiyon",
        "Aydınlatma armatürü",
        "Bahçe mobilyası ve dekoratif aksam",
        "Asansör kabin ve panel",
      ],
      neighborhoods: [
        {
          name: "Tekirdağ Merkez (Süleymanpaşa)",
          description:
            "İlin idari ve ticari merkezi. Mobilya yan sanayi, dekoratif metal işleme ve küçük-orta ölçekli imalatçı yoğunluğu yüksektir.",
        },
        {
          name: "Muratlı",
          description:
            "Tarımsal makine, hayvancılık ekipmanı ve gıda işleme tesislerinin yoğunlaştığı ilçe. Dış mekan dayanımı kritik olduğundan polyester sistemleri tercih edilir.",
        },
        {
          name: "Hayrabolu",
          description:
            "Tarım ekipmanı ve depo/silo imalatçıları için saha dayanımlı kaplama hizmeti. Büyük gabarili işler için 6 m fırın kapasitemiz uygundur.",
        },
        {
          name: "Saray",
          description:
            "Mobilya ve metal işleme firmalarının bulunduğu kuzey aksı. Vernik kaplama opsiyonumuzla dekoratif aksamlar için ek koruma sağlıyoruz.",
        },
      ],
      testimonial: {
        quote:
          "Tarımsal makine üretimi yapıyoruz; Tekirdağ’dan Çorlu’ya parça götürmek başta zahmetli görünüyordu ama Lotus’un haftalık sefer planı ve mikron raporlu teslim disipliniyle artık standart tedarikçimiz oldular.",
        role: "Üretim Sorumlusu",
        sector: "Tarımsal Makine · Muratlı",
      },
      sections: [
        {
          heading: "Tekirdağ’ın hangi ilçelerine hizmet veriyoruz?",
          body: [
            "Tekirdağ il merkezi (Süleymanpaşa), Muratlı, Hayrabolu, Saray ve Şarköy ilçelerine düzenli sefer planımız bulunur. Çorlu’daki tesisimiz Tekirdağ’ın merkezine 50, Muratlı’ya 30, Hayrabolu’ya 55 dakika mesafededir.",
            "İl genelindeki üreticiler için haftalık planlı toplama ve teslim seferi düzenliyoruz. Acil siparişler ve büyük partiler için özel sefer organize edilebilir.",
          ],
        },
        {
          heading: "Tekirdağ’da öne çıkan sektörler",
          body: [
            "Tekirdağ ekonomisinde tarım, gıda ve ilgili ekipman üretimi belirleyici rol oynar. Tarımsal makine, hayvancılık ekipmanı, gıda işleme tesisleri ve depo/silo imalatçıları bölgenin kaplama ihtiyacının büyük bölümünü oluşturur.",
            "Bunun yanında il merkezindeki mobilya yan sanayi ve dekoratif metal işleme firmaları için vernik kaplama opsiyonumuz öne çıkar. Mat, yarı mat ve parlak seçeneklerle dekoratif aksamlara ek koruma ve estetik derinlik kazandırılır.",
          ],
        },
        {
          heading: "Tekirdağ için kapasite ve teknik altyapı",
          body: [
            "6 × 1.9 × 2 metre fırın hattımız, Tekirdağ’daki büyük gabarili tarım makineleri ve depo silosu parçalarını parça bölmeden tek seferde işleyebilir. Bu, hem süre hem maliyet avantajı sağlar.",
            "Polyester, epoksi ve hibrit toz boya seçeneklerimizle dış cephe, gıda işleme ve dekoratif uygulamalara uygun reçetelerle çalışıyoruz. RAL ve Jotun renk kodları desteği standart hizmetimizdedir.",
          ],
        },
      ],
      faq: [
        {
          q: "Tekirdağ’dan parça nakliyesini nasıl planlıyorsunuz?",
          a: "Tekirdağ il merkezi ve ilçelerine haftalık planlı sefer hattımız vardır. WhatsApp üzerinden bildirilen siparişler için araç organizasyonunu biz yaparız; parça hacmine göre özel sefer de düzenlenebilir.",
        },
        {
          q: "Tarımsal makine için hangi kaplama sistemi öneriyorsunuz?",
          a: "Tarımsal makinelerde dış mekan UV ve hava şartları dayanımı kritiktir. Polyester esaslı toz boya sistemleri en uygun seçimdir; uzun saha ömrü ve renk dayanımı sağlar.",
        },
        {
          q: "Gıda ekipmanı için özel kaplama yapıyor musunuz?",
          a: "Standart elektrostatik toz boya ve fırın boya sistemlerimiz gıda işleme ekipmanlarının büyük çoğunluğunda yeterlidir; düz, gözeneksiz yüzey ve kolay temizlenebilirlik sağlar. Spesifik gıda uyumluluk gereksinimleri varsa teklif aşamasında uygun reçeteyi belirleriz.",
        },
        {
          q: "Vernik kaplama hangi parçalar için uygun?",
          a: "Estetik ön plana çıkan dekoratif metal aksamlar, mobilya iskeleti ve aydınlatma armatürleri için vernik kaplama önerilir. Boyanın altındaki rengi koruyarak ek UV ve çizilme dayanımı sağlar.",
        },
        {
          q: "Tekirdağ’dan teslim süresi ne kadar?",
          a: "Standart üretim süresi 3–5 iş günüdür; bu süreye nakliye dahil değildir. Acil işler için 48 saat içinde teslim seçeneği vardır, ancak nakliye günü haftalık sefer takvimine göre belirlenir.",
        },
        {
          q: "Tekirdağ’dan küçük partiler için de hizmet veriyor musunuz?",
          a: "Evet. Minimum sipariş zorunluluğumuz yoktur. Tek parça veya birkaç parçalık küçük işler için de aynı kalite standardını uygularız; sadece nakliye organizasyonu haftalık sefer takvimine göre planlanır.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde mikron ve aderans ölçüm raporu paylaşılır.",
        },
      ],
    },
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
      "RAL kataloğu ve Jotun renk kodlarında minimum sipariş zorunluluğu olmadan üretim yapıyor, 3-5 iş günü içinde teslim edebiliyoruz.",
    ],
    highlights: [
      { label: "Min. sipariş", value: "Yok" },
      { label: "Teslim", value: "3–5 gün" },
      { label: "Mesafe", value: "30 dk" },
    ],
    rich: {
      lede:
        "Kapaklı’daki küçük ve orta ölçekli imalatçılar için elektrostatik toz boya, fırın boya ve vernik kaplama. Çorlu’dan 30 dakika mesafede, küçük seri üretim ve tek parça işlerde minimum sipariş zorunluluğu olmadan 3–5 iş günü içinde teslim.",
      primaryKeyword: "Kapaklı toz boya",
      secondaryKeywords: [
        "elektrostatik toz boya Kapaklı",
        "fırın boya Kapaklı",
        "metal boyama Kapaklı",
        "Kapaklı küçük seri toz boya",
      ],
      geo: { lat: 41.3275, lng: 27.9911 },
      serviceRadiusKm: 25,
      trustSignals: [
        {
          label: "Minimum sipariş yok",
          detail:
            "Kapaklı’daki küçük imalathaneler ve atölyeler için tek parça veya birkaç parçalık işleri de aynı kalite standardıyla işleriz.",
        },
        {
          label: "Hızlı teslim",
          detail:
            "Standart üretim 3–5 iş günü; özellikle küçük partilerde Kapaklı’dan gelen siparişlere öncelikli yer açıyoruz.",
        },
        {
          label: "Çerkezköy OSB komşusu",
          detail:
            "Kapaklı, Çerkezköy OSB’ye komşu olduğu için bölgeye yapılan haftalık planlı seferlerimizden yararlanır.",
        },
        {
          label: "Ekonomik fiyatlandırma",
          detail:
            "Küçük seri üretimler için optimize edilmiş süreçle Kapaklı’daki orta ölçekli üreticiler için rekabetçi fiyat sunuyoruz.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "Renk seçeneği kısıtlaması yok; RAL kataloğundaki tüm renkler ve Jotun renk kodları standart hizmetimize dahil.",
        },
        {
          label: "Ölçüm raporlu teslim",
          detail:
            "Küçük partilerde de aderans ve mikron ölçüm raporu sağlıyoruz — toplu üretime geçişte referans kalite belgesi olarak kullanabilirsiniz.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Kapaklı Merkez",
          minutes: 30,
          note: "Çerkezköy OSB seferiyle ortak hat",
        },
        { from: "Tesisimiz", to: "İnönü Mahallesi", minutes: 28 },
        { from: "Tesisimiz", to: "Bahçeağıl", minutes: 32 },
        { from: "Tesisimiz", to: "Karlıköy", minutes: 35 },
      ],
      sectors: [
        "Küçük-orta ölçekli imalat",
        "Mobilya yan sanayi",
        "Aydınlatma armatürü",
        "Dekoratif metal işleme",
        "Bahçe mobilyası",
        "Ferforje & korkuluk",
        "Beyaz eşya yan sanayi (parça üretimi)",
      ],
      neighborhoods: [
        {
          name: "Kapaklı Merkez",
          description:
            "Bölgenin idari ve ticari merkezi. Küçük-orta ölçekli imalathaneler ve metal işleme atölyeleri yoğun. Tek parça ve küçük partilere öncelik veririz.",
        },
        {
          name: "İnönü Mahallesi",
          description:
            "Mobilya yan sanayi ve dekoratif metal işleme firmalarının bulunduğu bölge. Vernik kaplama opsiyonumuz dekoratif aksamlar için sık tercih edilir.",
        },
        {
          name: "Bahçeağıl",
          description:
            "Çerkezköy OSB sınırına yakın küçük üretim atölyeleri. OSB’ye yapılan haftalık seferlerimizden ortak yararlanır.",
        },
        {
          name: "Karlıköy",
          description:
            "Aydınlatma armatürü ve bahçe mobilyası üreticilerinin yoğunlaştığı alt bölge. Saha dayanımı için polyester sistemleri öne çıkar.",
        },
      ],
      testimonial: {
        quote:
          "Kapaklı’daki küçük atölyemizde sipariş hacmimiz büyük değil, başka tedarikçiler 'minimum 100 parça' diye geri çevirdi. Lotus 5–10 parçalık işlerimi de aynı kalitede yapıyor — bizim gibi orta ölçekli atölyeler için çok değerli.",
        role: "İşletme Sahibi",
        sector: "Dekoratif Metal İşleme · Kapaklı Merkez",
      },
      sections: [
        {
          heading: "Kapaklı’daki küçük ve orta ölçekli üreticilere özel yaklaşım",
          body: [
            "Kapaklı, Çerkezköy OSB’nin komşusunda yer almasına rağmen büyük OSB firmalarına göre daha küçük ve orta ölçekli imalatçılara ev sahipliği yapar. Bu üreticilerin sipariş hacimleri büyük tedarikçiler için ekonomik olmadığı için sıkça reddedilir.",
            "Lotus, küçük seri üretim ve tek parça işleri ekonomik fiyatla işleyebilecek şekilde süreçlerini optimize etmiştir. Kapaklı’daki dekoratif metal işleme, mobilya yan sanayi, aydınlatma armatürü ve bahçe mobilyası üreticileri için minimum sipariş zorunluluğumuz yoktur.",
          ],
        },
        {
          heading: "Kapaklı’dan tesisimize ulaşım ve teslim",
          body: [
            "Kapaklı, tesisimize 30 dakika mesafededir ve Çerkezköy OSB ile aynı sefer hattındadır. Bu sayede Kapaklı’daki firmalar, Çerkezköy OSB için yapılan haftalık planlı seferlerimizden ek maliyet ödemeden yararlanır.",
            "Standart teslim süremiz 3–5 iş günüdür. Küçük partilere üretim takvimimizde öncelikli yer açtığımız için Kapaklı’dan gelen siparişler genellikle bu sürenin alt sınırında teslim edilir.",
          ],
        },
        {
          heading: "Renk ve kaplama seçenekleri",
          body: [
            "Kapaklı’daki dekoratif üreticilerin estetik beklentilerine cevap vermek için RAL kataloğundaki tüm renkleri ve Jotun renk kodlarını destekliyoruz. Numune üzerinden özel renk eşleştirme küçük partilerde de geçerlidir.",
            "Mobilya iskeleti ve aydınlatma armatürleri gibi estetik öncelikli işlerde vernik kaplama opsiyonumuz öne çıkar; mat, yarı mat ve parlak seçenekleriyle dekoratif aksamlara ek koruma ve görsel derinlik kazandırır.",
          ],
        },
      ],
      faq: [
        {
          q: "Kapaklı’dan tek parça için de teklif alabilir miyim?",
          a: "Evet. Tek parça veya küçük partiler dahil tüm projeleri değerlendiriyoruz; minimum sipariş zorunluluğumuz yoktur. WhatsApp üzerinden parça resmi ve renk bilgisi iletmeniz yeterlidir.",
        },
        {
          q: "Kapaklı’dan parçaları kim taşıyor?",
          a: "Kapaklı, Çerkezköy OSB için yapılan haftalık planlı sefer hattımızda yer alır; bölge içi nakliye desteğimiz ücretsizdir. Acil ihtiyaçlarda ek sefer organize edebiliriz.",
        },
        {
          q: "Küçük partiler için fiyat avantajı var mı?",
          a: "Küçük seri üretim için süreçlerimizi optimize ettiğimizden Kapaklı’daki orta ölçekli üreticilere rekabetçi fiyat sunabiliyoruz. Tek parça ve küçük parti fiyatları teklif aşamasında detaylı paylaşılır.",
        },
        {
          q: "Dekoratif aksam için vernik kaplama yapıyor musunuz?",
          a: "Evet. Mobilya iskeleti, aydınlatma armatürü ve dekoratif metal işleme parçaları için mat, yarı mat ve parlak vernik kaplama opsiyonumuz mevcuttur. Boyanın altındaki rengi koruyarak ek koruma sağlar.",
        },
        {
          q: "Kapaklı’dan ne kadar sürede teslim ediyorsunuz?",
          a: "Standart üretim 3–5 iş günüdür. Küçük partiler için üretim takvimimizde öncelikli yer açtığımızdan Kapaklı’dan gelen siparişler genellikle bu sürenin alt sınırında teslim edilir.",
        },
        {
          q: "Boya işleri için garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Küçük partilerde de mikron ve aderans ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "velimese",
    name: "Velimeşe",
    province: "Tekirdağ",
    intro:
      "Velimeşe OSB ve çevresindeki otomotiv yan sanayi, plastik ve metal işleme firmaları için kaplama hizmeti.",
    zones: [
      "Velimeşe OSB",
      "Karaağaç Mevkii",
      "Veliköy Hattı",
      "Yenice Sanayi",
    ],
    paragraphs: [
      "Velimeşe Organize Sanayi Bölgesi, otomotiv yan sanayi ve plastik enjeksiyon firmalarının yoğunlaştığı bir üretim merkezidir. Tesisimize 18 dakika mesafede konumlanmasıyla, bölgedeki üreticiler için günlük çıkışlı toplama–teslim hizmeti sürdürüyoruz.",
      "Otomotiv yan sanayisinin renk tutarlılığı ve seri üretim hızı beklentilerini karşılamak için RAL ve Jotun renk kodlarında ölçüm raporlu teslimat sağlıyoruz.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 18 dk" },
      { label: "Servis", value: "Günlük çıkış" },
      { label: "Sektör", value: "Otomotiv yan sanayi" },
    ],
    rich: {
      lede:
        "Velimeşe OSB’deki otomotiv yan sanayi, plastik enjeksiyon kalıbı ve metal işleme üreticileri için elektrostatik toz boya, fırın boya ve vernik kaplama. Çorlu’dan 18 dakika mesafede, günlük çıkışlı toplama–teslim seferi ve seri üretim için renk tutarlılığı garantisi.",
      primaryKeyword: "Velimeşe toz boya",
      secondaryKeywords: [
        "Velimeşe OSB toz boya",
        "elektrostatik toz boya Velimeşe",
        "otomotiv yan sanayi toz boya",
        "metal boyama Velimeşe",
      ],
      geo: { lat: 41.2392, lng: 27.8542 },
      serviceRadiusKm: 25,
      trustSignals: [
        {
          label: "En yakın OSB",
          detail:
            "Velimeşe OSB tesisimize sadece 18 dakika mesafede; Çorlu OSB ile aynı sanayi koridorundayız. Lojistik süresi minimum.",
        },
        {
          label: "Günlük sefer",
          detail:
            "Otomotiv yan sanayinin seri üretim temposuna uygun olarak Velimeşe OSB için günlük çıkışlı toplama–teslim hattımız vardır.",
        },
        {
          label: "Renk tutarlılığı",
          detail:
            "Otomotiv parçalarında partiler arası renk eşleşmesi kritiktir. Her partide aynı toz boya reçetesini ve aynı pişirme parametrelerini uygulayarak tutarlılık garanti ederiz.",
        },
        {
          label: "Metal+plastik birlikteliği",
          detail:
            "Plastik enjeksiyon kalıpları üreten firmaların metal aksamlarına özel reçeteler uyguluyor; kalıp içine sığacak gabariye uygun parça ölçülerinde çalışıyoruz.",
        },
        {
          label: "Seri üretim hızı",
          detail:
            "OEM tedarikçilerinin teslim takvimine uyum için 48 saatte teslim seçeneğimiz mevcuttur; günlük seferimiz sayesinde nakliye ek süre eklemez.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "OEM renk eşleşmeleri için RAL ve Jotun renk kodları + numune üzerinden özel renk eşleştirme.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Velimeşe OSB",
          minutes: 18,
          note: "Günlük çıkışlı sefer",
        },
        { from: "Tesisimiz", to: "Karaağaç Mevkii", minutes: 20 },
        { from: "Tesisimiz", to: "Veliköy Hattı", minutes: 22 },
        { from: "Tesisimiz", to: "Yenice Sanayi", minutes: 25 },
      ],
      sectors: [
        "Otomotiv yan sanayi (1. ve 2. kademe)",
        "Plastik enjeksiyon kalıpları",
        "Metal işleme & talaşlı imalat",
        "Beyaz eşya yan sanayi",
        "Endüstriyel makine parçası",
        "Tekstil makinesi yan sanayi",
        "Aydınlatma armatürü",
      ],
      neighborhoods: [
        {
          name: "Velimeşe OSB",
          description:
            "Bölgenin ana üretim merkezi, otomotiv yan sanayi ağırlıklı. Günlük sefer hattımız bu bölgeye düzenli çalışır; OEM tedarik zincirine uygun teslim disipliniyle hizmet veriyoruz.",
        },
        {
          name: "Karaağaç Mevkii",
          description:
            "OSB komşusu küçük-orta ölçekli imalatçı yoğunluklu bölge. Tek parça ve küçük partileri de aynı kalite standardıyla işleriz.",
        },
        {
          name: "Veliköy Hattı",
          description:
            "Plastik enjeksiyon ve kalıp imalatçılarının yoğunlaştığı alt bölge. Kalıp aksamlarının metal parçaları için özel reçeteler uygularız.",
        },
        {
          name: "Yenice Sanayi",
          description:
            "Talaşlı imalat ve metal işleme atölyelerinin bulunduğu bölge. Küçük seri üretimler için ekonomik fiyatlandırma sunarız.",
        },
      ],
      testimonial: {
        quote:
          "Otomotiv için yan sanayi parçası üretiyoruz, OEM müşterimiz partiler arası renk farkına çok hassas. Lotus’la 2 yıldır çalışıyoruz, hiçbir partide renk uyuşmazlığı bildirimi gelmedi. Günlük sefer de bizim hattımıza uyuyor.",
        role: "Kalite Sorumlusu",
        sector: "Otomotiv Yan Sanayi · Velimeşe OSB",
      },
      sections: [
        {
          heading: "Velimeşe’de otomotiv yan sanayisine yaklaşımımız",
          body: [
            "Velimeşe OSB, Türkiye’nin önemli otomotiv yan sanayi merkezlerinden biridir. OEM tedarikçilerinin renk tutarlılığı, teslim disiplini ve seri üretim hızı beklentileri çok yüksektir; bir parti boya işinde renk farkı olması üretim hattının durmasına yol açabilir.",
            "Lotus, otomotiv yan sanayi için optimize edilmiş bir süreç işletir: aynı reçete, aynı pişirme parametreleri, ölçüm raporlu teslim. Velimeşe’deki üreticilerin OEM müşterilerine sunduğu tedarik kalitesini bozmadan kaplama tedariği sağlıyoruz.",
          ],
        },
        {
          heading: "Velimeşe’den teslim ve nakliye",
          body: [
            "Çorlu’daki tesisimiz Velimeşe OSB’ye sadece 18 dakika mesafededir. Bu yakınlık, günlük çıkışlı toplama–teslim seferi düzenlememizi mümkün kılar; bir günlük üretim hattı duruşu bile yaşanmaz.",
            "Standart üretim süremiz 3–5 iş günüdür. OEM tedarik zincirine uygun acil işler için 48 saatte teslim seçeneğimiz vardır; günlük seferimiz sayesinde nakliye ek süre eklemez.",
          ],
        },
        {
          heading: "Plastik enjeksiyon ve metal işleme firmaları için",
          body: [
            "Velimeşe’nin diğer önemli sektörü plastik enjeksiyon kalıbı ve metal işleme imalatıdır. Bu firmaların metal aksamları için kalıp ölçülerine uygun gabaride parça hazırlığı yapar, özel reçetelerle ısıl ve mekanik dayanım gerektiren kaplamaları uygularız.",
            "Talaşlı imalat sonrası temizlik ve yüzey hazırlığı kritiktir; 5 kademeli ön yıkama hattımız bu süreci içerir.",
          ],
        },
      ],
      faq: [
        {
          q: "Velimeşe OSB için günlük sefer gerçekten her gün mü?",
          a: "Evet. Velimeşe OSB için Pazartesi’den Cumartesi’ye günlük çıkışlı toplama–teslim seferimiz vardır. WhatsApp üzerinden bildirilen siparişler ertesi gün toplanır.",
        },
        {
          q: "OEM renk kodlarımı destekliyor musunuz?",
          a: "RAL kataloğu ve Jotun renk kodları standart desteğimizdir. OEM özel renk kartelaları için numune göndermeniz halinde 3–7 iş günü içinde renk eşleştirme yapılır.",
        },
        {
          q: "Otomotiv parçalarında renk tutarlılığını nasıl garanti ediyorsunuz?",
          a: "Her partide aynı toz boya reçetesini, aynı sıcaklık eğrisini ve aynı pişirme süresini uyguluyoruz. Ölçüm raporlu teslim ile partiler arası mikron ve renk değerleri kayıt altındadır.",
        },
        {
          q: "Plastik kalıp aksamlarınız için özel reçete var mı?",
          a: "Kalıp aksamlarında ısıl direnç ve aşınma dayanımı kritiktir. Standart polyester ve epoksi sistemlerimiz büyük çoğunlukta yeterlidir; spesifik gereksinimler için teklif aşamasında uygun reçete belirlenir.",
        },
        {
          q: "Velimeşe’den acil bir parti için teslim süresi nedir?",
          a: "Standart 3–5 iş günü, acil 48 saat. Günlük sefer hattımız sayesinde nakliye süresi minimumdur.",
        },
        {
          q: "Küçük partiler için de Velimeşe’den hizmet veriyor musunuz?",
          a: "Evet. Tek parça veya küçük seri üretimler dahil tüm projeleri değerlendiriyoruz. Velimeşe’nin küçük metal işleme atölyeleri için de aynı kalite standardını uygularız.",
        },
        {
          q: "Boya garantisi nasıl?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "ergene",
    name: "Ergene",
    province: "Tekirdağ",
    intro:
      "Ergene OSB ve Marmaracık merkez sanayi alanlarındaki ağır metal işleme firmalarına endüstriyel kaplama desteği.",
    zones: [
      "Ergene OSB",
      "Marmaracık Merkez",
      "Yulaflı Sanayi",
      "Sağlamtaş",
    ],
    paragraphs: [
      "Ergene; ağır metal işleme, çelik konstrüksiyon ve büyük gabarili parça üreten firmalara ev sahipliği yapar. Tesisimize 22 dakika mesafede olan Ergene OSB içindeki firmalar için planlı toplama–teslim seferimiz mevcuttur.",
      "6 × 1.9 × 2 m fırın kapasitemiz, Ergene’deki konstrüksiyon ve makine imalat firmalarının büyük parçalarını tek seferde işlemeye olanak tanır.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 22 dk" },
      { label: "Servis", value: "Planlı sefer" },
      { label: "Sektör", value: "Ağır metal işleme" },
    ],
    rich: {
      lede:
        "Ergene OSB ve Marmaracık çevresindeki ağır metal işleme, çelik konstrüksiyon ve büyük gabarili parça üreten firmalara elektrostatik toz boya ve fırın boya. Çorlu’dan 22 dakika mesafede, 6 × 1.9 × 2 m fırın hattımız ile büyük parçalar tek seferde işlenir.",
      primaryKeyword: "Ergene toz boya",
      secondaryKeywords: [
        "Ergene OSB toz boya",
        "elektrostatik toz boya Ergene",
        "Marmaracık toz boya",
        "çelik konstrüksiyon boya Tekirdağ",
      ],
      geo: { lat: 41.2308, lng: 27.7297 },
      serviceRadiusKm: 25,
      trustSignals: [
        {
          label: "Büyük gabari kapasitesi",
          detail:
            "Ergene OSB’deki ağır metal ve konstrüksiyon firmalarının büyük parçaları için 6 × 1.9 × 2 m fırın kapasitemiz tek seferde işlem imkanı sağlar.",
        },
        {
          label: "Yakın bölge",
          detail:
            "Ergene tesisimize 22 dakika mesafede; Çorlu sanayi koridorunun batı uzantısında. Lojistik süresi minimumdur.",
        },
        {
          label: "Planlı sefer",
          detail:
            "Ergene OSB ve Marmaracık çevresine haftada 2 gün planlı toplama–teslim seferimiz vardır; büyük parça siparişlerinde özel sefer organize edilir.",
        },
        {
          label: "Konstrüksiyon deneyimi",
          detail:
            "Çelik kiriş, profil, bağlantı elemanı, makine şasesi gibi yapısal parçalar için uzun ömürlü polyester kaplama sistemleri uygulıyoruz.",
        },
        {
          label: "5 kademeli ön işlem",
          detail:
            "Ağır metal parçalarda yüzey hazırlığı kritiktir; alkali yıkama + fosfatlama + pasivasyon ile parça boyaya tam hazır gelir.",
        },
        {
          label: "Ölçüm raporlu teslim",
          detail:
            "Konstrüksiyon firmalarının kalite kontrol süreçleri için aderans (ISO 2409) ve mikron (ISO 2360) ölçüm raporu standart teslim parçasıdır.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Ergene OSB",
          minutes: 22,
          note: "Haftada 2 gün planlı sefer",
        },
        { from: "Tesisimiz", to: "Marmaracık Merkez", minutes: 20 },
        { from: "Tesisimiz", to: "Yulaflı Sanayi", minutes: 25 },
        { from: "Tesisimiz", to: "Sağlamtaş", minutes: 28 },
      ],
      sectors: [
        "Çelik konstrüksiyon",
        "Ağır metal işleme",
        "Makine şase imalatı",
        "Tank ve basınçlı kap",
        "Profil ve kiriş üretimi",
        "Endüstriyel boru ve flanş",
        "Talaşlı imalat",
      ],
      neighborhoods: [
        {
          name: "Ergene OSB",
          description:
            "Bölgenin ana üretim merkezi. Ağır metal işleme ve çelik konstrüksiyon firmaları için planlı haftalık seferlerimiz vardır.",
        },
        {
          name: "Marmaracık Merkez",
          description:
            "Ergene ilçesinin idari merkezi. Orta ölçekli imalat atölyeleri ve makine imalatçıları yoğunluklu bölge.",
        },
        {
          name: "Yulaflı Sanayi",
          description:
            "Talaşlı imalat ve metal işleme atölyelerinin bulunduğu alt bölge. Tek parça ve küçük partiler de değerlendirilir.",
        },
        {
          name: "Sağlamtaş",
          description:
            "Tank, basınçlı kap ve büyük gabarili çelik yapı üreticilerinin yoğunlaştığı bölge. 6 m fırın kapasitemiz büyük parçalar için ideal.",
        },
      ],
      testimonial: {
        quote:
          "Çelik konstrüksiyon işi yapıyoruz, parçalarımız çoğu zaman 5 metreyi geçiyor. Daha önce parçaları bölmek zorunda kaldığımız bir tedarikçimiz vardı; Lotus’un 6 metre fırınında artık tek seferde işliyoruz, kalite çok daha tutarlı.",
        role: "Üretim Müdürü",
        sector: "Çelik Konstrüksiyon · Ergene OSB",
      },
      sections: [
        {
          heading: "Ergene’nin ağır sanayi profili",
          body: [
            "Ergene ilçesi, 2014’te Marmaracık merkezi etrafında oluşan bir ilçe olarak kuruldu. Ergene OSB ve çevresi, ağır metal işleme, çelik konstrüksiyon, makine şase imalatı ve büyük gabarili parça üretiminde yoğunlaştı.",
            "Bu sektörlerde kaplama, sadece estetik değil yapısal bir gerekliliktir. Çelik konstrüksiyonlarda korozyon koruması, makine şaselerinde aşınma direnci, tank ve basınçlı kaplarda kimyasal dayanım kritik faktörlerdir.",
          ],
        },
        {
          heading: "Büyük gabarili parçalar için kapasite",
          body: [
            "Ergene’deki üreticilerin en sık karşılaştığı sorun, tedarikçilerin fırın kapasitesinin parça ölçülerine yetmemesidir. Bu durumda parça bölünüp ayrı ayrı işleniyor, sonra montaj sırasında renk farkı ve kaplama eksiklikleri ortaya çıkıyor.",
            "Lotus’un 6 metre uzunluk, 1.9 metre genişlik ve 2 metre yükseklik kapasiteli pişirme fırını, Ergene’deki ağır sanayi parçalarının büyük çoğunluğunu tek seferde işlemeye olanak tanır. Bu, hem kalite tutarlılığı hem de işçilik tasarrufu sağlar.",
          ],
        },
        {
          heading: "Ergene’den teslim süresi ve nakliye",
          body: [
            "Çorlu’daki tesisimiz Ergene OSB’ye 22 dakika mesafededir. Ergene ve Marmaracık çevresine haftada 2 gün planlı toplama–teslim seferimiz vardır. Büyük gabarili parçalar için özel araç ve özel sefer organize edilebilir.",
            "Standart üretim süresi 3–5 iş günüdür. Konstrüksiyon firmalarının saha programlarına uygun acil teslim için 48 saat içinde teslim seçeneği de mevcuttur.",
          ],
        },
      ],
      faq: [
        {
          q: "Ergene’den 6 metre üzeri parça nasıl işlersiniz?",
          a: "6 metreye kadar parçaları tek seferde işleriz. Daha büyük gabarili işler için saha çözümleri konuşulabilir; ancak fırın kapasitemizin sınırı 6 × 1.9 × 2 metredir.",
        },
        {
          q: "Ergene’deki çelik konstrüksiyon için hangi kaplama önerilir?",
          a: "Çelik konstrüksiyon, dış mekan ve uzun saha ömrü için polyester esaslı toz boya sistemleri optimal sonuç verir. Yüzey hazırlığı sonrası tek kat ile uzun süreli koruma sağlanır.",
        },
        {
          q: "Büyük parçaların nakliyesini siz mi organize ediyorsunuz?",
          a: "Standart parçalar için haftalık planlı seferimiz var. Büyük gabarili parçalar (5 m üstü, ağır vs.) için özel araç organizasyonu yapılır; nakliye detayları teklif aşamasında belirlenir.",
        },
        {
          q: "Ergene’den ne kadar sürede teslim ediyorsunuz?",
          a: "Standart üretim süresi 3–5 iş günü. Konstrüksiyon firmalarının saha programlarına uygun acil teslim için 48 saat içinde teslim seçeneği vardır.",
        },
        {
          q: "Ergene’de tank veya basınçlı kap boyuyor musunuz?",
          a: "Evet. Tank ve basınçlı kap dış yüzeyleri için fırın boya sistemlerimiz uygundur. İç yüzey kaplama (gıda/kimya uyumlu) için spesifik gereksinimler teklif aşamasında belirlenir.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "eregli",
    name: "Marmara Ereğlisi",
    province: "Tekirdağ",
    intro:
      "Marmara Ereğlisi’ndeki liman ekipmanı, lojistik ve endüstriyel raf üreticileri için kaplama çözümleri.",
    zones: [
      "Marmara Ereğlisi Merkez",
      "Sultanköy",
      "Yeniçiftlik",
      "Liman Bölgesi",
    ],
    paragraphs: [
      "Marmara Ereğlisi, liman ekipmanı, depo rafı ve lojistik metal yapılarının üretildiği önemli bir endüstriyel bölgedir. Sahil iklimine uygun dayanıklı kaplama reçeteleri ile bölgedeki firmaların ihtiyacına yanıt veriyoruz.",
      "Çorlu tesisimizden Marmara Ereğlisi’ne haftalık planlı sefer düzenliyoruz; büyük seri üretimler için doğrudan ek sefer ayarlanabilir.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 40 dk" },
      { label: "Servis", value: "Haftalık planlı" },
      { label: "Sektör", value: "Lojistik & liman" },
    ],
    rich: {
      lede:
        "Marmara Ereğlisi’ndeki liman ekipmanı, lojistik metal yapı, depo rafı ve sahil bölgesi inşaatları için elektrostatik toz boya, fırın boya ve dayanıklı kaplama. Çorlu’dan haftalık planlı sefer ile sahil ikliminin gerektirdiği uzun ömürlü polyester sistemler.",
      primaryKeyword: "Marmara Ereğlisi toz boya",
      secondaryKeywords: [
        "Ereğli toz boya",
        "elektrostatik toz boya Marmara Ereğlisi",
        "liman ekipmanı boya",
        "depo rafı boya Tekirdağ",
      ],
      geo: { lat: 40.9697, lng: 27.9572 },
      serviceRadiusKm: 30,
      trustSignals: [
        {
          label: "Sahil iklimi dayanımı",
          detail:
            "Marmara Ereğlisi’nin nemli sahil iklimi metal yapılarda hızlı korozyon riski oluşturur. Polyester esaslı sistemlerimiz UV ve nem koşullarında uzun ömür sağlar.",
        },
        {
          label: "Liman ekipmanı deneyimi",
          detail:
            "Konteyner taşıma ekipmanı, vinç parçası, depo rafı gibi liman lojistiği ekipmanlarına uygun saha dayanımlı kaplama sistemleri uygularız.",
        },
        {
          label: "Depo rafı seri üretimi",
          detail:
            "Lojistik depo rafı üreticileri için partiler arası renk tutarlılığı ve seri üretim hızı ile ölçüm raporlu teslim sağlanır.",
        },
        {
          label: "Büyük gabari kapasitesi",
          detail:
            "Liman ekipmanı parçalarının büyük gabarili parçaları için 6 × 1.9 × 2 m fırın hattımız uygundur.",
        },
        {
          label: "Haftalık planlı sefer",
          detail:
            "Çorlu’dan Marmara Ereğlisi’ne haftada 1 gün planlı toplama–teslim seferimiz vardır; büyük partiler için özel sefer organize edilir.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "Sektörel renk standartları için RAL kataloğu ve Jotun renk kodları + numune üzerinden özel renk eşleştirme.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Marmara Ereğlisi Merkez",
          minutes: 40,
          note: "Haftada 1 gün planlı sefer",
        },
        { from: "Tesisimiz", to: "Sultanköy", minutes: 38 },
        { from: "Tesisimiz", to: "Yeniçiftlik", minutes: 42 },
        { from: "Tesisimiz", to: "Liman Bölgesi", minutes: 45 },
      ],
      sectors: [
        "Liman ekipmanı",
        "Konteyner & taşıma ekipmanı",
        "Depo & lojistik raf sistemleri",
        "Endüstriyel kaldırma ekipmanı",
        "Sahil bölgesi inşaat aksamı",
        "Tarım ve gıda işleme (sahil hattı)",
        "Çelik konstrüksiyon",
      ],
      neighborhoods: [
        {
          name: "Marmara Ereğlisi Merkez",
          description:
            "İlçenin idari merkezi. Lojistik depo ve raf üreticileri yoğun. Haftalık planlı sefer hattımız bu bölgeye düzenli çalışır.",
        },
        {
          name: "Sultanköy",
          description:
            "Sahil bölgesi inşaat ve metal yapı imalatçıları. Nemli iklime dayanımı kritik olduğundan polyester sistemleri tercih edilir.",
        },
        {
          name: "Yeniçiftlik",
          description:
            "Tarım ve gıda işleme tesislerinin yoğunlaştığı bölge. Gıda uyumlu reçetelerimizle parça hazırlığı yapılır.",
        },
        {
          name: "Liman Bölgesi",
          description:
            "Marmara Ereğlisi limanı çevresindeki ekipman üreticileri ve lojistik yapı imalatçıları. Saha dayanımı en yüksek öncelik.",
        },
      ],
      testimonial: {
        quote:
          "Depo rafı üretimi yapıyoruz, müşterilerimizin çoğu nemli ortamlara satıyor. Lotus’un polyester sistemiyle yaptığımız partilerde 3 yıl sonra bile saha kalitesi tartışılmıyor.",
        role: "Üretim Sorumlusu",
        sector: "Depo & Lojistik Raf Sistemleri · Marmara Ereğlisi",
      },
      sections: [
        {
          heading: "Marmara Ereğlisi’nin endüstriyel profili",
          body: [
            "Marmara Ereğlisi, Marmara Denizi sahilinde önemli bir liman ve sanayi merkezidir. Bölgenin başlıca üretim alanları: konteyner taşıma ve liman ekipmanı, lojistik depo rafı sistemleri, sahil bölgesi metal yapı inşaatı ve gıda işleme tesisleridir.",
            "Sahil iklimi, metal yüzeylerde korozyon ve UV nedenli renk solmasını hızlandırır. Bu yüzden Marmara Ereğlisi’ndeki üreticiler için polyester esaslı uzun ömürlü kaplama sistemleri öncelikle önerilir.",
          ],
        },
        {
          heading: "Sahil iklimi için kaplama sistemleri",
          body: [
            "Polyester esaslı elektrostatik toz boya, UV ve hava koşullarına karşı en yüksek dayanımı sağlayan sistemdir; sahil iklimindeki üretimlerin saha ömrünü 2–3 katına çıkarır.",
            "Yüzey hazırlığı bu süreçte özellikle önemlidir. 5 kademeli ön yıkama hattımız (yağ alma, durulama, fosfatlama, pasivasyon, kurutma) korozyon riskini sıfıra yakınlaştırır.",
          ],
        },
        {
          heading: "Marmara Ereğlisi’nden teslim ve nakliye",
          body: [
            "Çorlu’daki tesisimizden Marmara Ereğlisi’ne haftada 1 gün planlı toplama–teslim seferimiz vardır. Standart parçalar bu seferde toplanır; büyük partiler veya gabarili işler için özel sefer organize edilir.",
            "Standart üretim süresi 3–5 iş günüdür. Liman ekipmanı ve lojistik depo projelerinin teslim takvimine uyum için 48 saatte teslim seçeneği de mevcuttur.",
          ],
        },
      ],
      faq: [
        {
          q: "Marmara Ereğlisi’nden parça nakliyesini nasıl yapıyorsunuz?",
          a: "Haftada 1 gün Marmara Ereğlisi için planlı toplama–teslim seferimiz vardır. Büyük partiler veya 6 m üzeri parçalar için özel araç organize edilir; nakliye detayları teklif aşamasında netleşir.",
        },
        {
          q: "Sahil iklimine uygun en iyi kaplama hangisi?",
          a: "Polyester esaslı elektrostatik toz boya en uygun sistemdir. UV ve nem dayanımı yüksek, saha ömrü uzun. Tek kat uygulama ile koruma sağlar.",
        },
        {
          q: "Liman ekipmanı için özel reçete var mı?",
          a: "Standart polyester sistemleri liman ekipmanı için yeterlidir. Tuzlu hava ve sürekli nem koşullarında daha agresif korozyon yaşanan parçalar için teklif aşamasında uygun reçete belirlenir.",
        },
        {
          q: "Depo rafı seri üretiminde renk tutarlılığını nasıl sağlıyorsunuz?",
          a: "Her partide aynı toz boya reçetesini ve aynı pişirme parametrelerini uygulıyoruz. Ölçüm raporlu teslim ile partiler arası mikron ve renk değerleri kayıt altındadır.",
        },
        {
          q: "Marmara Ereğlisi’nden teslim süresi ne kadar?",
          a: "Standart üretim 3–5 iş günü; nakliye günü haftalık sefer takvimine göre planlanır. Acil işler için 48 saat içinde teslim seçeneği vardır.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
  {
    slug: "silivri",
    name: "Silivri",
    province: "İstanbul",
    intro:
      "Silivri ve çevresindeki tekstil makinesi, gıda ekipmanı ve mobilya yan sanayi üreticilerine kaplama hizmeti.",
    zones: [
      "Silivri Merkez",
      "Selimpaşa",
      "Değirmenköy",
      "Gümüşyaka",
    ],
    paragraphs: [
      "Silivri, İstanbul’un Avrupa yakasında tekstil makinesi, gıda ekipmanı ve mobilya yan sanayisinin yoğunlaştığı bir bölgedir. Çorlu tesisimizden Silivri’ye 35 dakika içinde ulaşıyor, bölgedeki üreticilere düzenli sefer ile hizmet veriyoruz.",
      "Silivri’deki üreticilerin estetik ön plana çıkan ürünleri için vernik kaplama opsiyonumuz ve RAL/Jotun renk desteğimiz mevcuttur.",
    ],
    highlights: [
      { label: "Mesafe", value: "Tesise 35 dk" },
      { label: "Servis", value: "Haftalık planlı" },
      { label: "Sektör", value: "Tekstil & mobilya" },
    ],
    rich: {
      lede:
        "İstanbul Silivri’deki tekstil makinesi, gıda ekipmanı ve mobilya yan sanayi üreticilerine elektrostatik toz boya, fırın boya ve vernik kaplama. Çorlu’dan 35 dakika mesafede, haftalık planlı sefer ve estetik öncelikli parçalar için vernik kaplama opsiyonu.",
      primaryKeyword: "Silivri toz boya",
      secondaryKeywords: [
        "elektrostatik toz boya Silivri",
        "Silivri fırın boya",
        "İstanbul Avrupa yakası toz boya",
        "metal boyama Silivri",
      ],
      geo: { lat: 41.0742, lng: 28.2461 },
      serviceRadiusKm: 30,
      trustSignals: [
        {
          label: "İstanbul yakını",
          detail:
            "Silivri, Çorlu’dan 35 dakika mesafede İstanbul Avrupa yakasının batı kapısıdır. Tesisimize en yakın İstanbul ilçesi olarak avantajlı lojistik sunarız.",
        },
        {
          label: "Tekstil makinesi deneyimi",
          detail:
            "Tekstil makinesi gövdeleri ve metal aksamları için aşınma direnci yüksek elektrostatik toz boya sistemleri uygulıyoruz.",
        },
        {
          label: "Gıda ekipmanı uyumlu",
          detail:
            "Silivri’nin gıda işleme tesislerine yönelik düz, gözeneksiz, kolay temizlenebilir kaplama reçeteleri sunuyoruz.",
        },
        {
          label: "Mobilya & dekoratif vernik",
          detail:
            "Mobilya yan sanayi ve dekoratif metal işleme için vernik kaplama opsiyonumuz; mat, yarı mat ve parlak seçeneklerle estetik derinlik sağlar.",
        },
        {
          label: "Haftalık planlı sefer",
          detail:
            "Çorlu’dan Silivri’ye haftada 1 gün planlı toplama–teslim seferimiz vardır; büyük partiler için ek sefer ayarlanır.",
        },
        {
          label: "RAL & Jotun desteği",
          detail:
            "RAL kataloğundaki tüm renkler ve Jotun renk kodları + numune üzerinden özel renk eşleştirme.",
        },
      ],
      routes: [
        {
          from: "Tesisimiz",
          to: "Silivri Merkez",
          minutes: 35,
          note: "Haftada 1 gün planlı sefer",
        },
        { from: "Tesisimiz", to: "Selimpaşa", minutes: 40 },
        { from: "Tesisimiz", to: "Değirmenköy", minutes: 32 },
        { from: "Tesisimiz", to: "Gümüşyaka", minutes: 30 },
      ],
      sectors: [
        "Tekstil makineleri",
        "Gıda ve içecek işleme ekipmanı",
        "Mobilya yan sanayi",
        "Aydınlatma armatürü",
        "Beyaz eşya yan sanayi",
        "Ferforje & dekoratif metal",
        "Endüstriyel makine parçası",
      ],
      neighborhoods: [
        {
          name: "Silivri Merkez",
          description:
            "İlçenin ticari merkezi. Mobilya yan sanayi ve dekoratif metal işleme atölyeleri yoğunluklu. Haftalık planlı sefer hattımız buraya çalışır.",
        },
        {
          name: "Selimpaşa",
          description:
            "Gıda işleme ve tarımsal ekipman üreticilerinin bulunduğu sahil bölgesi. Gıda uyumlu reçetelerimizle parça hazırlığı yapılır.",
        },
        {
          name: "Değirmenköy",
          description:
            "Tekstil makinesi yan sanayi ve makine imalat atölyelerinin yoğunlaştığı alt bölge. Aşınma direnci öncelikli kaplama sistemleri.",
        },
        {
          name: "Gümüşyaka",
          description:
            "Mobilya ve dekoratif metal işleme firmaları için bölge. Vernik kaplama opsiyonumuz estetik aksamlar için sık tercih edilir.",
        },
      ],
      testimonial: {
        quote:
          "Mobilya iskeleti üretiyoruz, İstanbul’dan Çorlu’ya nakliye başta çekincemizdi. Lotus’un haftalık planlı seferi ve teslim disipliniyle nakliye sorun olmaktan çıktı. Vernik kaplama opsiyonu da bizim için fark yarattı.",
        role: "İşletme Sahibi",
        sector: "Mobilya Yan Sanayi · Silivri Merkez",
      },
      sections: [
        {
          heading: "Silivri’de hangi sektörlere hizmet veriyoruz?",
          body: [
            "Silivri, İstanbul’un Avrupa yakasındaki en önemli sanayi ilçelerinden biridir. Bölgenin başlıca üretim alanları: tekstil makinesi ve yan sanayi parçaları, gıda ve içecek işleme ekipmanı, mobilya yan sanayi ve dekoratif metal işlemedir.",
            "Bu sektörlerin her birinin kaplama beklentisi farklıdır: tekstil makinelerinde aşınma direnci, gıda ekipmanında temizlenebilirlik, mobilya yan sanayisinde estetik ve renk tutarlılığı önceliklidir. Lotus, sektör bazlı bu farklılıkları teklif aşamasında belirler ve uygun reçeteyi önerir.",
          ],
        },
        {
          heading: "Silivri’den tesisimize ulaşım ve teslim süresi",
          body: [
            "Çorlu’daki tesisimiz Silivri’ye 35 dakika mesafededir. İstanbul Avrupa yakasının batı kapısı olan Silivri, tesisimize en yakın İstanbul ilçesi olarak avantajlı lojistik sağlar.",
            "Silivri için haftada 1 gün planlı toplama–teslim seferimiz vardır. Standart üretim süresi 3–5 iş günüdür; acil işler için 48 saatte teslim seçeneği mevcuttur.",
          ],
        },
        {
          heading: "Estetik ön plandaki parçalar için vernik kaplama",
          body: [
            "Silivri’deki mobilya yan sanayi ve dekoratif metal işleme firmalarının estetik öncelikli ürünleri için vernik kaplama opsiyonumuz öne çıkar. Boyanın altındaki rengi koruyarak ek UV, çizilme ve nem dayanımı sağlar.",
            "Mat, yarı mat ve parlak seçeneklerimizle dekoratif aksamlara görsel derinlik kazandırılır. Vernik kaplama, elektrostatik toz boya veya fırın boya üzerine tek ya da çift kat olarak uygulanır.",
          ],
        },
      ],
      faq: [
        {
          q: "Silivri’den parçaları kim taşıyor?",
          a: "Silivri için haftada 1 gün planlı toplama–teslim seferimiz vardır. WhatsApp üzerinden bildirilen siparişler için araç organizasyonunu biz yaparız; bölge içi nakliye desteği teklif fiyatına dahildir.",
        },
        {
          q: "İstanbul’dan Çorlu’ya nakliye karlı mı?",
          a: "Silivri, Çorlu’dan sadece 35 dakika mesafededir; İstanbul’un diğer ilçelerine kıyasla nakliye süresi ve maliyeti çok düşüktür. Haftalık planlı seferimiz nakliye maliyetini minimum tutar.",
        },
        {
          q: "Gıda ekipmanı için özel kaplama yapıyor musunuz?",
          a: "Standart elektrostatik toz boya ve fırın boya sistemlerimiz gıda işleme ekipmanlarının büyük çoğunluğunda yeterlidir; düz, gözeneksiz, kolay temizlenebilir yüzey sağlar. Spesifik gıda uyumluluk gereksinimleri varsa teklif aşamasında uygun reçete belirlenir.",
        },
        {
          q: "Mobilya iskeleti için renk seçenekleri neler?",
          a: "RAL kataloğundaki tüm renkleri ve Jotun renk kodlarını destekliyoruz. Mobilya yan sanayisinde sık tercih edilen mat, dokulu ve metalik yüzey seçenekleri standart hizmetimize dahildir.",
        },
        {
          q: "Silivri’den teslim süresi ne kadar?",
          a: "Standart üretim süresi 3–5 iş günüdür; nakliye günü haftalık sefer takvimine göre belirlenir. Acil işler için 48 saatte teslim seçeneği vardır.",
        },
        {
          q: "Küçük partiler için Silivri’den hizmet veriyor musunuz?",
          a: "Evet. Minimum sipariş zorunluluğumuz yoktur. Silivri’deki küçük atölyelerin tek seferlik ihtiyaçları için de aynı kalite standardını uygularız.",
        },
        {
          q: "Boya işleri için yazılı garanti veriyor musunuz?",
          a: "Yüzey hazırlığı bizim sorumluluğumuzda yapılan tüm projelerde aderans, mikron ve renk dayanımı için yazılı performans taahhüdü sağlıyoruz. Her teslimde ölçüm raporu paylaşılır.",
        },
      ],
    },
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
