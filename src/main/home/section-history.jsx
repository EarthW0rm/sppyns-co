import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-history" id="section-history">
            <div className="container-fluid">            
                <div className="row line">
                    <div className="col">
                        <div>
                            <div className="ico"><i className="fab fa-readme"></i></div>
                            <h2>{t('history.one.title')}</h2>
                            <hr />
                            <div>
                                <p>{t('history.one.p1')}</p>
                                <p>{t('history.one.p2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <div className="ico"><i className="fas fa-users"></i></div>
                            <h2>{t('history.two.title')}</h2>
                            <hr />
                            <div>
                                <p>{t('history.two.p1')}</p>
                                <p>{t('history.two.p2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <div className="ico"><i className="fas fa-eye"></i></div>
                            <h2>{t('history.three.title')}</h2>
                            <hr />
                            <div>
                                <p>{t('history.three.p1')}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
})
