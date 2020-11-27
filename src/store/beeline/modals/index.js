import {combineReducers} from 'redux'
import { registrationModalReducer } from './registrationModalReducer';
import { registrationConfirmModalReducer } from './registrationConfirmModalReducer';
import { authorizeModalReducer } from './authorizeModalReducer';
import { infoModalReducer } from './infoModalReducer';
import { resetPasswordModalReducer } from './resetPasswordModalReducer';
import { passportModalReducer } from './passportModalReducer';
import { orderSimModalReducer } from './orderSimModalReducer';
import { simpleInfoModalReducer } from './simpleInfoModalReducer';
import { simpleInfoModalTextReducer } from './simpleInfoModalTextReducer';

export const modalsReducer = combineReducers(
    {
        registrationModal: registrationModalReducer,
        authorizeModal: authorizeModalReducer,
        registrationConfirmModal: registrationConfirmModalReducer,
        infoModal: infoModalReducer,
        resetPasswordModal: resetPasswordModalReducer,
        passportModal: passportModalReducer,
        orderSimModal: orderSimModalReducer,
        simpleInfo: simpleInfoModalReducer,
        simpleInfoText: simpleInfoModalTextReducer,
    }
)

