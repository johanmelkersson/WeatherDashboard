import { useWeather } from './hooks/useWeather';
import { useTheme } from './hooks/useTheme';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { ForecastCard } from './components/ForecastCard/ForecastCard';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import styles from './App.module.css';

function App() {
  const { current, forecast, loading, error, search } = useWeather();
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Väderprognos</h1>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className={styles.main}>
        <SearchBar onSearch={search} loading={loading} />

        {error && <p className={styles.error}>{error}</p>}

        {current && (
          <div className={styles.results}>
            <CurrentWeather data={current} />

            {forecast.length > 0 && (
              <section className={styles.forecast}>
                <h3 className={styles.forecastTitle}>5-dagarsprognos</h3>
                <div className={styles.forecastGrid}>
                  {forecast.map((day) => (
                    <ForecastCard key={day.date} day={day} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {!current && !loading && !error && (
          <p className={styles.placeholder}>Sök på en stad för att se vädret</p>
        )}
      </main>
    </div>
  );
}

export default App;
