import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_MESSAGE_CLEAR
} from '../../../actions/auth'

export const loginMessageReducer = (state = null, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST.toString(): return state;
        case USER_LOGIN_SUCCESS.toString(): return action.payload.token;
        case USER_LOGIN_FAILURE.toString(): return null;
        case USER_LOGIN_MESSAGE_CLEAR.toString(): return null;
        default: return state;
    }
}
