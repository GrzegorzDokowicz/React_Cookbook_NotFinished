import {combineReducers} from 'redux';

import PageReducer from './page/reducer';
import CategoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
    page: PageReducer,
    categories: CategoriesReducer
});

export default rootReducer;
