import {
  translations,
  Language,
  TranslationKey,
} from "../translations/translations";

function get(obj: unknown, key: string) {
  if (typeof obj === "object" && obj !== null && key in obj) {
    return (obj as Record<string, unknown>)[key];
  }
  throw new Error(`Invalid key: ${key}`);
}

export function useTranslate(lang: Language) {
  return function t(key: TranslationKey) {
    return key
      .split(".")
      .reduce<unknown>((o, p) => get(o, p), translations[lang]);
  };
}
