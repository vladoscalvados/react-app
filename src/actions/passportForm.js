import { createAction } from 'redux-actions';

// api/user/passport
export const PASSPORT_FORM_REQUEST = createAction('PASSPORT_FORM_REQUEST');
export const PASSPORT_FORM_SUCCESS = createAction('PASSPORT_FORM_SUCCESS');
export const PASSPORT_FORM_FAILURE = createAction('PASSPORT_FORM_FAILURE');