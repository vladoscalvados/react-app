import React, { useState, useEffect } from 'react';
import moment from 'moment'
import './SliderBlock.scss';

export const TimerBlock = ({timer}) => {
    const [thisTimer, setTimer] = useState('00:00:00')

    const formatDate = () => {
        const boofDate = moment(timer)
        const date = boofDate.format('DD:MM:YY')
        setTimer(date);
    }

    useEffect(() => {
        formatDate();
    }, [])

    const timerList = (thisTimer && thisTimer.length <= 9) ? thisTimer.split(':') : []

    const timerBlock = timerList.map((item, index) => {
        const innerDateArray = (item && item.split('') && item.split('').length) ? item.split('') : ['0','0']
        const innerDate = (innerDateArray && innerDateArray.length > 1) ? innerDateArray : ['0', innerDateArray[0]]
        return (
            <div key={index} className='timeElemContain'>
                {index > 0 ? '.' : ''}
                <div className={'timeElem'}>{innerDate[0]}</div>
                <div className={'timeElem'}>{innerDate[1]}</div>
            </div>
        )
    })
    return (
        <div className={'timeWrapper'}>
            {
                timerBlock
            }

        </div>
    )
}


// import React, {useEffect, useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux'
//
// import {GET_TIMER_REQUEST} from "../../../../actions/timer";
// import { timerDateSelector } from "../../../../selectors";
// import './SliderBlock.scss';
//
//
// export const TimerBlock = () => {
//     const [thisTimer, setTimer] = useState('00:00:00')
//     const dispatch = useDispatch();
//
//     useEffect(async () =>  {
//         await dispatch(GET_TIMER_REQUEST());
//         getTimer();
//     },[])
//
//     const timerSelect = useSelector(timerDateSelector);
//     const getTimer = () => {
//         let nowDate = new Date();
//         let achiveDate = new Date(timerSelect); //Задаем дату, к которой будет осуществляться обратный отсчет
//         let result = (achiveDate - nowDate)+1000;
//         if (timerSelect && result < 0) {
//             setTimer('00:00:00');
//             return undefined;
//         }
//         let minutes = Math.floor((result/1000/60)%60);
//         let hours = Math.floor((result/1000/60/60)%24);
//         let days = Math.floor(result/1000/60/60/24);
//         if (minutes < 10) minutes = '0' + minutes;
//         if (hours < 10) hours = '0' + hours;
//         setTimer(`${days}:${hours}:${minutes}`)
//         setTimeout(getTimer, 8000);
//     }
//     const timerList = (thisTimer && thisTimer.length <= 9) ? thisTimer.split(':') : []
//
//     const timerBlock = timerList.map(item => {
//         const innerDateArray = (item && item.split('') && item.split('').length) ? item.split('') : ['0','0']
//         const innerDate = (innerDateArray && innerDateArray.length > 1) ? innerDateArray : ['0', innerDateArray[0]]
//         return (
//             <>
//                 <div className={'timeElem'}>{innerDate[0]}</div>
//                 <div className={'timeElem'}>{innerDate[1]}</div>
//                 .
//             </>
//         )
//     })
//     return (
//         <div className={'timeWrapper'}>
//             {
//                 timerBlock
//             }
//
//         </div>
//     )
// }
//
