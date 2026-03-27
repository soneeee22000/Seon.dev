export const locales = [
  "en",
  "fr",
  "my",
  "th",
  "ja",
  "ko",
  "zh",
  "es",
  "de",
  "pt",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Francais",
  my: "\u1019\u103C\u1014\u103A\u1019\u102C",
  th: "\u0E44\u0E17\u0E22",
  ja: "\u65E5\u672C\u8A9E",
  ko: "\uD55C\uAD6D\uC5B4",
  zh: "\u4E2D\u6587",
  es: "Espanol",
  de: "Deutsch",
  pt: "Portugues",
};

export const localeFlags: Record<Locale, string> = {
  en: "\uD83C\uDDEC\uD83C\uDDE7",
  fr: "\uD83C\uDDEB\uD83C\uDDF7",
  my: "\uD83C\uDDF2\uD83C\uDDF2",
  th: "\uD83C\uDDF9\uD83C\uDDED",
  ja: "\uD83C\uDDEF\uD83C\uDDF5",
  ko: "\uD83C\uDDF0\uD83C\uDDF7",
  zh: "\uD83C\uDDE8\uD83C\uDDF3",
  es: "\uD83C\uDDEA\uD83C\uDDF8",
  de: "\uD83C\uDDE9\uD83C\uDDEA",
  pt: "\uD83C\uDDE7\uD83C\uDDF7",
};
