import React, { useMemo } from 'react';
import './RegistrationSmall.scss';

const RegistrationSmall = () =>
  useMemo(() => (
    <div className="registration">
      <div className="registration__wrapper">
        <div className="registration__close">
          <a href="/">X</a>
        </div>
        <div className="registration__inner">
          <div className="registration__title">регистрация</div>
          <div className="registration__subtitle">Если у вас еще нет аккаунта,
            необходимо пройти регистрацию </div>
          <div className="inputs">
            <div className="input-area">
              <input type="text" placeholder="Имя" />
            </div>
            </div>
          </div>
          <div className="registration__account">
            <a href="#">Выслать код еще раз</a>
          </div>
          <div className="registration__button">
            <button>Зарегистрироваться</button>
          </div>

        </div>
    </div>
  ));

export default RegistrationSmall;
