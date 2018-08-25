import React from 'react'

import SectionJumbotron from './section-jumbotron';
import SectionContact from './section-contact';
import SectionProduct from './section-products';
import SectionHistory from './section-history';
import SectionTeam from './section-team';
import SectionWhy from './section-why';


export default props => (
    <div className="container-fluid">
        <SectionJumbotron />
        <SectionProduct />
        <SectionWhy />
        <SectionHistory />
        <SectionTeam />
        <SectionContact />
    </div>
)