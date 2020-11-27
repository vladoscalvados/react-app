import { CLOSE_REGISTER_CONFIRM_MODAL, SHOW_REGISTER_CONFIRM_MODAL } from '../../../actions/modals'

export const registrationConfirmModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_REGISTER_CONFIRM_MODAL.toString(): return true;
        case CLOSE_REGISTER_CONFIRM_MODAL.toString(): return false;
        default: return state;
    }
}
