import { createSelector } from 'reselect';
import { beelineSelector } from "./rootSelector";

export const errorsSelector = createSelector(
    beelineSelector,
    beeline => beeline.errors
)
export const registrationErrorSelector = createSelector(
    errorsSelector,
    errors => errors.registration
)
export const loginErrorSelector = createSelector(
    errorsSelector,
    errors => errors.login
)

export const loginResponseErrorSelector = createSelector(
    errorsSelector,
    errors => errors.loginResponse
)

export const passportFormErrorSelector = createSelector(
    errorsSelector,
    errors => errors.passportForm
)
