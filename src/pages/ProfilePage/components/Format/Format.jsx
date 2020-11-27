import React, { useMemo } from 'react';
import './Format.scss';

const Format = () =>
    useMemo(() => (
        <div className="format">
            <div className="format__close">
                <a href="/">X</a>
            </div>
            <div className="format__title">Выбери наиболее удобный формат подключения тарифа Связь Z:</div>
                <div className="format__inner">
                    <div className="format__block">
                        <div className="format__block-item">Перейти в Билайн со своим номером
                        </div>
                        <div className="format__block-item">В офисе продаж
                        </div>
                        <div className="format__block-item">Интернет-магазин
                        </div>
                        <div className="format__block-item">E-sim
                        </div>
                    </div>
                </div>


        </div>
    ));

export default Format;