import { SHOW_RESET_PASSWORD_MODAL, CLOSE_RESET_PASSWORD_MODAL } from '../../../actions/modals'

export const resetPasswordModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_RESET_PASSWORD_MODAL.toString(): return true;
        case CLOSE_RESET_PASSWORD_MODAL.toString(): return false;
        default: return state;
    }
}
