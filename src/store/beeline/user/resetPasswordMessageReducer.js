import { USER_SEND_PASSWORD_FAILURE, USER_SEND_PASSWORD_REQUEST, USER_SEND_PASSWORD_SUCCESS } from '../../../actions/auth'

export const resetPasswordMessageReducer = (state = null, action) => {
    switch(action.type) {
        case USER_SEND_PASSWORD_REQUEST.toString(): return state;
        case USER_SEND_PASSWORD_SUCCESS.toString(): return action.payload.message;
        case USER_SEND_PASSWORD_FAILURE.toString(): return null;
        default: return state;
    }
}
