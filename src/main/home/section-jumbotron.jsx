import React from 'react';
import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-jumbotron" id="section-jumbotron">
            <div className="jumbo">
                <div className="title-box">
                    <p className="title">{t('home.section.jumbo.title')}</p>
                    <p className="sub-title">{t('home.section.jumbo.subTitle')}</p>
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
