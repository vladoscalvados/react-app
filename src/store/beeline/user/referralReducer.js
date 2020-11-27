import { USER_REFERRAL_REQUEST, USER_REFERRAL_SUCCESS, USER_REFERRAL_FAILURE } from '../../../actions/user'

export const referralReducer = (state = null, action) => {
    switch(action.type) {
        case USER_REFERRAL_REQUEST.toString(): return state;
        case USER_REFERRAL_SUCCESS.toString(): return action.payload.referral_code;
        case USER_REFERRAL_FAILURE.toString(): return null;
        default: return state;
    }
}
