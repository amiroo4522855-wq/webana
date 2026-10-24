import { ButtonLink } from '../../components/Button';
import { StatusPage } from '../../components/StatusPage';

export function NotFoundPage() {
  return (
    <StatusPage
      eyebrow="خطای ۴۰۴"
      title="این صفحه پیدا نشد."
      description="نشانی واردشده معتبر نیست یا این صفحه به مسیر دیگری منتقل شده است."
    >
      <ButtonLink to="/">بازگشت به صفحه اصلی</ButtonLink>
    </StatusPage>
  );
}
