import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {Menu} from '../Menu'
import {Burger} from '../Burger'

import logo from '../../images/logoZ.svg';
import burger from '../../images/burger.png';
import './Header.scss';

export const Header = ({showLK}) => {
    const [menuVisible, setMenuVisible] = useState(false)

    const moveLK = () => {
        // eslint-disable-next-line no-undef
        gtag('event', 'clickLK', { 'method': ' click_button' });
    }

    const moveLinkZ = () => {
        // eslint-disable-next-line no-undef
        gtag('event', 'clickZ', { 'method': ' click_button' });
    }

    return (
        <>
            <div className="heading">
                <div className="heading__wrapper">
                    <div className="heading__inner">
                        <a
                            className="heading__logo"
                            href="https://moskva.beeline.ru/customers/products/mobile/tariffs/details/z/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students"
                        >
                            <img src={logo} alt="logo" onClick={moveLinkZ} />
                        </a>
                        {/*<Link to={'/'} className="heading__logo">*/}
                        {/*    <img src={logo} alt="logo" />*/}
                        {/*</Link>*/}
                        <div className="heading__menu">
                            {
                                showLK &&
                                     <div className="heading__menu-button">
                                         <Link to={'/profile'} onClick={moveLK}>Личный кабинет</Link>
                                     </div>
                            }
                            <Burger open={menuVisible} setOpen={(mode) => setMenuVisible(mode)}/>
                        </div>
                    </div>
                </div>
            </div>
            { menuVisible && <Menu isAuth={showLK} closeMenu={() => setMenuVisible(false)} /> }
        </>
    )
}
