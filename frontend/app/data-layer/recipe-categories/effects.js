import {call, put, takeEvery} from 'redux-saga/effects';
import {
    addRecipeCategory,
    REGISTER_RECIPE_CATEGORY_ACTION,
    INIT_CATEGORY_DATA_ACTION,
    LOAD_RECIPES_IN_CATEGORY,
    setCategoriesData, setRecipesInCategory, changeIsLoadingTo
} from './actions';
import urlsConfig from '../urls';

function* init() {
    yield  put(changeIsLoadingTo(true));
    const request = yield call(() => fetch(urlsConfig.recipeCategories.getAll).then(res => res.json()));

    if (request) {
        yield put(setCategoriesData(request));
        yield put(changeIsLoadingTo(false));
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

function* loadRecipes({payload}) {
    const {id} = payload;

    if (id) {
        const request = yield call(() => fetch(urlsConfig.recipeCategories.getRecipes(id)).then(res => res.json()));

        if (request) {
            yield put(setRecipesInCategory(id, request));
        }
    }
}

export default [
    takeEvery(REGISTER_RECIPE_CATEGORY_ACTION, create),
    takeEvery(LOAD_RECIPES_IN_CATEGORY, loadRecipes),
    takeEvery(INIT_CATEGORY_DATA_ACTION, init),
];
