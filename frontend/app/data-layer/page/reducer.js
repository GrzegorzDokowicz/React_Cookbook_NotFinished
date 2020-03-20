import {SCROLL_TO, ADD_ALERT, REMOVE_ALERT} from "./actions";

const initialState = {
    scrollTo: {
        state: false,
        name: ""
    },
    alerts: []
};

const pageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SCROLL_TO:
            return {
                ...state,
                scrollTo: {...payload}
            };
        case ADD_ALERT:
            return {
                ...state,
                alerts: [...state.alerts, payload]
            };
        case REMOVE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(({id}) => id !== payload.id)
            };
        default:
            return state;
    }
};

export default pageReducer;
