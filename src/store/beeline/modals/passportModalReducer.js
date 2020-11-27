import { SHOW_PASSPORT_MODAL, ClOSE_PASSPORT_MODAL } from '../../../actions/modals'

export const passportModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_PASSPORT_MODAL.toString(): return true;
        case ClOSE_PASSPORT_MODAL.toString(): return false;
        default: return state;
    }
}
