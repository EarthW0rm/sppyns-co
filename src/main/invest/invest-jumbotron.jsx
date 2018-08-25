import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <div className="invest-jumbotron">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="jumbotron--title">{t('invest.jumbo.title')}</h1>
                    <p className="jumbotron-sub-title">{t('invest.jumbo.subtitle')}</p>
                    <hr className="separator" />
                    <p>{t('invest.jumbo.p')}</p>
                </div>
            </div>
        </div>
    )
})
