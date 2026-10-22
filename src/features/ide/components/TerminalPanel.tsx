import { For, Show } from 'solid-js';
import styles from './terminal.module.css';
import type { TerminalLine } from '../model/types';

interface Props { lines: TerminalLine[]; user: string; labels: { terminal: string; output: string }; }

/** Static terminal output (a `git log` of the career). Hidden on small screens. */
export function TerminalPanel(props: Props) {
  return (
    <section class={styles.panel} aria-label={props.labels.terminal}>
      <div class={styles.tabs}>
        <span class={styles.current}>{props.labels.terminal}</span>
        <span>{props.labels.output}</span>
      </div>
      <div class={styles.body}>
        <For each={props.lines}>
          {(line) => (
            <p class={styles.line}>
              <Show when={line.prompt}><span class={styles.prompt}>{line.prompt}</span> </Show>
              <Show when={line.hash}><span class={styles.hash}>{line.hash}</span> </Show>
              <Show when={line.ref}><span class={styles.ref}>({line.ref})</span> </Show>
              {line.text}
            </p>
          )}
        </For>
        <p class={styles.line}><span class={styles.prompt}>{props.user}@portfolio:~$</span> <span class={styles.cursor} /></p>
      </div>
    </section>
  );
}
