import {combineReducers} from 'redux';

import pageReducer from './page/reducer';
import categoriesReducer from './recipe-categories/reducer';
import recipesReducer from './recipes/reducer';
import productsReducer from './products/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
    page: pageReducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    products: productsReducer,
    user: user,
});

export default rootReducer;
