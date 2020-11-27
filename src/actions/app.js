import { createAction } from 'redux-actions';

// "url":"beeline-z.u2c.su/api/auth/register"
export const INIT = createAction('INIT');
export const LOGOUT = createAction('LOGOUT');
export const SET_TOKEN = createAction('SET_TOKEN');