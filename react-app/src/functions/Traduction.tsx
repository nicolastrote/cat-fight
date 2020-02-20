import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from '../traduction/translation';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    })
    .then(r => console.log('TODO Warning error', r));

export default i18n;
