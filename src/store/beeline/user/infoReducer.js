import { USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE } from '../../../actions/user'

export const infoReducer = (state = null, action) => {
    switch(action.type) {
        case USER_PROFILE_REQUEST.toString(): return state;
        case USER_PROFILE_SUCCESS.toString(): return {
            ...state, ...action.payload.user
        };
        case USER_PROFILE_FAILURE.toString(): return null;
        default: return state;
    }
}