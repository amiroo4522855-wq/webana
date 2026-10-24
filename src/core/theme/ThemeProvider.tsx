import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { ThemeContext } from './ThemeContext';
import {
  getSystemTheme,
  isThemeMode,
  THEME_MEDIA_QUERY,
  THEME_STORAGE_KEY,
  applyDocumentTheme,
} from './theme';
import type { ResolvedTheme, ThemeMode } from './theme';

function getInitialThemeMode(): ThemeMode {
  try {
    const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeMode(storedMode)) {
      return storedMode;
    }
  } catch {
    // Storage can be unavailable in restricted browsing contexts.
  }

  const documentMode = document.documentElement.dataset.themeMode;
  return isThemeMode(documentMode) ? documentMode : 'system';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialThemeMode);
  const [systemTheme, setSystemTheme] =
    useState<ResolvedTheme>(getSystemTheme);
  const resolvedTheme = mode === 'system' ? systemTheme : mode;

  useEffect(() => {
    applyDocumentTheme(mode, resolvedTheme);
  }, [mode, resolvedTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(THEME_MEDIA_QUERY);
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const setTheme = useCallback((nextMode: ThemeMode) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
    setMode(nextMode);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  const value = useMemo(
    () => ({ mode, resolvedTheme, setTheme, toggleTheme }),
    [mode, resolvedTheme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
