import {combineReducers} from "redux";
import {winnersListReducer} from './winnersListReducer'
import {winnersListLoadReducer} from './winnersListLoadReducer'

export const winnersReducer = combineReducers(
    {
            load: winnersListLoadReducer,
            list: winnersListReducer
    }
)
