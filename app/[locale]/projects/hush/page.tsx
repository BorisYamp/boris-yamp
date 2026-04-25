import { getTranslations } from 'next-intl/server';
import ProjectDetail from '@/components/sections/ProjectDetail';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('hushTitle'), description: t('hushDesc') };
}

export default function Page() {
  return <ProjectDetail slug="hush" />;
}
