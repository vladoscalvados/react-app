import {USER_LOGIN_ERROR_SUCCESS, USER_LOGIN_FAILURE} from '../../../actions/auth'

export const loginErrorReducer = (state = null, action) => {
    switch(action.type) {
        // case USER_LOGIN_FAILURE.toString(): return action.payload.name;
        case USER_LOGIN_ERROR_SUCCESS.toString(): return 'Подключись к Связь Z для участия в акции';
        // case USER_LOGIN_FAILURE.toString(): return action.payload;
        default: return state;
    }
}
