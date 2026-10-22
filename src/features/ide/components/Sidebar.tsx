import { For, Show } from 'solid-js';
import { Icon } from '../../../ui/Icon';
import { FileTree } from './FileTree';
import styles from './sidebar.module.css';
import type { Activity } from './ActivityBar';
import type { IdeFile, IdeFolder, IdeNode } from '../model/types';

interface Props {
  activity: Activity;
  root: IdeNode[];
  projects: IdeFile[];
  activeId: string | undefined;
  workspaceName: string;
  labels: { explorer: string; projects: string };
  isOpen: (folder: IdeFolder) => boolean;
  onToggleFolder: (folder: IdeFolder) => void;
  onOpenFile: (id: string) => void;
}

/** Explorer or Projects panel. */
export function Sidebar(props: Props) {
  const heading = () => (props.activity === 'explorer' ? props.labels.explorer : props.labels.projects);

  return (
    <aside id="ide-sidebar" class={styles.sidebar} aria-label={heading()}>
      <p class={styles.heading}>{heading()}</p>
      <Show when={props.activity === 'explorer'} fallback={
        <ul class={styles.projects}>
          <For each={props.projects}>
            {(file) => (
              <li>
                <button type="button" classList={{ [styles.active]: props.activeId === file.id }} onClick={() => props.onOpenFile(file.id)}>
                  <Icon name={file.icon} size="1em" /> {file.name}
                </button>
              </li>
            )}
          </For>
        </ul>
      }>
        <p class={styles.root}>{props.workspaceName}</p>
        <FileTree nodes={props.root} activeId={props.activeId} isOpen={props.isOpen} onToggle={props.onToggleFolder} onOpenFile={props.onOpenFile} />
      </Show>
    </aside>
  );
}
