import { all } from 'redux-saga/effects'

import pageEffects from './page/effects';
import recipeCategoriesEffects from './recipe-categories/effects';
import productsEffect from './products/effects';

const rootEffects = function* rootSaga() {
    yield all([...productsEffect, ...pageEffects, ...recipeCategoriesEffects])
};

export default rootEffects;
