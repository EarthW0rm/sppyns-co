import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        resources: {
            "pt-BR": {
                translations: {
                    "O Cartório Azevêdo Bastos em parceria com a OriginalMy facilita sua vida por meio da autenticação digital.": "O Cartório Azevêdo Bastos em parceria com a OriginalMy facilita sua vida por meio da autenticação digital.",
                }
            },
            "en-US": {
                translations: {
                    "O Cartório Azevêdo Bastos em parceria com a OriginalMy facilita sua vida por meio da autenticação digital.": "The Notary Azevêdo Bastos in partnership with OriginalMy makes your life easier with the digital authentication.",
                }
            }
        },
        fallbackLng: 'pt-BR',
        whitelist: ['en-US', 'pt-BR'],
        load: 'currentOnly',
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    });

export default i18n;