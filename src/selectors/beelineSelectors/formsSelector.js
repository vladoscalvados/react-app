import { createSelector } from 'reselect';
import { beelineSelector } from "./rootSelector";

export const formsSelector = createSelector(
    beelineSelector,
    beeline => beeline.forms
)
export const registrationFormSelector = createSelector(
    formsSelector,
    forms => forms.registration
)
