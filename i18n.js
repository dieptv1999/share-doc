import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import localesResourse from './app/assets/locales';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: localesResourse,

  debug: true,

  // cache: {
  //   enabled: true
  // },

  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },
  react: {
    wait: true
  }
});

export default i18n;
