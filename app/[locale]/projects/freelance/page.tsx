import { getTranslations } from 'next-intl/server';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { canonicalAndAlternates } from '@/lib/seo';
import { siteConfig } from '@/content/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('freelanceTitle'),
    description: t('freelanceDesc'),
    alternates: canonicalAndAlternates(locale, '/projects/freelance'),
    openGraph: {
      title: t('freelanceTitle'),
      description: t('freelanceDesc'),
      url: `${siteConfig.url}/${locale}/projects/freelance`,
      siteName: siteConfig.name,
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('freelanceTitle'),
      description: t('freelanceDesc'),
    },
  };
}

export default function Page() {
  return <ProjectDetail slug="freelance" />;
}
