import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from '../app/App';
import {
  applyDocumentTheme,
  THEME_MEDIA_QUERY,
} from '../core/theme/theme';

describe('theme behavior', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
    applyDocumentTheme('system', 'light');
  });

  it('applies the selected theme and restores it after remounting', () => {
    const { unmount } = render(<App />);

    fireEvent.click(
      screen.getByRole('button', { name: 'تغییر به حالت تاریک' }),
    );
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('webana-theme')).toBe('dark');

    unmount();
    render(<App />);

    expect(
      screen.getByRole('button', { name: 'تغییر به حالت روشن' }),
    ).toBeTruthy();
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('follows operating system changes in system mode', () => {
    let systemPrefersDark = true;
    let changeListener: ((event: MediaQueryListEvent) => void) | undefined;

    vi.spyOn(window, 'matchMedia').mockReturnValue({
      get matches() {
        return systemPrefersDark;
      },
      media: THEME_MEDIA_QUERY,
      addEventListener: (
        _type: string,
        listener: (event: MediaQueryListEvent) => void,
      ) => {
        changeListener = listener;
      },
      removeEventListener: () => undefined,
    } as unknown as MediaQueryList);

    render(<App />);
    expect(document.documentElement.dataset.theme).toBe('dark');

    act(() => {
      systemPrefersDark = false;
      changeListener?.({ matches: false } as MediaQueryListEvent);
    });

    expect(document.documentElement.dataset.theme).toBe('light');
  });
});
