import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-products" id="section-products">
            <div className="row">
                <div className="col">
                    <div>
                        <h2>{t('products.a.title')}</h2>
                        <hr />
                        <p>{t('products.a.p')}</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <h2>{t('products.b.title')}</h2>
                        <hr />
                        <p>{t('products.b.p')}</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <h2>{t('products.c.title')}</h2>
                        <hr />
                        <p>{t('products.c.p')}</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <h2>{t('products.d.title')}</h2>
                        <hr />
                        <p>{t('products.d.p')}</p>
                    </div>
                </div>

                <div className="col">
                    <div>
                        <h2>{t('products.e.title')}</h2>
                        <hr />
                        <p>{t('products.e.p')}</p>
                    </div>
                </div>

            </div>
        </section>
    )
})
