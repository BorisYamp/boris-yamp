import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { routing } from '@/i18n/routing';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url;

  const homeUrls = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: locale === routing.defaultLocale ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${base}/${l}`])
      ),
    },
  }));

  const projectUrls = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: `${base}/${locale}/projects/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${base}/${l}/projects/${p.slug}`])
        ),
      },
    }))
  );

  return [...homeUrls, ...projectUrls];
}
