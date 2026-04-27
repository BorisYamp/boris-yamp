import { getTranslations } from 'next-intl/server';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { canonicalAndAlternates } from '@/lib/seo';
import { siteConfig } from '@/content/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('panicModeTitle'),
    description: t('panicModeDesc'),
    alternates: canonicalAndAlternates(locale, '/projects/panic-mode'),
    openGraph: {
      title: t('panicModeTitle'),
      description: t('panicModeDesc'),
      url: `${siteConfig.url}/${locale}/projects/panic-mode`,
      siteName: siteConfig.name,
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('panicModeTitle'),
      description: t('panicModeDesc'),
    },
  };
}

export default function Page() {
  return <ProjectDetail slug="panic-mode" />;
}
