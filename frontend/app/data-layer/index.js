import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';

import rootReducer from './root-reducer';
import rootEffects from './root-effects';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootEffects);

/**
 * Class responsible for providing store
 */
export default class DataLayerComponent extends Component {
    static get propTypes() {
        return {
            children: PropTypes.any,
        };
    }

    render() {
        return <Provider store={store}>
            {this.props.children}
        </Provider>;
    }
}
