import React from 'react';
import {useDispatch} from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { SHOW_REGISTER_MODAL, SHOW_ORDER_SIM_MODAL } from '../../../../actions/modals';
import iconDown from '../../../.././images/chevron_big_down.svg';
import './FirstBlockMobile.scss';

const FirstBlockMobile = ({isAuthorize}) => {

  const dispatch = useDispatch()

  const showRegistrationModal = () => {
    dispatch(SHOW_REGISTER_MODAL());
    // eslint-disable-next-line no-undef
    gtag('event', 'sign_up1', { 'method': ' sendform1' });
  }

  const showOrderSimModal = () => {
    dispatch(SHOW_ORDER_SIM_MODAL());
  }

  const scrollTo = (block) => {
    const elementBlock = document.getElementById(block);
    if(elementBlock) {
      elementBlock.firstElementChild.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  const content = (
      <Container>
        <Row>
          <Col>
            <div id='FIRST_BLOCK' className={'firstBlock'}>
              <div className={'contentFirst'}>
                <h2 className={'titleFirstBlock'}>
                  подключай связь{'\u00A0'}z и{'\u00A0'}выигрывай крутые{'\u00A0'}призы
                </h2>

                <div className={'textWrap'}>
                  <p className={'textFirstBlock'}>
                    Ты уже на Связь Z? Тогда участвуй в акции и выиграй 500 000 рублей или один из{'\u00A0'}крутых
                    девайсов!
                  </p>
                  <p className={'textFirstBlock'}>
                    Если нет, переходи на Связь Z
                    и{'\u00A0'}участвуй в{'\u00A0'}розыгрыше!
                  </p>
                </div>
              </div>
              <div className={'btnGroup'}>
                {
                  !isAuthorize &&
                  <div className={'btnWrapper btnGrow'}>
                    <button className={'btnSignUp'} onClick={showRegistrationModal}>зарегистрироваться</button>
                  </div>
                }
                <div className={'btnWrapper btnGrow'}>
                  <button className={'btnSignUp'} onClick={showOrderSimModal}>Заказать sim</button>
                </div>
                <div className={'btnWrapper'}>
                  <button className={'btnDown'} onClick={() => scrollTo('CONNECTION_Z')}>
                    <img src={iconDown} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )

  return content
}


export default FirstBlockMobile;
