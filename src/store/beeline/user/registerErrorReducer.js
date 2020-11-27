import { USER_REGISTER_FAILURE } from '../../../actions/auth'

export const registerErrorReducer = (state = null, action) => {
    switch(action.type) {
        case USER_REGISTER_FAILURE.toString(): return action.payload.name;
        default: return state;
    }
}
