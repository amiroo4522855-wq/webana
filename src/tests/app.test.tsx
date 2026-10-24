import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from '../app/App';
import { ErrorBoundary } from '../components/ErrorBoundary';
import {
  applyDocumentLocale,
  defaultLocale,
  getDirection,
} from '../core/i18n/config';
import { applyDocumentTheme } from '../core/theme/theme';

function BrokenComponent(): never {
  throw new Error('Intentional test failure');
}

describe('application foundation', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
    applyDocumentLocale(defaultLocale);
    applyDocumentTheme('system', 'light');
  });

  it('renders the WEBANA home page with Persian RTL defaults', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('وب‌سایتت را');
    expect(heading.textContent).toContain('بدون کدنویسی');
    expect(document.documentElement.lang).toBe('fa');
    expect(document.documentElement.dir).toBe('rtl');
  });

  it('provides a working home link on an unknown route', () => {
    window.history.replaceState({}, '', '/unknown-route');
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'این صفحه پیدا نشد.' }),
    ).toBeTruthy();

    const homeLink = screen.getByRole('link', {
      name: 'بازگشت به صفحه اصلی',
    });
    expect(homeLink.getAttribute('href')).toBe('/');
  });

  it('keeps English LTR direction available for future locales', () => {
    expect(getDirection('en')).toBe('ltr');

    applyDocumentLocale('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
  });

  it('connects the start CTA to a real page with a working theme control', () => {
    render(<App />);

    const startLink = screen.getByRole('link', { name: 'شروع با ویبانا' });
    expect(startLink.getAttribute('href')).toBe('/start');
    fireEvent.click(startLink);

    expect(
      screen.getByRole('heading', { name: 'شروع با ویبانا' }),
    ).toBeTruthy();

    const themeSelect = screen.getByLabelText('حالت نمایش');
    fireEvent.change(themeSelect, { target: { value: 'dark' } });

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('webana-theme')).toBe('dark');
  });

  it('shows a manageable error page instead of a blank screen', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByRole('heading', {
        name: 'مشکلی در نمایش برنامه پیش آمد.',
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'بارگیری دوباره' }),
    ).toBeTruthy();
  });
});
