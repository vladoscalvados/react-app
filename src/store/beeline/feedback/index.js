import {combineReducers} from 'redux'
import { feedbackSendReducer } from './feedbackSendReducer';
import { feedbackSendErrorReducer } from './feedbackSendErrorReducer';

export const feedbackReducer = combineReducers(
    {
        responseMessage: feedbackSendReducer,
        errorMessage: feedbackSendErrorReducer,
    }
)

