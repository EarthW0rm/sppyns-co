import React from 'react'
import { Link } from 'react-router-dom';
import placeHolder from '../images/_company_logo.png'
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
                        <a className="nav-link" href="#">O que fazemos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quem somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Por que a Sppyns?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Invista</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">PT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">EN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FR</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

)