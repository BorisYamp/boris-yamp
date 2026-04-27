import { getTranslations } from 'next-intl/server';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { canonicalAndAlternates } from '@/lib/seo';
import { siteConfig } from '@/content/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('hushTitle'),
    description: t('hushDesc'),
    alternates: canonicalAndAlternates(locale, '/projects/hush'),
    openGraph: {
      title: t('hushTitle'),
      description: t('hushDesc'),
      url: `${siteConfig.url}/${locale}/projects/hush`,
      siteName: siteConfig.name,
      locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('hushTitle'),
      description: t('hushDesc'),
    },
  };
}

export default function Page() {
  return <ProjectDetail slug="hush" />;
}
