import { createAction } from 'redux-actions';

// "url":"beeline-z.u2c.su/api/timer",
export const GET_TIMER_REQUEST = createAction('GET_TIMER_REQUEST');
export const GET_TIMER_SUCCESS = createAction('GET_TIMER_SUCCESS');
export const GET_TIMER_FAILURE = createAction('GET_TIMER_FAILURE');