import {SCROLL_TO} from "./actions";

const initialState = {
    scrollTo: {
        state: false,
        name: ""
    }
};

const pageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SCROLL_TO:
            return {
                ...state,
                scrollTo: {...payload}
            };
        default:
            return state;
    }
};

export default pageReducer;
