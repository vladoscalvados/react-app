import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Container} from 'react-bootstrap';
import arrowImg from '../../../../images/arrow.svg';
import iconQuestion from '../../../../images/iconQuestion.svg';
import './CardsBlockMobile.scss';

import {SHOW_REGISTER_MODAL, SHOW_INFO_MODAL} from "../../../../actions";


const CardsBlockMobile = ({isAuthorize}) => {
  const dispatch = useDispatch()

  const showRegistrationModal = () => {
    dispatch(SHOW_REGISTER_MODAL())
    // eslint-disable-next-line no-undef
    gtag('event', 'sign_up2', { 'method': ' sendform2' });
  }
  const showInfoModal = () => {
    dispatch(SHOW_INFO_MODAL())
    // eslint-disable-next-line no-undef
    gtag('event', 'perekhod', { 'event_name': 'click_button' });
  }

  return (
      <Container className={'containerDeskCard'}>
        <Row>
          <Col>
            <div id='HOW_WIN_BLOCK' className="cardsBlock">
              <h2 className={'titleCardsBlock'}>
                Как
                выиграть{'\u00A0'}приз?
              </h2>

              <div>
                <div className={'cardWrapCardsBlock'}>
                  <div className={'cardCardsBlock'}>
                    <div className={'labelCardsBlock'}>1.</div>

                    <div>
                      <h4 className={'cardTitle firstTitle'}>
                        подключи связь{'\u00A0'}z и{'\u00A0'}пополни баланс от{'\u00A0'}<span
                          className={'elemNumber'}>100</span> рублей
                      </h4>
                      <p className={'cardSubTitle'}>подробнее на сайте</p>
                    </div>

                    <a onClick={showInfoModal}>
                      <img src={arrowImg} className={'arrowImg'} />
                    </a>
                  </div>
                </div>

                <div className={'cardWrapCardsBlock'}>
                  <div className={'cardCardsBlock'}>
                    <div className={'labelCardsBlock'}>2.</div>

                    <h4 className={'cardTitle'}>зарегистрируйся в{'\u00A0'}акции</h4>

                    {
                      !isAuthorize
                       && <div className={'btnWrapper cardTwoBtn'}>
                            <button className={'btnSignUp'} onClick={showRegistrationModal}>зарегистрироваться</button>
                          </div>
                    }
                  </div>
                </div>

                <div className={'cardWrapCardsBlock'}>
                  <div className={'cardCardsBlock'}>
                    <div className={'labelCardsBlock'}>3.</div>
                    <h4 className={'cardTitle lastTitle'}>
                      будь активным пользователем <br/>
                      и выиграй приз
                    </h4>

                    <a target='_blank' href="https://files.u2c.su/beeline/Z-promo_rules.pdf" className={'linkCardQuestion'}>
                      правила акции
                      <img src={iconQuestion} className={'iconQuestionBlock'}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default CardsBlockMobile;
