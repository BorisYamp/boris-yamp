import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/content/site';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          {t('available')}
        </span>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <div className={styles.actions}>
          <a
            href={siteConfig.cvFile}
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            {t('downloadCv')}
          </a>
          <Link href="#projects" className={styles.btnGhost}>
            {t('viewProjects')}
          </Link>
        </div>
      </div>
    </section>
  );
}
