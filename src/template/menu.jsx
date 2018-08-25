import React from 'react';
import { Link } from 'react-router-dom';
import placeHolder from '../images/_company_logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import i18n from 'i18next';

export default props => (
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
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href="#section-products">O que fazemos</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href="#section-team">Quem somos</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href="#section-why">Por que a Sppyns?</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href="#section-contact" offset='0' >Contato</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href="#section-invest">Invista</AnchorLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {i18n.changeLanguage("pt-BR")} }>PT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {i18n.changeLanguage("en-US")} }>EN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => {i18n.changeLanguage("fr-FR")} }>FR</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

)