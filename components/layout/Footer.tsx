import { useTranslations } from 'next-intl';
import { siteConfig } from '@/content/site';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>{t('rights', { year })}</p>
        <div className={styles.links}>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </footer>
  );
}
