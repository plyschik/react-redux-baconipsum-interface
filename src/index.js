import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();