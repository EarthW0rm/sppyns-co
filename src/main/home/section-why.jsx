import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-why" id="section-why">
            <div>
                <div className="row line">
                    <div className="why">
                        <div className="jumbo">
                            <span className="title">{t('section.why.title')}</span>
                            <span className="sub-title">{t('section.why.subtitle')}</span>
                            <hr className="separator" />
                            <p>{t('section.why.jumbo.p')}</p>
                        </div>
                    </div>
                    <div className="col hight">
                        <div className="holder-block">
                            <div className="highlight">
                                <h2>{t('section.why.top.title')}</h2>
                                <p>{t('section.why.top.p1')}</p>
                                <p>{t('section.why.top.p2')}</p>
                                <h2>{t('section.why.bot.title')}</h2>
                                <p>{t('section.why.bot.p1')}</p>
                                <p>{t('section.why.bot.p2')}</p>
                                <p>{t('section.why.bot.p3')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
