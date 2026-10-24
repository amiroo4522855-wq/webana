import type { ReactNode } from 'react';

import { appConfig } from '../core/config/app';
import { BrandMark } from './BrandMark';
import styles from './StatusPage.module.css';

type StatusPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function StatusPage({
  eyebrow,
  title,
  description,
  children,
}: StatusPageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.brand}>
        <BrandMark className={styles.mark} />
        <span lang="en" dir="ltr">
          {appConfig.name}
        </span>
      </div>

      <section className={styles.card} aria-labelledby="status-title">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="status-title">{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>{children}</div>
      </section>
    </main>
  );
}
