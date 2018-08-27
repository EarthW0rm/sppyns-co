import React from 'react';
import { Link } from 'react-router-dom';
import placeHolder from '../images/_company_logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import i18n from 'i18next';

import { translate } from 'react-i18next';

export default translate()((props) => {
    const { t, tReady } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img alt="" data-type="image" src={placeHolder} style={{width: '221px', height: '44px'}} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav middle-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{t('header.menu.home')}</a>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#section-products">{t('header.menu.oque')}</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#section-why">{t('header.menu.porque')}</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#section-history">{t('header.menu.quem')}</AnchorLink>
                        </li>                        
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#section-invest">{t('header.menu.invista')}</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#section-contact" offset='0' >{t('header.menu.contato')}</AnchorLink>
                        </li>                        
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item login">
                            <a className="nav-link sign-up" href={t('home.link.login')} >Sign-Up/Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
})
