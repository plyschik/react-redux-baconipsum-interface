import * as actions from './../constants';

const textReducer = (state = {
    loading: false,
    type: 'all-meat',
    paras: 1,
    startWithLorem: 0,
    text: []
}, action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            if (typeof(action.payload) !== 'boolean') {
                return state;
            }

            return {
                ...state,
                loading: action.payload
            };
        case actions.SET_TYPE:
            if (['all-meat', 'meat-and-filler'].indexOf(action.payload) < 0) {
                return state;
            }

            return {
                ...state,
                type: action.payload
            };
        case actions.SET_PARAS:
            if (action.payload <= 0 && action.payload > 100) {
                return state;
            }

            return {
                ...state,
                paras: action.payload
            };
        case actions.SET_STARTWITHLOREM:
            if (['0', '1'].indexOf(action.payload) < 0) {
                return state;
            }

            return {
                ...state,
                startWithLorem: action.payload
            };
        case actions.SET_TEXT:
            return {
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
};

export default textReducer;