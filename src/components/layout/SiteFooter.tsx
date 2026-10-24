import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>ویبانا — ساخت وب، ساده‌تر.</p>
        <p lang="en" dir="ltr">
          React <span>·</span> TypeScript <span>·</span> Vite
        </p>
      </div>
    </footer>
  );
}
