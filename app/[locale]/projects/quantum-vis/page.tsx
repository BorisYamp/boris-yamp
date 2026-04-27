import { getTranslations } from 'next-intl/server';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { canonicalAndAlternates } from '@/lib/seo';
import { siteConfig } from '@/content/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('quantumVisTitle'),
    description: t('quantumVisDesc'),
    alternates: canonicalAndAlternates(locale, '/projects/quantum-vis'),
    openGraph: {
      title: t('quantumVisTitle'),
      description: t('quantumVisDesc'),
      url: `${siteConfig.url}/${locale}/projects/quantum-vis`,
      siteName: siteConfig.name,
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('quantumVisTitle'),
      description: t('quantumVisDesc'),
    },
  };
}

export default function Page() {
  return <ProjectDetail slug="quantum-vis" />;
}
