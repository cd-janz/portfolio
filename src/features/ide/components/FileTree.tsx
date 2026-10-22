import { For, Show } from 'solid-js';
import { Icon } from '../../../ui/Icon';
import styles from './tree.module.css';
import type { IdeFolder, IdeNode } from '../model/types';

interface Props {
  nodes: IdeNode[];
  depth?: number;
  activeId: string | undefined;
  isOpen: (folder: IdeFolder) => boolean;
  onToggle: (folder: IdeFolder) => void;
  onOpenFile: (id: string) => void;
}

/** Recursive explorer tree. Renders folders as disclosure buttons and files as buttons. */
export function FileTree(props: Props) {
  const depth = () => props.depth ?? 0;

  return (
    <ul class={styles.list} role={depth() === 0 ? 'tree' : 'group'}>
      <For each={props.nodes}>
        {(node) =>
          node.kind === 'folder' ? (
            <li role="treeitem" aria-expanded={props.isOpen(node)}>
              <button type="button" class={styles.row} style={{ '--depth': depth() }} onClick={() => props.onToggle(node)}>
                <Icon name={props.isOpen(node) ? 'down-arrow' : 'right-arrow'} size="1em" class={styles.chevron} />
                <Icon name="folder" size="1em" class={styles.folder} />
                {node.name}
              </button>
              <Show when={props.isOpen(node)}>
                <FileTree {...props} nodes={node.children} depth={depth() + 1} />
              </Show>
            </li>
          ) : (
            <li role="treeitem">
              <button
                type="button"
                class={styles.row}
                classList={{ [styles.active]: props.activeId === node.id }}
                style={{ '--depth': depth() }}
                aria-current={props.activeId === node.id ? 'true' : undefined}
                onClick={() => props.onOpenFile(node.id)}
              >
                <span class={styles.spacer} />
                <Icon name={node.icon} size="1em" class={styles.file} />
                {node.name}
              </button>
            </li>
          )
        }
      </For>
    </ul>
  );
}
