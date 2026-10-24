import { Component } from 'react';
import type { ReactNode } from 'react';

import { Button } from './Button';
import { StatusPage } from './StatusPage';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  private readonly handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <StatusPage
          eyebrow="خطای قابل مدیریت"
          title="مشکلی در نمایش برنامه پیش آمد."
          description="برای تلاش دوباره، صفحه را بارگیری مجدد کنید. اگر خطا برطرف نشد، بعداً دوباره تلاش کنید."
        >
          <Button onClick={this.handleReload}>بارگیری دوباره</Button>
        </StatusPage>
      );
    }

    return this.props.children;
  }
}
