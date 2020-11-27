import { GET_WINNERS_FAILURE, GET_WINNERS_REQUEST, GET_WINNERS_SUCCESS } from "../../../actions/winners";

export const winnersListLoadReducer = (state = false, action) => {
    switch(action.type) {
        case GET_WINNERS_REQUEST.toString(): return true;
        case GET_WINNERS_SUCCESS.toString(): return false;
        case GET_WINNERS_FAILURE.toString(): return null;
        default: return state;
    }
}