import React from 'react';
import GoogleMapReact from 'google-map-react';
import PinImage from '../../images/pin.png';

const Marker = props => {
    return (<div className="SuperAwesomePin">
        <img src={PinImage} />
    </div>)
}

export default props => (
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
            </div>
        </div>
    </section>    
)