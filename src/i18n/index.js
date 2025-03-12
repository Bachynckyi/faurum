import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ua } from "./translations.js/ua";
import { en } from "./translations.js/en";
import { de } from "./translations.js/de";

const resources = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ua },
  de: { translation: de },
};

const isPrerender = navigator.userAgent === "ReactSnap";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "ua",
    supportedLngs: ["en", "ua", "de"],
    nonExplicitSupportedLngs: true,
    detection: {
      order: isPrerender ? ["path"] : ["querystring", "localStorage", "navigator", "htmlTag"], 
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    load: "languageOnly",
  })
  .then(() => {
    const currentLang = i18n.language;
    if (currentLang.includes("-")) {
      const shortLang = currentLang.split("-")[0];
      i18n.changeLanguage(shortLang);
      localStorage.setItem("i18nextLng", shortLang);
    }
  });

export default i18n;
