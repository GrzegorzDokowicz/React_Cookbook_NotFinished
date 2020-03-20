import { all } from 'redux-saga/effects'
import pageEffects from './page/effects';

const rootEffects = function* rootSaga() {
    yield all([...pageEffects])
};

export default rootEffects;
