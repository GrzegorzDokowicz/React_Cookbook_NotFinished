export const SCROLL_TO = 'SCROLL_TO_TOP';
export const REGISTER_ALERT = 'REGISTER_ALERT';
export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

let id = 1;

export const scrollTo = state => ({
    type: SCROLL_TO,
    payload: state
});

export const registerAlert = (alertMessage, type = 'info') => ({
    type: REGISTER_ALERT,
    payload: {
        id: id++,
        text: alertMessage,
        type
    }
});

export const addAlert = payload => ({
    type: ADD_ALERT,
    payload
});

export const removeAlert = id => ({
    type: REMOVE_ALERT,
    payload: {
        id
    }
});
