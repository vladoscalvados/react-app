import React, { useMemo } from 'react';
import {useDispatch, useSelector} from "react-redux";
import InputMask from 'react-input-mask';
import { Form, Field } from 'react-final-form'

import { USER_SEND_PASSWORD_REQUEST } from "../../../actions";
import {userResetPasswordError} from "../../../selectors";

import './ResetPassword.scss';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const resetPasswordError = useSelector(userResetPasswordError)
    const onSubmit = (values) => {
        dispatch(USER_SEND_PASSWORD_REQUEST({ phone: values.phone }))
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
                              </div>
                          )}
                      </Field>
                  {
                      (resetPasswordError && resetPasswordError === 'Error') &&
                      <div className="input-area">
                          <span style={{ color: '#FF0F00' }}>Номер введен не корретно</span>
                      </div>
                  }
                      <div className="resetPassword__button">
                          <button disabled={submitting}>Получить код</button>
                      </div>
              </form>
          )}
      />
  ));

  return (
    <div className="resetPassword__inner">
        <div className="resetPassword__title">Выслать код</div>
        <div className="resetPassword__subtitle">Введите номер телефона</div>
        {form}
    </div>
  )
}


export default ResetPassword;
