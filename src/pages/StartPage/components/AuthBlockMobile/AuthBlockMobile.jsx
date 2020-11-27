import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import {Field, Form} from "react-final-form";

import { SHOW_REGISTER_MODAL, SET_REGISTRATION_FORM } from '../../../../actions';
import './AuthBlockMobile.scss';

const AuthBlockMobile = () => {
  const dispatch = useDispatch();
  const showRegistrationModal = (values) => {
    dispatch(SHOW_REGISTER_MODAL());
    dispatch(SET_REGISTRATION_FORM(values))
      // eslint-disable-next-line no-undef
    gtag('event', 'sign_up3', { 'method': ' sendform3' });
  }
  return (
      <Container>
        <Row>
          <Col>
            <div className="authBlock">
              <div>
                <h3 className={'titleAuthBlock'}>
                    подключай связь{'\u00A0'}z
                    и{'\u00A0'}регистрируйся
                </h3>
                  <p className={'subTitleAuthBlock'}>
                      если ты уже подключен, то{'\u00A0'}регистрируйся прямо сейчас
                  </p>
              </div>

              <div className={'formAuthBlock'}>
                <Form
                    onSubmit={showRegistrationModal}
                    render={({ handleSubmit }) => (
                          <>
                            <Field name="name" >
                              {({ input, meta }) => (
                                  <input {...input} type="text" placeholder={'Имя'} className={'inputBlock'} />
                              )}
                            </Field>
                            <Field name="email" >
                              {({ input, meta }) => (
                                  <input {...input} type="text" placeholder={'E-mail'} className={'inputBlock'} />
                              )}
                            </Field>
                            <div className={'btnWrapper btnForm'}>
                              <button onClick={handleSubmit} className={'btnSignUp'}>зарегистрироваться</button>
                            </div>
                          </>
                    )}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default AuthBlockMobile;
