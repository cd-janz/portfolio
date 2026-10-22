import { For } from 'solid-js';
import { Icon } from '../../../ui/Icon';
import styles from './tabs.module.css';
import type { IdeFile } from '../model/types';

interface Props {
  files: IdeFile[];
  activeId: string | undefined;
  closeLabel: string;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

export function Tabs(props: Props) {
  return (
    <div class={styles.bar}>
      <div class={styles.tabs} role="tablist">
        <For each={props.files}>
          {(file) => (
            <div class={styles.tab} classList={{ [styles.active]: props.activeId === file.id }}>
              <button
                type="button"
                role="tab"
                id={`tab-${file.id}`}
                aria-selected={props.activeId === file.id}
                aria-controls={`panel-${file.id}`}
                class={styles.label}
                onClick={() => props.onSelect(file.id)}
              >
                <Icon name={file.icon} size="0.95em" class={styles.fileIcon} />
                {file.name}
              </button>
              <button type="button" class={styles.close} aria-label={`${props.closeLabel} ${file.name}`} onClick={() => props.onClose(file.id)}>
                <Icon name="close" size="0.95em" />
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
