import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export const NotFound = () => (
        <div className="error">
            <div className="error__title">404</div>
            <div className="error__subtitle">Страница не  найдена</div>
            <div className="error__button">
                <Link to='/' className='startPageLink'>Вернуться на главную</Link>
            </div>
        </div>
    );
