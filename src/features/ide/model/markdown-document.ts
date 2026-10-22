import type { Line, Token } from './types';

/** Splits inline `**bold**` and `code` spans. */
function inline(text: string): Token[] {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((part): Token => {
      if (part.startsWith('**')) return { kind: 'bold', text: part.slice(2, -2) };
      if (part.startsWith('`')) return { kind: 'code', text: part };
      return { kind: 'text', text: part };
    });
}

/** Markdown source -> lines (headings, quotes, bullets, inline emphasis). Pure. */
export function markdownDocument(source: string): Line[] {
  return source.split('\n').map((raw): Line => {
    const heading = raw.match(/^(#{1,6})\s+(.*)$/);
    if (heading) return { indent: 0, tokens: [{ kind: 'punct', text: `${heading[1]} ` }, { kind: 'heading', text: heading[2] }] };
    const quote = raw.match(/^>\s?(.*)$/);
    if (quote) return { indent: 0, tokens: [{ kind: 'punct', text: '> ' }, { kind: 'muted', text: quote[1] }] };
    const bullet = raw.match(/^[-*]\s+(.*)$/);
    if (bullet) return { indent: 0, tokens: [{ kind: 'punct', text: '- ' }, ...inline(bullet[1])] };
    return { indent: 0, tokens: inline(raw) };
  });
}
