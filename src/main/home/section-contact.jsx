import React from 'react';
import GoogleMapReact from 'google-map-react';
import PinImage from '../../images/pin.png';
import { translate } from 'react-i18next';

const Marker = props => {
    return (<div className="SuperAwesomePin">
        <img src={PinImage} />
    </div>)
}

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-contact" id="section-contact">
            <div className="row">
                <div className="col">
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
                </div>
                <div className="col">
                    <div>
                        <div className="row">
                            <span>{t('home.section.contact.fale')}</span>
                        </div>
                        <div className="row">
                            <div>
                                <span><b>{t('home.section.contact.endereco')}</b></span>
                                <p>{t('home.section.contact.endereco.valor')}</p>
                            </div>
                            <div>
                                <span><b>{t('home.section.contact.email')}</b></span>
                                <p>{t('home.section.contact.email.valor')}</p>
                            </div>
                            <div>
                                <span><b>{t('home.section.contact.tel')}</b></span>
                                <p>{t('home.section.contact.tel.valor')}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('home.section.contact.form.email')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('home.section.contact.form.nome')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('home.section.contact.form.assunto')} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t('home.section.contact.form.mensagen')} />
                                </div>
                                <button type="button" className="btn btn-primary">{t('home.section.contact.form.botao')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
})
