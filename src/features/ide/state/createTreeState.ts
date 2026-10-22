import { createSignal } from 'solid-js';
import type { IdeFolder, IdeNode } from '../model/types';

const defaultOpenFolders = (nodes: IdeNode[]): string[] =>
  nodes.flatMap((n) => (n.kind === 'folder' && n.defaultOpen ? [n.id] : []));

/** Which folders of the explorer tree are expanded. */
export function createTreeState(root: IdeNode[]) {
  const [expanded, setExpanded] = createSignal<ReadonlySet<string>>(new Set(defaultOpenFolders(root)));

  const isOpen = (folder: IdeFolder) => expanded().has(folder.id);
  const toggle = (folder: IdeFolder) =>
    setExpanded((current) => {
      const next = new Set(current);
      next.has(folder.id) ? next.delete(folder.id) : next.add(folder.id);
      return next;
    });
  /** Make sure the folder holding a file is visible when it gets opened elsewhere. */
  const reveal = (fileId: string) => {
    const [folderId] = fileId.split('/');
    if (fileId.includes('/')) setExpanded((current) => new Set(current).add(folderId));
  };

  return { isOpen, toggle, reveal };
}
