import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {chunk} from 'lodash'
import InputMask from "react-input-mask";

import { GET_WINNERS_REQUEST } from "../../actions";
import { winnersListSelector, winnersListLoadSelector } from "../../selectors";

import { Slider } from "./components/Slider";
import search from "../../images/search.svg";

import './WinnersPage.scss'


const userCountInSlide = 8;

export const WinnersPage = () => {
    const [searchPhone, setSearchPhone] = useState('');

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GET_WINNERS_REQUEST());
    }, [])

    const searchSubmit = () => {
        dispatch(GET_WINNERS_REQUEST(searchPhone));
    }
    const winnersListOrigin = useSelector(winnersListSelector);
    const listLoad = useSelector(winnersListLoadSelector);

    const loadMessage = winnersListOrigin === null
        ? 'Произошла ошибка при подгрузке списка победителей'
        : listLoad
        ? 'Список загружается'
        : winnersListOrigin && winnersListOrigin.length === 0 && searchPhone.length > 0
        ? 'Участника с таким номером телефона нет в списке победителей'
        : winnersListOrigin && winnersListOrigin.length === 0
        ? 'Идет загрузка списка победителей'
        : null;

    const listFromSlider = !loadMessage ? chunk(winnersListOrigin, userCountInSlide) : null;

    // Просто вычесление количества слайдов
    // const winnersListFromSliderCount = winnersList === null || winnersList.length === 0
    //     ? 0
    //     : winnersList.length < userCountInSlide
    //     ? 1
    //     : Math.floor(winnersList.length / userCountInSlide) * userCountInSlide < winnersList.length
    //     ? Math.floor(winnersList.length / userCountInSlide) + 1
    //     : Math.floor(winnersList.length / userCountInSlide)
    return (
         <div className="winners">
             <div className="winners__content">
                 <div className="winners__title">победители</div>
                 <div className="winners__inner">
                     <div className="winners__area">
                         <div className="winners__area-input">
                             <InputMask mask="+7 (999) 999-99-99"
                                        value={searchPhone}
                                        onChange={(e) => setSearchPhone(e.target.value)}
                                        type="text" placeholder="Введите последние цифры номера"/>
                         </div>
                         <div className="winners__area-btn" onClick={searchSubmit}>
                             <img src={search} alt="search"/>
                         </div>
                     </div>
                     {
                         loadMessage
                             ? <p className='loadMessage'>{loadMessage}</p>
                             : <Slider winnersList={listFromSlider}/>
                     }
                 </div>
             </div>
         </div>
    )
}