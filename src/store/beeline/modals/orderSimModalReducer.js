import { SHOW_ORDER_SIM_MODAL, CLOSE_ORDER_SIM_MODAL } from '../../../actions/modals'

export const orderSimModalReducer = (state = false, action) => {
    switch(action.type) {
        case SHOW_ORDER_SIM_MODAL.toString(): return true;
        case CLOSE_ORDER_SIM_MODAL.toString(): return false;
        default: return state;
    }
}
