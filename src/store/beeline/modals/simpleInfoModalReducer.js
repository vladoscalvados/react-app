import { SHOW_SIMPLE_INFO_MODAL, CLOSE_SIMPLE_INFO_MODAL } from '../../../actions/modals'

export const simpleInfoModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_SIMPLE_INFO_MODAL.toString(): return true;
        case CLOSE_SIMPLE_INFO_MODAL.toString(): return false;
        default: return state;
    }
}
