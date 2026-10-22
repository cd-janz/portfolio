import { SITE } from '../../config/site';

export const personJsonLd = (jobTitle: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle,
  description,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.social.github, SITE.social.linkedin],
});
