import { Icon } from '../../../ui/Icon';
import styles from './status.module.css';

interface Props { branch: string; availability: string; language: string; locale: string; }

export function StatusBar(props: Props) {
  return (
    <footer class={styles.bar}>
      <p class={styles.group}>
        <span class={styles.item}><Icon name="branch" size="1em" />{props.branch}</span>
        <span class={styles.item}><i class={styles.dot} />{props.availability}</span>
      </p>
      <p class={styles.group}>
        <span class={styles.item}>{props.language}</span>
        <span class={`${styles.item} ${styles.optional}`}>UTF-8</span>
        <span class={`${styles.item} ${styles.optional}`}>{props.locale.toUpperCase()}</span>
      </p>
    </footer>
  );
}
