import { call, put, takeEvery, takeLatest,  all, select } from 'redux-saga/effects';
import axios from 'axios';
import { tokenSelector } from "../../selectors";
import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_ERROR_SUCCESS,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE,
    USER_SEND_PASSWORD_REQUEST, USER_SEND_PASSWORD_SUCCESS, USER_SEND_PASSWORD_FAILURE
} from "../../actions/auth";
import {
    CLOSE_AUTHORIZE_MODAL,
    CLOSE_REGISTER_MODAL,
    CLOSE_RESET_PASSWORD_MODAL,
    SHOW_AUTHORIZE_MODAL,
    SHOW_REGISTER_MODAL
} from "../../actions/modals";
import {
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE,
    USER_REFERRAL_REQUEST, USER_REFERRAL_SUCCESS, USER_REFERRAL_FAILURE,
    USER_REFERRALS_REQUEST, USER_REFERRALS_SUCCESS, USER_REFERRALS_FAILURE,
    USER_PRIZES_REQUEST, USER_PRIZES_FAILURE, USER_PRIZES_SUCCESS
} from "../../actions/user";

import {
    GET_TIMER_FAILURE, GET_TIMER_SUCCESS, GET_TIMER_REQUEST
} from "../../actions/timer";

import {
    GET_WINNERS_REQUEST, GET_WINNERS_SUCCESS, GET_WINNERS_FAILURE
} from "../../actions/winners";

import {
    PASSPORT_FORM_REQUEST, PASSPORT_FORM_FAILURE, PASSPORT_FORM_SUCCESS
} from "../../actions/passportForm";

import {
    SET_REGISTRATION_ERROR, SET_LOGIN_ERROR, CLEAR_LOGIN_ERROR,
    CLEAR_REGISTRATION_ERROR, SET_PASSPORT_ERROR, CLEAR_PASSPORT_ERROR
} from "../../actions/errors";

import { INIT, SET_TOKEN, LOGOUT } from "../../actions/app";

import {
    FEEDBACK_SEND_FAILURE,
    FEEDBACK_SEND_REQUEST,
    FEEDBACK_SEND_SUCCESS
} from "../../actions/feedbackSend";

import {
    SET_REGISTRATION_FORM
} from "../../actions/forms";

const baseUrl = 'https://api.z-promo.ru/api';
// const baseUrl = 'https://beeline-z.u2c.su/api';
// axios.interceptors.request.use(
//     (config) => {
//         let token = sessionStorage.getItem("token");
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

const initSaga = takeLatest(
    INIT,
    function* initSagaHandler(action) {
        const token = sessionStorage.getItem("token");
        if (token && token.length > 0) {
            yield put(SET_TOKEN({token: token ? token : null}));
            yield put(USER_PROFILE_REQUEST());
        }
        const urlParams = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    const a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
        if (urlParams['p']) {
            yield put(SHOW_REGISTER_MODAL())
            yield put(SET_REGISTRATION_FORM({referral: urlParams['p']}))
        }
    }
)

const userLogout = takeEvery(
    LOGOUT,
    function* userLogoutHandler(action) {
        sessionStorage.setItem('token', '');
        try {
            yield put(SET_TOKEN( { token: null } ));
            yield put(USER_PROFILE_REQUEST());
        } catch (e) {
            // yield put(USER_LOGIN_FAILURE(e));
        }
    }
)



// POST Requests
// auth/login
const userLogin = takeEvery(
    USER_LOGIN_REQUEST,
    function* userLoginHandler(action) {
        try {
            const tokenResponse = yield call(axios.post, `${baseUrl}/auth/login`, action.payload);
            yield put(CLEAR_LOGIN_ERROR());
            if (tokenResponse.data.response.token) {
                sessionStorage.setItem("token", tokenResponse.data.response.token);
                yield put(USER_LOGIN_SUCCESS({token: tokenResponse.data.response.token}));
                yield put(USER_PROFILE_REQUEST());
                yield put(CLOSE_AUTHORIZE_MODAL());
            } else {
                yield put(USER_LOGIN_ERROR_SUCCESS());
            }
        } catch (error) {
            yield put(USER_LOGIN_FAILURE({
                error: (error && error.data) ? error.data.response.message : 'Произошла ошибка авторизации'
            }));
            yield put(SET_LOGIN_ERROR(error.response.data.errors));
        }
    }
)
// auth/register
const userRegister = takeEvery(
    USER_REGISTER_REQUEST,
    function* userRegisterHandler(action) {
        try {
            const messageResponse = yield call(axios.post, `${baseUrl}/auth/register`, action.payload);
            yield put(CLEAR_REGISTRATION_ERROR());
            yield put(USER_REGISTER_SUCCESS(messageResponse.data.response));
            if (messageResponse.data.success) {
                yield put(CLOSE_REGISTER_MODAL());
                yield put(SHOW_AUTHORIZE_MODAL());
            }
        } catch (error) {
            yield put(USER_REGISTER_FAILURE(error));
            yield put(SET_REGISTRATION_ERROR(error.response.data.errors));
        }
    }
)

// auth/send_password
const userResetPassword = takeEvery(
    USER_SEND_PASSWORD_REQUEST,
    function* userResetPasswordHandler(action) {
        try {
            const messageResponse = yield call(axios.post, `${baseUrl}/auth/send_password`, action.payload);
            yield put(USER_SEND_PASSWORD_SUCCESS(messageResponse.data.response));
            yield put(CLOSE_RESET_PASSWORD_MODAL());
            yield put(SHOW_AUTHORIZE_MODAL());
        } catch (error) {
            yield put(USER_SEND_PASSWORD_FAILURE(error));
        }
    }
)

// user/passport
const passportFormSend = takeEvery(
    PASSPORT_FORM_REQUEST,
    function* passportFormSendHandler(action) {
        try {
            const token = yield select(tokenSelector);
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            const messageResponse = yield call(axios.post, `${baseUrl}/user/passport`, action.payload, config);
            yield put(CLEAR_PASSPORT_ERROR());
            yield put(PASSPORT_FORM_SUCCESS(messageResponse.data.response));
        } catch (error) {
            yield put(PASSPORT_FORM_FAILURE(error.response.data));
            yield put(SET_PASSPORT_ERROR(error.response.data.errors));
        }
    }
)

// feedback/send
const sendFeedback = takeEvery(
    FEEDBACK_SEND_REQUEST,
    function* sendFeedbackHandler(action) {
        try {
            const messageResponse = yield call(axios.post, `${baseUrl}/feedback/send`, action.payload);
            yield put(FEEDBACK_SEND_SUCCESS(messageResponse.data.response));
        } catch (e) {
            yield put(FEEDBACK_SEND_FAILURE({name: e.message}));
        }
    }
)

// GET Requests

// winners
const getWinners = takeEvery(
    GET_WINNERS_REQUEST,
    function* getWinnersHandler(action) {
        try {
            const requestUrl = action.payload
                ? `${baseUrl}/winners?phone=${action.payload}`
                : `${baseUrl}/winners`
            const winnersList = yield call(axios.get, requestUrl);
            yield put(GET_WINNERS_SUCCESS({list: winnersList.data.response}));
        } catch (e) {
            yield put(GET_WINNERS_FAILURE({message: e.message}));
        }
    }
)

// timer
const getTimer = takeEvery(
    GET_TIMER_REQUEST,
    function* getTimerHandler(action) {
        try {
            const timer = yield call(axios.get, `${baseUrl}/timer`);
            yield put(GET_TIMER_SUCCESS({date: timer.data}));
        } catch (e) {
            yield put(GET_TIMER_FAILURE({message: e.message}));
        }
    }
)

// user
const getUser = takeEvery(
    USER_PROFILE_REQUEST,
    function* getUserHandler(action) {
        const token = yield select(tokenSelector);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const user = yield call(axios.get, `${baseUrl}/user`, config);
            yield put(USER_PROFILE_SUCCESS(user.data.response));
        } catch (e) {
            yield put(USER_PROFILE_FAILURE({message: e.message}));
        }
    }
)

// user/referral
const getReferral = takeEvery(
    USER_REFERRAL_REQUEST,
    function* getReferralHandler(action) {
        const token = yield select(tokenSelector);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const user = yield call(axios.get, `${baseUrl}/user/referral`, config);
            yield put(USER_REFERRAL_SUCCESS(user.data.response));
        } catch (e) {
            yield put(USER_REFERRAL_FAILURE({message: e.message}));
        }
    }
)

// user/referrals
const getReferrals = takeEvery(
    USER_REFERRALS_REQUEST,
    function* getReferralsHandler(action) {
        const token = yield select(tokenSelector);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const user = yield call(axios.get, `${baseUrl}/user/referrals`, config);
            yield put(USER_REFERRALS_SUCCESS(user.data.response));
        } catch (e) {
            yield put(USER_REFERRALS_FAILURE({message: e.message}));
        }
    }
)

// user/prizes
const getPrizes = takeEvery(
    USER_PRIZES_REQUEST,
    function* getPrizesHandler(action) {
        const token = yield select(tokenSelector);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            const prizes = yield call(axios.get, `${baseUrl}/user/prizes`, config);
            yield put(USER_PRIZES_SUCCESS(prizes.data.response));
        } catch (e) {
            yield put(USER_PRIZES_FAILURE({message: e.message}));
        }
    }
)
// GET Requests END

export function* beelineSaga() {
    yield all([
        initSaga,
        userLogout,
        userLogin,
        getUser,
        getReferral,
        getReferrals,
        userRegister,
        sendFeedback,
        userResetPassword,
        getTimer,
        getWinners,
        passportFormSend,
        getPrizes
    ]);
}

// export const beelineSaga = [
//
// ]
/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }
