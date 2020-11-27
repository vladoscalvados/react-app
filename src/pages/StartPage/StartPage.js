import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';

import {timerDateSelector, userInfoSelector} from "../../selectors/beelineSelectors";
import {GET_TIMER_REQUEST} from "../../actions/timer";

// Mobile
import { FirstBlockMobile, CardsBlockMobile, AuthBlockMobile, FAQBlockMobile, QuestionBlockMobile, RateBlockMobile, SliderBlockMobile } from './components';

//desktop
import { SliderBlock, RateBlock } from './components';


const StartPageBoof = ({ width, height }) => {
    const dispatch = useDispatch();
    useEffect(async () =>  {
        await dispatch(GET_TIMER_REQUEST());
    },[])
    const timerSelect = useSelector(timerDateSelector);

    const userInfo = useSelector(userInfoSelector)
    return (
        <div>
            <FirstBlockMobile isAuthorize={!!userInfo}/>
            <SliderBlock prizeTimer={timerSelect} />
            <CardsBlockMobile isAuthorize={!!userInfo} />

            {width > 989
                ? <RateBlock/>
                : <RateBlockMobile />
            }
            {!userInfo && <AuthBlockMobile />}
            <FAQBlockMobile />
            <QuestionBlockMobile />
        </div>
    )
}

export const StartPage = withResizeDetector(StartPageBoof);
