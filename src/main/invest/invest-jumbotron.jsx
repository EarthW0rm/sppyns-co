import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <div className="invest-jumbotron">
        
            <div className="jumbo">
                <div className="title-box">
                    <div className="titles">
                        <h1 className="sub-title">{t('invest.jumbo.title')}</h1>
                        <p className="title">{t('invest.jumbo.subtitle')}</p>
                    </div>
                    <hr className="separator" />
                    <p>{t('invest.jumbo.p')}</p>
                </div>
            </div>
        
        </div>
    )
})
