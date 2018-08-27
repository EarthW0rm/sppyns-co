import React from 'react';

import SectionJumbotron from './section-jumbotron';
import SectionContact from './section-contact';
import SectionProduct from './section-products';
import SectionHistory from './section-history';
import SectionTeam from './section-team';
import SectionWhy from './section-why';
import SectionInvest from '../invest/invest';

import i18n from 'i18next';

export default props => (
    <div className="container-fluid">
        <SectionJumbotron />
        <SectionProduct />
        <SectionWhy />
        <SectionHistory />
        <SectionTeam />
        <SectionInvest />
        <SectionContact />
        <section id="section-footer" className="section-footer">
            <div className="container">
                <div className="social">
                    <a onClick={() => {i18n.changeLanguage("pt-BR")} }>PT</a>
                    <a onClick={() => {i18n.changeLanguage("en-US")} }>EN</a>
                    <a onClick={() => {i18n.changeLanguage("fr-FR")} }>FR</a>
                </div>
                <span>
                    © 2018 by SPPYNS. No Geek? No problem!
                </span>
            </div>
        </section>
    </div>
)