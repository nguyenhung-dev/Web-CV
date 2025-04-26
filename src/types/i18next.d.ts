import i18next from "i18next";
import {resources} from "@/i18n/i18n";
import translation_en from "@/locales/en/translation.json"
import translation_vi from "@/locales/vi/translation.json"

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en']
  }
}