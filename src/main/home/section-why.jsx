import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-team" id="section-why">
            <div>
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1 className="jumbotron--title">{t('section.why.title')}</h1>
                            <p className="jumbotron-sub-title">{t('section.why.subtitle')}</p>
                            <hr className="separator" />
                            <p>{t('section.why.jumbo.p')}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h2>{t('section.why.top.title')}</h2>
                            <p>{t('section.why.top.p1')}</p>
                            <p>{t('section.why.top.p2')}</p>
                        </div>
                        <div className="row"> 
                            <h2>{t('section.why.bot.title')}</h2>
                            <p>{t('section.why.bot.p1')}</p>
                            <p>{t('section.why.bot.p2')}</p>
                            <p>{t('section.why.bot.p3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
