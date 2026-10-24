import { BrandMark } from '../../components/BrandMark';
import { ButtonLink } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { appConfig } from '../../core/config/app';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" />
            {appConfig.tagline}
          </p>

          <h1 id="home-title">
            وب‌سایتت را،
            <br />
            <span>بدون کدنویسی</span> بساز.
          </h1>

          <p className={styles.description}>{appConfig.description}</p>

          <div className={styles.actions}>
            <ButtonLink to="/start" size="lg">
              شروع با ویبانا
              <Icon name="arrow-left" size={20} />
            </ButtonLink>
          </div>

          <div className={styles.experienceNote}>
            <span className={styles.noteIcon} aria-hidden="true">
              <Icon name="check" size={21} />
            </span>
            <span className={styles.noteCopy}>
              <strong>فارسی، روشن و تاریک</strong>
              <span>ظاهر رابط را همین حالا از هدر تغییر دهید.</span>
            </span>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={`${styles.corner} ${styles.cornerTop}`} />
          <span className={`${styles.corner} ${styles.cornerBottom}`} />
          <span className={styles.pixelPrimary} />
          <span className={styles.pixelSecondary} />

          <div className={styles.visualInner}>
            <div className={styles.layerBack} />
            <div className={styles.layerMiddle} />
            <div className={styles.brandCard}>
              <span className={styles.cardKicker} lang="en">
                IDEA TO WEB
              </span>
              <BrandMark className={styles.heroMark} />
              <span className={styles.cardWord} lang="en" dir="ltr">
                {appConfig.name}
              </span>
              <span className={styles.cardRule} />
              <span className={styles.cardCaption}>
                ساده برای شروع
                <br />
                آماده برای رشد
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
