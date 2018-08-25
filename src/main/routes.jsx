import React from 'react'
import {  BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './home/home'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Home} />
    </Switch>
)