import { For } from 'solid-js';
import { Icon } from '../../../ui/Icon';
import styles from './activity.module.css';

export type Activity = 'explorer' | 'projects';

interface Props {
  active: Activity;
  items: { id: Activity; icon: string; label: string }[];
  onSelect: (id: Activity) => void;
}

export function ActivityBar(props: Props) {
  return (
    <nav class={styles.bar} aria-label="Activity">
      <For each={props.items}>
        {(item) => (
          <button
            type="button"
            class={styles.item}
            classList={{ [styles.active]: props.active === item.id }}
            aria-label={item.label}
            title={item.label}
            aria-pressed={props.active === item.id}
            onClick={() => props.onSelect(item.id)}
          >
            <Icon name={item.icon} size="1.35em" />
          </button>
        )}
      </For>
    </nav>
  );
}
