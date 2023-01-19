import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        supportedLngs: ['en','ja'],
        fallbackLng: 'en',
        detection: {
          order:["cookie", "localStorage", "path"],
          caches:["cookie"]
        },
        keySeparator: ".",
        backend:{
            loadPaths: "/locals/{{lng}}/translation.json"
        },
        debug: false,
    });

export default i18n;