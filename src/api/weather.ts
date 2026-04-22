import type { CurrentWeatherData, ForecastData } from '../types/weather';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function getApiKey(): string {
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
  if (!key) throw new Error('VITE_OPENWEATHER_API_KEY is not set');
  return key;
}

export async function fetchCurrentWeather(city: string): Promise<CurrentWeatherData> {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&lang=sv&appid=${getApiKey()}`
  );
  if (!res.ok) {
    if (res.status === 404) throw new Error('Staden hittades inte');
    throw new Error('Kunde inte hämta väderdata');
  }
  return res.json();
}

export async function fetchForecast(city: string): Promise<ForecastData> {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&lang=sv&appid=${getApiKey()}`
  );
  if (!res.ok) {
    if (res.status === 404) throw new Error('Staden hittades inte');
    throw new Error('Kunde inte hämta prognosdata');
  }
  return res.json();
}
