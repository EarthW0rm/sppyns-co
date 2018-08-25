import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-history container" id="section-history">
            <div className="row">
                <div className="col">
                    <div>
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
                        <h2>{t('history.three.title')}</h2>
                        <hr />
                        <div>
                            <p>{t('history.three.p1')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
