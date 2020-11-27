import { SHOW_SIMPLE_INFO_MODAL, CLOSE_SIMPLE_INFO_MODAL } from '../../../actions/modals'

export const simpleInfoModalTextReducer = (state = '', action) => {
    switch(action.type) {
        case SHOW_SIMPLE_INFO_MODAL.toString(): return action.payload;
        case CLOSE_SIMPLE_INFO_MODAL.toString(): return '';
        default: return state;
    }
}
