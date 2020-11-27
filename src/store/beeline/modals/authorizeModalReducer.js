import { SHOW_AUTHORIZE_MODAL, CLOSE_AUTHORIZE_MODAL } from '../../../actions/modals'

export const authorizeModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_AUTHORIZE_MODAL.toString(): return true;
        case CLOSE_AUTHORIZE_MODAL.toString(): return false;
        default: return state;
    }
}
