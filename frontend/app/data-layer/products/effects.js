import {call, put, takeEvery} from 'redux-saga/effects';

import urlsConfig from '../urls';
import {
    addProduct,
    LOAD_INIT_PRODUCTS,
    REGISTER_PRODUCT,
    REGISTER_SEARCH_PRODUCT,
    searchProduct,
    setProducts
} from './actions';

function* init() {
    const request = yield call(() => fetch(urlsConfig.products.getAll).then(res => res.json()));

    if (request) {
        yield put(setProducts(request));
    }
}

function* search({payload}) {
    const url = urlsConfig.products.search(payload);
    const request = yield call(() => fetch(url).then(res => res.json()));

    if (request) {
        yield put(searchProduct(request));
    }
}

function* create({payload}) {
    const requestData = {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const request = yield call(() => fetch(urlsConfig.products.add, requestData));

    if (request.status === 200) {
        const response = yield call(() => request.json());
        const product = {
            ...payload,
            id: response
        };

        yield put(addProduct(product));
    }
}

export default [
    takeEvery(LOAD_INIT_PRODUCTS, init),
    takeEvery(REGISTER_PRODUCT, create),
    takeEvery(REGISTER_SEARCH_PRODUCT, search),
];
