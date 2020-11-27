import { createSelector } from 'reselect';
import {beelineSelector} from "./rootSelector";

export const userSelector = createSelector(
    beelineSelector,
    beeline => beeline.user
)
export const userPreviewSelector = createSelector(
    userSelector,
    user => user.preview
)
export const userInfoSelector = createSelector(
    userSelector,
    user => user.info
)
export const userPassportInfoSelector = createSelector(
    userSelector,
    user => user.passport_info
)
export const userRegisterMessage = createSelector(
    userSelector,
    user => user.registerMessage
)
export const passportFormMessage = createSelector(
    userSelector,
    user => user.passportForm
)
export const prizesSelector = createSelector(
    userSelector,
    user => user.prizes
)
export const userLoginMessage = createSelector(
    userSelector,
    user => user.loginMessage
)
export const userRegisterError = createSelector(
    userSelector,
    user => user.registerError
)
export const userLoginError = createSelector(
    userSelector,
    user => user.loginError
)
export const userResetPasswordError = createSelector(
    userSelector,
    user => user.resetPassword
)
export const userReferralSelector = createSelector(
    userSelector,
    user => user.referral
)
export const userReferralsSelector = createSelector(
    userSelector,
    user => user.referrals
)
export const tokenSelector = createSelector(
    userPreviewSelector,
    preview => (preview && preview.token) ? preview.token : null
)