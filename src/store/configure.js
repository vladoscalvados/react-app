import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { beelineSaga } from '../sagas/beeline';
import { createBeelineReducers } from './root-state';

export const createPredictionStore = (history) => {
    const sagaMiddleware = createSagaMiddleware();
    const router = routerMiddleware(history);
    const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware, router));
    const store = createStore(
        combineReducers(createBeelineReducers(history)),
        composeEnhancers
    );

    sagaMiddleware.run(beelineSaga);

    return store;
};


