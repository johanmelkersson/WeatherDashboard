# Weather Dashboard

A weather dashboard built with React and TypeScript that displays current weather conditions and a 5-day forecast for any city in the world.

**Live demo:** https://johanmelkersson.github.io/WeatherDashboard/

## Features

- Search for any city
- Current weather — temperature, feels like, humidity, wind speed
- 5-day forecast with min/max temperatures
- Dark / light mode toggle (persists across sessions)
- Weather icons from OpenWeatherMap

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules
- OpenWeatherMap API

## Project Structure

```
src/
├── types/weatherTypes.ts        # TypeScript interfaces mirroring the API response
├── api/weatherApi.ts            # Fetch functions for current weather and forecast
├── hooks/
│   ├── useWeather.ts            # Data fetching, state management, forecast grouping
│   └── useTheme.ts              # Dark/light mode toggle with localStorage persistence
└── components/
    ├── SearchBar/               # Controlled input form
    ├── CurrentWeather/          # Current conditions card
    ├── ForecastCard/            # Single day forecast card
    └── ThemeToggle/             # Theme switch button
```

## Getting Started

1. Get a free API key at [openweathermap.org](https://openweathermap.org/api)
2. Create a `.env.local` file in the project root:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
3. Install dependencies and start the dev server:
   ```
   npm install
   npm run dev
   ```

## Deployment

This project is deployed to GitHub Pages using the `gh-pages` package.

```
npm run deploy
```
