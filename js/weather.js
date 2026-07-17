// Drive KKTC — Weather Service (Open-Meteo Integration with Caching)

const WEATHER_CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

// Map weather codes to simple strings and translation keys
function mapWeatherCode(code) {
  // WMO Weather interpretation codes (https://open-meteo.com/en/docs)
  if (code === 0) return { key: 'sunny', icon: '☀️' };
  if (code >= 1 && code <= 3) return { key: 'cloudy', icon: '⛅' };
  if (code >= 45 && code <= 48) return { key: 'cloudy', icon: '🌫️' };
  if (code >= 51 && code <= 67) return { key: 'rainy', icon: '🌧️' };
  if (code >= 71 && code <= 77) return { key: 'rainy', icon: '🌨️' };
  if (code >= 80 && code <= 82) return { key: 'rainy', icon: '🌦️' };
  if (code >= 95 && code <= 99) return { key: 'rainy', icon: '⛈️' };
  return { key: 'sunny', icon: '☀️' };
}

async function fetchWeather(lat, lng) {
  const cacheKey = `weather_${lat.toFixed(2)}_${lng.toFixed(2)}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < WEATHER_CACHE_TTL) {
        return data;
      }
    } catch (e) {
      console.warn("Invalid weather cache", e);
    }
  }

  // Fetch new data
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather request failed");
    
    const resData = await response.json();
    const weather = resData.current_weather;
    
    const mapped = {
      temp: Math.round(weather.temperature),
      wind: weather.windspeed,
      code: weather.weathercode,
      ...mapWeatherCode(weather.weathercode)
    };

    // Cache the result
    localStorage.setItem(cacheKey, JSON.stringify({
      data: mapped,
      timestamp: Date.now()
    }));

    return mapped;
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}

window.fetchWeather = fetchWeather;
