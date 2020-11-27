import { combineReducers } from 'redux'
import { registrationFormReducer } from './registrationFormReducer';

export const formsReducer = combineReducers(
    {
        registration: registrationFormReducer,
    }
)

