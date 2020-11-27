import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Overlay, Tooltip } from 'react-bootstrap';

import { userInfoSelector, userReferralSelector, userReferralsSelector, prizesSelector } from '../../../../selectors'
import {USER_PROFILE_REQUEST, USER_REFERRAL_REQUEST, USER_REFERRALS_REQUEST, USER_PRIZES_REQUEST, SHOW_PASSPORT_MODAL} from "../../../../actions";

import {prizesImages} from "./utils";

import clip from '../../../../images/clip.svg';
import copy from '../../../../images/copy.svg';
import './Cabinet.scss';

export const Cabinet = () => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const target = useRef(null);

    useEffect(() => {
        dispatch(USER_PROFILE_REQUEST())
        dispatch(USER_REFERRAL_REQUEST())
        dispatch(USER_REFERRALS_REQUEST())
        dispatch(USER_PRIZES_REQUEST())
    }, [])


    const showPassportModal = () => {
        dispatch(SHOW_PASSPORT_MODAL());
    }

    const userInfo = useSelector(userInfoSelector);
    const userReferral = useSelector(userReferralSelector);
    const userReferrals = useSelector(userReferralsSelector);
    const prizes = useSelector(prizesSelector);

    const userReferralsList = (userReferrals && userReferrals.length > 0) ? userReferrals.toString().split('') : [0];
    const numberList = (userReferralsList && userReferralsList.length > 1)
        ? userReferralsList
        : ['0', userReferralsList[0]]


    const copyText = () => {
        navigator.clipboard.writeText(userReferral);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 1000)
    }
    const dataBlock = (
        userInfo &&
        <>
            <div className="cabinet__data-block-item">
                <label className="cabinet__data-block-item-key">Имя</label>
                <div className="cabinet__data-block-item-value">{userInfo.name}</div>
            </div>
            <div className="cabinet__data-block-item">
                <label className="cabinet__data-block-item-key">Город</label>
                <div className="cabinet__data-block-item-value">{userInfo.city}</div>
            </div>
            <div className="cabinet__data-block-item">
                <label className="cabinet__data-block-item-key">Телефон</label>
                <div className="cabinet__data-block-item-value">{userInfo.phone}</div>
            </div>
            <div className="cabinet__data-block-item">
                <label className="cabinet__data-block-item-key">E-Mail</label>
                <div className="cabinet__data-block-item-value">{userInfo.email}</div>
            </div>
            <div className="cabinet__data-block-item" onClick={showPassportModal}>
                <div className="cabinet__data-block-item-docs">Документы для получения приза</div>
                <img src={clip} alt="clip"/>
            </div>
        </>
    )

    return (
        <div className="cabinet">
            <div className="cabinet__content">
                <div className="cabinet__title">Личный кабинет</div>
                <div className="cabinet__inner">
                    <div className="wrapper">

                        <div className="cabinet__item cabinet__data">
                            <div className="cabinet__data-title">Мои данные</div>
                            <div className="cabinet__data-block">
                                {userInfo
                                    ? dataBlock
                                    : <p>Данные подгружаются</p>
                                }
                            </div>
                        </div>
                        <div className="cabinet__item cabinet__giga">
                            <span className="triangle"></span>
                            <div className="cabinet__giga-title">зарабатывай гигабайты</div>
                            <div className="cabinet__giga-subtitle">Участвуй в реферальной программе.</div>
                            <div className="cabinet__giga-descr"> Поделись ссылкой с другом, по которой он должен пройти регистрацию,
                                и каждый из вас получит 10 ГБ мобильного интернета!</div>
                            <Overlay target={target.current} show={show} placement="top">
                                {(props) => (
                                    <Tooltip
                                        className='copyTooltip'
                                        placement='top-start'
                                        id="overlay-example" {...props}>
                                        Скопировано
                                    </Tooltip>
                                )}
                            </Overlay>
                            {
                                userReferral &&
                                <div className="cabinet__giga-button">
                                    <div className='referral-code' ref={target} onClick={copyText}>
                                        {userReferral}
                                        <img src={copy} alt="Скопировать"/>
                                    </div>
                                </div>
                            }
                        </div>
                        {
                            prizes
                                ? prizes.map((prize, index) => (
                                <div className="cabinet__item cabinet__prize" key={index}>
                                    <div className="cabinet__prize-title">это твой выигрыш!</div>
                                    <div className="cabinet__prize-subtitle">{prize.name}</div>
                                    <div className="cabinet__prize-image">
                                        {
                                            prizesImages[prize.name]
                                            ? <img src={prizesImages[prize.name]} alt=""/>
                                            : <img src={prizesImages['samsung_buds']} alt=""/>
                                        }
                                    </div>
                                    <div className="cabinet__prize-button">
                                        <span onClick={showPassportModal} className="how-get-prize">Как получить приз</span>
                                    </div>
                                </div>
                                ))
                                : null
                        }
                        <div className="cabinet__item cabinet__invite">
                            <div className="cabinet__invite-title">ты уже пригласил</div>
                            <div className="cabinet__invite-count">
                                {
                                    numberList.map((number,index) => (
                                        <div key={index} className="cabinet__invite-count-num">
                                            {number}
                                        </div>
                                    ))
                                }
                                <div className="cabinet__invite-count-text">Друзей</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

