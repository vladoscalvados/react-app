import { SHOW_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from '../../../actions/modals'

export const registrationModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_REGISTER_MODAL.toString(): return true;
        case CLOSE_REGISTER_MODAL.toString(): return false;
        default: return state;
    }
}
