import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './en';

const messages = {
    de: () => import('./de.js').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    if (locale === 'de') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
}, 'en');
