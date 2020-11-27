import React, { useEffect } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import {registrationModalSelector, authorizeModalSelector, infoModalSelector, resetPasswordModalSelector, userInfoSelector, passportModalSelector, simpleInfoModalSelector, orderSimModalSelector} from '../../selectors'
import {
    CLOSE_REGISTER_MODAL,
    CLOSE_AUTHORIZE_MODAL,
    CLOSE_INFO_MODAL,
    CLOSE_RESET_PASSWORD_MODAL,
    ClOSE_PASSPORT_MODAL,
    INIT,
    USER_REGISTER_MESSAGE_CLEAR,
    CLEAR_REGISTRATION_ERROR,
    USER_LOGIN_MESSAGE_CLEAR,
    CLEAR_LOGIN_ERROR,
    CLOSE_SIMPLE_INFO_MODAL,
    CLOSE_ORDER_SIM_MODAL
} from '../../actions'

import { StartPage } from "../StartPage";
import { ProfilePage } from "../ProfilePage";
import { WinnersPage } from "../WinnersPage";
import { RebootPage } from "../RebootPage";
import { NotFound } from "../NotFound";


import {BaseModal, Registration, Login, InfoBlock, ResetPassword, Passport, SimpleInfo, OrderSim } from "../../components/modals";
import {Header, Footer, PrivateRoute} from "../../components";


export const RootPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(INIT())
        }, 1000)
    }, [])

    const closeRegistrationModal = () => {
        dispatch(CLOSE_REGISTER_MODAL());
        dispatch(USER_REGISTER_MESSAGE_CLEAR());
        dispatch(CLEAR_REGISTRATION_ERROR())
    }
    const closeAuthorizeModal = () => {
        dispatch(CLOSE_AUTHORIZE_MODAL())
        dispatch(USER_LOGIN_MESSAGE_CLEAR())
        dispatch(CLEAR_LOGIN_ERROR())
    }
    const closeInfoModal = () => {
        dispatch(CLOSE_INFO_MODAL())
    }
    const closeResetPasswordModal = () => {
        dispatch(CLOSE_RESET_PASSWORD_MODAL())
    }
    const closePassportModal = () => {
        dispatch(ClOSE_PASSPORT_MODAL())
    }

    const closeSimpleInfoModal = () => {
        dispatch(CLOSE_SIMPLE_INFO_MODAL())
    }

    const closeOrderSimModal = () => {
        dispatch(CLOSE_ORDER_SIM_MODAL())
    }

    // selectors
    const userinfo = useSelector(userInfoSelector);
    const registrationModal = useSelector(registrationModalSelector);
    const authorizeModal = useSelector(authorizeModalSelector);
    const infoModal = useSelector(infoModalSelector);
    const resetPasswordModal = useSelector(resetPasswordModalSelector);
    const passportModal = useSelector(passportModalSelector);
    const simpleInfoModal = useSelector(simpleInfoModalSelector);
    const orderSimModal = useSelector(orderSimModalSelector);
    console.log(orderSimModal)

    return (
        <BrowserRouter>
            <div className="pageWrapper">
                <Header showLK={!!userinfo}/>
                <Switch>
                    <Route path='/' exact>
                        <StartPage />
                    </Route>
                    <PrivateRoute path='/profile' component={ProfilePage} isAuth={!!userinfo}/>
                    <Route path='/winners'>
                        <WinnersPage />
                    </Route>
                    <Route path='/reboot'>
                        <RebootPage />
                    </Route>
                    <Route path='*' >
                        <NotFound/>
                    </Route>
                </Switch>
                <Footer/>

                {registrationModal && <BaseModal modalContent={Registration} closeModal={closeRegistrationModal} />}

                {authorizeModal && <BaseModal modalContent={Login} closeModal={closeAuthorizeModal} />}

                {infoModal && <BaseModal modalContent={InfoBlock} closeModal={closeInfoModal} />}

                {resetPasswordModal && <BaseModal modalContent={ResetPassword} closeModal={closeResetPasswordModal} />}

                {passportModal && <BaseModal modalContent={Passport} closeModal={closePassportModal} />}

                {simpleInfoModal && <BaseModal modalContent={SimpleInfo} closeModal={closeSimpleInfoModal} />}

                {orderSimModal && <BaseModal modalContent={OrderSim} closeModal={closeOrderSimModal} />}

            </div>
        </BrowserRouter>
    )
}
