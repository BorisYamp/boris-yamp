'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LangSwitcher from './LangSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const onHome = pathname === '/';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandDot} />
          <span className={styles.brandText}>boris.yamp</span>
        </Link>

        <nav className={styles.nav}>
          <Link href={onHome ? '#projects' : '/#projects'} className={styles.navLink}>
            {t('projects')}
          </Link>
          <Link href={onHome ? '#experience' : '/#experience'} className={styles.navLink}>
            {t('experience')}
          </Link>
          <Link href={onHome ? '#contact' : '/#contact'} className={styles.navLink}>
            {t('contact')}
          </Link>
          <LangSwitcher />
        </nav>
      </div>
    </header>
  );
}
