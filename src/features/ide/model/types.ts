export type TokenKind = 'key' | 'string' | 'number' | 'literal' | 'punct' | 'heading' | 'bold' | 'code' | 'text' | 'muted';
export interface Token { kind: TokenKind; text: string; }
export interface Line { indent: number; tokens: Token[]; }

export type Language = 'json' | 'markdown';

export interface IdeFile {
  kind: 'file';
  /** Unique path, e.g. `experience/igd.json`. */
  id: string;
  name: string;
  language: Language;
  /** Icon name from the svg registry. */
  icon: string;
  lines: Line[];
}

export interface IdeFolder {
  kind: 'folder';
  id: string;
  name: string;
  children: IdeNode[];
  defaultOpen: boolean;
}

export type IdeNode = IdeFile | IdeFolder;

export interface TerminalLine { prompt?: string; hash?: string; ref?: string; text: string; }

export interface Workspace {
  name: string;
  root: IdeNode[];
  initialFileId: string;
  terminal: TerminalLine[];
}
