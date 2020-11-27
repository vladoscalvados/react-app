import React from 'react';

import './InfoBlock.scss';

const InfoBlock = () => {
    const send_gtag = (type) => {
        if (type === 1){
            // eslint-disable-next-line no-undef
            gtag('event', 'offiсе', { 'event_name': ' click_button' });
        }
        if (type === 2) {
            // eslint-disable-next-line no-undef
            gtag('event', 'voffiсe', { 'event_name': ' click_button' });
        }
        if (type === 3) {
            // eslint-disable-next-line no-undef
            gtag('event', 'sim', { 'event_name': ' click_button' });
        }
        if (type === 4) {
            // eslint-disable-next-line no-undef
            gtag('event', 'esim', { 'event_name': ' click_button' });
        }
    }
  return (
    <div className="info__inner">
        <div className="info__title">Подключи Связь Z любым удобным способом:</div>
        <div className="links">
            <a onClick={() => send_gtag(1)} href='https://moskva.beeline.ru/customers/beeline-map/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students'
               className="info-btn">В ближайшем офисе продаж</a>
            <a onClick={() => send_gtag(2)} href='https://moskva.beeline.ru/customers/products/mobile/tariffs/details/z/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students'
               className="info-btn">Закажи сим-карту с доставкой в интернет-магазине</a>
            <a onClick={() => send_gtag(3)} href='https://moskva.beeline.ru/customers/products/mobile/tariffs/details/z/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students'
               className="info-btn">Активируй E-sim</a>
            <a onClick={() => send_gtag(4)} href='https://moskva.beeline.ru/customers/products/mobile/services/details/mnp/?utm_medium=referral&utm_source=z-promo.ru&utm_campaign=motivate_students'
               className="info-btn">Перейди со своим номером</a>
        </div>
    </div>
  )
}


export default InfoBlock;
