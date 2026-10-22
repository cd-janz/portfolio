import { For } from 'solid-js';
import styles from './code.module.css';
import { Token } from './Token';
import type { IdeFile } from '../model/types';

export function CodeView(props: { file: IdeFile }) {
  return (
    <div
      class={styles.view}
      role="tabpanel"
      id={`panel-${props.file.id}`}
      aria-labelledby={`tab-${props.file.id}`}
      tabindex="0"
    >
      <For each={props.file.lines}>
        {(line) => (
          <div class={styles.line} style={{ '--indent': line.indent }}>
            <For each={line.tokens}>{(token) => <Token token={token} />}</For>
            {line.tokens.length === 0 && '​'}
          </div>
        )}
      </For>
    </div>
  );
}
