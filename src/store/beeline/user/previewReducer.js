import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../../../actions/auth';
import { SET_TOKEN } from '../../../actions/app';

export const previewReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST.toString(): return state;
        case USER_LOGIN_SUCCESS.toString(): return {
            ...state, token: action.payload.token
        };
        case SET_TOKEN.toString(): return {
            ...state, token: action.payload.token
        };
        // case USER_LOGIN_FAILURE.toString(): return {};
        default: return state;
    }
}