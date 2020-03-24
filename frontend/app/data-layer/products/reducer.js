import {SET_PRODUCTS} from "./actions";

const initialState = {
    isLoading: false,
    elements: []
};

const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                elements: payload
            };
        default:
            return state;
    }
};

export default productsReducer;
