export const supportedLocales = ['fa', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];
export type Direction = 'rtl' | 'ltr';

export const defaultLocale: Locale = 'fa';

const directions: Record<Locale, Direction> = {
  fa: 'rtl',
  en: 'ltr',
};

export function getDirection(locale: Locale): Direction {
  return directions[locale];
}

export function applyDocumentLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = getDirection(locale);
}
