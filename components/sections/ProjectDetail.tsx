import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { projects, type Project } from '@/content/projects';
import styles from './ProjectDetail.module.css';

const slugToKey = {
  'hush': 'hush',
  'quantum-vis': 'quantumVis',
  'panic-mode': 'panicMode',
  'freelance': 'freelance',
} as const;

export default function ProjectDetail({ slug }: { slug: Project['slug'] }) {
  const t = useTranslations('projects');
  const tProj = useTranslations('project');
  const project = projects.find((p) => p.slug === slug)!;
  const key = slugToKey[slug];
  const paragraphs = (t.raw(`${key}.long`) as string[]) || [];
  const isComingSoon = project.status === 'coming-soon';

  return (
    <article className={styles.article}>
      <div className={`container ${styles.container}`}>
        <Link href="/#projects" className={styles.back}>
          {tProj('back')}
        </Link>

        <header className={styles.header}>
          <span
            className={`${styles.status} ${
              isComingSoon ? styles.statusSoon : styles.statusLive
            }`}
          >
            {isComingSoon ? t('comingSoon') : t('live')}
          </span>
          <h1 className={styles.title}>{t(`${key}.name`)}</h1>
          <p className={styles.tagline}>{t(`${key}.tagline`)}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.prose}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {slug === 'freelance' && (
              <ul className={styles.itemsList}>
                <li>
                  <a href="https://sofiadent.vercel.app/" target="_blank" rel="noopener noreferrer">
                    {t('freelance.items.sofiadent')} ↗
                  </a>
                </li>
                <li>
                  <a href="https://aibahub.com/he" target="_blank" rel="noopener noreferrer">
                    {t('freelance.items.aibahub')} ↗
                  </a>
                </li>
              </ul>
            )}

            {isComingSoon && (
              <p className={styles.note}>{t(`${key}.comingSoonNote`)}</p>
            )}
          </div>

          <aside className={styles.meta}>
            <dl className={styles.metaList}>
              <div className={styles.metaItem}>
                <dt>{tProj('year')}</dt>
                <dd>{project.year}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>{tProj('status')}</dt>
                <dd>{isComingSoon ? t('comingSoon') : t('live')}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>{tProj('tech')}</dt>
                <dd>
                  <ul className={styles.techList}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              {(project.github || project.demo) && (
                <div className={styles.metaItem}>
                  <dt>{tProj('links')}</dt>
                  <dd className={styles.metaLinks}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {t('openSource')} ↗
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        {t('openDemo')} ↗
                      </a>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </div>
    </article>
  );
}
