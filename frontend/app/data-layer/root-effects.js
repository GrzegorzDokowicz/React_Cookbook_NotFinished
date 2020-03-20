import { all } from 'redux-saga/effects'

import pageEffects from './page/effects';
import recipeCategoriesEffects from './recipe-categories/effects';

const rootEffects = function* rootSaga() {
    yield all([...pageEffects, ...recipeCategoriesEffects])
};

export default rootEffects;
