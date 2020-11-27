import React  from 'react';
import './OrderSim.scss';
import InputMask from "react-input-mask";

export const OrderSim = () => {
    const form = (
        <>
            <div className=""></div>
        </>
    );

    return (
        <div className="sim">
            <div className="sim-wrapper">
                <div className="sim__inner">
                    <div className="sim__title">Заказать SIM-карту</div>
                    <div className="sim__subtitle">Закажи Sim-карту с тарифом Связь Z для участия в акции</div>
                    <div className="sim__inputs">
                        <div className="sim__inputs-area">
                            <input type="text" placeholder="Имя" />
                        </div>
                        <div className="sim__inputs-area">
                            <input type="text" placeholder="Фамилия" />
                        </div>
                        <div className="sim__inputs-area">
                            <InputMask mask="+7 (999) 999-99-99"  placeholder="Телефон" />
                        </div>
                        <div className="sim__inputs-area">
                            <input type="text" placeholder="E-Mail" />
                        </div>
                        <div className="sim__inputs-area">
                            <input type="text" placeholder="Город" />
                        </div>

                        <div className='input-area__check'>
                            <label>
                                <input type='checkbox' className="check" />
                                <span className="check-style"></span>
                                <p>Согласие на уведомление о смене статуса заказа по email/смс</p>
                            </label>
                        </div>
                        <div className='input-area__check'>
                            <label>
                                <input type='checkbox' className="check" />
                                <span className="check-style"></span>
                                <p>Согласие на рассылку</p>
                            </label>
                        </div>
                </div>
                    <div className="sim__button">
                        <button>Заказать</button>
                    </div>
            </div>
            </div>
            {
                form
            }
        </div>
    )
}
