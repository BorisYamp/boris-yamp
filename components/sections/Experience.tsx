import { useTranslations } from 'next-intl';
import styles from './Experience.module.css';

const jobs = ['sindy', 'quBeam'] as const;

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section className={`section ${styles.section}`} id="experience">
      <div className="container">
        <h2 className={styles.title}>{t('title')}</h2>
        <ol className={styles.list}>
          {jobs.map((key) => {
            const highlights = (t.raw(`${key}.highlights`) as string[]) || [];
            return (
              <li key={key} className={styles.item}>
                <div className={styles.head}>
                  <div>
                    <h3 className={styles.role}>{t(`${key}.role`)}</h3>
                    <p className={styles.company}>{t(`${key}.company`)}</p>
                  </div>
                  <span className={styles.period}>{t(`${key}.period`)}</span>
                </div>
                <ul className={styles.highlights}>
                  {highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
