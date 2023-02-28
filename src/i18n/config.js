import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './de';
import en from './en';

const resources = {
    en: {
        translation: en,
    },
    de: {
        translation:de
    }
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)

  .init({
      resources,
      lng:'en',
      debug: true,

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;