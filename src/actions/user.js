import { createAction } from 'redux-actions';

// api/user"
export const USER_PROFILE_REQUEST = createAction('USER_PROFILE_REQUEST');
export const USER_PROFILE_SUCCESS = createAction('USER_PROFILE_SUCCESS');
export const USER_PROFILE_FAILURE = createAction('USER_PROFILE_FAILURE');

// api/user/referrals"
export const USER_REFERRAL_REQUEST = createAction('USER_REFERRAL_REQUEST');
export const USER_REFERRAL_SUCCESS = createAction('USER_REFERRAL_SUCCESS');
export const USER_REFERRAL_FAILURE = createAction('USER_REFERRAL_FAILURE');

// api/user/referrals"
export const USER_REFERRALS_REQUEST = createAction('USER_REFERRALS_REQUEST');
export const USER_REFERRALS_SUCCESS = createAction('USER_REFERRALS_SUCCESS');
export const USER_REFERRALS_FAILURE = createAction('USER_REFERRALS_FAILURE');

// api/user/prizes"
export const USER_PRIZES_REQUEST = createAction('USER_PRIZES_REQUEST');
export const USER_PRIZES_SUCCESS = createAction('USER_PRIZES_SUCCESS');
export const USER_PRIZES_FAILURE = createAction('USER_PRIZES_FAILURE');

