import React from 'react';

import InvestForm from './invest-form'
import InvestJumbotron from './invest-jumbotron'

export default props => (
    <div className="container-fluid" id="section-invest">
        <div className="row">
            <div className="col">
                <InvestJumbotron />
            </div>
            <div className="col">
                <InvestForm />
            </div>
        </div>
    </div>
)