import { createSelector } from 'reselect';
import {beelineSelector} from "./rootSelector";

export const timerSelector = createSelector(
    beelineSelector,
    beeline => beeline.timer
)

export const timerDateSelector = createSelector(
    timerSelector,
    timer => timer.date
)