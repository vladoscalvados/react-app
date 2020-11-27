import { SET_REGISTRATION_FORM } from '../../../actions/forms'

export const registrationFormReducer = (state = null, action) => {
    switch(action.type) {
        case SET_REGISTRATION_FORM.toString(): return {...state, ...action.payload};
        default: return state;
    }
}
