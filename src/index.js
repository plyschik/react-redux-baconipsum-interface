import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import textReducer from './reducers/textReducer';
import Application from './components/Application';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    textReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={ store }>
        <Application />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();