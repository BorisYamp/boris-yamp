import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { projects } from '@/content/projects';
import styles from './ProjectsGrid.module.css';

const slugToKey = {
  'hush': 'hush',
  'quantum-vis': 'quantumVis',
  'panic-mode': 'panicMode',
  'freelance': 'freelance',
} as const;

export default function ProjectsGrid() {
  const t = useTranslations('projects');

  return (
    <section className={`section ${styles.section}`} id="projects">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        <ul className={styles.grid}>
          {projects.map((p) => {
            const key = slugToKey[p.slug];
            const statusLabel = p.status === 'coming-soon' ? t('comingSoon') : t('live');
            return (
              <li key={p.slug} className={styles.card}>
                <Link href={`/projects/${p.slug}`} className={styles.cardLink}>
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{t(`${key}.name`)}</h3>
                    <span
                      className={`${styles.status} ${
                        p.status === 'coming-soon' ? styles.statusSoon : styles.statusLive
                      }`}
                    >
                      {statusLabel}
                    </span>
                  </div>
                  <p className={styles.tagline}>{t(`${key}.tagline`)}</p>
                  <p className={styles.summary}>{t(`${key}.summary`)}</p>
                  <ul className={styles.tech}>
                    {p.tech.slice(0, 5).map((tech) => (
                      <li key={tech} className={styles.techChip}>{tech}</li>
                    ))}
                    {p.tech.length > 5 && (
                      <li className={styles.techChip}>+{p.tech.length - 5}</li>
                    )}
                  </ul>
                  <span className={styles.viewLink}>{t('viewProject')} →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
