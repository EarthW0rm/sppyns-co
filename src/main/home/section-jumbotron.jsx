import React from 'react';
import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-jumbotron" id="section-jumbotron">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="jumbotron--title">{t('home.section.jumbo.title')}</h1>
                    <p className="jumbotron-sub-title">{t('home.section.jumbo.subTitle')}</p>
                    <hr className="separator" />
                    <p>{t('home.section.jumbo.firstP')}</p>
                    <p>{t('home.section.jumbo.secondP')}</p>
                </div>
            </div>
        </section>
    )
})
