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
                    , 'home.link.signup': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUp&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=en-US'
                    , 'home.link.login': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUpOrSigIn&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=en-US'

                    , 'home.section.contact.fale': 'GOOD TO TALK'
                    , 'home.section.contact.endereco': 'Address:'
                    , 'home.section.contact.endereco.valor': 'Tartu maakond, Tartu linn Riia tn 128, 50411, Estônia'
                    , 'home.section.contact.email': 'E-mail:'
                    , 'home.section.contact.email.valor': 'contact@sppyns.io'
                    , 'home.section.contact.tel': 'Phone Number:'
                    , 'home.section.contact.tel.valor': '+55 11 9 8339-8994'

                    

                    , 'form.email': 'Email'
                    , 'form.nome': 'Name'
                    , 'form.assunto': 'Subject'
                    , 'form.mensagen': 'Message'
                    , 'form.botao': 'Send'
                    , 'form.telefone': 'Phone Number'
                    , 'form.documento': 'Passport'
                    , 'form.cota': 'Quotes'
                    , 'form.endereco': 'Address'
                    , 'form.complemento': 'Address'
                    , 'form.cidade': 'City'
                    , 'form.estado': 'State'
                    , 'form.cep': 'Zip Code'
                    , 'form.pais': 'Country'

                    , 'history.one.title': 'OUR HISTORY'
                    , 'history.one.p1': 'Sppyns was born in November of 2017, result of the will and the innovative spirit of four entrepreneurs from a disruptive idea of our CEO, Gabriel Moreira.'
                    , 'history.one.p2': 'We have worked for months together designing each product, every business process, every new way to offer the best services to you, our customer and investor.'

                    , 'history.two.title': 'WHO WE ARE'
                    , 'history.two.p1': 'An agile company that seeks every day the best crypto-coin investment options and works to make this new form of assets accessible to all investor profiles.'
                    , 'history.two.p2': 'We seek to present these new investment options, and also to educate in this new world those who look for good opportunities to monetize their assets.'

                    , 'history.three.title': 'OUR VISION'
                    , 'history.three.p1': 'Our horizon has no borders and we operate in the main crypto-coin markets in the world, seeking opportunities and operational efficiency.'

                    , 'products.a.title': 'CRYPTOATIVE FUNDS PLATFORM'
                    , 'products.a.p': 'We develop options for investing in crypto-coins in a safe way and we look for the best options for each investor profile, always with transparency, information and performance.'

                    , 'products.b.title': 'PURCHASE AND SALE OF TOKENS AND DIGITAL COINS'
                    , 'products.b.p': 'Do you want to buy or sell crypto-coins and tokens? We have the expertise, the best partnerships to offer competitive rates and safe options for our customers.'

                    , 'products.c.title': 'MANAGEMENT OF CRYPTO-COINS AND TOKENS'
                    , 'products.c.p': 'Count on our experience and structure to understand and have a professional management of your assets. Take advantage of the biggest revolution in the investment world so far.'

                    , 'products.d.title': 'INVESTMENT CONSULTANCY'
                    , 'products.d.p': 'Do you want to receive and pay in Bitcoins and other digital assets and be part of this technological revolution? Count on our consulting firm to understand how cheap, efficient and secure it is to receive in crypto-coins.'

                    , 'products.e.title': 'ICOs INITIAL COIN OFFERINGS'
                    , 'products.e.p': 'We have the knowledge and the platforms to support you safely and ethically on the path of taking your business to this new era of opportunities.'


                    , 'team.title': 'OUR TEAM'
                    
                    , 'team.people.a.name': 'Rodrigo Csizmar Borges'
                    , 'team.people.a.cargo': 'COO e Founder'
                    , 'team.people.a.press': 'Business Developer, IT Sales Executive, Blockchain, Cryptocurrencies e Innovation'

                    , 'team.people.b.name': 'Gabriel Moreira'
                    , 'team.people.b.cargo': 'CEO e Founder'
                    , 'team.people.b.press': 'IT Sales Expert, Empreendedor, Entusiasta das Cryptocurrencies e Blockchain'

                    , 'team.people.c.name': 'Lucas Cabral'
                    , 'team.people.c.cargo': 'CTO e Founder'
                    , 'team.people.c.press': 'Hardware Jedi, Entusiasta de Blockchain e Technical Trust'

                    , 'team.people.d.name': 'Leonardo Faviere'
                    , 'team.people.d.cargo': 'Expansion e Founder'
                    , 'team.people.d.press': 'Senior Investment Advisor e Empreendedor'


                    , 'invest.jumbo.title': 'MAKE YOURSELF A'
                    , 'invest.jumbo.subtitle': 'SPPYNER'
                    , 'invest.jumbo.p': 'Invest in SPPYNS and be part of the world of opportunities that only crypto-coins investments can provide. If you are interested in developing a partnership with us and being an investor, fill out the form.'

                    , 'section.why.title': 'WHY'
                    , 'section.why.subtitle': 'US?'
                    , 'section.why.jumbo.p': 'The Crypto-coins and all the opportunities they bring have come to stay, but as it is still a space dominated by technology enthusiasts, most Geeks, our challenge is to demystify this and show that with good information and good advice everyone can look for new opportunities and options of investment gains.'


                    , 'section.why.top.title': 'EXPERTISE'
                    , 'section.why.top.p1': 'We have created Sppyns because we believe that beyond Technology, people are our most important asset.'
                    , 'section.why.top.p2': 'Therefore, we surround ourselves with professionals from various areas of activity, who have different and complementary experiences, and with the same passion to create something new and surprising.'

                    , 'section.why.bot.title': 'INNOVATION'
                    , 'section.why.bot.p1': 'In this market, anticipating trends and being prepared for quick movements is essential.'
                    , 'section.why.bot.p2': 'For this, we seek people and partners with the experience, knowledge and a great desire to do more for our customers.'
                    , 'section.why.bot.p3': 'We focus on the most innovative technologies and processes to always have the best options of services and consulting in cryptoinvestments.'


                    , 'header.menu.home': 'Home'
                    , 'header.menu.oque': 'What we do'
                    , 'header.menu.quem': 'Who we are'
                    , 'header.menu.porque': 'Why Sppyns?'
                    , 'header.menu.contato': 'Contact'
                    , 'header.menu.invista': 'Invest'

                    , 'vld.a': 'Fill in the information, (Email, Name, Phone, Document) before sending.'
                    , 'vld.b': 'Data sent successfully.'
                    , 'vld.c': 'Error sending your data.'
                    , 'vld.d': 'Fill in the information before sending.'
                }
            },
            "fr-FR": {
                translations: {
                    'home.section.jumbo.title': 'CRYPTO'
                    , 'home.section.jumbo.subTitle': 'INVESTMENTS'
                    , 'home.section.jumbo.firstP': 'Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Exploitation minière, Ripple. Vous avez certainement entendu ces termes dernièrement, mais vous n`avez pas très bien compris et vous voulez en savoir plus sur le fonctionnement de ce marché.'
                    , 'home.section.jumbo.secondP': 'Vous voulez investir dans ce marché, mais vous pensez que tout cela est juste pour Geeks et Nerds? Vous pouvez vous rester facilement! Sppyns est votre point de départ et nous vous emmènerons sur ce chemin!'
                    , 'home.link.signup': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUp&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=fr-FR'
                    , 'home.link.login': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUpOrSigIn&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=fr-FR'


                    , 'home.section.contact.fale': 'Parler aux gens'
                    , 'home.section.contact.endereco': 'Adresse de rue:'
                    , 'home.section.contact.endereco.valor': 'Tartu maakond, Tartu linn Riia tn 128, 50411, Estônia'
                    , 'home.section.contact.email': 'Votre adresse e-mail:'
                    , 'home.section.contact.email.valor': 'contact@sppyns.io'
                    , 'home.section.contact.tel': 'Téléphone:'
                    , 'home.section.contact.tel.valor': '+55 11 9 8339-8994'

                    

                    , 'form.email': 'Votre adresse e-mail'
                    , 'form.nome': 'Nom'
                    , 'form.assunto': 'Sujet'
                    , 'form.mensagen': 'message'
                    , 'form.botao': 'Envoyer'
                    , 'form.telefone': 'Téléphone'
                    , 'form.documento': 'Passaport'
                    , 'form.cota': 'Les quotas'
                    , 'form.endereco': 'Adresse de rue'
                    , 'form.complemento': 'Complément'
                    , 'form.cidade': 'Ville'
                    , 'form.estado': 'État'
                    , 'form.cep': 'Postal'
                    , 'form.pais': 'Pays'

                    , 'history.one.title': 'NOTRE HISTOIRE'
                    , 'history.one.p1': 'Sppyns est née en novembre 2017, fruit de la volonté et de l`esprit d`innovation de quatre entrepreneurs à partir d`une idée dérangeante de notre président-directeur general (PDG), Gabriel Moreira.'
                    , 'history.one.p2': 'Nous travaillons ensemble pendant des mois à concevoir chaque produit, chaque processus d`affaires, chaque nouvelle façon d`offrir les meilleurs services à vous, à nos clients et à nos investisseurs.'

                    , 'history.two.title': 'À PROPOS DE NOUS'
                    , 'history.two.p1': 'Une société agile qui recherche chaque jour les meilleures options d`investissement dans des crypto-pièces, et travaille à rendre cette nouvelle forme d`actifs accessible à tous les profils d`investisseurs.'
                    , 'history.two.p2': 'Nous cherchons à présenter ces nouvelles options d`nvestissement, et aussi à éduquer dans ce nouveau monde ceux qui cherchent de bonnes opportunités pour monétiser leurs actifs.'

                    , 'history.three.title': 'NOTRE VISION'
                    , 'history.three.p1': 'Notre horizon n`a pas de frontières et nous opérons dans les principaux marchés de crypto-pièces du monde, à la recherche d`opportunités et d`efficacité opérationnelle.'

                    , 'products.a.title': 'PLATEFORME DE FONDS CRYPTOATIVES'
                    , 'products.a.p': 'Nous développons des options pour investir dans des crypto-pièces de manière sûre et nous recherchons les meilleures options pour chaque profil d`investisseur, toujours avec la transparence, l`information et la performance.'

                    , 'products.b.title': 'ACHAT ET VENTE DE JETONS ET PIÈCES NUMÉRIQUES'
                    , 'products.b.p': 'Vous voulez acheter ou vendre des crypto-pièces et des jetons? Nous avons l`expertise, les meilleurs partenariats pour offrir des tarifs compétitifs et des options sécuritaires pour nos clients.'

                    , 'products.c.title': 'GESTION DES CRYPTO-PIÈCES ET DES JETONS'
                    , 'products.c.p': 'Vous pouvez compter sur notre expérience et notre structure pour comprendre et avoir une gestion professionnelle de vos actifs. Profitez de la plus grande révolution dans le monde de l`investissement jusqu`à présent.'

                    , 'products.d.title': 'CONSEIL EN PLACEMENT'
                    , 'products.d.p': 'Voulez-vous recevoir et payer en Bitcoins et autres actifs numériques et faire partie de cette révolution technologique? Comptez sur notre cabinet de conseil pour comprendre comme il est un bon marché, efficace et sécurisé de recevoir des cryptomoedas.'

                    , 'products.e.title': 'ACI OFFRES DE PIÈCES INITIALES'
                    , 'products.e.p': 'Nous avons les connaissances et les plates-formes pour vous accompagner sur la voie de mener votre entreprise à cette nouvelle ère d`opportunités, de manière sûre et éthique.'


                    , 'team.title': 'NOTRE ÉQUIPE'
                    
                    , 'team.people.a.name': 'Rodrigo Csizmar Borges'
                    , 'team.people.a.cargo': 'COO e Founder'
                    , 'team.people.a.press': 'Business Developer, IT Sales Executive, Blockchain, Cryptocurrencies e Innovation'

                    , 'team.people.b.name': 'Gabriel Moreira'
                    , 'team.people.b.cargo': 'CEO e Founder'
                    , 'team.people.b.press': 'IT Sales Expert, Empreendedor, Entusiasta das Cryptocurrencies e Blockchain'

                    , 'team.people.c.name': 'Lucas Cabral'
                    , 'team.people.c.cargo': 'CTO e Founder'
                    , 'team.people.c.press': 'Hardware Jedi, Entusiasta de Blockchain e Technical Trust'

                    , 'team.people.d.name': 'Leonardo Faviere'
                    , 'team.people.d.cargo': 'Expansion e Founder'
                    , 'team.people.d.press': 'Senior Investment Advisor e Empreendedor'                    

                    , 'section.why.title': 'POURQUOI'
                    , 'section.why.subtitle': 'SPPYNS?'
                    , 'section.why.jumbo.p': 'Les Cryptomoedas et toutes les opportunités qu`ils apportent sont là pour rester, mais depuis c`est toujours un espace dominé par les passionnés de technologie, la plupart des Geeks, notre défi est de démystifier cela et montrer qu`avec de bonnes informations et de bons conseils tout le monde peut chercher de nouvelles opportunités des gains et des options d`investissement.'


                    , 'section.why.top.title': 'EXPERTISE'
                    , 'section.why.top.p1': 'Nous avons créé Sppyns parce que nous croyons qu`au-delà de la technologie, les gens sont notre atout le plus important.'
                    , 'section.why.top.p2': 'Par conséquent, nous nous entourons de professionnels de différents domaines d`activité, qui ont des expériences différentes et complémentaires, et avec la même passion pour créer quelque chose de nouveau et surprenant.'

                    , 'section.why.bot.title': 'INNOVATION'
                    , 'section.why.bot.p1': 'Sur ce marché, anticiper les tendances et se préparer à des mouvements rapides est essentiel.'
                    , 'section.why.bot.p2': 'Pour cela, nous recherchons des personnes et des partenaires avec l`expérience, les connaissances et un grand désir d`en faire plus pour nos clients.'
                    , 'section.why.bot.p3': 'Nous nous concentrons sur les technologies et les processus les plus innovants pour toujours avoir les meilleures options de services et de conseil en cryptoinvestments.'

                    , 'invest.jumbo.title': 'SOYEZ UN'
                    , 'invest.jumbo.subtitle': 'SPPYNER'
                    , 'invest.jumbo.p': 'Investissez dans SPPYNS et faites partie du monde des opportunités que seuls les investissements en crypto-pièces peut fournir. Si vous souhaitez développer votre partenariat avec nous et être un investisseur, remplissez le formulaire.'

                    , 'header.menu.home': 'Accueil'
                    , 'header.menu.oque': 'Ce que nous faisons'
                    , 'header.menu.quem': 'À propos de nous'
                    , 'header.menu.porque': 'Pourquoi Sppyns?'
                    , 'header.menu.contato': 'Contactez nous'
                    , 'header.menu.invista': 'Investissez'

                    , 'vld.a': 'Remplissez les informations (Email, Nom, Téléphone, Document) avant de les envoyer.'
                    , 'vld.b': 'Données envoyées avec succès.'
                    , 'vld.c': 'Erreur lors de l`envoi de vos données.'
                    , 'vld.d': 'Remplissez les informations avant l`envoi.'

                }
            },
            "pt-BR": {
                translations: {
                    'home.section.jumbo.title': 'CRYPTO'
                    , 'home.section.jumbo.subTitle': 'INVESTMENTS'
                    , 'home.section.jumbo.firstP': 'Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Mineração, Ripple. Você com certeza já ouviu estes termos nos últimos tempos, mas não compreendeu muito bem e quer saber mais sobre como esse mercado funciona.'
                    , 'home.section.jumbo.secondP': 'Quer investir neste mercado, mas acha que tudo isso é coisa só para Geeks e Nerds? Pode ficar tranquilo! A Sppyns é seu ponto de partida e vamos te levar neste caminho!'
                    , 'home.link.signup': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUp&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=pt-BR'
                    , 'home.link.login': 'https://login.microsoftonline.com/isppyns.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Customer1_SigUpOrSigIn&client_id=27cb68f8-28cd-4dee-a5de-7645afeba0df&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.sppyns.co&scope=openid&response_type=id_token&prompt=login&ui_locales=pt-BR'

                    , 'home.section.contact.fale': 'Fale com a gente'
                    , 'home.section.contact.endereco': 'Endereço:'
                    , 'home.section.contact.endereco.valor': 'Tartu maakond, Tartu linn Riia tn 128, 50411, Estônia'
                    , 'home.section.contact.email': 'E-mail:'
                    , 'home.section.contact.email.valor': 'contact@sppyns.io'
                    , 'home.section.contact.tel': 'Telefone:'
                    , 'home.section.contact.tel.valor': '+55 11 9 8339-8994'

                    

                    , 'form.email': 'Email'
                    , 'form.nome': 'Nome'
                    , 'form.assunto': 'Assunto'
                    , 'form.mensagen': 'Mensagem'
                    , 'form.botao': 'Enviar'
                    , 'form.telefone': 'Telefone'
                    , 'form.documento': 'CPF'
                    , 'form.cota': 'Cotas'
                    , 'form.endereco': 'Endereço'
                    , 'form.complemento': 'Complemento'
                    , 'form.cidade': 'Cidade'
                    , 'form.estado': 'Estado'
                    , 'form.cep': 'CEP'
                    , 'form.pais': 'País'

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


                    , 'team.title': 'Nosso Time'
                    
                    , 'team.people.a.name': 'Rodrigo Csizmar Borges'
                    , 'team.people.a.cargo': 'COO e Founder'
                    , 'team.people.a.press': 'Business Developer, IT Sales Executive, Blockchain, Cryptocurrencies e Innovation'

                    , 'team.people.b.name': 'Gabriel Moreira'
                    , 'team.people.b.cargo': 'CEO e Founder'
                    , 'team.people.b.press': 'IT Sales Expert, Empreendedor, Entusiasta das Cryptocurrencies e Blockchain'

                    , 'team.people.c.name': 'Lucas Cabral'
                    , 'team.people.c.cargo': 'CTO e Founder'
                    , 'team.people.c.press': 'Hardware Jedi, Entusiasta de Blockchain e Technical Trust'

                    , 'team.people.d.name': 'Leonardo Faviere'
                    , 'team.people.d.cargo': 'Expansion e Founder'
                    , 'team.people.d.press': 'Senior Investment Advisor e Empreendedor'


                    , 'invest.jumbo.title': 'SEJA TAMBÉM UM'
                    , 'invest.jumbo.subtitle': 'SPPYNER'
                    , 'invest.jumbo.p': 'Invista na SPPYNS e faça parte do mundo de oportunidades que só investimentos em cryptomoedas podem proporcionar. Caso tenha interesse em evoluir sua parceria conosco e ser um investidor, preencha o formulário.'

                    , 'section.why.title': 'POR QUE A'
                    , 'section.why.subtitle': 'SPPYNS?'
                    , 'section.why.jumbo.p': 'As Cryptomoedas e todas as oportunidades que elas trazem vieram para ficar, mas ainda é um espaço dominado por por apaixonados por tecnologia, os Geeks em sua maioria, nosso desafio é desmistificar isto e mostrar que com boa informação e boa assessoria todos podem buscar novas oportunidades de ganhos e opções de investimentos.'


                    , 'section.why.top.title': 'EXPERTISE'
                    , 'section.why.top.p1': 'Criamos a Sppyns porque acreditamos que além da Tecnologia, as pessoas são nosso mais importante ativo.'
                    , 'section.why.top.p2': 'Por isso, nos cercamos de profissionais de várias áreas de atuação, que tivessem vivências distintas, complementares e com a mesma paixão por criar algo novo e surpreendente.'

                    , 'section.why.bot.title': 'INOVAÇÃO'
                    , 'section.why.bot.p1': 'Neste mercado, antecipar-se às tendências e estar preparado para rápidos movimentos é essencial.'
                    , 'section.why.bot.p2': 'Para isso, buscamos pessoas e parceiros com a experiência, conhecimento e uma grande vontade de fazer sempre mais pelos nossos clientes.'
                    , 'section.why.bot.p3': 'Buscamos as mais inovadoras tecnologias e processos para ter sempre as melhores opções de serviços e consultoria em cryptoinvestimentos.'


                    , 'header.menu.home': 'Home'
                    , 'header.menu.oque': 'O que fazemos'
                    , 'header.menu.quem': 'Quem somos'
                    , 'header.menu.porque': 'Por que a Sppyns?'
                    , 'header.menu.contato': 'Contato'
                    , 'header.menu.invista': 'Invista'

                    , 'vld.a': 'Preencha as informações, (Email, Nome, Telefone, Documento) antes de enviar.'
                    , 'vld.b': 'Dados enviado com sucesso.'
                    , 'vld.c': 'Erro ao enviar os seus dados.'
                    , 'vld.d': 'Preencha as informações antes de enviar.'

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
