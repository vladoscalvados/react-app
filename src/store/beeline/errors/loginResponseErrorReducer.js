import { USER_LOGIN_FAILURE } from '../../../actions'

export const loginResponseErrorReducer = (state = null, action) => {
    switch(action.type) {
        case USER_LOGIN_FAILURE.toString(): return action.payload.error;
        default: return state;
    }
}
