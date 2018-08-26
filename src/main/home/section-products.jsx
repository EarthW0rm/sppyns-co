import React from 'react';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <section className="section-products" id="section-products">
            <div className="row line-product">
                <div className="col product">
                    <div>
                        <div className="ico">
                            <i className="fas fa-th"></i>
                        </div>
                        <h2>{t('products.a.title')}</h2>
                        <hr className="separator" />
                        <p>{t('products.a.p')}</p>
                    </div>
                </div>

                <div className="col product dark">
                    <div>
                        <div className="ico">
                            <i className="fas fa-receipt"></i>
                        </div>
                        <h2>{t('products.b.title')}</h2>
                        <hr className="separator" />
                        <p>{t('products.b.p')}</p>
                    </div>
                </div>

                <div className="col product">
                    <div>
                        <div className="ico">
                            <i className="fab fa-bitcoin"></i>
                        </div>
                        <h2>{t('products.c.title')}</h2>
                        <hr className="separator" />
                        <p>{t('products.c.p')}</p>
                    </div>
                </div>

                <div className="col product dark">
                    <div>
                        <div className="ico">
                            <i className="far fa-comments"></i>
                        </div>
                        <div className="title">
                            <h2>{t('products.d.title')}</h2>
                        </div>
                        <hr className="separator" />
                        <p>{t('products.d.p')}</p>
                    </div>
                </div>

                <div className="col product">
                    <div>
                        <div className="ico">
                            <i className="fa fa-check-double"></i>
                        </div>
                        <h2>{t('products.e.title')}</h2>
                        <hr className="separator" />
                        <p>{t('products.e.p')}</p>
                    </div>
                </div>

            </div>
        </section>
    )
})
