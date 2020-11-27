import { SHOW_INFO_MODAL, CLOSE_INFO_MODAL } from '../../../actions/modals'

export const infoModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_INFO_MODAL.toString(): return true;
        case CLOSE_INFO_MODAL.toString(): return false;
        default: return state;
    }
}
