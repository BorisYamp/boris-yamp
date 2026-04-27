import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/content/site';
import { routing } from '@/i18n/routing';
import Hero from '@/components/sections/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import PersonSchema from '@/components/PersonSchema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const path = `/${locale}`;
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteConfig.url}/${l}`])
      ),
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDesc'),
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDesc'),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <PersonSchema locale={locale} />
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Contact />
    </>
  );
}
