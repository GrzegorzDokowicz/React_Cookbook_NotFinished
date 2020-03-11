import {combineReducers} from 'redux';

import PageReducer from './page/reducer';
import CategoriesReducer from './recipe-categories/reducer';
import recipesReducer from "./recipes/reducer";

const rootReducer = combineReducers({
    page: PageReducer,
    categories: CategoriesReducer,
    recipes: recipesReducer
});

export default rootReducer;
