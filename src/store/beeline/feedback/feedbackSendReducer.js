import { FEEDBACK_SEND_FAILURE, FEEDBACK_SEND_REQUEST, FEEDBACK_SEND_SUCCESS } from '../../../actions/feedbackSend'

export const feedbackSendReducer = (state = null, action) => {
    switch(action.type) {
        case FEEDBACK_SEND_REQUEST.toString(): return state;
        case FEEDBACK_SEND_SUCCESS.toString(): return action.payload;
        case FEEDBACK_SEND_FAILURE.toString(): return null;
        default: return state;
    }
}
