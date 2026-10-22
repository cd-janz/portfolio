import { durationBetween, formatDuration, formatMonthYear, parseDate } from '../../../domain/dates';
import type { Experience } from '../../../schemas/experience';
import type { Locale } from '../../../i18n/locales';
import type { TerminalLine } from './types';

/** Deterministic 7-char pseudo hash so the "log" looks real and is stable between builds. */
export function shortHash(seed: string): string {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}

/** Experience -> `git log --oneline`-style terminal output, newest first. */
export function gitLog(
  items: readonly (Experience & { id: string })[],
  locale: Locale,
  presentLabel: string,
  user: string,
): TerminalLine[] {
  const rows = items.map((e, i): TerminalLine => {
    const end = e.end ? parseDate(e.end) : new Date();
    const span = `${formatMonthYear(e.start, locale)} → ${e.end ? formatMonthYear(e.end, locale) : presentLabel}`;
    return {
      hash: shortHash(e.id + e.start),
      ref: i === 0 ? 'HEAD -> main' : undefined,
      text: `${e.company}: ${e.role} (${span}, ${formatDuration(durationBetween(parseDate(e.start), end), locale)})`,
    };
  });
  return [{ prompt: `${user}@portfolio:~$`, text: 'git log --oneline' }, ...rows];
}
