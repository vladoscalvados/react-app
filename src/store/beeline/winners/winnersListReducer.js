import { GET_WINNERS_FAILURE, GET_WINNERS_REQUEST, GET_WINNERS_SUCCESS } from "../../../actions/winners";

export const winnersListReducer = (state = [], action) => {
    switch(action.type) {
        case GET_WINNERS_REQUEST.toString(): return state;
        case GET_WINNERS_SUCCESS.toString(): return action.payload.list;
        case GET_WINNERS_FAILURE.toString(): return null;
        default: return state;
    }
}