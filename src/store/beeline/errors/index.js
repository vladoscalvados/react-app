import { combineReducers } from 'redux'
import { registrationErrorReducer } from './registrationErrorReducer';
import { loginErrorReducer } from './loginErrorReducer';
import { loginResponseErrorReducer } from './loginResponseErrorReducer';
import { passportFormErrorReducer } from './passportFormErrorReducer';

export const errorsReducer = combineReducers(
    {
        registration: registrationErrorReducer,
        login: loginErrorReducer,
        loginResponse: loginResponseErrorReducer,
        passportForm: passportFormErrorReducer,
    }
)

