// Drive KKTC — Main Application & Page Builder

// Configuration & Slugs mapping
const DEFAULT_ROUTES_DB = [
  {
    "title": "Nicosia Walled City Historic Loop",
    "slug": "nicosia-historic-loop",
    "description": "Embark on an immersive journey through the world's last divided capital. Explore centuries-old stone gates, soaring Gothic cathedral-mosques, bustling historic caravanserais, and modern cultural museums nestled within Venetian city walls.",
    "region": "Nicosia",
    "duration": "1 Day",
    "distance": "35 km",
    "difficulty": "Easy",
    "bestSeason": "Autumn to Spring",
    "coverImage": "public/images/routes/lefkosa-girne-kapisi.jpg",
    "coordinates": {
      "lat": 35.1768,
      "lng": 33.3639
    },
    "gallery": [
      "public/images/routes/lefkosa-girne-kapisi.jpg",
      "public/images/routes/selimiye-mosque.jpg",
      "public/images/routes/buyuk-han.jpg",
      "public/images/routes/dervis-pasa.jpg"
    ],
    "stops": [
      {
        "name": "Cyprus Car Museum",
        "category": "Museum",
        "description": "An incredible collection of classic, sports, and vintage cars spanning over a century of automotive history, a must-visit for road trip fans.",
        "image": "public/images/routes/car-museum.jpg",
        "latitude": 35.2245,
        "longitude": 33.3315,
        "openingHours": "Tue - Sun 09:00 - 17:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Cyprus+Car+Museum,+Nicosia",
        "history": "This unique museum exhibits iconic automobiles, including custom-made luxury cars and rare early models, preserved in pristine condition."
      },
      {
        "name": "Cyprus Modern Art Museum",
        "category": "Museum",
        "description": "Located on the Near East University campus, this museum features thousands of contemporary artworks from artists across the Turkic world.",
        "image": "public/images/routes/modern-art-museum.jpg",
        "latitude": 35.2233,
        "longitude": 33.3323,
        "openingHours": "Tue - Sun 09:00 - 17:00",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Cyprus+Modern+Art+Museum,+Nicosia",
        "history": "Inaugurated in 2018, it showcases painting, sculpture, and graphic arts, representing one of the largest modern art hubs in the Mediterranean."
      },
      {
        "name": "Girne Kapısı (Kyrenia Gate)",
        "category": "Castle",
        "description": "A historic portal built in 1567 by the Venetians as part of Nicosia's famous star-shaped fortifications. It stood as a vital entry point for centuries.",
        "image": "public/images/routes/lefkosa-girne-kapisi.jpg",
        "latitude": 35.1818,
        "longitude": 33.3614,
        "openingHours": "Open 24/7 (Exterior)",
        "estimatedVisitTime": "15-30 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Kyrenia+Gate,+Nicosia",
        "history": "Rebuilt by the Ottomans in 1821 with a domed chamber, it contains a historical plaque referencing the sultan. Today it houses a tourism office."
      },
      {
        "name": "Gomşu Restaurant",
        "category": "Restaurant",
        "description": "A warm local eatery serving traditional Cypriot 'Meze' and grilled specialties inside an atmospheric courtyard filled with jasmine.",
        "image": "public/images/restaurants/gomsu.jpg",
        "latitude": 35.1772,
        "longitude": 33.3618,
        "openingHours": "Daily 12:00 - 23:00",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Gomsu+Restaurant,+Nicosia",
        "history": "Known for local home-cooked recipes, this restaurant brings the culinary history of old Lefkoşa to life with fresh ingredients."
      },
      {
        "name": "Selimiye Mosque (St. Sophia Cathedral)",
        "category": "Monastery",
        "description": "A breathtaking monument of Gothic architecture, originally built as a Roman Catholic cathedral in the 13th century and later converted into a mosque.",
        "image": "public/images/routes/selimiye-mosque.jpg",
        "latitude": 35.1775,
        "longitude": 33.3644,
        "openingHours": "Outside prayer times, Daily 09:00 - 18:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Selimiye+Mosque,+Nicosia",
        "history": "Constructed during Lusignan rule between 1209 and 1326, it was Cyprus's coronation cathedral. Minarets were added after Ottoman capture in 1570."
      },
      {
        "name": "Büyük Han (Great Inn)",
        "category": "Viewpoint",
        "description": "The largest and most beautiful caravanserai on the island, featuring a central open courtyard with a small mosque (mescit) resting on marble columns.",
        "image": "public/images/routes/buyuk-han.jpg",
        "latitude": 35.1764,
        "longitude": 33.3627,
        "openingHours": "Daily 09:00 - 19:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Buyuk+Han,+Nicosia",
        "history": "Built by the first Ottoman governor of Cyprus in 1572. It served as a hostel for merchants and travelers, and later as a British prison."
      },
      {
        "name": "Rüstem Kitabevi",
        "category": "Coffee Shop",
        "description": "A historic, elegant bookshop and cafe set inside a traditional stone townhouse, serving specialty coffee, local pastries, and housing rare volumes.",
        "image": "public/images/cafes/rustem-kitabevi.jpg",
        "latitude": 35.1755,
        "longitude": 33.3620,
        "openingHours": "Daily 08:30 - 22:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Rustem+Kitabevi,+Nicosia",
        "history": "Founded in 1937, it is the oldest bookshop in Cyprus. It remains a legendary literary hub, restaurant, and art gallery."
      },
      {
        "name": "Derviş Paşa Mansion Museum",
        "category": "Museum",
        "description": "A stunning example of 19th-century Ottoman residential architecture, showcasing traditional lifestyles, crafts, and historical artifacts.",
        "image": "public/images/routes/dervis-pasa.jpg",
        "latitude": 35.1748,
        "longitude": 33.3575,
        "openingHours": "Tue - Sun 09:00 - 17:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Dervis+Pasa+Mansion,+Nicosia",
        "history": "Once owned by Derviş Paşa, publisher of the first Turkish newspaper in Cyprus. It was beautifully restored and reopened as an ethnographical museum."
      }
    ],
    "travelTips": [
      "Park your vehicle outside the walled city (e.g., near Kyrenia Gate or Belediye Parkı) as streets inside are extremely narrow and mostly one-way.",
      "Wear comfortable walking shoes; the old town is best explored on foot.",
      "Respect active worship hours at the Selimiye Mosque by dressing modestly.",
      "Combine your trip with a shopping excursion for traditional crafts at Büyük Han."
    ]
  },
  {
    "title": "Kyrenia Coast & Medieval Castles Route",
    "slug": "kyrenia-coast-castles",
    "description": "Drive through the breathtaking Beşparmak (Pentadaktylos) Mountains. Scale the high battlements of St. Hilarion Castle, stroll the quiet ruins of Bellapais Abbey, and wind down along Girne's sparkling coastal beaches and dining venues.",
    "region": "Kyrenia",
    "duration": "1-2 Days",
    "distance": "75 km",
    "difficulty": "Medium",
    "bestSeason": "Spring and Autumn",
    "coverImage": "public/images/routes/st-hilarion.jpg",
    "coordinates": {
      "lat": 35.3364,
      "lng": 33.3175
    },
    "gallery": [
      "public/images/routes/st-hilarion.jpg",
      "public/images/routes/bellapais.jpg",
      "public/images/routes/mavi-kosk.jpg",
      "public/images/beaches/ulfet.jpg"
    ],
    "stops": [
      {
        "name": "Mavi Köşk (The Blue House)",
        "category": "Museum",
        "description": "A mysterious mid-century villa filled with secret passages, Greek-Italian art, and unique architectures, built by a mysterious gunrunner.",
        "image": "public/images/routes/mavi-kosk.jpg",
        "latitude": 35.3044,
        "longitude": 33.0536,
        "openingHours": "Tue - Sun 09:00 - 17:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Mavi+Kosk,+Kyrenia",
        "history": "Built in 1957 by Byron Pavlides, the attorney and defense agent of Cyprus. Features hidden safes, a concrete pool, and a double-view bedroom."
      },
      {
        "name": "St. Hilarion Castle",
        "category": "Castle",
        "description": "One of the best-preserved crusader fortresses in Cyprus. Situated high in the Kyrenia range, it offers spectacular panoramic views of the coast.",
        "image": "public/images/routes/st-hilarion.jpg",
        "latitude": 35.3121,
        "longitude": 33.2806,
        "openingHours": "Daily 09:00 - 16:30",
        "estimatedVisitTime": "2 Hours",
        "googleMapsLink": "https://maps.google.com/?q=St.+Hilarion+Castle,+Kyrenia",
        "history": "Originally a monastery built in the 10th century, it was fortified by the Byzantines and Lusignans. It is said to have inspired Walt Disney's Snow White castle."
      },
      {
        "name": "Kyrenia Tandem Paragliding",
        "category": "Adventure",
        "description": "Soar above Kyrenia with tandem paragliding! Glide 800m high over the Mediterranean and Kyrenia Mountains, enjoying breathtaking views, adrenaline, serenity, and unforgettable memories.",
        "image": "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1920,dpr=1/tour_img/5726a4653b95106b2e33ad401ee7a92433719a9465e135b65a9d9d5f00d268f9.jpg",
        "latitude": 35.3150,
        "longitude": 33.3050,
        "openingHours": "Daily 09:00 - 17:00",
        "estimatedVisitTime": "2 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Tandem+Paragliding,+Kyrenia",
        "history": "Paragliding in the Kyrenia range offers one of the most stunning flight paths in the world, starting from the heights of the Beşparmak Mountains and landing near the harbor."
      },
      {
        "name": "Ulfet Beach Club",
        "category": "Beach",
        "description": "A refined beach club along the Kyrenia coastline offering sunbeds, a bar, and clear waters, ideal to relax after climbing mountain castles.",
        "image": "public/images/beaches/ulfet.jpg",
        "latitude": 35.3512,
        "longitude": 33.2750,
        "openingHours": "Daily 09:00 - 19:00",
        "estimatedVisitTime": "3 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Ulfet+Beach+Club,+Kyrenia",
        "history": "A popular summer club that highlights Girne's seaside leisure scene with modern facilities, cocktails, and gorgeous sunsets."
      },
      {
        "name": "Vola Coffee",
        "category": "Coffee Shop",
        "description": "A stylish, artisanal specialty coffee spot in Kyrenia, perfect for a caffeine break and fresh, modern baked treats.",
        "image": "public/images/cafes/vola-coffee.jpg",
        "latitude": 35.3400,
        "longitude": 33.3190,
        "openingHours": "Daily 08:00 - 22:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Vola+Coffee,+Kyrenia",
        "history": "A contemporary addition to the city's cafe culture, offering premium espresso blends and a cozy design loved by locals and travelers alike."
      },
      {
        "name": "Bellapais Abbey",
        "category": "Monastery",
        "description": "The ruins of a beautiful 13th-century monastery, showcasing masterpiece gothic arches and peaceful gardens overlooking the blue sea.",
        "image": "public/images/routes/bellapais.jpg",
        "latitude": 35.3072,
        "longitude": 33.3556,
        "openingHours": "Daily 09:00 - 18:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Bellapais+Abbey,+Kyrenia",
        "history": "Built by the Canons Regular of the Holy Sepulchre. British writer Lawrence Durrell lived nearby and immortalized the village in his book 'Bitter Lemons'."
      },
      {
        "name": "Kybele Restaurant",
        "category": "Restaurant",
        "description": "Set directly within the grounds of Bellapais Abbey, this high-end restaurant offers modern Mediterranean cuisine and fine dining with dramatic views.",
        "image": "public/images/restaurants/kybele.jpg",
        "latitude": 35.3075,
        "longitude": 33.3560,
        "openingHours": "Daily 11:30 - 23:30",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Kybele+Restaurant,+Kyrenia",
        "history": "Renowned for hosting prestigious dinners and tourists visiting the Abbey, it blends architectural history with upscale local gastronomy."
      }
    ],
    "travelTips": [
      "The road climbing to St. Hilarion Castle has steep inclines; make sure your vehicle's cooling system is in good order.",
      "Visit St. Hilarion early in the morning to avoid the midday sun and tourist buses.",
      "Remember that Mavi Köşk is inside a military zone; you will need to present your passport/ID at the military gate to enter."
    ]
  },
  {
    "title": "Famagusta Walled City & Ancient Salamis Route",
    "slug": "famagusta-walled-city-ruins",
    "description": "Drive down the Eastern coast to discover the sprawling ancient Roman ruins of Salamis. Then, step through the medieval stone walls of Famagusta, visit its historic French Gothic cathedral-turned-mosque, and explore the reopened Varosha ghost town.",
    "region": "Famagusta",
    "duration": "1 Day",
    "distance": "60 km",
    "difficulty": "Easy",
    "bestSeason": "Year-round",
    "coverImage": "public/images/routes/salamis.jpg",
    "coordinates": {
      "lat": 35.1228,
      "lng": 33.9422
    },
    "gallery": [
      "public/images/routes/salamis.jpg",
      "public/images/routes/lala-mustafa.jpg",
      "public/images/routes/varosha.jpg",
      "public/images/beaches/varosha-beach.jpg"
    ],
    "stops": [
      {
        "name": "Salamis Harabeleri (Salamis Ruins)",
        "category": "Museum",
        "description": "A magnificent ancient Greek and Roman city-state. Stroll among marble columns, explore the amphitheater, bathhouses, and ancient mosaics.",
        "image": "public/images/routes/salamis.jpg",
        "latitude": 35.1842,
        "longitude": 33.9011,
        "openingHours": "Daily 09:00 - 18:00",
        "estimatedVisitTime": "2 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Salamis+Ancient+Ruins,+Famagusta",
        "history": "Founded according to legend by Teucer after the Trojan War. Under Roman rule, it became the island's primary commercial port."
      },
      {
        "name": "Eziç Famagusta",
        "category": "Restaurant",
        "description": "A popular modern restaurant offering a large menu of international and Turkish-Cypriot dishes in a sleek, stylish dining room.",
        "image": "public/images/restaurants/ezic-magusa.jpg",
        "latitude": 35.1215,
        "longitude": 33.9180,
        "openingHours": "Daily 11:30 - 23:00",
        "estimatedVisitTime": "1 Hour",
        "googleMapsLink": "https://maps.google.com/?q=Ezic+Restaurant,+Famagusta",
        "history": "Eziç is a prominent Cypriot restaurant chain celebrated for excellent quality, fast service, and modern design."
      },
      {
        "name": "Lala Mustafa Paşa Mosque (St. Nicholas Cathedral)",
        "category": "Monastery",
        "description": "The largest medieval building in Famagusta, featuring majestic Gothic architecture inspired by the Reims Cathedral in France.",
        "image": "public/images/routes/lala-mustafa.jpg",
        "latitude": 35.1250,
        "longitude": 33.9428,
        "openingHours": "Outside prayer times, Daily 09:00 - 18:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Lala+Mustafa+Pasa+Mosque,+Famagusta",
        "history": "Built by the Lusignans between 1298 and 1312. It was where the Kings of Cyprus were crowned as Kings of Jerusalem. Converted to a mosque in 1571."
      },
      {
        "name": "Mardo Kaleiçi",
        "category": "Coffee Shop",
        "description": "A premium café located inside the old walled city of Famagusta, famous for its Turkish ice cream (dondurma), desserts, and local atmosphere.",
        "image": "public/images/cafes/mardo.jpg",
        "latitude": 35.1245,
        "longitude": 33.9420,
        "openingHours": "Daily 08:30 - 23:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Mardo+Kaleiçi,+Famagusta",
        "history": "A popular local brand that offers travelers a relaxing spot to sit by historical ruins and enjoy traditional sweet recipes."
      },
      {
        "name": "Tatlı Hayat",
        "category": "Coffee Shop",
        "description": "A boutique cake shop and bistro, famous for its delicious pastries, specialty cakes, and charming garden seating in old Famagusta.",
        "image": "public/images/cafes/tatli-hayat.jpg",
        "latitude": 35.1235,
        "longitude": 33.9412,
        "openingHours": "Daily 09:00 - 22:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Tatli+Hayat+Cafe,+Famagusta",
        "history": "Loved by students from the nearby Eastern Mediterranean University and travelers, it serves as a sweet haven within the historical city."
      },
      {
        "name": "Kapalı Maraş (Varosha)",
        "category": "Museum",
        "description": "A surreal 'ghost town' that was frozen in time for decades. You can now walk or cycle down its streets lined with abandoned mid-century hotels.",
        "image": "public/images/routes/varosha.jpg",
        "latitude": 35.1114,
        "longitude": 33.9556,
        "openingHours": "Daily 08:00 - 20:00 (Summer), 08:00 - 17:00 (Winter)",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Varosha,+Famagusta",
        "history": "A premier Mediterranean luxury resort hub in the 1960s, Varosha was fenced off during the 1974 conflict and lay completely abandoned until partially reopening in 2020."
      },
      {
        "name": "Varosha Beach",
        "category": "Beach",
        "description": "A stunning sandy beach bordering the abandoned towers of Varosha, offering unique clear turquoise waters and a historic backdrop.",
        "image": "public/images/beaches/varosha-beach.jpg",
        "latitude": 35.1095,
        "longitude": 33.9590,
        "openingHours": "Daily 08:00 - 19:00",
        "estimatedVisitTime": "2 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Varosha+Beach,+Famagusta",
        "history": "Once rated among the best beaches in the world, visited by movie stars. Today it features public walkways and sun loungers next to history."
      }
    ],
    "travelTips": [
      "Renting a bicycle at the entrance of Varosha (Kapalı Maraş) is highly recommended, as the open area is large and best explored on wheels.",
      "Visit Salamis in the late afternoon to experience the amphitheater bathed in soft golden hour light.",
      "Do not cross into fenced military zones or photograph military assets inside Varosha."
    ]
  },
  {
    "title": "Iskele & Karpaz Peninsula Wild Journey",
    "slug": "iskele-karpaz-wild-journey",
    "description": "Drive from the historical coastal town of Iskele up into the rugged, wild beauty of the Karpaz Peninsula. Enjoy pristine sandy bays, see the sacred Apostolos Andreas Monastery, and feed the famous wild donkeys of the national park.",
    "region": "Iskele",
    "duration": "2 Days",
    "distance": "120 km",
    "difficulty": "Medium",
    "bestSeason": "Spring, Summer, and Autumn",
    "coverImage": "public/images/routes/bogaz-harbour.jpg",
    "coordinates": {
      "lat": 35.2819,
      "lng": 33.8967
    },
    "gallery": [
      "public/images/routes/bogaz-harbour.jpg",
      "public/images/routes/iskele-museum.jpg",
      "public/images/routes/theotokos.jpg",
      "public/images/beaches/kalecik.jpg"
    ],
    "stops": [
      {
        "name": "Café Paris & Bakery",
        "category": "Coffee Shop",
        "description": "A delightful European-style bakery in Iskele offering fresh croissants, delicious cakes, and warm coffees in a chic lounge.",
        "image": "public/images/cafes/cafe-paris.jpg",
        "latitude": 35.2725,
        "longitude": 33.8920,
        "openingHours": "Daily 07:30 - 21:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Cafe+Paris+Bakery,+Iskele",
        "history": "Brings French pastry culture to the Iskele district, serving as a popular morning spot for coffee lovers starting their Karpaz road trip."
      },
      {
        "name": "İskele Archaeology Museum",
        "category": "Museum",
        "description": "A well-organized local museum exhibiting historical artifacts, pottery, and sculptures uncovered from the surrounding Karpaz and Iskele region.",
        "image": "public/images/routes/iskele-museum.jpg",
        "latitude": 35.2715,
        "longitude": 33.8910,
        "openingHours": "Mon - Fri 08:00 - 15:30",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Iskele+Archaeology+Museum,+Iskele",
        "history": "Inaugurated in 2018 to safeguard the rich heritage of regional excavations, showcasing relics from the Bronze Age through the Roman eras."
      },
      {
        "name": "Panayia Theotokos Icon Museum",
        "category": "Museum",
        "description": "An 11th-century Byzantine domed church containing valuable icons, religious frescoes, and a unique historic vaulted architecture.",
        "image": "public/images/routes/theotokos.jpg",
        "latitude": 35.2730,
        "longitude": 33.8935,
        "openingHours": "Mon - Fri 09:00 - 16:00",
        "estimatedVisitTime": "30 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Panayia+Theotokos+Church,+Iskele",
        "history": "Also known as the Church of the Blessed Virgin Mary, it is a key architectural example of Middle Byzantine cross-in-square design."
      },
      {
        "name": "Terra Coffee & Lounge",
        "category": "Coffee Shop",
        "description": "A cozy, premium coffee shop in Iskele offering dynamic brews, smoothies, and a comfortable modern environment to plan your drive.",
        "image": "public/images/cafes/terra-coffee.jpg",
        "latitude": 35.2740,
        "longitude": 33.8940,
        "openingHours": "Daily 08:00 - 23:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Terra+Coffee,+Iskele",
        "history": "Known for local student gatherings and traveler breaks, combining international coffee beans with warm hospitality."
      },
      {
        "name": "Boğaz Harbour",
        "category": "Viewpoint",
        "description": "A charming, peaceful fishing harbor where you can walk along the quay, view local boats, and enjoy fresh marine breezes.",
        "image": "public/images/routes/bogaz-harbour.jpg",
        "latitude": 35.3180,
        "longitude": 33.9530,
        "openingHours": "Open 24/7",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Bogaz+Harbour,+Iskele",
        "history": "For decades, Boğaz has served as a center for local fishermen and a quiet seaside getaway, famous for its seafood restaurants."
      },
      {
        "name": "Barna Beach Fish Restaurant",
        "category": "Restaurant",
        "description": "A scenic seaside fish restaurant in Boğaz, serving daily caught fresh seafood, traditional appetizers, and grilled fish right next to the waves.",
        "image": "public/images/restaurants/barna.jpg",
        "latitude": 35.3195,
        "longitude": 33.9540,
        "openingHours": "Daily 12:00 - 23:00",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Barna+Restaurant,+Iskele",
        "history": "A local culinary icon in Boğaz, beloved for keeping traditional Cypriot seafood cooking practices alive."
      },
      {
        "name": "Kalecik Public Beach",
        "category": "Beach",
        "description": "A pristine sandy public beach with warm shallow waters, perfect for swimming and sunbathing in a quiet coastal atmosphere.",
        "image": "public/images/beaches/kalecik.jpg",
        "latitude": 35.3210,
        "longitude": 33.9590,
        "openingHours": "Open 24/7",
        "estimatedVisitTime": "3 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Kalecik+Beach,+Iskele",
        "history": "A tranquil alternative to larger resort beaches, Kalecik preserves the scenic, raw seaside beauty of the region."
      }
    ],
    "travelTips": [
      "Karpaz is a long drive; make sure you fill up your fuel tank in Iskele or Boğaz, as petrol stations are sparse further up the peninsula.",
      "Buy some carrots or apples at a local market before entering the Karpaz national park; the famous wild donkeys will approach your car to feed.",
      "Plan for a 2-day trip to fully experience the Karpaz Peninsula and stay at a local boutique bungalow or eco-lodge."
    ]
  },
  {
    "title": "Lefke & Güzelyurt Citrus Valleys Route",
    "slug": "lefke-guzelyurt-citrus-valleys",
    "description": "Drive through the fertile orange and strawberry orchards of Güzelyurt, climb to the ancient hilltop Vouni Palace, explore Lefke's rich copper mining heritage, and enjoy seaside dining along the Western coast.",
    "region": "Lefke",
    "duration": "1 Day",
    "distance": "85 km",
    "difficulty": "Medium",
    "bestSeason": "Spring and Winter",
    "coverImage": "public/images/routes/vouni.jpg",
    "coordinates": {
      "lat": 35.1139,
      "lng": 32.8503
    },
    "gallery": [
      "public/images/routes/vouni.jpg",
      "public/images/routes/mining-museum.jpg",
      "public/images/routes/gemikonagi-dam.jpg",
      "public/images/beaches/yesilirmak.jpg"
    ],
    "stops": [
      {
        "name": "Gemikonağı Göleti (Gemikonağı Dam)",
        "category": "Viewpoint",
        "description": "A peaceful reservoir surrounded by green hills, offering a quiet spot for photography, viewing local water birds, and a scenic drive.",
        "image": "public/images/routes/gemikonagi-dam.jpg",
        "latitude": 35.1290,
        "longitude": 32.8460,
        "openingHours": "Open 24/7",
        "estimatedVisitTime": "30 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Gemikonağı+Göleti,+Lefke",
        "history": "Constructed to support local agriculture and irrigate Lefke's famous citrus groves, creating a beautiful artificial lake in the process."
      },
      {
        "name": "Lefke Mining Museum",
        "category": "Museum",
        "description": "A small museum detailing Lefke's rich history as an ancient and modern copper-mining hub, featuring old photographs and equipment.",
        "image": "public/images/routes/mining-museum.jpg",
        "latitude": 35.1120,
        "longitude": 32.8490,
        "openingHours": "Mon - Fri 08:00 - 15:30",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Lefke+Mining+Museum,+Lefke",
        "history": "Lefke was famous for copper mining since Roman times. The museum preserves the legacy of the Cyprus Mines Corporation (CMC) which operated here in the 20th century."
      },
      {
        "name": "MOAR Cafe",
        "category": "Coffee Shop",
        "description": "A popular contemporary cafe in Lefke offering great coffee, local snacks, and a cozy courtyard setting loved by students and visitors.",
        "image": "public/images/cafes/moar-cafe.jpg",
        "latitude": 35.1160,
        "longitude": 32.8520,
        "openingHours": "Daily 08:30 - 23:00",
        "estimatedVisitTime": "45 Mins",
        "googleMapsLink": "https://maps.google.com/?q=MOAR+Cafe,+Lefke",
        "history": "Serves as a modern cultural hotspot in the historic town of Lefke, known for blending cozy design with quality brews."
      },
      {
        "name": "Cengiz Topel Monument",
        "category": "Museum",
        "description": "A memorial dedicated to Turkish Air Force pilot Captain Cengiz Topel, featuring his actual jet fighter plane and a historical exhibition.",
        "image": "public/images/routes/cengiz-topel.jpg",
        "latitude": 35.1380,
        "longitude": 32.8120,
        "openingHours": "Daily 09:00 - 17:00",
        "estimatedVisitTime": "30 Mins",
        "googleMapsLink": "https://maps.google.com/?q=Cengiz+Topel+Memorial,+Lefke",
        "history": "Built to honor Captain Cengiz Topel, whose plane was shot down during the 1964 Cyprus crisis. The monument stands near his crash site."
      },
      {
        "name": "Vouni Palace",
        "category": "Castle",
        "description": "The dramatic ruins of a 5th-century BC palace perched on a cliff edge 250 meters above the sea. It is one of the most scenic archeological sites in Cyprus.",
        "image": "public/images/routes/vouni.jpg",
        "latitude": 35.1639,
        "longitude": 32.7750,
        "openingHours": "Daily 09:00 - 17:00",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Vouni+Palace,+Lefke",
        "history": "Built during the Persian occupation to monitor the nearby pro-Greek city-state of Soli. It was destroyed by fire in 380 BC and never rebuilt."
      },
      {
        "name": "Yeşilırmak Beach",
        "category": "Beach",
        "description": "A quiet beach located in the westernmost village of Northern Cyprus, famous for its sweet strawberry fields, clear sea, and coastal cliffs.",
        "image": "public/images/beaches/yesilirmak.jpg",
        "latitude": 35.1580,
        "longitude": 32.7150,
        "openingHours": "Open 24/7",
        "estimatedVisitTime": "3 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Yesilirmak,+Lefke",
        "history": "Yeşilırmak is listed in the Guinness Book of Records for growing the largest single strawberry plant. It is a peaceful coastal retreat."
      },
      {
        "name": "Dillirga Restaurant",
        "category": "Restaurant",
        "description": "A traditional seaside tavern in Yeşilırmak serving outstanding Cypriot meze, grilled meats, and fresh seafood under a canopy of grapevines.",
        "image": "public/images/restaurants/dillirga.jpg",
        "latitude": 35.1590,
        "longitude": 32.7160,
        "openingHours": "Daily 12:00 - 23:00",
        "estimatedVisitTime": "1.5 Hours",
        "googleMapsLink": "https://maps.google.com/?q=Dillirga+Restaurant,+Yesilirmak",
        "history": "Known for sourcing all ingredients locally, including organic olive oil, wine, and vegetables from the surrounding Yeşilırmak valleys."
      }
    ],
    "travelTips": [
      "Plan your trip around April or May to experience Güzelyurt's strawberry harvest and Lefke's orange groves in full bloom.",
      "The road to Vouni Palace is steep and narrow; drive carefully and make sure your vehicle is prepared.",
      "Stop at roadside fruit stalls along the way to purchase fresh, organic oranges, strawberries, and local olive oils."
    ]
  }
];

let routesDatabase = [...DEFAULT_ROUTES_DB]; // Populated at startup
const ROUTE_MAP = {
  'nicosia-historic-loop': 'data/routes/nicosia.json',
  'kyrenia-coast-castles': 'data/routes/kyrenia.json',
  'famagusta-walled-city-ruins': 'data/routes/famagusta.json',
  'iskele-karpaz-wild-journey': 'data/routes/iskele.json',
  'lefke-guzelyurt-citrus-valleys': 'data/routes/lefke.json'
};
let isInitialized = false;

// App Startup Initialization
async function initApp() {
  if (isInitialized) return;

  // Initialize Lightbox
  if (window.initLightbox) window.initLightbox();

  // Load language settings (defaults to localStorage or 'en')
  if (window.initI18n) {
    await window.initI18n(localStorage.getItem('drive_kktc_lang') || 'en');
  }

  // Pre-fetch all route details to populate the database
  try {
    const fetchPromises = Object.values(ROUTE_MAP).map(url => 
      fetch(url).then(res => {
        if (!res.ok) throw new Error(`Failed to load ${url}`);
        return res.json();
      })
    );
    routesDatabase = await Promise.all(fetchPromises);
  } catch (err) {
    console.error("Error building routes database:", err);
  }

  setupTheme();
  setupGlobalListeners();
  
  isInitialized = true;
}

// Theme System (Light / Dark Mode)
function setupTheme() {
  const savedTheme = localStorage.getItem('drive_kktc_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('drive_kktc_theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.querySelector('.theme-btn');
  if (!btn) return;
  const isDark = document.documentElement.classList.contains('dark');
  btn.innerHTML = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

// Router Implementation
async function handleRouting() {
  await initApp();
  
  const hash = window.location.hash || '#home';
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Clear previous leaflet map
  if (window.cleanupMap) window.cleanupMap();

  // Route parser
  let page = 'home';
  let parameter = null;

  if (hash.startsWith('#route/')) {
    page = 'route-detail';
    parameter = hash.replace('#route/', '');
  } else if (hash.startsWith('#routes')) {
    page = 'routes';
  } else if (hash === '#about') {
    page = 'about';
  } else if (hash === '#gallery') {
    page = 'gallery';
  } else if (hash === '#contact') {
    page = 'contact';
  }

  // Update active navigation state
  updateActiveNavLink(hash);
  
  // Reset scroll
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Render templates
  switch (page) {
    case 'home':
      renderHome(mainContent);
      break;
    case 'routes':
      renderRoutes(mainContent);
      break;
    case 'route-detail':
      renderRouteDetail(mainContent, parameter);
      break;
    case 'about':
      renderAbout(mainContent);
      break;
    case 'gallery':
      renderGallery(mainContent);
      break;
    case 'contact':
      renderContact(mainContent);
      break;
    default:
      render404(mainContent);
  }

  // Re-translate newly rendered content
  if (window.translateDOM) window.translateDOM();
  updateThemeIcon();
}

function updateActiveNavLink(hash) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkHash = link.getAttribute('href');
    if (hash === linkHash || (hash.startsWith('#route') && linkHash === '#routes')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// SEO & Structured Metadata Injector
function updateSEO(title, description, canonicalPath, schemaObject = null) {
  document.title = `${title} | Drive KKTC`;
  
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = window.location.origin + window.location.pathname + canonicalPath;

  // Inject JSON-LD Schema
  let schemaScript = document.getElementById('jsonld-schema');
  if (schemaScript) schemaScript.remove();

  if (schemaObject) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'jsonld-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaObject);
    document.head.appendChild(schemaScript);
  }
}

// Global Event Listeners
function setupGlobalListeners() {
  window.addEventListener('hashchange', handleRouting);
  
  // Mobile navigation hamburger toggle (optional accessibility enhancement)
  document.addEventListener('click', (e) => {
    const menuToggle = e.target.closest('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = 'var(--bg-nav)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--border-color)';
    }
  });
}

// Page Renderers

// 1. Home Page
function renderHome(container) {
  updateSEO(
    "Discover Northern Cyprus driving routes",
    "Scenic self-drive routes, castles, hidden beaches, and local cafes in Northern Cyprus. Premium digital travel guide.",
    "#home"
  );

  const featured = routesDatabase.slice(0, 3);
  let featuredHTML = '';

  featured.forEach(route => {
    featuredHTML += `
      <article class="route-card glass-card fade-in-up">
        <div class="route-card-img-container">
          <img class="route-card-img" src="${route.coverImage}" alt="${route.title}">
          <span class="route-card-region">${route.region}</span>
        </div>
        <div class="route-card-content">
          <div>
            <h3>${route.title}</h3>
            <p>${route.description}</p>
          </div>
          <div class="route-stats">
            <span>📏 ${route.distance}</span>
            <span>⏱️ ${route.duration}</span>
            <span>⚡ ${route.difficulty}</span>
          </div>
          <a href="#route/${route.slug}" class="btn-primary" style="margin-top: 1.5rem; justify-content: center;" aria-label="${window.t('routes.viewDetails')} for ${route.title}">
            ${window.t('routes.viewDetails')}
          </a>
        </div>
      </article>
    `;
  });

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-sec" aria-label="Welcome banner">
      <img class="hero-img-bg" src="public/images/hero/main.jpg" alt="Scenic road trip in Cyprus">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-titleEditorial editorial" data-i18n="hero.title">${window.t('hero.title')}</h1>
        <p class="hero-subtitle" data-i18n="hero.subtitle">${window.t('hero.subtitle')}</p>
        <div class="hero-search-wrapper">
          <input type="text" id="home-search-input" data-i18n-placeholder="hero.searchPlaceholder" placeholder="${window.t('hero.searchPlaceholder')}" aria-label="Search site routes">
          <button class="btn-primary" id="home-search-btn" aria-label="Search button">
            🔍
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="section">
      <div class="section-header">
        <h2 data-i18n="routes.title">${window.t('routes.title')}</h2>
        <p data-i18n="routes.subtitle">${window.t('routes.subtitle')}</p>
      </div>
      <div class="routes-grid">
        ${featuredHTML}
      </div>
      <div style="text-align: center; margin-top: 4rem;">
        <a href="#routes" class="btn-secondary">
          ${window.t('hero.cta')} &rarr;
        </a>
      </div>
    </section>

    <!-- Travel Magazine Editorial Section -->
    <section style="background-color: var(--bg-card); padding: 6rem 2rem; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
      <div class="section" style="padding: 0;">
        <div class="about-grid">
          <div>
            <h2 class="editorial" style="font-size: 3rem; margin-bottom: 1.5rem; color: var(--primary);">Curated Driving Experiences</h2>
            <p style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.8;">
              Our routes are built for travelers who appreciate the freedom of self-driven discovery. From the medieval ramparts of crusader castles overlooking Kyrenia, to the wind-swept golden coastlines of Karpaz, we show you the true heart of Northern Cyprus.
            </p>
            <div style="display: flex; gap: 2rem;">
              <div>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent);">5</div>
                <div style="font-weight: 700; color: var(--primary);">Major Regions</div>
              </div>
              <div>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent);">30+</div>
                <div style="font-weight: 700; color: var(--primary);">Hand-picked Stops</div>
              </div>
              <div>
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent);">100%</div>
                <div style="font-weight: 700; color: var(--primary);">Free Guidance</div>
              </div>
            </div>
          </div>
          <div>
            <img class="about-img" src="public/images/hero/about.jpg" alt="Cliffs and ocean in Cyprus">
          </div>
        </div>
      </div>
    </section>
  `;

  // Bind Search Button and Enter key on homepage input
  const searchInput = document.getElementById('home-search-input');
  const searchBtn = document.getElementById('home-search-btn');
  
  const handleSearchRedirect = () => {
    const val = encodeURIComponent(searchInput.value.trim());
    window.location.hash = `#routes?search=${val}`;
  };

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', handleSearchRedirect);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearchRedirect();
    });
  }
}

// 2. Routes Listing Page (with Filter, Search & Sort)
function renderRoutes(container) {
  updateSEO(
    "Browse Scenic Driving Routes",
    "Explore driving routes, search by landmarks or beaches, and filter by difficulty and region.",
    "#routes"
  );

  // Parse query params (e.g. search query)
  const hash = window.location.hash;
  let initialSearch = "";
  if (hash.includes('?')) {
    const params = new URLSearchParams(hash.substring(hash.indexOf('?')));
    initialSearch = params.get('search') || "";
  }

  container.innerHTML = `
    <section class="section fade-in">
      <div class="section-header">
        <h1 data-i18n="routes.title">${window.t('routes.title')}</h1>
        <p data-i18n="routes.subtitle">${window.t('routes.subtitle')}</p>
      </div>

      <!-- Advanced Filter Bar -->
      <div class="filter-bar glass-card">
        <div class="filter-group">
          <!-- Text Search -->
          <input type="text" id="route-search" value="${initialSearch}" placeholder="${window.t('hero.searchPlaceholder')}" class="filter-select" style="min-width: 250px; flex-grow: 1;" aria-label="Fuzzy search routes">
          
          <!-- Region Filter -->
          <select id="region-filter" class="filter-select" aria-label="Filter by region">
            <option value="all" data-i18n="routes.allRegions">${window.t('routes.allRegions')}</option>
            <option value="Nicosia">Nicosia (Lefkoşa)</option>
            <option value="Kyrenia">Kyrenia (Girne)</option>
            <option value="Famagusta">Famagusta (Mağusa)</option>
            <option value="Iskele">Iskele (Karpaz)</option>
            <option value="Lefke">Lefke (Güzelyurt)</option>
          </select>

          <!-- Difficulty Filter -->
          <select id="difficulty-filter" class="filter-select" aria-label="Filter by difficulty">
            <option value="all" data-i18n="routes.allDifficulties">${window.t('routes.allDifficulties')}</option>
            <option value="Easy" data-i18n="routes.difficultyEasy">${window.t('routes.difficultyEasy')}</option>
            <option value="Medium" data-i18n="routes.difficultyMedium">${window.t('routes.difficultyMedium')}</option>
          </select>
        </div>

        <div class="filter-group">
          <!-- Sorter -->
          <span data-i18n="routes.sortBy" style="font-weight:700; font-size:0.9rem;">${window.t('routes.sortBy')}:</span>
          <select id="sort-select" class="filter-select" aria-label="Sort routes">
            <option value="default" data-i18n="routes.sortByDefault">${window.t('routes.sortByDefault')}</option>
            <option value="distance" data-i18n="routes.sortByDistance">${window.t('routes.sortByDistance')}</option>
            <option value="duration" data-i18n="routes.sortByDuration">${window.t('routes.sortByDuration')}</option>
          </select>
        </div>
      </div>

      <!-- Dynamic Grid Container -->
      <div class="routes-grid" id="routes-list-container">
        <!-- Rendered via JS -->
      </div>
    </section>
  `;

  // Function to filter and sort live
  const updateList = () => {
    const searchVal = document.getElementById('route-search').value.toLowerCase();
    const regionVal = document.getElementById('region-filter').value;
    const difficultyVal = document.getElementById('difficulty-filter').value;
    const sortVal = document.getElementById('sort-select').value;

    let filtered = routesDatabase.filter(route => {
      // 1. Search Query (Fuzzy text search in title, description, stops, region, and tips)
      const matchesSearch = 
        route.title.toLowerCase().includes(searchVal) ||
        route.description.toLowerCase().includes(searchVal) ||
        route.region.toLowerCase().includes(searchVal) ||
        route.stops.some(stop => 
          stop.name.toLowerCase().includes(searchVal) || 
          stop.description.toLowerCase().includes(searchVal) ||
          stop.category.toLowerCase().includes(searchVal)
        );

      // 2. Region matches
      const matchesRegion = regionVal === 'all' || route.region === regionVal;

      // 3. Difficulty matches
      const matchesDiff = difficultyVal === 'all' || route.difficulty === difficultyVal;

      return matchesSearch && matchesRegion && matchesDiff;
    });

    // 4. Sorting logic
    if (sortVal === 'distance') {
      filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } else if (sortVal === 'duration') {
      filtered.sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    }

    // Render output
    const listContainer = document.getElementById('routes-list-container');
    if (!listContainer) return;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-muted);">
          <span style="font-size: 3rem;">🔍</span>
          <p style="margin-top: 1rem; font-weight: 600;" data-i18n="routes.noRoutesFound">${window.t('routes.noRoutesFound')}</p>
        </div>
      `;
      return;
    }

    let cardsHTML = "";
    filtered.forEach(route => {
      cardsHTML += `
        <article class="route-card glass-card fade-in-up">
          <div class="route-card-img-container">
            <img class="route-card-img" src="${route.coverImage}" alt="${route.title}">
            <span class="route-card-region">${route.region}</span>
          </div>
          <div class="route-card-content">
            <div>
              <h3>${route.title}</h3>
              <p>${route.description}</p>
            </div>
            <div class="route-stats">
              <span>📏 ${route.distance}</span>
              <span>⏱️ ${route.duration}</span>
              <span>⚡ ${route.difficulty}</span>
            </div>
            <a href="#route/${route.slug}" class="btn-primary" style="margin-top: 1.5rem; justify-content: center;">
              ${window.t('routes.viewDetails')}
            </a>
          </div>
        </article>
      `;
    });
    listContainer.innerHTML = cardsHTML;
  };

  // Bind Event Listeners
  document.getElementById('route-search').addEventListener('input', updateList);
  document.getElementById('region-filter').addEventListener('change', updateList);
  document.getElementById('difficulty-filter').addEventListener('change', updateList);
  document.getElementById('sort-select').addEventListener('change', updateList);

  // Initial render
  updateList();
}

// 3. Route Details Page (Dynamic)
async function renderRouteDetail(container, slug) {
  // Show Loading skeleton first
  container.innerHTML = `
    <div style="max-width: 800px; margin: 6rem auto; padding: 2rem; text-align:center; color: var(--text-muted);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; animation: pulse 1.5s infinite;">🚗</div>
      <p style="font-weight:600;">Loading route specifications...</p>
    </div>
  `;

  try {
    // Look up the route details directly from the in-memory routesDatabase first
    let route = routesDatabase.find(r => r.slug === slug);

    // If not found in memory, try to fetch it from its JSON file as a fallback
    if (!route) {
      const jsonPath = ROUTE_MAP[slug];
      if (!jsonPath) {
        render404(container);
        return;
      }
      const response = await fetch(jsonPath);
      if (!response.ok) throw new Error("Failed to load route file");
      route = await response.json();
    }

    // Setup SEO and TravelRoute Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "TouristRoute",
      "name": route.title,
      "description": route.description,
      "distance": route.distance,
      "itinerary": route.stops.map((stop, i) => ({
        "@type": "TouristAttraction",
        "name": stop.name,
        "position": i + 1,
        "description": stop.description,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": stop.latitude,
          "longitude": stop.longitude
        }
      }))
    };

    updateSEO(
      route.title,
      route.description,
      `#route/${route.slug}`,
      schema
    );

    // Build Stops Timeline HTML
    let stopsHTML = "";
    route.stops.forEach((stop, index) => {
      stopsHTML += `
        <div class="stop-item">
          <div class="stop-marker" aria-hidden="true"></div>
          <div class="stop-card glass-card">
            <div class="stop-header">
              <div>
                <span class="stop-category">${stop.category}</span>
                <h3 style="font-size: 1.6rem; margin-top: 0.5rem; color: var(--primary);">${index + 1}. ${stop.name}</h3>
              </div>
              <a href="${stop.googleMapsLink}" target="_blank" rel="noopener" class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" aria-label="Navigate to ${stop.name} on Google Maps">
                🗺️ Navigate
              </a>
            </div>
            
            <p style="color: var(--text-main); font-size: 1rem; margin-bottom: 1.5rem;">${stop.description}</p>
            
            <img class="stop-img lightbox-trigger" src="${stop.image}" alt="${stop.name}" title="${stop.name}">
            
            <div class="stop-meta">
              <div><strong>🕒 ${window.t('routeDetail.visitTime')}:</strong> ${stop.estimatedVisitTime}</div>
              <div><strong>🚪 ${window.t('routeDetail.hours')}:</strong> ${stop.openingHours}</div>
            </div>

            ${stop.history ? `
              <div style="margin-top: 1.5rem; background-color: var(--border-color); padding: 1.25rem; border-radius: var(--border-radius-sm);">
                <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--primary); text-transform: uppercase; letter-spacing:0.5px;">📜 ${window.t('routeDetail.history')}</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin:0;">${stop.history}</p>
              </div>
            ` : ""}
          </div>
        </div>
      `;
    });

    // Build Tips HTML
    let tipsHTML = "";
    route.travelTips.forEach(tip => {
      tipsHTML += `<li style="margin-bottom: 1rem; font-size: 0.95rem; line-height:1.6; color: var(--text-main);">&bull; ${tip}</li>`;
    });

    // Find 2 nearby routes
    const nearby = routesDatabase.filter(r => r.slug !== route.slug).slice(0, 2);
    let nearbyHTML = "";
    nearby.forEach(r => {
      nearbyHTML += `
        <a href="#route/${r.slug}" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; text-decoration: none;" class="nearby-route-link">
          <img src="${r.coverImage}" alt="${r.title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div>
            <h4 style="font-size: 0.9rem; color: var(--primary); margin:0;">${r.title}</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${r.distance} | ${r.duration}</span>
          </div>
        </a>
      `;
    });

    container.innerHTML = `
      <!-- Detail Hero Section -->
      <section class="detail-hero" aria-label="Route header banner">
        <img class="hero-img-bg" src="${route.coverImage}" alt="${route.title}">
        <div class="hero-overlay"></div>
        <div class="detail-hero-content">
          <a href="#routes" style="color: white; font-weight:700; font-size:0.9rem; margin-bottom: 1rem; display:inline-block;">&larr; Back to Routes</a>
          <h1 class="detail-title">${route.title}</h1>
          <div class="detail-meta-strip">
            <span class="detail-meta-item">📍 ${route.region}</span>
            <span class="detail-meta-item">📏 ${route.distance}</span>
            <span class="detail-meta-item">⏱️ ${route.duration}</span>
            <span class="detail-meta-item">⚡ ${route.difficulty}</span>
            <span class="detail-meta-item">📅 ${route.bestSeason}</span>
          </div>
        </div>
      </section>

      <!-- Main Layout -->
      <div class="section detail-layout">
        <!-- Stops & Map -->
        <main>
          <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary);" data-i18n="routeDetail.overview">${window.t('routeDetail.overview')}</h2>
          <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); margin-bottom: 3rem;">${route.description}</p>
          
          <!-- Leaflet Interactive Map Container -->
          <div id="route-map" class="map-container" aria-label="Route stops map"></div>

          <h2 style="font-size: 2rem; margin-bottom: 2.5rem; color: var(--primary);" data-i18n="routeDetail.stopsTimeline">${window.t('routeDetail.stopsTimeline')}</h2>
          <div class="stop-timeline">
            ${stopsHTML}
          </div>
        </main>

        <!-- Sidebar Widgets -->
        <aside>
          <!-- Live Weather Widget -->
          <div class="sidebar-widget glass-card">
            <h3 data-i18n="routeDetail.weather">${window.t('routeDetail.weather')}</h3>
            <div id="weather-widget-container" class="weather-card-widget">
              <span data-i18n="routeDetail.loadingWeather">${window.t('routeDetail.loadingWeather')}</span>
            </div>
          </div>

          <!-- Local Driving Tips -->
          <div class="sidebar-widget glass-card">
            <h3 data-i18n="routeDetail.tips">${window.t('routeDetail.tips')}</h3>
            <ul style="list-style: none;">
              ${tipsHTML}
            </ul>
          </div>

          <!-- Nearby Routes -->
          <div class="sidebar-widget glass-card">
            <h3 data-i18n="routeDetail.nearby">${window.t('routeDetail.nearby')}</h3>
            <div>
              ${nearbyHTML}
            </div>
          </div>

          <!-- Share buttons -->
          <div class="sidebar-widget glass-card" style="text-align:center;">
            <h3 data-i18n="routeDetail.share">${window.t('routeDetail.share')}</h3>
            <div style="display:flex; justify-content:center; gap: 1rem;">
              <button class="btn-secondary" id="share-twitter" style="padding: 0.5rem 1rem;" aria-label="Share route on Twitter">🐦 Twitter</button>
              <button class="btn-secondary" id="share-link" style="padding: 0.5rem 1rem;" aria-label="Copy route URL">🔗 Copy Link</button>
            </div>
          </div>
        </aside>
      </div>
    `;

    // Render interactive Leaflet Map
    if (window.initRouteMap) {
      window.initRouteMap('route-map', route);
    }

    // Bind Lightbox on timeline stop photos
    if (window.bindGalleryTriggers) {
      window.bindGalleryTriggers('.stop-img');
    }

    // Fetch and render Live weather with caching
    if (window.fetchWeather && route.coordinates) {
      const weatherData = await window.fetchWeather(route.coordinates.lat, route.coordinates.lng);
      const widget = document.getElementById('weather-widget-container');
      if (widget && weatherData) {
        widget.innerHTML = `
          <div style="font-size: 3rem; margin-bottom:0.5rem;">${weatherData.icon}</div>
          <div class="weather-temp">${weatherData.temp}&deg;C</div>
          <div style="font-weight: 700; color: var(--text-main); text-transform: capitalize;">${window.t(`weather.${weatherData.key}`)}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            🌪️ ${window.t('weather.wind')}: ${weatherData.wind} km/h
          </div>
        `;
      }
    }

    // Bind share buttons
    const shareLinkBtn = document.getElementById('share-link');
    if (shareLinkBtn) {
      shareLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        const originalText = shareLinkBtn.textContent;
        shareLinkBtn.textContent = "✅ Copied!";
        setTimeout(() => { shareLinkBtn.textContent = originalText; }, 2000);
      });
    }

    const shareTwitter = document.getElementById('share-twitter');
    if (shareTwitter) {
      shareTwitter.addEventListener('click', () => {
        const text = encodeURIComponent(`Check out this amazing self-drive route in Northern Cyprus: ${route.title}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank');
      });
    }

  } catch (err) {
    console.error("Error loading route details:", err);
    container.innerHTML = `
      <div class="section" style="text-align: center; padding: 6rem 2rem;">
        <h2>Error Loading Route</h2>
        <p style="color: var(--text-muted); margin-top:1rem;">Failed to fetch the route data. Please check your connection or return to home.</p>
        <a href="#home" class="btn-primary" style="margin-top:2rem;">Go to Home</a>
      </div>
    `;
  }
}

// 4. About Page
function renderAbout(container) {
  updateSEO(
    "About Driving in Cyprus",
    "Essential rules for driving in Cyprus, including road rules, car rental, and border crossings.",
    "#about"
  );

  container.innerHTML = `
    <section class="section fade-in">
      <div class="section-header">
        <h1 data-i18n="aboutPage.title">${window.t('aboutPage.title')}</h1>
      </div>
      <div class="about-grid" style="margin-bottom: 5rem;">
        <div>
          <p style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); margin-bottom: 2rem;" data-i18n="aboutPage.content">
            ${window.t('aboutPage.content')}
          </p>
        </div>
        <div>
          <img class="about-img" src="public/images/hero/about.jpg" alt="Drive Cyprus Scenic Route">
        </div>
      </div>

      <div class="glass-card" style="padding: 3rem;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;" data-i18n="aboutPage.rulesTitle">${window.t('aboutPage.rulesTitle')}</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;">
          <div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; color: var(--accent);">🇬🇧 Drive Left</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;" data-i18n="aboutPage.rule1">${window.t('aboutPage.rule1')}</p>
          </div>
          <div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; color: var(--accent);">📵 Mobile & Belt</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;" data-i18n="aboutPage.rule2">${window.t('aboutPage.rule2')}</p>
          </div>
          <div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; color: var(--accent);">🗺️ Signposts</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;" data-i18n="aboutPage.rule3">${window.t('aboutPage.rule3')}</p>
          </div>
          <div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; color: var(--accent);">🛂 Borders</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;" data-i18n="aboutPage.rule4">${window.t('aboutPage.rule4')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. Photo Gallery (Grid with Masonry feel + Lightbox)
function renderGallery(container) {
  updateSEO(
    "Photo Gallery",
    "Discover the scenic beauty of Northern Cyprus through photography.",
    "#gallery"
  );

  // Compile photos from all stops in database
  let photos = [];
  routesDatabase.forEach(route => {
    route.stops.forEach(stop => {
      photos.push({
        src: stop.image,
        alt: `${stop.name} (${route.region})`
      });
    });
  });

  // If DB hasn't loaded yet, show placeholders
  if (photos.length === 0) {
    photos = [
      { src: 'public/images/routes/st-hilarion.jpg', alt: 'St. Hilarion Castle' },
      { src: 'public/images/routes/buyuk-han.jpg', alt: 'Büyük Han' },
      { src: 'public/images/routes/salamis.jpg', alt: 'Salamis Ruins' },
      { src: 'public/images/routes/vouni.jpg', alt: 'Vouni Palace' }
    ];
  }

  let galleryItemsHTML = "";
  photos.forEach(photo => {
    galleryItemsHTML += `
      <div class="gallery-item glass-card fade-in-up">
        <img class="lightbox-trigger" src="${photo.src}" alt="${photo.alt}" title="${window.t('galleryPage.zoom')}">
      </div>
    `;
  });

  container.innerHTML = `
    <section class="section fade-in">
      <div class="section-header">
        <h1 data-i18n="galleryPage.title">${window.t('galleryPage.title')}</h1>
        <p data-i18n="galleryPage.subtitle">${window.t('galleryPage.subtitle')}</p>
      </div>

      <div class="gallery-grid">
        ${galleryItemsHTML}
      </div>
    </section>
  `;

  // Bind Lightbox triggers on gallery items
  if (window.bindGalleryTriggers) {
    window.bindGalleryTriggers('.gallery-item img');
  }
}

// 6. Contact Page
function renderContact(container) {
  updateSEO(
    "Contact Us",
    "Have questions about self-drive tours in Northern Cyprus? Get in touch with us.",
    "#contact"
  );

  container.innerHTML = `
    <section class="section fade-in" style="max-width: 600px;">
      <div class="section-header">
        <h1 data-i18n="contactPage.title">${window.t('contactPage.title')}</h1>
        <p data-i18n="contactPage.subtitle">${window.t('contactPage.subtitle')}</p>
      </div>

      <div class="glass-card" style="padding: 3rem;">
        <form class="contact-form" id="contact-us-form">
          <div class="form-group">
            <label for="c-name" data-i18n="contactPage.name">${window.t('contactPage.name')}</label>
            <input type="text" id="c-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="c-email" data-i18n="contactPage.email">${window.t('contactPage.email')}</label>
            <input type="email" id="c-email" required placeholder="john@example.com">
          </div>
          <div class="form-group">
            <label for="c-message" data-i18n="contactPage.message">${window.t('contactPage.message')}</label>
            <textarea id="c-message" rows="5" required placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="justify-content: center;" data-i18n="contactPage.submit">
            ${window.t('contactPage.submit')}
          </button>
        </form>
        <div id="contact-success-msg" style="display:none; text-align:center; padding: 2rem; color: var(--secondary); font-weight:700;">
          🎉 <span data-i18n="contactPage.success">${window.t('contactPage.success')}</span>
        </div>
      </div>
    </section>
  `;

  // Bind Form Submit
  const form = document.getElementById('contact-us-form');
  const successMsg = document.getElementById('contact-success-msg');
  if (form && successMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = "none";
      successMsg.style.display = "block";
    });
  }
}

// 7. 404 Page
function render404(container) {
  updateSEO("Page Not Found", "The requested page was not found.", "#404");

  container.innerHTML = `
    <section class="section" style="text-align: center; padding: 8rem 2rem;">
      <h1 style="font-size: 6rem; color: var(--accent);">404</h1>
      <h2 style="font-size: 2.2rem; margin-top: 1rem; color: var(--primary);">Roadblock! Page Not Found</h2>
      <p style="color: var(--text-muted); margin-top: 1.5rem; max-width: 500px; margin-left:auto; margin-right:auto;">
        It looks like you've driven off the map. Let's redirect you back to the main route.
      </p>
      <a href="#home" class="btn-primary" style="margin-top: 2.5rem;">
        Go to Home
      </a>
    </section>
  `;
}

// Bind Global Init triggers
window.addEventListener('DOMContentLoaded', () => {
  handleRouting();

  // Setup language switching DOM bindings
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const lang = e.target.getAttribute('data-lang');
      
      // Update active btn style
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      if (window.initI18n) {
        await window.initI18n(lang);
        // Force rendering of the current hash to apply language change instantly!
        handleRouting();
      }
    });
  });

  // Setup theme toggle binding
  const themeToggle = document.querySelector('.theme-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});
window.addEventListener('load', handleRouting);
