import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_MESSAGE_CLEAR } from '../../../actions/auth'

export const registerMessageReducer = (state = null, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST.toString(): return state;
        case USER_REGISTER_SUCCESS.toString(): return action.payload.message;
        case USER_REGISTER_FAILURE.toString(): return null;
        case USER_REGISTER_MESSAGE_CLEAR.toString(): return null;
        default: return state;
    }
}
