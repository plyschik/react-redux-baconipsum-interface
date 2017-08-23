const textReducer = (state = {
    type:           'all-meat',
    paras:          1,
    startWithLorem: 0,
    loading:        false,
    text:           []
}, action) => {
    switch (action.type) {
        case 'SET_TYPE':
            if (['all-meat', 'meat-and-filler'].indexOf(action.payload) >= 0) {
                state = {
                    ...state,
                    type: action.payload
                };
            }
        break;
        case 'SET_PARAS':
            if (action.payload > 0 && action.payload <= 100) {
                state = {
                    ...state,
                    paras: action.payload
                };
            }
        break;
        case 'SET_STARTWITHLOREM':
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
        case 'SET_TEXT':
            state = {
                ...state,
                text: action.payload
            };
        break;
    }

    return state;
};

export default textReducer;