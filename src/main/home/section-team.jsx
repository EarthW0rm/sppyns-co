import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-team" id="section-team">
            <div className="container">
                <div className="row">
                    <div>
                        <div className="row">
                            <h2>{t('team.title')}</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>{t('team.people.a.name')}</h3>
                                <span>{t('team.people.a.cargo')}</span>
                                <p>{t('team.people.a.press')}</p>
                            </div>
                            <div className="col">
                                <h3>{t('team.people.b.name')}</h3>
                                <span>{t('team.people.b.cargo')}</span>
                                <p>{t('team.people.b.press')}</p>
                            </div>
                            <div className="col">
                                <h3>{t('team.people.c.name')}</h3>
                                <span>{t('team.people.c.cargo')}</span>
                                <p>{t('team.people.c.press')}</p>
                            </div>
                            <div className="col">
                                <h3>{t('team.people.d.name')}</h3>
                                <span>{t('team.people.d.cargo')}</span>
                                <p>{t('team.people.d.press')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
