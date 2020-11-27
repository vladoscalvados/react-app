import { SET_LOGIN_ERROR, CLEAR_LOGIN_ERROR, USER_LOGIN_ERROR_SUCCESS } from '../../../actions'

export const loginErrorReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_LOGIN_ERROR.toString(): return action.payload ?  action.payload : {};
        case CLEAR_LOGIN_ERROR.toString(): return {};
        default: return state;
    }
}
