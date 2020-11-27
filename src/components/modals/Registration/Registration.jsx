import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { Form, Field } from 'react-final-form'

import {USER_REGISTER_REQUEST, SHOW_AUTHORIZE_MODAL, CLOSE_REGISTER_MODAL} from "../../../actions";
import {userRegisterMessage, registrationFormSelector, registrationErrorSelector} from "../../../selectors";

import './Registration.scss';

const Registration = () => {
    const dispatch = useDispatch();

    const registerForm = useSelector(registrationFormSelector);
    const registerMessage = useSelector(userRegisterMessage);
    const registerError = useSelector(registrationErrorSelector);

    const showAuthorize = () => {
        dispatch(CLOSE_REGISTER_MODAL());
        dispatch(SHOW_AUTHORIZE_MODAL())
    }

    const initialValues = registerForm
        ? {
            email: registerForm ? registerForm.email : '',
            name: registerForm ? registerForm.name : '',
            referral: registerForm ? registerForm.referral : ''
        }
        : {}

    const errors = {
        name: registerError && registerError.name ? registerError.name : null,
        phone: registerError && registerError.phone ? registerError.phone : null,
        email: registerError && registerError.email ? registerError.email : null,
        city: registerError && registerError.city ? registerError.city : null,
        referral: registerError && registerError.referral ? registerError.referral : null,
    }

    const validateFields = values => {
        const errors = {}
        if (!values.agreementPersonal) {
            errors.agreementPersonal = 'Примите соглашение'
        }
        if (!values.agreementAdvertising) {
            errors.agreementAdvertising = 'Примите соглашение'
        }
        return errors
    }

    const onSubmit = (values) => {
        dispatch(USER_REGISTER_REQUEST({ name: values.name, phone: values.phone, email: values.email, city: values.city, referral: values.referral }))
    }

    const sendGtag = () => {
        // eslint-disable-next-line no-undef
        gtag('event', 'kod', { 'event_name': ' click_button' });
        // eslint-disable-next-line no-undef
        ym(69064471,'reachGoal','code');
    }

    const form = (
        <>
            <div className="registration__subtitle"> Если у вас еще нет аккаунта, необходимо пройти регистрацию.</div>
            <Form
                onSubmit={onSubmit}
                validate={validateFields}
                initialValues={initialValues}
                render={({ handleSubmit, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <Field name="name" >
                                {({ input, meta }) => (
                                    <div className='input-area'>
                                        <input {...input} type="text" placeholder="Имя" />
                                        {errors.name && <p className='errorTitle'>{errors.name}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="phone" >
                                {({ input, meta }) => (
                                    <div className='input-area'>
                                        <InputMask {...input} mask="+7 (999) 999-99-99"  placeholder="Телефон" />
                                        {errors.phone && <p className='errorTitle'>{errors.phone}</p>}
                                    </div>
                                )}
                            </Field>
                            <Field name="email" >
                                {({ input, meta }) => (
                                    <div className='input-area'>
                                        <input {...input} type="text" placeholder="Email" />
                                        {errors.email && <p className='errorTitle'>{errors.email}</p>}
                                    </div>
                                )}
                            </Field>

                            <Field name="city" >
                                {({ input, meta }) => (
                                    <div className='input-area'>
                                        <input {...input} type="text" placeholder="Город" />
                                        {errors.city && <p className='errorTitle'>{errors.city}</p>}
                                    </div>
                                )}
                            </Field>

                            <Field name="referral" >
                                {({ input, meta }) => (
                                    <div className='input-area'>
                                        <input {...input} type="text" placeholder="Реферальный код" />
                                        {errors.referral && <p className='errorTitle'>{errors.referral}</p>}
                                    </div>
                                )}
                            </Field>

                            <div className="input-area">
                                <span
                                style={{
                                    textDecoration: 'underline',
                                    color: '#fff',
                                    cursor: "pointer"
                                }}
                                onClick={showAuthorize}
                                >У меня уже есть аккаунт</span>
                            </div>

                            {
                                // (registerError && registerError === 'Error') &&
                                //     <div className="input-area">
                                //         <span style={{ color: '#FF0F00' }}>Некорректно введены данные или такой пользователь уже есть</span>
                                //     </div>
                            }

                            <Field name="agreementPersonal" type="checkbox">
                                {({ input, meta }) => (
                                    <div className='input-area__check'>
                                        <label>
                                            <input {...input} type='checkbox' value={input.value} className="check" component="input"/>
                                            <span className="check-style"></span>
                                            <p>Даю своё согласие на хранение и обработку персональных данных</p>
                                            <p className="underline">
                                                <a target='_blank' href="https://files.u2c.su/beeline/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf">
                                                    Ознакомиться с Политикой безопасности
                                                </a>
                                            </p>

                                            {meta.error && meta.touched && <p className='errorTitle'>{meta.error}</p>}

                                        </label>
                                    </div>
                                )}
                            </Field>

                            <Field name="agreementAdvertising" type="checkbox">
                                {({ input, meta }) => (
                                    <div className='input-area__check'>
                                        <label>
                                            <input {...input} type='checkbox' value={input.value} className="check" component="input"/>
                                            <span className="check-style"></span>
                                            <p>Даю своё согласие на получение рекламных рассылок и информационных уведомлений</p>

                                            {meta.error && meta.touched && <p className='errorTitle'>{meta.error}</p>}
                                        </label>
                                    </div>
                                )}
                            </Field>

                            <div className="registration__button">
                                <button disabled={submitting} onClick={sendGtag}>Отправить код</button>
                            </div>
                        </div>
                    </form>
                )}
            />
        </>
    );

    return (
        <div className="registration__inner">
            <div className="registration__title">регистрация</div>

            {
                registerMessage ?
                    <div className="registration__subtitle">{registerMessage}</div>
                    : form
            }
        </div>

    )
}


export default Registration;
