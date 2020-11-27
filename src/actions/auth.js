import { createAction } from 'redux-actions';

// "url":"beeline-z.u2c.su/api/auth/register"
export const USER_REGISTER_REQUEST = createAction('USER_REGISTER_REQUEST');
export const USER_REGISTER_SUCCESS = createAction('USER_REGISTER_SUCCESS');
export const USER_REGISTER_FAILURE = createAction('USER_REGISTER_FAILURE');
export const USER_REGISTER_MESSAGE_CLEAR = createAction('USER_REGISTER_MESSAGE_CLEAR');

// "url":"beeline-z.u2c.su/api/auth/login"
export const USER_LOGIN_REQUEST = createAction('USER_LOGIN_REQUEST');
export const USER_LOGIN_SUCCESS = createAction('USER_LOGIN_SUCCESS');
export const USER_LOGIN_FAILURE = createAction('USER_LOGIN_FAILURE');
export const USER_LOGIN_MESSAGE_CLEAR = createAction('USER_LOGIN_MESSAGE_CLEAR');
export const USER_LOGIN_ERROR_SUCCESS = createAction('USER_LOGIN_ERROR_SUCCESS');

// "url":"beeline-z.u2c.su/api/auth/send_password"
export const USER_SEND_PASSWORD_REQUEST = createAction('USER_SEND_PASSWORD_REQUEST');
export const USER_SEND_PASSWORD_SUCCESS = createAction('USER_SEND_PASSWORD_SUCCESS');
export const USER_SEND_PASSWORD_FAILURE = createAction('USER_SEND_PASSWORD_FAILURE');
