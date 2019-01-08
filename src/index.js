import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries.js';
import { reducer } from './reducers/countries-reducer.js';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

render(
    <Provider store={store}>
    	<div>
        	<h1>Inicjalizacja projektu</h1>
        	<DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());