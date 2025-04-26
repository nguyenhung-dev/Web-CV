import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_en from "@/locales/en/translation.json"
import translation_vi from "@/locales/vi/translation.json"

export const locales = {
  en: "English",
  vi: "Tiếng Việt"
}

export const resources = {
  en: { translation: translation_en },
  vi: { translation: translation_vi }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;