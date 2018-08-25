import React from 'react'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './home/home'
import Invest from './invest/invest'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/invista" component={Invest} />
        <Redirect from='*' to='/' />
    </Switch>
)