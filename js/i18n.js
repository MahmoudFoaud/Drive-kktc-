// Drive KKTC — Translation Engine (i18n)

const AVAILABLE_LANGUAGES = ['en', 'tr', 'ru', 'ar'];
let currentLang = localStorage.getItem('drive_kktc_lang') || 'en';
if (!AVAILABLE_LANGUAGES.includes(currentLang)) currentLang = 'en';

let translations = {
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
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "rights": "All rights reserved."
    }
  }
};

// Load translation JSON file
async function loadTranslations(lang) {
  try {
    const response = await fetch(`./locales/${lang}.json`);
    if (!response.ok) throw new Error(`Could not load translations for ${lang}`);
    translations[lang] = await response.json();
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
    el.textContent = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
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
