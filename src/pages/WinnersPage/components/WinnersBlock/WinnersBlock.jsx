import React from 'react';

import './WinnersBlock.scss';
export const WinnersBlock = ({winnerSlideItem}) => (
        <div className="winners__block">
            <div className="winners__block-item">
                <label className="winners__block-item-data">Дата <br/> розыгрыша</label>
                <label className="winners__block-item-tel">Телефон</label>
                <label className="winners__block-item-name">Имя</label>
                <label className="winners__block-item-prize">Приз</label>
            </div>
            {
                winnerSlideItem.map((item, index) => (
                    <div key={index} className="winners__block-user">
                        <label className="winners__block-user-data">{item.won_at}</label>
                        <label className="winners__block-user-tel">{item.phone}</label>
                        <label className="winners__block-user-name">{item.name}</label>
                        <label className="winners__block-user-prize">{item.prize_name}</label>
                    </div>
                ))
            }
        </div>
    );