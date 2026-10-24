import { Link, NavLink } from 'react-router-dom';

import { appConfig } from '../../core/config/app';
import { cx } from '../../core/utils/cx';
import { BrandMark } from '../BrandMark';
import { ThemeToggle } from '../ThemeToggle';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          to="/"
          aria-label="ویبانا | صفحه اصلی"
        >
          <BrandMark className={styles.mark} />
          <span className={styles.brandCopy}>
            <strong lang="en" dir="ltr">
              {appConfig.name}
            </strong>
            <span>{appConfig.localizedName}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="ناوبری اصلی">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cx(styles.navLink, isActive && styles.active)
            }
          >
            خانه
          </NavLink>
          <NavLink
            to="/start"
            className={({ isActive }) =>
              cx(styles.navLink, isActive && styles.active)
            }
          >
            شروع
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
