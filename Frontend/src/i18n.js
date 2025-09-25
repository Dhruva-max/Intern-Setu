import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { "Hello": "Hello" } },
    hi: { translation: { "Hello": "नमस्ते" } }
  },
  lng: "en",
  fallbackLng: "en",
