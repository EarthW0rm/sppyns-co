import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PinImage from '../../images/pin.png';
import { translate } from 'react-i18next';
import axios from 'axios'


const Marker = props => {
    return (<div className="SuperAwesomePin">
        <i className="fas fa-map-pin"></i>
        {/* <span>Nosso escritorio.</span> */}
    </div>)
}

class SectionContact extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: ''
            , email: ''
            , assunto: ''
            , mensagem: ''
        };
    }

    SendForm() {
        const { t, tReady } = this.props;

        var data = {...this.state}
        data.Formualario = 'CONTATO'

        if(!data.email || !data.nome || !data.assunto || !data.mensagem){
            window.alert(t('vld.d'));
            return;
        }

        axios.post('/sendEmail', data)
          .then((response) => {
            window.alert(t('vld.b'));
            this.setState({
                nome: ''
                , email: ''
                , assunto: ''
                , mensagem: ''
            })
          })
          .catch((error) => {
            console.log(error.message);
            this.setState({
                nome: ''
                , email: ''
                , assunto: ''
                , mensagem: ''
            })

            window.alert(t('vld.c'));
          });
    }

    render() {
        const { t, tReady } = this.props;

        return (
            <section className="section-contact" id="section-contact">
                <div className="row">
                    <div className="col map-contact">
                        <div style={{ height: '100%' }} className="map-place">
                            <GoogleMapReact zoom={16}
                                bootstrapURLKeys={{ key: 'AIzaSyDHscuvNYRXl2DITVK4QGtzcyXC709EUTk' }}
                                defaultCenter={{
                                    lat: 58.360657,
                                    lng: 26.688978
                                }}
                                defaultZoom={16}>
                                <Marker lat={58.360657} lng={26.688978} />
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col contact-form">
                        <div>
                            <div className="row">
                                <div className="form">

                                    <div className="contact-address">

                                        <div className="title">
                                            <h3>{t('home.section.contact.fale')}</h3>
                                        </div>
                                        <div className="address">
                                            <label>{t('home.section.contact.endereco')}</label>
                                            <p>{t('home.section.contact.endereco.valor')}</p>
                                            <label>{t('home.section.contact.email')}</label>
                                            <p>{t('home.section.contact.email.valor')}</p>
                                            <label>{t('home.section.contact.tel')}</label>
                                            <p>{t('home.section.contact.tel.valor')}</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={t('form.email')} 
                                            value={ this.state.email }
                                            onChange={(event) => { this.setState({...this.state, email: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={t('form.nome')} 
                                            value={ this.state.nome }
                                            onChange={(event) => { this.setState({...this.state, nome: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={t('form.assunto')} 
                                            value={ this.state.assunto }
                                            onChange={(event) => { this.setState({...this.state, assunto: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows={4} type="text" className="form-control msg" placeholder={t('form.mensagen')}  
                                            value={ this.state.mensagem }
                                            onChange={(event) => { this.setState({...this.state, mensagem: event.target.value }) }}/>
                                    </div>
                                    <div className="form-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => {this.SendForm()}}>{t('form.botao')}</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        )   
    }
}

export default translate()(SectionContact);
