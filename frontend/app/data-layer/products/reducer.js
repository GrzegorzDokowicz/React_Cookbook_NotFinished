import {ADD_PRODUCT, SEARCH_PRODUCT, SET_PRODUCTS} from './actions';

const initialState = {
    isLoading: false,
    elements: [],
    currentResults: []
};

const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
    case SET_PRODUCTS:
        return {
            ...state,
            elements: payload
        };
    case SEARCH_PRODUCT:
        return {
            ...state,
            currentResults: payload
        };
    case ADD_PRODUCT:
        return {
            ...state,
            elements: [
                ...state.elements,
                payload
            ]
        };
    default:
        return state;
    }
};

export default productsReducer;
