import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import InputMask from 'react-input-mask';
import { Field, Form } from "react-final-form";

import {PASSPORT_FORM_REQUEST} from "../../../actions/passportForm";
import {passportFormErrorSelector, passportFormMessage, userPassportInfoSelector} from "../../../selectors/beelineSelectors";

import './Passport.scss';

export const Passport = () => {

    const dispatch = useDispatch();
    const passportInfo = useSelector(userPassportInfoSelector);
    const formError = useSelector(passportFormErrorSelector);
    const formMessage = useSelector(passportFormMessage);
    const errors = {
        surname: formError && formError.surname ? formError.surname : null,
        name: formError && formError.name ? formError.name : null,
        patronymic: formError && formError.patronymic ? formError.patronymic : null,
        birth_date: formError && formError.birth_date ? formError.birth_date : null,
        number: formError && formError.number ? formError.number : null,
        // firstFile: formError && formError['files[0]'] ? formError['files[0]'] : null,
        // secondFile: formError && formError['files[0]'] ? formError['files[0]'] : null,
    }
    const isPassportLoaded = passportInfo && Object.values(passportInfo).length > 0;


    const onSubmit = (values) => {
        const payload = new FormData();
        payload.append("surname", values.surname ?? null);
        payload.append("name", values.name ?? null);
        payload.append("patronymic", values.patronymic ?? null);
        payload.append("birth_date", values.birth_date ?? null);
        payload.append("number", values.number ?? null);
        if(values.files && Object.values(values.files).length > 0){
            Array.prototype.forEach.call(values.files, (file, index) => {
                payload.append(`files[${index}]`, file ? file : null);
            });
        }
        dispatch(PASSPORT_FORM_REQUEST(payload))
    }

    const form = (
        <>
            <div className="passport__title">введите данные вашего паспорта</div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <>
                        <Field name="name" >
                            {({ input, meta }) => (
                                <div className='passport__input-area'>
                                    <input {...input} type="text" placeholder="Фамилия" />
                                    {errors.name && <p className='errorTitle'>{errors.name}</p>}
                                </div>
                            )}
                        </Field>
                        <Field name="surname" >
                            {({ input, meta }) => (
                                <div className='passport__input-area'>
                                    <input {...input} type="text" placeholder="Имя" />
                                    {errors.surname && <p className='errorTitle'>{errors.surname}</p>}
                                </div>
                            )}
                        </Field>
                        <Field name="patronymic" >
                            {({ input, meta }) => (
                                <div className='passport__input-area'>
                                    <input {...input} type="text" placeholder="Отчество" />
                                    {errors.patronymic && <p className='errorTitle'>{errors.patronymic}</p>}
                                </div>
                            )}
                        </Field>
                        <Field name="birth_date" >
                            {({ input, meta }) => (
                                <div className='passport__input-area'>
                                    <InputMask mask="99/99/9999" {...input} type="text" placeholder="Дата рождения" />
                                    {errors.birth_date && <p className='errorTitle'>{errors.birth_date}</p>}
                                </div>
                            )}
                        </Field>
                        <Field name="number" >
                            {({ input, meta }) => (
                                <div className='passport__input-area'>
                                    <InputMask mask="9999/999999" {...input} type="text" placeholder="Серия и номер" />
                                    {errors.number && <p className='errorTitle'>{errors.number}</p>}
                                </div>
                            )}
                        </Field>
                        <Field name="files" >
                            {({ input: { value, onChange, ...input } }) =>
                            {
                                const handleChange = ({ target }) => {
                                    onChange(target.files)
                                }
                                return (
                                    <div className='passport__input-area input-photo'>
                                        <div className="file-block">
                                            <div className="file-input-text">
                                                <p>
                                                    Перетащите фото документа или нажмите для выбора
                                                </p>
                                            </div>
                                            <input className="inputFile" {...input} multiple type="file" accept="image/*" onChange={handleChange} />
                                        </div>
                                        {/*{errors.files && <p className='errorTitle'>{errors.files}</p>}*/}
                                    </div>
                                )
                            }}
                        </Field>
                        { formMessage
                        && <div className='passport__input-area'>
                                <p className='success_message'>{formMessage}</p>
                            </div>
                        }
                        <div className="passport__button" onClick={handleSubmit}>
                            <button>Отправить</button>
                        </div>
                    </>
                )}
            />
        </>
    )
    return (
                <div className="passport__inner">
                    {
                        isPassportLoaded
                        ? <div className='passport__input-area'>
                              <p className='success_message'>Пасспортные данные были подгружены</p>
                          </div>
                        : form
                    }
                </div>
    )
}
