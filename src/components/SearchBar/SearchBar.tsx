import { useState } from 'react';
import styles from './SearchBar.module.css';

interface Props {
  onSearch: (city: string) => void;
  loading: boolean;
}

export function SearchBar({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onSearch(value); }}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        aria-label="Search city"
      />
      <button className={styles.button} type="submit" disabled={loading || !value.trim()}>
        {loading ? '...' : 'Search'}
      </button>
    </form>
  );
}
