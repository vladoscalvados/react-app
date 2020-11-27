import React, { useMemo } from 'react';
import './Footer.scss';
import LogoZ from '../../images/logoZ.svg';
import Beeline from '../../images/logoBeeline.svg';

export const Footer = () => {
    const moveLinkZ = () => {
        // eslint-disable-next-line no-undef
        gtag('event', 'clickZ1', { 'method': ' click_button' });
    }
    const moveLinkB = () => {
        // eslint-disable-next-line no-undef
        gtag('event', 'clickB', { 'method': ' click_button' });
    }
    return  (
        <div className="footer">
                <div className="footer__inner">
                    <div className="logos">
                        <a className="beeline-logo"
                           href="https://moskva.beeline.ru/customers/products/mobile/tariffs/details/z/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students"
                        >
                            <img src={Beeline} alt="beeline" onClick={moveLinkB} />
                        </a>
                        <div className="z-logo">
                            <img src={LogoZ} alt="logoZ" onClick={moveLinkZ} />
                        </div>
                    </div>
                </div>
        </div>
    )
}

