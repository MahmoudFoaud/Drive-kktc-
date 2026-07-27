// Drive KKTC — Translation Engine (i18n)

const AVAILABLE_LANGUAGES = ['en', 'tr', 'ru', 'ar'];
let currentLang = localStorage.getItem('drive_kktc_lang') || 'en';
if (!AVAILABLE_LANGUAGES.includes(currentLang)) currentLang = 'en';

const LOCALES_DATA = {
  en: {
    "nav": {
      "home": "Home",
      "routes": "Driving Routes",
      "about": "About Cyprus",
      "gallery": "Gallery",
      "contact": "Contact Us",
      "search": "Search"
    },
    "hero": {
      "title": "Drive Northern Cyprus",
      "subtitle": "Discover scenic driving routes, historical castles, golden beaches, and local dining spots across Cyprus's northern coast.",
      "cta": "Explore Routes",
      "searchPlaceholder": "Search routes, regions, beaches, castles..."
    },
    "routes": {
      "title": "Scenic Driving Routes",
      "subtitle": "Carefully curated road trips blending historic exploration with breathtaking vistas.",
      "duration": "Duration",
      "distance": "Distance",
      "difficulty": "Difficulty",
      "region": "Region",
      "difficultyEasy": "Easy",
      "difficultyMedium": "Medium",
      "difficultyHard": "Hard",
      "viewDetails": "View Route Details",
      "allRegions": "All Regions",
      "allDifficulties": "All Difficulties",
      "filterTitle": "Filter Routes",
      "sortBy": "Sort By",
      "sortByDefault": "Default",
      "sortByDistance": "Distance (Shortest)",
      "sortByDuration": "Duration (Shortest)",
      "noRoutesFound": "No routes match your search or filter options."
    },
    "routeDetail": {
      "overview": "Route Overview",
      "bestSeason": "Best Season",
      "stopsTimeline": "Route Stops & Timeline",
      "visitTime": "Est. Visit Time",
      "hours": "Opening Hours",
      "directions": "Get Directions",
      "history": "Historical Context",
      "tips": "Local Driving Tips",
      "share": "Share Route",
      "weather": "Current Weather",
      "loadingWeather": "Loading live weather...",
      "nearby": "Nearby Scenic Routes"
    },
    "weather": {
      "temp": "Temperature",
      "wind": "Wind Speed",
      "conditions": "Conditions",
      "sunny": "Sunny",
      "cloudy": "Cloudy",
      "rainy": "Rainy"
    },
    "galleryPage": {
      "title": "Breathtaking Moments",
      "subtitle": "A visual journey across Northern Cyprus's landscapes, castles, and historic alleys.",
      "zoom": "Click to expand image"
    },
    "aboutPage": {
      "title": "About Drive KKTC",
      "content": "Drive KKTC is an independent, premium tourism initiative designed to help travelers discover the natural beauty, history, and culinary secrets of Northern Cyprus. Encouraging slow travel and self-driven road trips, our routes guide you off the beaten path, from the medieval castle peaks of Girne to the wild, golden shores of Karpaz.",
      "rulesTitle": "Important Driving Information",
      "rule1": "Keep Left: In Cyprus, traffic drives on the left side of the road, similar to the United Kingdom.",
      "rule2": "Seatbelts & Phones: Seatbelts are mandatory for all passengers. Using a mobile phone while driving is strictly illegal.",
      "rule3": "Signposts: Major destination names are in Turkish, with distance markers in kilometers.",
      "rule4": "Border Crossing: Rental cars rented in the South cannot be taken to the North without buying separate third-party insurance at the border crossing."
    },
    "contactPage": {
      "title": "Get in Touch",
      "subtitle": "Have questions about self-drive tours in Northern Cyprus? Drop us a line.",
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "submit": "Send Message",
      "success": "Thank you! Your message has been received."
    },
    "footer": {
      "tagline": "Discover Northern Cyprus on wheels. Premium, independent travel guides.",
      "quickLinks": "Quick Links",
      "gallery": "Photo Gallery",
      "legal": "Legal",
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "rights": "All rights reserved.",
      "privacyLink": "Privacy",
      "termsLink": "Terms"
    },
    "privacyPage": {
      "title": "Privacy Policy",
      "subtitle": "Your privacy is important to us. Learn how we handle your data.",
      "p1": "Drive KKTC operates as an independent informational guide. We do not collect, store, or sell personal tracking data or private identity records.",
      "p2": "Any user preferences, such as language or theme selections, are stored locally on your device via browser local storage.",
      "p3": "If you have any questions regarding privacy, please feel free to reach out via our contact page."
    },
    "termsPage": {
      "title": "Terms of Service",
      "subtitle": "Terms and conditions for using Drive KKTC guides and route maps.",
      "p1": "Drive KKTC provides driving route suggestions and travel recommendations for informational and entertainment purposes only.",
      "p2": "Drivers must adhere strictly to local traffic laws, speed limits, and road safety regulations in Northern Cyprus at all times.",
      "p3": "We accept no liability for road conditions, traffic incidents, closure of third-party venues, or weather disruptions."
    },
    "homePage": {
      "editorialTitle": "Curated Driving Experiences",
      "editorialSubtitle": "Our routes are built for travelers who appreciate the freedom of self-driven discovery. From the medieval ramparts of crusader castles overlooking Kyrenia, to the wind-swept golden coastlines of Karpaz, we show you the true heart of Northern Cyprus.",
      "stat1": "Major Regions",
      "stat2": "Hand-picked Stops",
      "stat3": "Free Guidance"
    }
  },
  tr: {
    "nav": {
      "home": "Ana Sayfa",
      "routes": "Sürüş Rotaları",
      "about": "Kıbrıs Hakkında",
      "gallery": "Galeri",
      "contact": "İletişim",
      "search": "Ara"
    },
    "hero": {
      "title": "Kuzey Kıbrıs'ı Keşfedin",
      "subtitle": "Kıbrıs'ın kuzey kıyılarında manzaralı sürüş rotalarını, tarihi kaleleri, altın kumsalları ve yerel lezzet duraklarını keşfedin.",
      "cta": "Rotaları Keşfet",
      "searchPlaceholder": "Rota, bölge, plaj, kale veya restoran ara..."
    },
    "routes": {
      "title": "Manzaralı Sürüş Rotaları",
      "subtitle": "Tarihi keşifler ile nefes kesen manzaraları bir araya getiren, özenle hazırlanmış yolculuklar.",
      "duration": "Süre",
      "distance": "Mesafe",
      "difficulty": "Zorluk",
      "region": "Bölge",
      "difficultyEasy": "Kolay",
      "difficultyMedium": "Orta",
      "difficultyHard": "Zor",
      "viewDetails": "Rota Detaylarını Gör",
      "allRegions": "Tüm Bölgeler",
      "allDifficulties": "Tüm Zorluklar",
      "filterTitle": "Rotaları Filtrele",
      "sortBy": "Sıralama",
      "sortByDefault": "Varsayılan",
      "sortByDistance": "Mesafe (En Kısa)",
      "sortByDuration": "Süre (En Kısa)",
      "noRoutesFound": "Arama veya filtreleme kriterlerinize uygun rota bulunamadı."
    },
    "routeDetail": {
      "overview": "Rotaya Genel Bakış",
      "bestSeason": "En İyi Sezon",
      "stopsTimeline": "Rota Durakları ve Zaman Çizelgesi",
      "visitTime": "Tahmini Ziyaret Süresi",
      "hours": "Ziyaret Saatleri",
      "directions": "Yol Tarifi Al",
      "history": "Tarihsel Arka Plan",
      "tips": "Yerel Sürüş İpuçları",
      "share": "Rotayı Paylaş",
      "weather": "Güncel Hava Durumu",
      "loadingWeather": "Hava durumu yükleniyor...",
      "nearby": "Yakın Sürüş Rotaları"
    },
    "weather": {
      "temp": "Sıcaklık",
      "wind": "Rüzgar Hızı",
      "conditions": "Durum",
      "sunny": "Güneşli",
      "cloudy": "Bulutlu",
      "rainy": "Yağmurlu"
    },
    "galleryPage": {
      "title": "Nefes Kesen Kareler",
      "subtitle": "Kuzey Kıbrıs'ın doğası, kaleleri ve tarihi sokaklarında görsel bir yolculuk.",
      "zoom": "Resmi büyütmek için tıklayın"
    },
    "aboutPage": {
      "title": "Drive KKTC Hakkında",
      "content": "Drive KKTC, gezginlerin Kuzey Kıbrıs'ın doğal güzelliklerini, tarihini ve mutfak sırlarını keşfetmelerine yardımcı olmak için tasarlanmış bağımsız, premium bir turizm girişimidir. Yavaş seyahat etmeyi ve kendi aracınızla yapacağınız yolculukları teşvik eden rotalarımız, Girne'nin orta çağ kalesi zirvelerinden Karpaz'ın vahşi ve altın sahillerine kadar sizi alışılmışın dışındaki yollara yönlendirir.",
      "rulesTitle": "Önemli Sürüş Bilgileri",
      "rule1": "Soldan Trafik: Kıbrıs'ta trafik, İngiltere'de olduğu gibi yolun sol tarafında akar.",
      "rule2": "Emniyet Kemeri ve Telefon: Tüm yolcular için emniyet kemeri takmak zorunludur. Sürüş sırasında cep telefonu kullanmak kesinlikle yasaktır.",
      "rule3": "Trafik Levhaları: Ana destinasyon adları Türkçe, mesafe göstergeleri ise kilometre cinsindendir.",
      "rule4": "Sınır Geçişi: Güneyde kiralanan araçlar, sınır kapısında ayrı bir üçüncü şahıs sigortası satın alınmadan Kuzey'e geçirilemez."
    },
    "contactPage": {
      "title": "Bize Ulaşın",
      "subtitle": "Kuzey Kıbrıs'ta kendi aracınızla yapacağınız turlar hakkında sorularınız mı var? Bize yazın.",
      "name": "İsim",
      "email": "E-posta",
      "message": "Mesaj",
      "submit": "Mesajı Gönder",
      "success": "Teşekkürler! Mesajınız başarıyla iletildi."
    },
    "footer": {
      "tagline": "Kuzey Kıbrıs'ı tekerlekler üzerinde keşfedin. Premium, bağımsız seyahat rehberi.",
      "quickLinks": "Hızlı Bağlantılar",
      "gallery": "Fotoğraf Galerisi",
      "legal": "Yasal",
      "privacy": "Gizlilik Politikası",
      "terms": "Kullanım Şartları",
      "rights": "Tüm hakları saklıdır.",
      "privacyLink": "Gizlilik",
      "termsLink": "Şartlar"
    },
    "privacyPage": {
      "title": "Gizlilik Politikası",
      "subtitle": "Gizliliğiniz bizim için önemlidir. Verilerinizi nasıl işlediğimizi öğrenin.",
      "p1": "Drive KKTC bağımsız bir bilgilendirme rehberi olarak hizmet vermektedir. Kişisel takip verilerini veya kimlik kayıtlarını toplamıyoruz, saklamıyoruz ve satmıyoruz.",
      "p2": "Dil veya tema seçimleri gibi kullanıcı tercihleri, tarayıcı yerel depolaması aracılığıyla yalnızca cihazınızda yerel olarak saklanır.",
      "p3": "Gizlilikle ilgili herhangi bir sorunuz varsa, lütfen iletişim sayfamız üzerinden bizimle iletişime geçmekten çekinmeyin."
    },
    "termsPage": {
      "title": "Kullanım Şartları",
      "subtitle": "Drive KKTC rehberlerini ve rota haritalarını kullanım şart ve koşulları.",
      "p1": "Drive KKTC, yalnızca bilgilendirme ve eğlence amacıyla sürüş rotası önerileri ve seyahat tavsiyeleri sunmaktadır.",
      "p2": "Sürücüler her zaman Kuzey Kıbrıs'taki yerel trafik kurallarına, hız sınırlarına ve yol güvenliği yönetmeliklerine kesinlikle uymalıdır.",
      "p3": "Yol durumları, trafik kazaları, üçüncü taraf mekanların kapanması veya hava koşullarından kaynaklanan aksaklıklardan dolayı hiçbir sorumluluk kabul edilmez."
    },
    "homePage": {
      "editorialTitle": "Özenle Hazırlanmış Sürüş Deneyimleri",
      "editorialSubtitle": "Rotalarımız, özgürce keşfetmenin tadını çıkaran gezginler için tasarlandı. Girne'ye tepeden bakan haçlı kalelerinin ortaçağ surlarından, Karpaz'ın rüzgarlı altın sahillerine kadar, Kuzey Kıbrıs'ın gerçek kalbini size gösteriyoruz.",
      "stat1": "Ana Bölge",
      "stat2": "Özenle Seçilmiş Durak",
      "stat3": "Ücretsiz Rehberlik"
    }
  },
  ru: {
    "nav": {
      "home": "Главная",
      "routes": "Маршруты",
      "about": "О Кипре",
      "gallery": "Галерея",
      "contact": "Контакты",
      "search": "Поиск"
    },
    "hero": {
      "title": "За рулем Северного Кипра",
      "subtitle": "Откройте для себя живописные автомобильные маршруты, исторические замки, золотые пляжи и лучшие рестораны на северном побережье Кипра.",
      "cta": "Исследовать маршруты",
      "searchPlaceholder": "Искать маршруты, регионы, пляжи, замки..."
    },
    "routes": {
      "title": "Живописные автомаршруты",
      "subtitle": "Тщательно подобранные автопутешествия, сочетающие исторические открытия и захватывающие дух виды.",
      "duration": "Время",
      "distance": "Дистанция",
      "difficulty": "Сложность",
      "region": "Регион",
      "difficultyEasy": "Легко",
      "difficultyMedium": "Средне",
      "difficultyHard": "Сложно",
      "viewDetails": "Подробнее о маршруте",
      "allRegions": "Все регионы",
      "allDifficulties": "Все уровни",
      "filterTitle": "Фильтр маршрутов",
      "sortBy": "Сортировка",
      "sortByDefault": "По умолчанию",
      "sortByDistance": "Дистанция (короткие)",
      "sortByDuration": "Время (быстрые)",
      "noRoutesFound": "Маршрутов по вашему запросу не найдено."
    },
    "routeDetail": {
      "overview": "Обзор маршрута",
      "bestSeason": "Лучший сезон",
      "stopsTimeline": "Остановки на маршруте",
      "visitTime": "Время на визит",
      "hours": "Время работы",
      "directions": "Проложить маршрут",
      "history": "История и контекст",
      "tips": "Советы водителям",
      "share": "Поделиться",
      "weather": "Текущая погода",
      "loadingWeather": "Загрузка погоды...",
      "nearby": "Похожие маршруты"
    },
    "weather": {
      "temp": "Температура",
      "wind": "Скорость ветра",
      "conditions": "Условия",
      "sunny": "Ясно",
      "cloudy": "Облачно",
      "rainy": "Дождь"
    },
    "galleryPage": {
      "title": "Завораживающие моменты",
      "subtitle": "Визуальное путешествие по пейзажам, замкам и древним улочкам Северного Кипра.",
      "zoom": "Нажмите, чтобы увеличить изображение"
    },
    "aboutPage": {
      "title": "О проекте Drive KKTC",
      "content": "Drive KKTC — это независимая туристическая инициатива премиум-класса, созданная для того, чтобы помочь путешественникам открыть для себя природную красоту, богатую историю и кулинарные секреты Северного Кипра. Мы поддерживаем философию неспешных путешествий и поездок на собственном автомобиле. Наши маршруты ведут в самые интересные уголки острова: от вершин средневековых замков Гирне до нетронутых песчаных пляжей Карпаса.",
      "rulesTitle": "Важная информация для водителей",
      "rule1": "Левостороннее движение: На Кипре движение осуществляется по левой стороне дороги, как в Великобритании.",
      "rule2": "Ремни и телефоны: Ремни безопасности обязательны для всех пассажиров. Использование мобильного телефона во время вождения строго запрещено.",
      "rule3": "Дорожные указатели: Названия населенных пунктов указаны на турецком языке, а расстояние — в километрах.",
      "rule4": "Пересечение границы: Арендованные автомобили с Южного Кипра нельзя въехать на Северный без покупки дополнительной страховки на пограничном пункте."
    },
    "contactPage": {
      "title": "Связаться с нами",
      "subtitle": "У вас есть вопросы о самостоятельных поездках по Северному Кипру? Напишите нам.",
      "name": "Имя",
      "email": "Электронная почта",
      "message": "Сообщение",
      "submit": "Отправить",
      "success": "Спасибо! Ваше сообщение успешно отправлено."
    },
    "footer": {
      "tagline": "Исследуйте Северный Кипр на колесах. Премиальные авторские путеводители.",
      "quickLinks": "Быстрые ссылки",
      "gallery": "Фотогалерея",
      "legal": "Правовая информация",
      "privacy": "Политика конфиденциальности",
      "terms": "Условия использования",
      "rights": "Все права защищены.",
      "privacyLink": "Конфиденциальность",
      "termsLink": "Условия"
    },
    "privacyPage": {
      "title": "Политика конфиденциальности",
      "subtitle": "Ваша конфиденциальность важна для нас. Узнайте, как мы обрабатываем данные.",
      "p1": "Drive KKTC работает как независимый информационный путеводитель. Мы не собираем, не храним и не продаем личные персональные данные.",
      "p2": "Любые пользовательские настройки, такие как выбор языка или темы, хранятся локально на вашем устройстве в локальном хранилище браузера.",
      "p3": "Если у вас есть вопросы относительно конфиденциальности, свяжитесь с нами через страницу контактов."
    },
    "termsPage": {
      "title": "Условия использования",
      "subtitle": "Правила и условия использования путеводителей и карт Drive KKTC.",
      "p1": "Drive KKTC предоставляет рекомендации по автомобильным маршрутам исключительно в информационных и ознакомительных целях.",
      "p2": "Водители должны строго соблюдать местные правила дорожного движения, ограничения скорости и правила безопасности в Северном Кипре.",
      "p3": "Мы не несем ответственности за состояние дорог, дорожные происшествия, закрытие заведений или погодные условия."
    },
    "homePage": {
      "editorialTitle": "Авторские Автомобильные Маршруты",
      "editorialSubtitle": "Наши маршруты созданы для путешественников, ценящих свободу самостоятельных открытий. От средневековых стен замков крестоносцев с видом на Гирне до ветреного золотого побережья Карпаса — мы покажем вам истинное сердце Северного Кипра.",
      "stat1": "Главных Регионов",
      "stat2": "Отобранных Остановок",
      "stat3": "Бесплатный Путеводитель"
    }
  },
  ar: {
    "nav": {
      "home": "الرئيسية",
      "routes": "مسارات القيادة",
      "about": "حول قبرص",
      "gallery": "المعرض",
      "contact": "اتصل بنا",
      "search": "بحث"
    },
    "hero": {
      "title": "قيادة شمال قبرص",
      "subtitle": "اكتشف مسارات القيادة الخلابة، والقلاع التاريخية، والشواطئ الذهبية، وأماكن تناول الطعام المحلية على طول الساحل الشمالي لقبرص.",
      "cta": "اكتشف المسارات",
      "searchPlaceholder": "ابحث عن المسارات، المناطق، الشواطئ، القلاع..."
    },
    "routes": {
      "title": "مسارات القيادة الخلابة",
      "subtitle": "رحلات برية منسقة بعناية تمزج بين الاستكشاف التاريخي والمناظر الطبيعية الخلابة.",
      "duration": "المدة",
      "distance": "المسافة",
      "difficulty": "الصعوبة",
      "region": "المنطقة",
      "difficultyEasy": "سهل",
      "difficultyMedium": "متوسط",
      "difficultyHard": "صعب",
      "viewDetails": "عرض تفاصيل المسار",
      "allRegions": "جميع المناطق",
      "allDifficulties": "جميع مستويات الصعوبة",
      "filterTitle": "تصفية المسارات",
      "sortBy": "ترتيب حسب",
      "sortByDefault": "افتراضي",
      "sortByDistance": "المسافة (الأقصر)",
      "sortByDuration": "المدة (الأقصر)",
      "noRoutesFound": "لم يتم العثور على مسارات تطابق خيارات البحث أو التصفية الخاصة بك."
    },
    "routeDetail": {
      "overview": "نظرة عامة على المسار",
      "bestSeason": "أفضل موسم",
      "stopsTimeline": "نقاط التوقف والجدول الزمني للمسار",
      "visitTime": "وقت الزيارة المتوقع",
      "hours": "ساعات العمل",
      "directions": "احصل على الاتجاهات",
      "history": "السياق التاريخي",
      "tips": "نصائح القيادة المحلية",
      "share": "مشاركة المسار",
      "weather": "الطقس الحالي",
      "loadingWeather": "جاري تحميل الطقس المباشر...",
      "nearby": "المسارات الخلابة المجاورة"
    },
    "weather": {
      "temp": "درجة الحرارة",
      "wind": "سرعة الرياح",
      "conditions": "الحالة",
      "sunny": "مشمش",
      "cloudy": "غائم",
      "rainy": "ممطر"
    },
    "galleryPage": {
      "title": "لحظات تحبس الأنفاس",
      "subtitle": "رحلة بصرية عبر المناظر الطبيعية والقلاع والأزقة التاريخية لشمال قبرص.",
      "zoom": "انقر لتوسيع الصورة"
    },
    "aboutPage": {
      "title": "حول Drive KKTC",
      "content": "Drive KKTC هي مبادرة سياحية متميزة ومستقلة مصممة لمساعدة المسافرين على اكتشاف الجمال الطبيعي والتاريخ والأسرار الطهوية لشمال قبرص. لتشجيع السفر البطيء والرحلات البرية الذاتية، ترشدك مساراتنا بعيداً عن الطرق التقليدية المزدحمة، من قمم القلاع التي تعود للقرون الوسطى في غيرنه إلى الشواطئ الذهبية البرية في كارباز.",
      "rulesTitle": "معلومات هامة عن القيادة",
      "rule1": "القيادة على اليسار: في قبرص، تسير حركة المرور على الجانب الأيسر من الطريق، على غرار المملكة المتحدة.",
      "rule2": "حزام الأمان والهواتف: أحزمة الأمان إلزامية لجميع الركاب. استخدام الهاتف المحمول أثناء القيادة غير قانوني تماماً.",
      "rule3": "اللافتات المرورية: أسماء الوجهات الرئيسية باللغة التركية، مع علامات المسافة بالكيلومترات.",
      "rule4": "عبور الحدود: لا يمكن نقل السيارات المستأجرة في الجنوب إلى الشمال دون شراء تأمين منفصل ضد الغير عند المعبر الحدودي."
    },
    "contactPage": {
      "title": "تواصل معنا",
      "subtitle": "هل لديك أسئلة حول جولات القيادة الذاتية في شمال قبرص؟ أرسل لنا رسالة.",
      "name": "الاسم",
      "email": "البريد الإلكتروني",
      "message": "Message",
      "submit": "إرسال الرسالة",
      "success": "شكرًا لك! تم استلام رسالتك بنجاح."
    },
    "footer": {
      "tagline": "اكتشف شمال قبرص على عجلات. أدلة سفر متميزة ومستقلة.",
      "quickLinks": "روابط سريعة",
      "gallery": "معرض الصور",
      "legal": "الشروط القانونية",
      "privacy": "سياسة الخصوصية",
      "terms": "شروط الخدمة",
      "rights": "جميع الحقوق محفوظة.",
      "privacyLink": "الخصوصية",
      "termsLink": "الشروط"
    },
    "privacyPage": {
      "title": "سياسة الخصوصية",
      "subtitle": "خصوصيتك تهمنا. تعرّف على كيفية تعاملنا مع بياناتك.",
      "p1": "يعمل Drive KKTC كدليل إرشادي مستقل. نحن لا نجمع أو نخزن أو نبيع بيانات التتبع الشخصية أو سجلات الهوية الخاصة.",
      "p2": "تُحفظ أي تفضيلات للمستخدم، مثل خيارات اللغة أو المظهر، محلياً على جهازك عبر التخزين المحلي للمتصفح.",
      "p3": "إذا كانت لديك أي أسئلة تتعلق بالخصوصية، فلا تتردد في التواصل معنا عبر صفحة الاتصال."
    },
    "termsPage": {
      "title": "شروط الخدمة",
      "subtitle": "الشروط والأحكام الخاصة باستخدام أدلة وخرائط مسارات Drive KKTC.",
      "p1": "يقدم Drive KKTC اقتراحات مسارات القيادة وتوصيات السفر لأغراض إعلامية وترفيهية فقط.",
      "p2": "يجب على السائقين الالتزام التام بقوانين المرور المحلية وحدود السرعة ولوائح السلامة على الطرق في شمال قبرص في جميع الأوقات.",
      "p3": "نحن لا نتحمل أي مسؤولية عن ظروف الطرق، أو حوادث المرور، أو إغلاق الأماكن الخاصة، أو الاضطرابات الجوية."
    },
    "homePage": {
      "editorialTitle": "تجارب قيادة مختارة بعناية",
      "editorialSubtitle": "تم تصميم مساراتنا للمسافرين الذين يقدرون حرية الاكتشاف المستقل. من أسوار القلاع التاريخية التي تطل على غيرنه، إلى السواحل الذهبية لشبكة كارباز، نأخذك إلى قلب شمال قبرص الحقيقي.",
      "stat1": "مناطق رئيسية",
      "stat2": "محطات مختارة",
      "stat3": "دليل مجاني 100%"
    }
  }
};

let translations = LOCALES_DATA;

// Load translation JSON file
async function loadTranslations(lang) {
  try {
    // Attempt dynamic fetch from server if possible, otherwise fail silently and use embedded fallback
    try {
      const response = await fetch(`./locales/${lang}.json`);
      if (response.ok) {
        translations[lang] = await response.json();
      }
    } catch (fetchErr) {
      console.warn(`Could not fetch dynamic translations for ${lang}. Using embedded fallback.`);
    }

    currentLang = lang;
    localStorage.setItem('drive_kktc_lang', lang);
    
    // Update direction for RTL languages (Arabic)
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  } catch (err) {
    console.error("i18n Error:", err);
  }
}

// Get translated value for a given dot-notation key (e.g. 'nav.home')
function t(key, fallback = '') {
  const getNestedValue = (obj, path) => {
    if (!obj) return undefined;
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (current[part] === undefined) return undefined;
      current = current[part];
    }
    return current;
  };

  // Try current language translation
  let val = getNestedValue(translations[currentLang], key);
  if (val !== undefined && typeof val === 'string') return val;

  // Try English fallback translation
  val = getNestedValue(translations['en'], key);
  if (val !== undefined && typeof val === 'string') return val;

  // Final fallback to provided default or the key itself
  return fallback || key;
}

// Translate all elements on the page with data-i18n attributes
function translateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val && val !== key) {
      el.textContent = val;
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val && val !== key) {
      el.setAttribute('placeholder', val);
    }
  });
}

// Initialize language settings
async function initI18n(lang = currentLang) {
  await loadTranslations(lang);
  translateDOM();
}

window.t = t;
window.initI18n = initI18n;
window.currentLang = () => currentLang;
window.translateDOM = translateDOM;
