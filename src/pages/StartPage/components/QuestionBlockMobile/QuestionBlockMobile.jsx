import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import {FEEDBACK_SEND_REQUEST } from "../../../../actions/feedbackSend";
import { feedbackResponseMessageSelector, feedbackErrorMessageSelector } from "../../../../selectors/beelineSelectors/sendFeedBackSelector";

import IconUp from "../../../../images/iconUp.svg";
import './QuestionBlockMobile.scss';
import {Field, Form} from "react-final-form";

const QuestionBlockMobile = () => {
    const [blockVisible, setBlockVisible] = useState(true)

    let questionBlockBg = 'questionBlock ';
    let iconQuestion = '';

    if(blockVisible === false){
        questionBlockBg += 'hideBgQuestion';
        iconQuestion += 'iconQuestion'
    }

    const dispatch = useDispatch();
    const feedMessage = useSelector(feedbackResponseMessageSelector);
    const feedErrorMessage = useSelector(feedbackErrorMessageSelector);
    const onSubmit = (values) => {
        dispatch(FEEDBACK_SEND_REQUEST({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
        }))
    }
    const form = (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name" >
                        {({ input, meta }) => (
                            <input {...input} className={'inputBlock'} type="text" placeholder="Имя" />
                        )}
                    </Field>
                    <Field name="email" >
                        {({ input, meta }) => (
                            <input {...input} className={'inputBlock'} type="text" placeholder="E-mail" />
                        )}
                    </Field>
                    <Field name="subject" >
                        {({ input, meta }) => (
                            <input {...input} className={'inputBlock'} type="text" placeholder="Тема" />
                        )}
                    </Field>
                    <Field name="message" type={'textarea'} >
                        {({ input, meta }) => (
                            <textarea {...input} cols="40" rows="6" placeholder={'Сообщение'} className={'inputBlock textareaBlock'} />
                        )}
                    </Field>
                    {
                        feedErrorMessage && <p className='feedErrorMessage'>Проерьте корректность введенных данных</p>
                    }
                    <div className={'btnWrapper btnQuestion'}>
                        <button className={'btnSignUp'}>отправить</button>
                    </div>
                </form>
            )}
        />
    )

    const content = useMemo(() => (
        <div id="QUESTION_BLOCK" className={questionBlockBg} >
            <Container className={'containerQuestion'}>
                <h3 className={'titleQuestionBlock'}>
                    задай нам <a onClick={() => setBlockVisible(!blockVisible)} className={'elemMobile'}><img
                    className={iconQuestion} src={IconUp}/></a> <br className={'elemMobile'}/>
                    вопрос <a onClick={() => setBlockVisible(!blockVisible)} className={'elemDesk'}><img
                    className={iconQuestion} src={IconUp}/></a>
                </h3>

                {
                    blockVisible ?
                        (
                            <div className={'formQuestionBlock'}>
                                {
                                    feedMessage
                                        ? <p className='feedSuccessMessage'>Ваше сообщение отправлено, мы ответим вам в течение суток</p>
                                        : form
                                }
                            </div>
                        )
                        : null
                }
            </Container>
        </div>
    ))

    return content;
}

export default QuestionBlockMobile;
