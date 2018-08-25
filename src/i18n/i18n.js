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

                    , 'home.section.contact.fale': 'Fale coma gente'
                    , 'home.section.contact.endereco': 'Endereço:'
                    , 'home.section.contact.endereco.valor': 'Tartu maakond, Tartu linn Riia tn 128, 50411, Estônia'
                    , 'home.section.contact.email': 'E-mail:'
                    , 'home.section.contact.email.valor': 'atendimento@sppyns.co'
                    , 'home.section.contact.tel': 'Telefone:'
                    , 'home.section.contact.tel.valor': '+55 11 9 8339-8994'

                    , 'home.section.contact.form.email': 'Email'
                    , 'home.section.contact.form.nome': 'Nome'
                    , 'home.section.contact.form.assunto': 'Assunto'
                    , 'home.section.contact.form.mensagen': 'Mensagem'
                    , 'home.section.contact.form.botao': 'Enviar'

                    , 'history.one.title': 'NOSSA HISTÓRIA'
                    , 'history.one.p1': 'A Sppyns nasceu em novembro de 2017, fruto da vontade e do espírito inovador de quatro empreendedores que, a partir de uma ideia disruptiva do nosso CEO, Gabriel Moreira.'
                    , 'history.one.p2': 'Trabalhamos meses concebendo juntos cada produto, cada processo de negócio, cada nova forma de oferecer os melhores serviços a você, nosso cliente e investidor.'

                    , 'history.two.title': 'QUEM SOMOS'
                    , 'history.two.p1': 'Uma empresa ágil, que busca todos os dias as melhores opções de investimento em cryptomoedas, e que trabalha para que esta nova forma de ativos seja acessível a todos os perfis de investidores.'
                    , 'history.two.p2': 'Buscamos apresentar estas novas opções de investimentos, e também educar neste novo mundo quem busca por boas oportunidades de rentabilizar seu patrimônio.'

                    , 'history.three.title': 'NOSSA VISÃO'
                    , 'history.three.p1': 'Nosso horizonte não tem fronteiras e operamos nos principais mercados de cryptomoedas do mundo, buscando oportunidades e eficiência operacional.'

                    , 'products.a.title': 'PLATAFORMA DE FUNDOS EM CRYPTOATIVOS'
                    , 'products.a.p': 'Desenvolvemos opções de investimentos em cryptomoedas de forma segura e buscamos as melhores opções para cada perfil de investidor, sempre com transparência, informação e performance.'

                    , 'products.b.title': 'COMPRA E VENDA DE TOKENS E MOEDAS DIGITAIS'
                    , 'products.b.p': 'Quer comprar ou vender cryptomoedas e tokens? Temos a expertise, as melhores parcerias para oferecer taxas competitivas e opções seguras para nossos clientes.'

                    , 'products.c.title': 'GESTÃO DE CRYPTOMOEDAS E TOKENS'
                    , 'products.c.p': 'Conte com nossa experiência e estrutura para entender e ter uma gestão profissional de seus ativos. Aproveite a maior revolução no mundo dos investimentos até agora.'

                    , 'products.d.title': 'CONSULTORIA EM INVESTIMENTOS'
                    , 'products.d.p': 'Quer receber e pagar em Bitcoins e outros ativos digitais e fazer parte desta revolução tecnológica? Conte com a nossa consultoria para entender como é barato, eficiente e seguro receber em cryptomoedas.'

                    , 'products.e.title': 'ICOs INITIAL COIN OFFERINGS'
                    , 'products.e.p': 'Temos o conhecimento e as plataformas para apoiar você no caminho de levar seu negócio a esta nova era de oportunidades, de forma segura e ética.'

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


    i18n.changeLanguage("pt-BR")

export default i18n;
