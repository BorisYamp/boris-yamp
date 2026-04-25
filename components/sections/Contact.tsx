'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/content/site';
import styles from './Contact.module.css';

type Item = {
  key: 'email' | 'phone' | 'whatsapp' | 'linkedin' | 'github' | 'telegram';
  value: string;
  href: string;
  copyValue?: string;
};

export default function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState<string | null>(null);

  const items: Item[] = [
    {
      key: 'email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      copyValue: siteConfig.email,
    },
    {
      key: 'phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phoneRaw}`,
      copyValue: siteConfig.phoneRaw,
    },
    { key: 'whatsapp', value: siteConfig.phone, href: siteConfig.whatsapp },
    { key: 'linkedin', value: 'in/boris-yampolsky', href: siteConfig.linkedin },
    { key: 'github', value: 'github.com/BorisYamp', href: siteConfig.github },
    { key: 'telegram', value: '@agasfer', href: siteConfig.telegram },
  ];

  const handleCopy = async (e: React.MouseEvent, item: Item) => {
    if (!item.copyValue) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(item.copyValue);
      setCopied(item.key);
      setTimeout(() => setCopied((k) => (k === item.key ? null : k)), 1500);
    } catch {
      // Clipboard blocked — fall through to default link behavior
    }
    // Try to open the protocol handler too (mailto / tel). Silently no-ops if unset.
    window.location.href = item.href;
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <ul className={styles.list}>
          {items.map((item) => {
            const isCopyable = !!item.copyValue;
            const isExternal = item.href.startsWith('http');
            return (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={styles.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={isCopyable ? (e) => handleCopy(e, item) : undefined}
                >
                  <span className={styles.label}>{t(`labels.${item.key}`)}</span>
                  <span className={styles.value}>{item.value}</span>
                  <span className={styles.arrow}>
                    {copied === item.key ? t('copied') : isCopyable ? '⧉' : '↗'}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
