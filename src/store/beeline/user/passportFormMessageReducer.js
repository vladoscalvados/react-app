import { PASSPORT_FORM_REQUEST, PASSPORT_FORM_FAILURE, PASSPORT_FORM_SUCCESS } from '../../../actions/passportForm'

export const passportFormMessageReducer = (state = null, action) => {
    switch(action.type) {
        case PASSPORT_FORM_REQUEST.toString(): return state;
        case PASSPORT_FORM_SUCCESS.toString(): return action.payload.message;
        case PASSPORT_FORM_FAILURE.toString(): return 'Ошибка при загрузке документов';
        default: return state;
    }
}
