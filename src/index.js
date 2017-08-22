import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducer = (state = {
    type: 'meat-and-filler',
    paras: 4,
    startWithLorem: 1
}, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE':
            state = {
                ...state,
                type: action.payload
            };
        break;
        case 'CHANGE_PARAS':
            state = {
                ...state,
                paras: action.payload
            };
        break;
        case 'CHANGE_STARTWITHLOREM':
            state = {
                ...state,
                startWithLorem: action.payload
            };
        break;
    }

    return state;
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
