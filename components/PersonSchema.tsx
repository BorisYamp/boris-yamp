import { siteConfig } from '@/content/site';

export default function PersonSchema({ locale }: { locale: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: 'Boris Iampolskii',
    url: siteConfig.url,
    image: `${siteConfig.url}/${locale}/opengraph-image`,
    jobTitle: 'Full-stack engineer',
    description:
      'Full-stack engineer with a quantum-computing background. Python/Django, React/TypeScript, Rust and Kotlin/Android.',
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phoneRaw,
    address: { '@type': 'PostalAddress', addressLocality: 'Holon', addressCountry: 'IL' },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.telegram],
    knowsLanguage: ['en', 'he', 'ru', 'uk'],
    knowsAbout: [
      'Full-stack development',
      'Python',
      'Django',
      'React',
      'TypeScript',
      'Rust',
      'Kotlin',
      'Android',
      'Quantum computing',
      'D-Wave',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
