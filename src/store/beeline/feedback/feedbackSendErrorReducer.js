import { FEEDBACK_SEND_FAILURE } from '../../../actions/feedbackSend'

export const feedbackSendErrorReducer = (state = null, action) => {
    switch(action.type) {
        case FEEDBACK_SEND_FAILURE.toString(): return action.payload.name;
        default: return state;
    }
}
