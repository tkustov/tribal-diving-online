import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { locales } from './locales';

const LOCALE_NS = 'translations';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales.reduce((map, loc) => {
      map[loc.key] = {
        [LOCALE_NS]: loc.translations
      };
      return map;
    }, {}),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    whitelist: locales.map(loc => loc.key),
    keySeparator: '.',
    ns: [LOCALE_NS],
    defaultNS: LOCALE_NS,
    detection: {
      checkWhitelist: true
    }
  });
