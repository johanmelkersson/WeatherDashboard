export interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface CurrentWeatherData {
  name: string;
  sys: { country: string };
  main: WeatherMain;
  weather: WeatherDescription[];
  wind: Wind;
  dt: number;
}

export interface ForecastItem {
  dt: number;
  main: WeatherMain;
  weather: WeatherDescription[];
  wind: Wind;
  dt_txt: string;
}

export interface ForecastData {
  list: ForecastItem[];
  city: { name: string; country: string };
}

export interface DailyForecast {
  date: string;
  dayLabel: string;
  tempMin: number;
  tempMax: number;
  icon: string;
  description: string;
}
