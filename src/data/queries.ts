import { getCollection, getEntry } from 'astro:content';
import { sortNewestFirst } from '../domain/timeline';
import type { Locale } from '../i18n/locales';

/** Read-only access to localized content. Pages never touch collections directly. */
const inLocale = (locale: Locale) => (entry: { id: string }) => entry.id.startsWith(`${locale}/`);

export async function getProfile(locale: Locale) {
  const entry = await getEntry('profile', locale);
  if (!entry) throw new Error(`Missing profile content for locale "${locale}"`);
  return entry.data;
}

export async function getExperience(locale: Locale) {
  const entries = await getCollection('experience', inLocale(locale));
  return sortNewestFirst(entries.map(({ id, data }) => ({ id: id.split('/')[1], ...data })));
}

export async function getEducation(locale: Locale) {
  const entries = await getCollection('education', inLocale(locale));
  return sortNewestFirst(entries.map(({ id, data }) => ({ id: id.split('/')[1], ...data })));
}

export async function getProjects(locale: Locale) {
  const entries = await getCollection('projects', inLocale(locale));
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ id: entry.id.split('/')[1], ...entry.data, entry }));
}

export type ProjectItem = Awaited<ReturnType<typeof getProjects>>[number];
