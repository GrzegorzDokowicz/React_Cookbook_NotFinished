import {ADD_RECIPE_CATEGORY_ACTION, SET_CATEGORY_DATA_ACTION, SET_RECIPES_IN_CATEGORY} from './actions';

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
    case SET_RECIPES_IN_CATEGORY:
        return {
            ...state,
            elements: state.elements.map(element => {
                if (element.id === payload.id) {
                    return {
                        ...element,
                        recipes: payload.recipes
                    };
                }

                return element;
            })
        };
    default:
        return state;
    }
};

export default categoriesReducer;
