import 'bootstrap/dist/js/bootstrap';
import './sass/main';
//import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';
// import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/app';
import reducers from './main/reducers';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk,  promise)(createStore)(reducers, devTools);
ReactDOM.render(<Provider store={store}>
    <I18nextProvider i18n={i18n}>
        <HashRouter>
            <App />
        </HashRouter>
    </I18nextProvider>
</Provider>
    , document.getElementById('app'));
