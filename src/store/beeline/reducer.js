import { combineReducers } from 'redux';
import { userReducer } from './user';
import { modalsReducer} from './modals';
import { feedbackReducer} from './feedback';
import { winnersReducer } from './winners';
import { timerReducer } from './timer';
import { formsReducer } from './forms';
import { errorsReducer } from './errors';

export const beelineReducer = combineReducers({
    user: userReducer,
    modals: modalsReducer,
    feedback: feedbackReducer,
    timer: timerReducer,
    forms: formsReducer,
    errors: errorsReducer,
    winners: winnersReducer
});
