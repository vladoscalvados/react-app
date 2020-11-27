import { SET_REGISTRATION_ERROR, CLEAR_REGISTRATION_ERROR } from '../../../actions/errors'

export const registrationErrorReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_REGISTRATION_ERROR.toString(): return action.payload;
        case CLEAR_REGISTRATION_ERROR.toString(): return {};
        default: return state;
    }
}
