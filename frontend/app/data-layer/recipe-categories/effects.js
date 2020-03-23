import {call, put, takeEvery} from 'redux-saga/effects';
import {
    addRecipeCategory,
    REGISTER_RECIPE_CATEGORY_ACTION,
    INIT_CATEGORY_DATA_ACTION,
    setCategoriesData
} from "./actions";
import urlsConfig from "../urls";

function* init() {
    const request = yield call(() => fetch(urlsConfig.recipeCategories.add).then(res => res.json()));
    console.log(request);

    if (request) {
        yield put(setCategoriesData(request));
    }
}

function* create({payload}) {
    const requestData = {
        method: 'PUT',
        body: JSON.stringify({
            name: payload.name,
            image: payload.file
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const request = yield call(() => fetch(urlsConfig.recipeCategories.add, requestData));

    if (request.status === 200) {
        yield put(addRecipeCategory(payload));
    }

}

export default [
    takeEvery(REGISTER_RECIPE_CATEGORY_ACTION, create),
    takeEvery(INIT_CATEGORY_DATA_ACTION, init),
];
