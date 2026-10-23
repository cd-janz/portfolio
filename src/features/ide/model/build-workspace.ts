import { SITE } from '../../../config/site';
import { durationBetween, formatDuration, formatMonthYear, parseDate } from '../../../domain/dates';
import type { ProjectItem } from '../../../data/queries';
import type { Locale } from '../../../i18n/locales';
import type { UiStrings } from '../../../i18n/ui';
import type { Education } from '../../../schemas/education';
import type { Experience } from '../../../schemas/experience';
import type { SkillGroup } from '../../../domain/skills';
import type { Profile } from '../../../schemas/profile';
import { gitLog } from './git-log';
import { jsonDocument } from './json-document';
import { markdownDocument } from './markdown-document';
import type { IdeFile, IdeFolder, Workspace } from './types';

export interface WorkspaceInput {
  locale: Locale;
  t: UiStrings;
  profile: Profile;
  experience: (Experience & { id: string })[];
  education: (Education & { id: string })[];
  projects: ProjectItem[];
  groups: SkillGroup[];
}

const jsonFile = (folder: string, id: string, content: Record<string, unknown>): IdeFile => ({
  kind: 'file',
  id: `${folder}/${id}.json`,
  name: `${id}.json`,
  language: 'json',
  icon: 'braces',
  lines: jsonDocument(content),
});

const markdownFile = (id: string, name: string, source: string): IdeFile => ({
  kind: 'file',
  id,
  name,
  language: 'markdown',
  icon: 'markdown',
  lines: markdownDocument(source),
});

const folder = (name: string, children: IdeFile[], defaultOpen = false): IdeFolder => ({
  kind: 'folder',
  id: name,
  name,
  children,
  defaultOpen,
});

/** Turns portfolio content into a virtual repository. Pure: same input, same output. */
export function buildWorkspace({ locale, t, profile, experience, education, projects, groups }: WorkspaceInput): Workspace {
  const experienceFiles = experience.map((e) => {
    const end = e.end ? parseDate(e.end) : new Date();
    return jsonFile('experience', e.id, {
      company: e.company,
      role: e.role,
      period: `${formatMonthYear(e.start, locale)} – ${e.end ? formatMonthYear(e.end, locale) : t.experience.present}`,
      duration: formatDuration(durationBetween(parseDate(e.start), end), locale),
      location: `${e.location} (${e.mode})`,
      summary: e.summary,
      impact: e.achievements,
      stack: e.stack,
    });
  });

  const educationFiles = education.map((e) =>
    jsonFile('education', e.id, {
      institution: e.institution,
      program: e.program,
      since: formatMonthYear(e.start, locale),
      status: e.status,
      location: e.location,
      summary: e.summary,
    }),
  );

  const projectFiles = projects.map((p) =>
    markdownFile(
      `projects/${p.id}.md`,
      `${p.id}.md`,
      [
        `# ${p.name}`,
        `> ${[p.year, p.type, p.role].filter(Boolean).join(' · ')}${p.placeholder ? ` — ${t.ide.sampleNote}` : ''}`,
        '',
        p.summary,
        '',
        '## Stack',
        p.skills.map((s) => `\`${s}\``).join(' '),
        '',
        ...(p.entry.body ?? '').split('\n'),
        ...(p.repo ? ['', `- ${p.repo}`] : []),
        ...(p.live ? [`- ${p.live}`] : []),
      ].join('\n'),
    ),
  );

  const readme = markdownFile(
    'README.md',
    'README.md',
    [
      `# ${profile.firstName} ${profile.lastName}`,
      `> ${profile.role} · ${profile.location}`,
      '',
      profile.tagline,
      '',
      `## ${profile.aboutTitle}`,
      ...profile.about.flatMap((p) => [p, '']),
      '## Stack',
      ...groups.filter((g) => g.tier !== 'also').map((g) => `- **${g.title}**: ${g.items.map((i) => i.name).join(', ')}`),
      '',
      '## Contact',
      `- ${SITE.email}`,
      `- ${SITE.social.linkedin}`,
      `- ${SITE.social.github}`,
    ].join('\n'),
  );

  const root = [
    folder('experience', experienceFiles, true),
    folder('education', educationFiles),
    folder('projects', projectFiles),
    readme,
  ];

  return {
    name: SITE.handle,
    root,
    initialFileId: readme.id,
    terminal: gitLog(experience, locale, t.experience.present, 'janz'),
  };
}
