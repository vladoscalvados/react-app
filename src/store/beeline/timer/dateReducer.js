import {GET_TIMER_FAILURE, GET_TIMER_REQUEST, GET_TIMER_SUCCESS} from "../../../actions/timer";

export const dateReducer = (state = null, action) => {
    switch(action.type) {
        case GET_TIMER_REQUEST.toString(): return state;
        case GET_TIMER_SUCCESS.toString(): return action.payload.date;
        case GET_TIMER_FAILURE.toString(): return null;
        default: return state;
    }
}