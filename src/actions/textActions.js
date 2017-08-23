export function setType(event) {
    return {
        type: 'SET_TYPE',
        payload: event.target.value
    }
}

export function setParas(event) {
    return {
        type: 'SET_PARAS',
        payload: event.target.value
    }
}

export function setStartWithLorem(event) {
    return {
        type: 'SET_STARTWITHLOREM',
        payload: event.target.value
    }
}

export function setLoading(value) {
    return {
        type: 'SET_LOADING',
        payload: value
    }
}

export function setText(text) {
    return {
        type: 'SET_TEXT',
        payload: text
    }
}