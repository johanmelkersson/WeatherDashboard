import { useState, type FormEvent } from 'react';
import styles from './SearchBar.module.css';

interface Props {
  onSearch: (city: string) => void;
  loading: boolean;
}

export function SearchBar({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Sök stad..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        aria-label="Sök stad"
      />
      <button className={styles.button} type="submit" disabled={loading || !value.trim()}>
        {loading ? '...' : 'Sök'}
      </button>
    </form>
  );
}
