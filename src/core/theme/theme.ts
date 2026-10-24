export const THEME_STORAGE_KEY = 'webana-theme';
export const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const themeModes = ['system', 'light', 'dark'] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = Exclude<ThemeMode, 'system'>;

export function isThemeMode(value: unknown): value is ThemeMode {
  return (
    typeof value === 'string' &&
    (themeModes as readonly string[]).includes(value)
  );
}

export function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(THEME_MEDIA_QUERY).matches ? 'dark' : 'light';
}

export function applyDocumentTheme(
  mode: ThemeMode,
  resolvedTheme: ResolvedTheme,
): void {
  const root = document.documentElement;
  root.dataset.theme = resolvedTheme;
  root.dataset.themeMode = mode;
  root.style.colorScheme = resolvedTheme;
}
