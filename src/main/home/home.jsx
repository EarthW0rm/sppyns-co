import React from 'react';

import SectionJumbotron from './section-jumbotron';
import SectionContact from './section-contact';
import SectionProduct from './section-products';
import SectionHistory from './section-history';
import SectionTeam from './section-team';
import SectionWhy from './section-why';
import SectionInvest from '../invest/invest';

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
                    <a href="#section-footer"><i className="fab fa-facebook-square"></i></a>
                    <a href="#section-footer"><i className="fab fa-twitter-square"></i></a>
                    <a href="#section-footer"><i className="fab fa-google-plus-square"></i></a>
                </div>
                <span>
                    © 2018 by SPPYNS. No Geek? No problem!
                </span>
            </div>
        </section>
    </div>
)