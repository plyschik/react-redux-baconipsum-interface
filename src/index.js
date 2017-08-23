import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

const reducer = (state = {
    type:           'all-meat',
    paras:          4,
    startWithLorem: 0,
    loading:        false,
    text:           []
}, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE':
            if (['all-meat', 'meat-and-filler'].indexOf(action.payload) >= 0) {
                state = {
                    ...state,
                    type: action.payload
                };
            }
        break;
        case 'CHANGE_PARAS':
            if (action.payload > 0 && action.payload <= 100) {
                state = {
                    ...state,
                    paras: action.payload
                };
            }
        break;
        case 'CHANGE_STARTWITHLOREM':
            if (['0', '1'].indexOf(action.payload) >= 0) {
                state = {
                    ...state,
                    startWithLorem: action.payload
                };
            }
        break;
        case 'SET_LOADING':
            if (typeof(action.payload) === 'boolean') {
                state = {
                    ...state,
                    loading: action.payload
                };
            }
        break;
        case 'CHANGE_TEXT':
            state = {
                ...state,
                text: action.payload
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