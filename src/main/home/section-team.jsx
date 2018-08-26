import React from 'react';

import { translate } from 'react-i18next';

import ft1 from '../../images/_team-coo.jpg';
import ft2 from '../../images/_team-ceo.jpg';
import ft3 from '../../images/_team-cto.jpg';
import ft4 from '../../images/_team-exp.png';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-team" id="section-team">
            <div className="container">
                <div className="row title">
                    <h2>{t('team.title')}</h2>
                </div>
                <hr className="separator" />
                        
                <div className="row">
                    <div className="col people">
                        <div className="photo">
                            <img src={ft1} />
                        </div>
                        <div className="info">
                            <h3>{t('team.people.a.name')}</h3>
                            <span>{t('team.people.a.cargo')}</span>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/rodrigocborges/" target="_blanck">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>                            
                            <p>{t('team.people.a.press')}</p>
                        </div>
                    </div>
                    <div className="col people">
                        <div className="photo">
                            <img src={ft2} />
                        </div>
                        <div className="info">
                            <h3>{t('team.people.b.name')}</h3>
                            <span>{t('team.people.b.cargo')}</span>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/gabrielmoreira/" target="_blanck">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>                            
                            <p>{t('team.people.b.press')}</p>
                        </div>
                    </div>
                    <div className="col people">
                        <div className="photo">
                            <img src={ft3} />
                        </div>
                        <div className="info">
                            <h3>{t('team.people.c.name')}</h3>
                            <span>{t('team.people.c.cargo')}</span>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/lucas-cabral-66187b1a/" target="_blanck">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>                            
                            <p>{t('team.people.c.press')}</p>
                        </div>
                    </div>
                    <div className="col people">
                        <div className="photo">
                            <img src={ft4} />
                        </div>
                        <div className="info">
                            <h3>{t('team.people.d.name')}</h3>
                            <span>{t('team.people.d.cargo')}</span>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/leonardo-governo-faviere-3511b428/" target="_blanck">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>                            
                            <p>{t('team.people.d.press')}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
})
