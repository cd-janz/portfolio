import type { Line, Token, TokenKind } from './types';

const tok = (kind: TokenKind, text: string): Token => ({ kind, text });

function scalar(value: unknown): Token {
  if (typeof value === 'string') return tok('string', JSON.stringify(value));
  if (typeof value === 'number') return tok('number', String(value));
  return tok('literal', String(value));
}

function walk(value: unknown, indent: number, prefix: Token[], trailingComma: boolean, out: Line[]): void {
  const comma = trailingComma ? [tok('punct', ',')] : [];
  const isArray = Array.isArray(value);
  const isObject = value !== null && typeof value === 'object' && !isArray;

  if (!isArray && !isObject) {
    out.push({ indent, tokens: [...prefix, scalar(value), ...comma] });
    return;
  }

  const entries: [string | null, unknown][] = isArray
    ? (value as unknown[]).map((v) => [null, v])
    : Object.entries(value as Record<string, unknown>);
  const [open, close] = isArray ? ['[', ']'] : ['{', '}'];

  if (entries.length === 0) {
    out.push({ indent, tokens: [...prefix, tok('punct', open + close), ...comma] });
    return;
  }

  out.push({ indent, tokens: [...prefix, tok('punct', open)] });
  entries.forEach(([key, child], i) => {
    const keyTokens = key === null ? [] : [tok('key', JSON.stringify(key)), tok('punct', ': ')];
    walk(child, indent + 1, keyTokens, i < entries.length - 1, out);
  });
  out.push({ indent, tokens: [tok('punct', close), ...comma] });
}

/** JSON-compatible value -> highlightable lines. Pure. */
export function jsonDocument(value: unknown): Line[] {
  const lines: Line[] = [];
  walk(value, 0, [], false, lines);
  return lines;
}
