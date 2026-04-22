import type { DailyForecast } from '../../types/weather';
import styles from './ForecastCard.module.css';

interface Props {
  day: DailyForecast;
}

export function ForecastCard({ day }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;

  return (
    <div className={styles.card}>
      <span className={styles.day}>{day.dayLabel}</span>
      <img className={styles.icon} src={iconUrl} alt={day.description} />
      <div className={styles.temps}>
        <span className={styles.max}>{day.tempMax}°</span>
        <span className={styles.min}>{day.tempMin}°</span>
      </div>
    </div>
  );
}
