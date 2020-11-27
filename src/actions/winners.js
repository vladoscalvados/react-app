import { createAction } from 'redux-actions';

// "url":"beeline-z.u2c.su/api/winners",
export const GET_WINNERS_REQUEST = createAction('GET_WINNERS_REQUEST');
export const GET_WINNERS_SUCCESS = createAction('GET_WINNERS_SUCCESS');
export const GET_WINNERS_FAILURE = createAction('GET_WINNERS_FAILURE');