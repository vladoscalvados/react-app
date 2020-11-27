import { createSelector } from 'reselect';
import { beelineSelector } from "./rootSelector";

export const feedbackSelector = createSelector(
    beelineSelector,
    beeline => beeline.feedback
)
export const feedbackResponseMessageSelector = createSelector(
    feedbackSelector,
    feedback => feedback.responseMessage
)

export const feedbackErrorMessageSelector = createSelector(
    feedbackSelector,
    feedback => feedback.errorMessage
)
