import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        resources: {
            "en-US": {
                translations: {
                    'home.section.jumbo.title': 'CRYPTO'
                    , 'home.section.jumbo.subTitle': 'INVESTMENTS'
                    , 'home.section.jumbo.firstP': 'Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Mining, Ripple. You have certainly heard these terms lately, but you have not understood very well and want to know more about how this market works.'
                    , 'home.section.jumbo.secondP': 'Do you want to invest in this market, but you think all this is just for Geeks and Nerds? Keep calm! Sppyns is your starting point and we will take you on this path!'
                }
            },
            "fr-FR": {
                translations: {
                    'home.section.jumbo.title': 'CRYPTO'
                    , 'home.section.jumbo.subTitle': 'INVESTMENTS'
                    , 'home.section.jumbo.firstP': 'Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Exploitation minière, Ripple. Vous avez certainement entendu ces termes dernièrement, mais vous n`avez pas très bien compris et vous voulez en savoir plus sur le fonctionnement de ce marché.'
                    , 'home.section.jumbo.secondP': 'Vous voulez investir dans ce marché, mais vous pensez que tout cela est juste pour Geeks et Nerds? Vous pouvez vous rester facilement! Sppyns est votre point de départ et nous vous emmènerons sur ce chemin!'
                }
            },
            "pt-BR": {
                translations: {
                    'home.section.jumbo.title': 'CRYPTO'
                    , 'home.section.jumbo.subTitle': 'INVESTMENTS'
                    , 'home.section.jumbo.firstP': 'Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Mineração, Ripple. Você com certeza já ouviu estes termos nos últimos tempos, mas não compreendeu muito bem e quer saber mais sobre como esse mercado funciona.'
                    , 'home.section.jumbo.secondP': 'Quer investir neste mercado, mas acha que tudo isso é coisa só para Geeks e Nerds? Pode ficar tranquilo! A Sppyns é seu ponto de partida e vamos te levar neste caminho!'
                }
            }
        },
        fallbackLng: 'pt-BR',
        whitelist: ['en-US', 'pt-BR', 'fr-FR'],
        load: 'currentOnly',
        debug: true,
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


    i18n.changeLanguage("en-US")

export default i18n;
