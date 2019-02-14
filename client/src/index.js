import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom'
import Routes from './routes';
//css
import './Resources/css/styles.css';
//redux
import { Provider } from 'react-redux';
//store data
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    
    ,document.getElementById('root'));
