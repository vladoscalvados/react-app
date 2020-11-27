import {combineReducers} from "redux";
import {dateReducer} from './dateReducer'

export const timerReducer = combineReducers(
    {
            date: dateReducer
    }
)
