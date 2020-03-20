import {takeEvery, put, delay} from 'redux-saga/effects';
import {addAlert, removeAlert, REGISTER_ALERT} from "./actions";

function* create({payload}) {
    yield put(addAlert(payload));
    yield delay(4000);
    yield put(removeAlert(payload.id))
}

export default [
    takeEvery(REGISTER_ALERT, create),
];
