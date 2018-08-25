import 'modules/bootstrap/dist/js/bootstrap'
import 'modules/font-awesome/css/font-awesome.min.css'

import './sass/main'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(<Provider store={store}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Provider>
                , document.getElementById('app'));