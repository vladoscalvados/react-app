import { USER_REFERRALS_REQUEST, USER_REFERRALS_SUCCESS, USER_REFERRALS_FAILURE } from '../../../actions/user'

export const referralsReducer = (state = null, action) => {
    switch(action.type) {
        case USER_REFERRALS_REQUEST.toString(): return state;
        case USER_REFERRALS_SUCCESS.toString(): return action.payload.referrals;
        case USER_REFERRALS_FAILURE.toString(): return null;
        default: return state;
    }
}