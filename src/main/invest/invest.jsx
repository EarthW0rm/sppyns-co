import React from 'react';

import InvestForm from './invest-form'
import InvestJumbotron from './invest-jumbotron'

export default props => (
    <div className="section-invest" id="section-invest">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <InvestJumbotron />
                </div>
                <div className="col">
                    <InvestForm />
                </div>
            </div>
        </div>
    </div>
)