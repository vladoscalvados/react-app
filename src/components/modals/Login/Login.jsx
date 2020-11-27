import React, { useMemo } from 'react';
import {useDispatch, useSelector} from "react-redux";
import InputMask from 'react-input-mask';
import { Form, Field } from 'react-final-form'

import { USER_LOGIN_REQUEST, SHOW_RESET_PASSWORD_MODAL, CLOSE_AUTHORIZE_MODAL} from "../../../actions";
import {loginErrorSelector, userLoginError, loginResponseErrorSelector} from "../../../selectors";

import './Login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(loginErrorSelector)
    const loginErrorMessage = useSelector(userLoginError);
    const loginResponseError = useSelector(loginResponseErrorSelector);

    const errors = {
        phone: loginError && loginError.phone ? loginError.phone : null,
        password: loginError && loginError.password ? loginError.password : null,
    }
    const onSubmit = (values) => {
        dispatch(USER_LOGIN_REQUEST({ phone: values.phone, password: values.code }))
    }

    const showResetPassword = () => {
        dispatch(CLOSE_AUTHORIZE_MODAL())
        dispatch(SHOW_RESET_PASSWORD_MODAL())
    }
  const form = useMemo(() => (
      <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                      <Field name="phone" >
                          {({ input, meta }) => (
                              <div className='input-area'>
                                  <InputMask {...input} mask="+7 (999) 999-99-99"  placeholder="Телефон" />
                                  {errors.phone && <p className='errorTitle'>{errors.phone}</p>}
                              </div>
                          )}
                      </Field>
                      <Field name="code" >
                          {({ input, meta }) => (
                              <div className='input-area'>
                                  <input {...input} type="text" placeholder="Код" />
                                  {errors.password && <p className='errorTitle'>{errors.password}</p>}
                              </div>
                          )}
                      </Field>

                  {
                      (loginError && loginError === 'Error') &&
                      <div className="input-area">
                          <span style={{ color: '#FF0F00' }}>Введеные данные не корректны</span>
                      </div>
                  }
                  {
                      (loginResponseError) &&
                      <div className="input-area">
                          <span style={{ color: '#FF0F00' }}>{loginResponseError}</span>
                      </div>
                  }
                      <div className="login__account" onClick={showResetPassword}>
                          <a>Забыли код?</a>
                      </div>
                      <div className="login__button">
                          <button disabled={submitting}>Войти</button>
                      </div>
              </form>
          )}
      />
  ));

  return (
    <div className="login__inner">
        <div className="login__title">авторизация</div>
        <div className="login__subtitle">Вход в личный кабинет</div>
        {
            loginErrorMessage
                ? <div className="login__subtitle">Подключись к Связь Z для участия в акции</div>
                : form
        }
    </div>
  )
}


export default Login;
