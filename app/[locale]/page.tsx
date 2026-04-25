import { getTranslations } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDesc'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDesc'),
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Contact />
    </>
  );
}
