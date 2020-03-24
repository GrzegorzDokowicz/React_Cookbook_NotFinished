import {call, put, takeEvery} from 'redux-saga/effects';

import urlsConfig from "../urls";
import {LOAD_INIT_PRODUCTS} from "./actions";

function* init() {
    const request = yield call(() => fetch(urlsConfig.products.getAll).then(res => res.json()));

    if (request) {
        yield put(setCategoriesData(request));
    }
}

export default [
    takeEvery(LOAD_INIT_PRODUCTS, init),
];
