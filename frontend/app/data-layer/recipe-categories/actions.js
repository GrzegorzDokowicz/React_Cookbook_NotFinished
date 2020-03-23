export const ADD_RECIPE_CATEGORY_ACTION = 'ADD_RECIPE_CATEGORY_ACTION';
export const REGISTER_RECIPE_CATEGORY_ACTION = 'REGISTER_RECIPE_CATEGORY_ACTION';
export const INIT_CATEGORY_DATA_ACTION = 'INIT_CATEGORY_DATA_ACTION';
export const SET_CATEGORY_DATA_ACTION = 'SET_CATEGORY_DATA_ACTION';
export const LOADING_CATEGORIES_ACTION = 'LOADING_CATEGORIES_ACTION';
export const LOAD_RECIPES_IN_CATEGORY = 'LOAD_RECIPES_IN_CATEGORY';
export const SET_RECIPES_IN_CATEGORY = 'SET_RECIPES_IN_CATEGORY';

export const addRecipeCategory = payload => ({
    type: ADD_RECIPE_CATEGORY_ACTION,
    payload
});

export const registerRecipeCategory = payload => ({
    type: REGISTER_RECIPE_CATEGORY_ACTION,
    payload
});

export const initCategoriesData = () => ({
    type: INIT_CATEGORY_DATA_ACTION
});

export const setCategoriesData = (payload) => ({
    type: SET_CATEGORY_DATA_ACTION,
    payload
});

export const setCategoriesLoading = state => ({
    type: LOADING_CATEGORIES_ACTION,
    payload: {
        state
    }
});

export const getRecipesInCategory = id => ({
    type: LOAD_RECIPES_IN_CATEGORY,
    payload: {
        id
    }
});

export const setRecipesInCategory = (id, recipes) => ({
    type: SET_RECIPES_IN_CATEGORY,
    payload: {
        id,
        recipes
    }
});
