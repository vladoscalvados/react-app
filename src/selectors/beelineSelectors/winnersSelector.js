import { createSelector } from 'reselect';
import { beelineSelector } from "./rootSelector";

export const winnersSelector = createSelector(
    beelineSelector,
    beeline => beeline.winners
)

export const winnersListSelector = createSelector(
    winnersSelector,
    winners => winners.list
)

export const winnersListLoadSelector = createSelector(
    winnersSelector,
    winners => winners.load
)