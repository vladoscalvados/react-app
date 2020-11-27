import { USER_PRIZES_REQUEST, USER_PRIZES_FAILURE, USER_PRIZES_SUCCESS } from '../../../actions/user'

export const prizesReducer = (state = [], action) => {
    switch(action.type) {
        case USER_PRIZES_REQUEST.toString(): return state;
        case USER_PRIZES_SUCCESS.toString(): return action.payload;
        case USER_PRIZES_FAILURE.toString(): return null;
        default: return state;
    }
}
