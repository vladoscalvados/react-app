import { createAction } from 'redux-actions';

// "url":"beeline-z.u2c.su/api/feedback/send",
export const FEEDBACK_SEND_REQUEST = createAction('FEEDBACK_SEND_REQUEST');
export const FEEDBACK_SEND_SUCCESS = createAction('FEEDBACK_SEND_SUCCESS');
export const FEEDBACK_SEND_FAILURE = createAction('FEEDBACK_SEND_FAILURE');