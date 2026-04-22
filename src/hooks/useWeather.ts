import { useState, useCallback } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../api/weatherApi';
import type { CurrentWeatherData, DailyForecast, ForecastItem } from '../types/weatherTypes';

interface WeatherState {
  current: CurrentWeatherData | null;
  forecast: DailyForecast[];
  loading: boolean;
  error: string | null;
}

function groupForecastByDay(items: ForecastItem[]): DailyForecast[] {
  const days = new Map<string, ForecastItem[]>();

  for (const item of items) {
    const date = item.dt_txt.split(' ')[0];
    if (!days.has(date)) days.set(date, []);
    days.get(date)!.push(item);
  }

  const today = new Date().toISOString().split('T')[0];

  return Array.from(days.entries())
    .filter(([date]) => date !== today)
    .slice(0, 5)
    .map(([date, items]) => {
      const temps = items.map((i) => i.main.temp);
      const noon = items.find((i) => i.dt_txt.includes('12:00')) ?? items[Math.floor(items.length / 2)];
      const d = new Date(date + 'T12:00:00');
      const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });

      return {
        date,
        dayLabel: dayLabel.charAt(0).toUpperCase() + dayLabel.slice(1),
        tempMin: Math.round(Math.min(...temps)),
        tempMax: Math.round(Math.max(...temps)),
        icon: noon.weather[0].icon,
        description: noon.weather[0].description,
      };
    });
}

export function useWeather() {
  const [state, setState] = useState<WeatherState>({
    current: null,
    forecast: [],
    loading: false,
    error: null,
  });

  const search = useCallback(async (city: string) => {
    if (!city.trim()) return;

    setState((s) => ({ ...s, loading: true, error: null }));

    try {
      const [current, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city),
      ]);
      setState({
        current,
        forecast: groupForecastByDay(forecastData.list),
        loading: false,
        error: null,
      });
    } catch (err) {
      setState((s) => ({
        ...s,
        loading: false,
        error: err instanceof Error ? err.message : 'Something went wrong',
      }));
    }
  }, []);

  return { ...state, search };
}
