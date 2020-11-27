import {combineReducers} from 'redux'
import { previewReducer } from './previewReducer';
import { referralReducer } from './referralReducer';
import { referralsReducer } from './referralsReducer';
import { infoReducer } from './infoReducer';
import { registerMessageReducer } from './registerMessageReducer';
import { loginMessageReducer } from './loginMessageReducer';
import { resetPasswordMessageReducer } from './resetPasswordMessageReducer';
import { registerErrorReducer } from './registerErrorReducer';
import { loginErrorReducer } from './loginErrorReducer';
import { resetPasswordErrorReducer } from './resetPasswordErrorReducer';
import { passportFormMessageReducer } from './passportFormMessageReducer';
import { prizesReducer } from './prizesReducer';

export const userReducer = combineReducers(
    {
        preview: previewReducer,
        referral: referralReducer,
        referrals: referralsReducer,
        info: infoReducer,
        registerMessage: registerMessageReducer,
        loginMessage: loginMessageReducer,
        resetPasswordMessage: resetPasswordMessageReducer,
        passportForm: passportFormMessageReducer,
        prizes: prizesReducer,
        // Errors
        registerError: registerErrorReducer,
        loginError: loginErrorReducer,
        resetPasswordError: resetPasswordErrorReducer
    }
)

