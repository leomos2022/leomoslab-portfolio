import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

// Español como idioma base (mercado principal: Colombia);
// visitantes de habla inglesa reciben EN automáticamente.
const browserLang =
  typeof navigator !== 'undefined' && (navigator.language || '').toLowerCase().startsWith('es')
    ? 'es'
    : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: browserLang,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

// Mantener <html lang> sincronizado con el idioma activo (SEO/accesibilidad)
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng === 'es' ? 'es-CO' : 'en';
  }
});

export default i18n;
