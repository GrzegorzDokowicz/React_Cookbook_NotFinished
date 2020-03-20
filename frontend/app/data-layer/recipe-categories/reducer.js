import {ADD_RECIPE_CATEGORY_ACTION, SET_CATEGORY_DATA_ACTION} from "./actions";

const initialState = {
    isLoading: false,
    elements: []
};


const categoriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_RECIPE_CATEGORY_ACTION:
            return {
                ...state,
                elements: [
                    ...state.elements,
                    payload
                ]
            };
        case SET_CATEGORY_DATA_ACTION:
            return {
                ...state,
                elements: [...payload]
            };
        default:
            return state;
    }
};

export default categoriesReducer;
