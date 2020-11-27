import { createSelector } from 'reselect';
import { beelineSelector } from "./rootSelector";

export const modalsSelector = createSelector(
    beelineSelector,
    beeline => beeline.modals
)
export const registrationModalSelector = createSelector(
    modalsSelector,
    modals => modals.registrationModal
)
export const orderSimModalSelector = createSelector(
    modalsSelector,
    modals => modals.orderSimModal
)
export const authorizeModalSelector = createSelector(
    modalsSelector,
    modals => modals.authorizeModal
)
export const infoModalSelector = createSelector(
    modalsSelector,
    modals => modals.infoModal
)
export const simpleInfoModalSelector = createSelector(
    modalsSelector,
    modals => modals.simpleInfo
)
export const simpleInfoModalTextSelector = createSelector(
    modalsSelector,
    modals => modals.simpleInfoText
)
export const resetPasswordModalSelector = createSelector(
    modalsSelector,
    modals => modals.resetPasswordModal
)

export const passportModalSelector = createSelector(
    modalsSelector,
    modals => modals.passportModal
)
