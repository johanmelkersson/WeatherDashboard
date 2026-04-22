import type { Theme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

interface Props {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      className={styles.button}
      onClick={onToggle}
      aria-label={`Byt till ${theme === 'light' ? 'mörkt' : 'ljust'} läge`}
      title={`Byt till ${theme === 'light' ? 'mörkt' : 'ljust'} läge`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
