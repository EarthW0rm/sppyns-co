import React from 'react';
import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-jumbotron" id="section-jumbotron">
            <div className="jumbotron">
                <div className="title-box">
                    <span className="title">{t('home.section.jumbo.title')}</span>
                    <span className="sub-title">{t('home.section.jumbo.subTitle')}</span>
                    <hr className="separator" />
                    <div className="description">
                        <p>{t('home.section.jumbo.firstP')}</p>
                        <p>{t('home.section.jumbo.secondP')}</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
})
