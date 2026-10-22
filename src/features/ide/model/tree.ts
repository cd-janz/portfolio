import type { IdeFile, IdeFolder, IdeNode } from './types';

export const flattenFiles = (nodes: readonly IdeNode[]): IdeFile[] =>
  nodes.flatMap((n) => (n.kind === 'file' ? [n] : flattenFiles(n.children)));

export const findFolder = (nodes: readonly IdeNode[], id: string): IdeFolder | undefined =>
  nodes.find((n): n is IdeFolder => n.kind === 'folder' && n.id === id);
