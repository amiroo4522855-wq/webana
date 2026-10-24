import { Outlet } from 'react-router-dom';

import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import styles from './SiteLayout.module.css';

export function SiteLayout() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}
