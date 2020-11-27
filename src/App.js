import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createPredictionStore } from './store';
import { RootPage } from "./pages";

import './fonts/fonts.scss'
import './App.scss'

const history = createBrowserHistory();
const store = createPredictionStore(history);

export const App = () => {
    return (
            <Provider store={store}>
                {/*<ConnectedRouter history={history}>*/}
                {/*    <RootPage />*/}
                {/*</ConnectedRouter>*/}
                    <RootPage />
            </Provider>
    )
}

