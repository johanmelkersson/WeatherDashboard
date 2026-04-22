import type { CurrentWeatherData } from '../../types/weather';
import styles from './CurrentWeather.module.css';

interface Props {
  data: CurrentWeatherData;
}

export function CurrentWeather({ data }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const description = data.weather[0].description;
  const descCapitalized = description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <div className={styles.card}>
      <div className={styles.location}>
        <h2>{data.name}, {data.sys.country}</h2>
      </div>
      <div className={styles.main}>
        <img className={styles.icon} src={iconUrl} alt={description} />
        <span className={styles.temp}>{Math.round(data.main.temp)}°C</span>
      </div>
      <p className={styles.description}>{descCapitalized}</p>
      <div className={styles.details}>
        <span>Känns som {Math.round(data.main.feels_like)}°C</span>
        <span>Luftfuktighet {data.main.humidity}%</span>
        <span>Vind {Math.round(data.wind.speed)} m/s</span>
      </div>
    </div>
  );
}
