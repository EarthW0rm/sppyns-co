import React from 'react'
import { Container, Jumbotron, Row, Card, Col, CardBody, CardTitle, CardText } from 'reactstrap'
import GoogleMapReact from 'google-map-react';
import PinImage from '../images/pin.png';
const Marker = props => {
    return (<div className="SuperAwesomePin">
        <img src={PinImage} />
    </div>)
}

export default props => (
    <Container fluid={true} >
        <Jumbotron fluid={true} className="section-jumbo">
            <h1 className="section-jumbo--title">CRYPTO</h1>
            <p className="lead">INVESTMENTS</p>
            <hr className="my-2" />
            <p>Bitcoin, ICOs, Etherium, BlockChain, Litecoin, Monero, Mineração, Ripple. Você com certeza já ouviu estes termos nos últimos tempos, mas não compreendeu muito bem e quer saber mais sobre como esse mercado funciona.</p>
            <p>Quer investir neste mercado, mas acha que tudo isso é coisa só para Geeks e Nerds? Pode ficar tranquilo! A Sppyns é seu ponto de partida e vamos te levar neste caminho!</p>
        </Jumbotron>
        <div className="row">
            <Col>
                <div>
                    <h2>PLATAFORMA DE FUNDOS EM CRYPTOATIVOS</h2>
                    <hr />
                    <CardText>Desenvolvemos opções de investimentos em cryptomoedas de forma segura e buscamos as melhores opções para cada perfil de investidor, sempre com transparência, informação e performance.</CardText>
                </div>
            </Col>

            <Col>
                <div>
                    <h2>COMPRA E VENDA DE TOKENS E MOEDAS DIGITAIS</h2>
                    <hr />
                    <CardText>Quer comprar ou vender cryptomoedas e tokens? Temos a expertise, as melhores parcerias para oferecer taxas competitivas e opções seguras para nossos clientes.</CardText>
                </div>
            </Col>

            <Col>
                <div>
                    <h2>GESTÃO DE CRYPTOMOEDAS E TOKENS</h2>
                    <hr />
                    <CardText>Conte com nossa experiência e estrutura para entender e ter uma gestão profissional de seus ativos. Aproveite a maior revolução no mundo dos investimentos até agora.</CardText>
                </div>
            </Col>

            <Col>
                <div>
                    <h2>CONSULTORIA EM INVESTIMENTOS</h2>
                    <hr />
                    <CardText>Quer receber e pagar em Bitcoins e outros ativos digitais e fazer parte desta revolução tecnológica? Conte com a nossa consultoria para entender como é barato, eficiente e seguro receber em cryptomoedas</CardText>
                </div>
            </Col>

            <Col>
                <div>
                    <h2>ICOs INITIAL COIN OFFERINGS</h2>
                    <hr />
                    <CardText>Temos o conhecimento e as plataformas para apoiar você no caminho de levar seu negócio a esta nova era de oportunidades, de forma segura e ética.</CardText>
                </div>
            </Col>
        </div>
        <div className="row">
            <Col>
                <Jumbotron>
                    <h1 className="display-3">POR QUE A</h1>
                    <p className="lead">SPPYNS?</p>
                    <hr className="my-2" />
                    <p>As Cryptomoedas e todas as oportunidades que elas trazem vieram para ficar, mas ainda é um espaço dominado por por apaixonados por tecnologia, os Geeks em sua maioria, nosso desafio é desmistificar isto e mostrar que com boa informação e boa assessoria todos podem buscar novas oportunidades de ganhos e opções de investimentos.</p>
                </Jumbotron>
            </Col>
            <Col>
                <div className="row">
                    <h2>EXPERTISE</h2>
                    <p>Criamos a Sppyns porque acreditamos que além da Tecnologia, as pessoas são nosso mais importante ativo.</p>
                    <p>Por isso, nos cercamos de profissionais de várias áreas de atuação, que tivessem vivências distintas, complementares e com a mesma paixão por criar algo novo e surpreendente.</p>
                </div>
                <div className="row">
                    <h2>INOVAÇÃO</h2>
                    <p>Neste mercado, antecipar-se às tendências e estar preparado para rápidos movimentos é essencial.</p>
                    <p>Para isso, buscamos pessoas e parceiros com a experiência, conhecimento e uma grande vontade de fazer sempre mais pelos nossos clientes.</p>
                    <p>Buscamos as mais inovadoras tecnologias e processos para ter sempre as melhores opções de serviços e consultoria em cryptoinvestimentos.</p>
                </div>
            </Col>
        </div>
        <div className="row">
            <Col>
                <div>
                    <h2>NOSSA HISTÓRIA</h2>
                    <hr />
                    <div>
                        <p>A Sppyns nasceu em novembro de 2017, fruto da vontade e do espírito inovador de quatro empreendedores que, a partir de uma ideia disruptiva do nosso CEO, Gabriel Moreira.</p>
                        <p>Trabalhamos meses concebendo juntos cada produto, cada processo de negócio, cada nova forma de oferecer os melhores serviços a você, nosso cliente e investidor.</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div>
                    <h2>QUEM SOMOS</h2>
                    <hr />
                    <div>
                        <p>Uma empresa ágil, que busca todos os dias as melhores opções de investimento em cryptomoedas, e que trabalha para que esta nova forma de ativos seja acessível a todos os perfis de investidores.</p>
                        <p>Buscamos apresentar estas novas opções de investimentos, e também educar neste novo mundo quem busca por boas oportunidades de rentabilizar seu patrimônio.</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div>
                    <h2>NOSSA VISÃO</h2>
                    <hr />
                    <div>
                        <p>Nosso horizonte não tem fronteiras e operamos nos principais mercados de cryptomoedas do mundo, buscando oportunidades e eficiência operacional.</p>
                    </div>
                </div>
            </Col>
        </div>
        <div className="row">
            <div>
                <div className="row">
                    <h2>Nosso Time</h2>
                </div>
                <div className="row">
                    <Col>
                        <h3>Rodrigo Csizmar Borges</h3>
                        <span>COO e Founder</span>
                        <p>Business Developer, IT Sales Executive, Blockchain, Cryptocurrencies e Innovation</p>
                    </Col>
                    <Col>
                        <h3>Gabriel Moreira</h3>
                        <span>CEO e Founder</span>
                        <p>IT Sales Expert, Empreendedor, Entusiasta das Cryptocurrencies e Blockchain</p>
                    </Col>
                    <Col>
                        <h3>Lucas Cabral</h3>
                        <span>CTO e Founder</span>
                        <p>Hardware Jedi, Entusiasta de Blockchain e Technical Trust</p>
                    </Col>
                    <Col>
                        <h3>Leonardo Faviere</h3>
                        <span>Expansion e Founder</span>
                        <p>Senior Investment Advisor e Empreendedor</p>
                    </Col>
                </div>
            </div>
        </div>
        <div className="row">
            <Col>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDHscuvNYRXl2DITVK4QGtzcyXC709EUTk' }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom={11}>
                        <Marker lat={59.95} lng={30.33} />
                    </GoogleMapReact>
                </div>
            </Col>
            <Col>
                <div>
                    <div className="row">
                        <span>Fale coma gente</span>
                    </div>
                    <div className="row">
                        <div>
                            <span><b>Endereço:</b></span>
                            <p>Tartu maakond, Tartu linn Riia tn 128, 50411, Estônia</p>
                        </div>
                        <div>
                            <span><b>E-mail:</b></span>
                            <p>atendimento@sppyns.co</p>
                        </div>
                        <div>
                            <span><b>Telefone:</b></span>
                            <p>+55 11 9 8339-8994</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email*" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nome*" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Assunto" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mensagen" />
                            </div>
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>


                </div>
            </Col>

        </div>
    </Container>
)