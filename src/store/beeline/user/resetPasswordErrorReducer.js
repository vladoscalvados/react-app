import { USER_SEND_PASSWORD_FAILURE } from '../../../actions/auth'

export const resetPasswordErrorReducer = (state = null, action) => {
    switch(action.type) {
        case USER_SEND_PASSWORD_FAILURE.toString(): return action.payload.name ;
        default: return state;
    }
}
