import { createStore } from 'redux';
import textReducer from './reducers/textReducer';

export default createStore(textReducer);