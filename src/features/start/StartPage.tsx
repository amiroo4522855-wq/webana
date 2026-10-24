import { Badge } from '../../components/Badge';
import { ButtonLink } from '../../components/Button';
import { Card } from '../../components/Card';
import { Icon } from '../../components/Icon';
import { Select } from '../../components/Select';
import { useTheme } from '../../core/theme/useTheme';
import { isThemeMode } from '../../core/theme/theme';
import styles from './StartPage.module.css';

export function StartPage() {
  const { mode, resolvedTheme, setTheme } = useTheme();
  const resolvedThemeLabel = resolvedTheme === 'dark' ? 'تاریک' : 'روشن';
  const helperText =
    mode === 'system'
      ? 'حالت نمایش با تنظیمات سیستم‌عامل شما هماهنگ است.'
      : `حالت ${resolvedThemeLabel} روی همه صفحات فعلی اعمال می‌شود.`;

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-labelledby="start-title">
        <Badge variant="gold">
          <Icon name="info" size={16} />
          نسخه اولیه ویبانا
        </Badge>
        <h1 id="start-title">شروع با ویبانا</h1>
        <p>
          مسیر ساخت پروژه در مراحل بعدی اضافه می‌شود. در این نسخه می‌توانید
          حالت نمایش رابط را انتخاب کنید؛ این تنظیم واقعاً اعمال و در همین
          مرورگر ذخیره می‌شود.
        </p>
      </section>

      <Card as="section" className={styles.preferences} aria-labelledby="theme-title">
        <div className={styles.cardHeader}>
          <div>
            <p className={styles.overline}>تنظیمات رابط</p>
            <h2 id="theme-title">ظاهر دلخواهت را انتخاب کن</h2>
          </div>
          <Badge variant="info">حالت {resolvedThemeLabel} فعال است</Badge>
        </div>

        <Select
          id="theme-mode"
          label="حالت نمایش"
          value={mode}
          helperText={helperText}
          onChange={(event) => {
            const nextMode = event.target.value;
            if (isThemeMode(nextMode)) {
              setTheme(nextMode);
            }
          }}
        >
          <option value="system">هماهنگ با سیستم‌عامل</option>
          <option value="light">روشن</option>
          <option value="dark">تاریک</option>
        </Select>
      </Card>

      <div className={styles.actions}>
        <ButtonLink to="/" variant="secondary">
          بازگشت به صفحه اصلی
        </ButtonLink>
      </div>
    </main>
  );
}
