import { For } from 'solid-js';
import { Icon } from '../../../ui/Icon';
import styles from './titlebar.module.css';

interface Props { menu: string[]; title: string; }

/** Windows/VS Code-style title bar: logo + menu on the left, window controls on the right. */
export function TitleBar(props: Props) {
  return (
    <div class={styles.bar}>
      <div class={styles.left}>
        <Icon name="logo" size="18px" class={styles.logo} />
        <ul class={styles.menu} aria-hidden="true">
          <For each={props.menu}>{(item) => <li>{item}</li>}</For>
        </ul>
      </div>
      <p class={styles.title}>{props.title}</p>
      <div class={styles.controls} aria-hidden="true">
        <span><Icon name="minus" size="16px" /></span>
        <span><Icon name="square" size="14px" /></span>
        <span class={styles.exit}><Icon name="close" size="16px" /></span>
      </div>
    </div>
  );
}
