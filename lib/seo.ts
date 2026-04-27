import { siteConfig } from '@/content/site';
import { routing } from '@/i18n/routing';

export function localeAlternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
  );
}

export function canonicalAndAlternates(locale: string, path: string) {
  return {
    canonical: `${siteConfig.url}/${locale}${path}`,
    languages: localeAlternates(path),
  };
}
