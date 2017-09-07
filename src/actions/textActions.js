import * as actions from './../constants';

export const setLoading = (value) => ({
    type: actions.SET_LOADING,
    payload: value
});

export const setType = (event) => ({
    type: actions.SET_TYPE,
    payload: event.target.value
});

export const setParas = (event) => ({
    type: actions.SET_PARAS,
    payload: event.target.value
});

export const setStartWithLorem = (event) => ({
    type: actions.SET_STARTWITHLOREM,
    payload: event.target.value
});

export const setText = (text) => ({
    type: actions.SET_TEXT,
    payload: text
});

export const fetchApi = () => {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(setLoading(true));

        fetch('https://baconipsum.com/api/?type=' + state.type + '&paras=' + state.paras + '&start-with-lorem=' + state.startWithLorem)
            .then(response => response.json())
            .then(response => {
                dispatch(setText(response));
                dispatch(setLoading(false));
            })
        ;
    };
};