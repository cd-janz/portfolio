import { Show, createSignal } from 'solid-js';
import { ActivityBar, type Activity } from './components/ActivityBar';
import { CodeView } from './components/CodeView';
import { Sidebar } from './components/Sidebar';
import { StatusBar } from './components/StatusBar';
import { Tabs } from './components/Tabs';
import { TerminalPanel } from './components/TerminalPanel';
import { TitleBar } from './components/TitleBar';
import { findFolder, flattenFiles } from './model/tree';
import type { Workspace } from './model/types';
import { createTabsState } from './state/createTabsState';
import { createTreeState } from './state/createTreeState';
import styles from './window.module.css';
import type { UiStrings } from '../../i18n/ui';

interface Props { workspace: Workspace; labels: UiStrings['ide']; locale: string; user: string; }

const LANGUAGE_LABEL = { json: 'JSON', markdown: 'Markdown' } as const;

/** Composition root of the IDE widget: wires state to presentational components. */
export default function IdeWindow(props: Props) {
  const { root, initialFileId, terminal, name } = props.workspace;
  const tabs = createTabsState(flattenFiles(root), initialFileId);
  const tree = createTreeState(root);
  const projects = flattenFiles(findFolder(root, 'projects')?.children ?? []);

  const [activity, setActivity] = createSignal<Activity>('explorer');

  const openFile = (id: string) => {
    tabs.open(id);
    tree.reveal(id);
  };

  return (
    <div class={styles.window}>
      <TitleBar menu={props.labels.menu} title={`${name} — ${tabs.active()?.name ?? ''}`} />
      <div class={styles.body}>
        <ActivityBar
          active={activity()}
          onSelect={setActivity}
          items={[
            { id: 'explorer', icon: 'file', label: props.labels.explorer },
            { id: 'projects', icon: 'grid', label: props.labels.projects },
          ]}
        />
        <Sidebar
          activity={activity()}
          root={root}
          projects={projects}
          activeId={tabs.activeId()}
          workspaceName={name}
          labels={props.labels}
          isOpen={tree.isOpen}
          onToggleFolder={tree.toggle}
          onOpenFile={openFile}
        />
        <div class={styles.main}>
          <Tabs
            files={tabs.openFiles()}
            activeId={tabs.activeId()}
            closeLabel={props.labels.closeFile}
            onSelect={tabs.open}
            onClose={tabs.close}
          />
          <Show when={tabs.active()} fallback={<p class={styles.empty}>{props.labels.emptyEditor}</p>} keyed>
            {(file) => <CodeView file={file} />}
          </Show>
          <TerminalPanel lines={terminal} user={props.user} labels={props.labels} />
        </div>
      </div>
      <StatusBar
        branch="main"
        availability={props.labels.openToWork}
        language={tabs.active() ? LANGUAGE_LABEL[tabs.active()!.language] : ''}
        locale={props.locale}
      />
    </div>
  );
}
