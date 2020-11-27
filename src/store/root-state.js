import { connectRouter } from 'connected-react-router';
import { beelineReducer } from './beeline';

export const createBeelineReducers = (history) => ({
    router: connectRouter(history),
    beeline: beelineReducer,
});