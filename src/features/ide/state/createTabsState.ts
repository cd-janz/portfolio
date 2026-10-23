import { createMemo, createSignal } from 'solid-js';
import type { IdeFile } from '../model/types';

/** Max simultaneously open tabs; opening one more evicts the oldest (FIFO). */
export const MAX_TABS = 3;

/** Open tabs + active tab. UI-agnostic, reusable and testable on its own. */
export function createTabsState(files: IdeFile[], initialId?: string) {
  const [openIds, setOpenIds] = createSignal<string[]>(initialId ? [initialId] : []);
  const [activeId, setActiveId] = createSignal<string | undefined>(initialId);
  const byId = new Map(files.map((f) => [f.id, f]));

  const active = createMemo(() => (activeId() ? byId.get(activeId()!) : undefined));
  const openFiles = createMemo(() => openIds().flatMap((id) => byId.get(id) ?? []));

  const open = (id: string) => {
    if (!byId.has(id)) return;
    setOpenIds((ids) => (ids.includes(id) ? ids : [...ids, id].slice(-MAX_TABS)));
    setActiveId(id);
  };

  const close = (id: string) => {
    const ids = openIds();
    const next = ids.filter((x) => x !== id);
    setOpenIds(next);
    if (activeId() === id) setActiveId(next[Math.max(0, ids.indexOf(id) - 1)]);
  };

  return { openFiles, active, activeId, open, close };
}
