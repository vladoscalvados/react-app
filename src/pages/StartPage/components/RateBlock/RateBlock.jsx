import React, {useMemo, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './RateBlock.scss';
import iconDown from '../../../../images/Polygon 2.svg';
import iconDialog from '../../../../images/icon-dialog.svg';
import iconPlay from '../../../../images/icon-play.svg';
import iconPhone from '../../../../images/icon-phone.svg';
import iconGPlay from '../../../../images/g_play.svg';
import iconApp from '../../../../images/app_store.svg';
import {Container} from 'react-bootstrap';

const RateBlock = () => {

    const [blockVisible, setBlockVisible] = useState(false);

    let rateBlockBg = 'wrapRateDesk ';

    if (blockVisible === false) {
        rateBlockBg += 'hideBg';
  }

  const content = (
      <div>
        <h3 className={'subTitleRateBlock'}>
          подключай
          безлимитные опции
        </h3>

        <div className={'textIconWrap'}>
          <div className={'textIcon'}>
            <img src={iconDialog}/>
            <div className={'text'}>
              обращайся в соцсетях
              и мессенджерах
            </div>
          </div>
          <div className={'textIcon'}>
            <img src={iconPlay}/>
            <div className={'text'}>
              Смотри видосики на Youtube
            </div>
          </div>
          <div className={'textIcon'}>
            <img src={iconPhone}/>
            <div className={'text'}>
              зависай в интернете или звони на номера билайн
            </div>
          </div>
        </div>

        <h3 className={'bottomTextRateBlock'}>
          Управляй связью осознанно в приложении "Мой Билайн" <span className={'numberAge'}>12+</span>
        </h3>

        <div className={'iconSocialWrap'}>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=ru.beeline.services&hl=ru">
            <img src={iconGPlay}/>
          </a>
          <a target="_blank" href="https://apps.apple.com/ru/app/moj-bilajn/id569251594">
            <img src={iconApp}/>
          </a>
        </div>
      </div>
  )

  return (
      <div id='CONNECTION_Z' className={rateBlockBg}>
        <Container className={'containerDesk'}>
          <Row>
            <Col>
              <div  className="rateBlock">
                <div className={'titlesRate'}>
                  <h2 className={'titleRateBlock'}>связь z</h2>

                  <p className={'textRateBlock'}>
                    Бери только нужное: минуты, гигабайты, sms - <br className={'elemMobile'}/>и трать без остатка!
                  </p>
                </div>

                <div className={'contentRateBlock'}>
                  <div className={'contentWrapTitle'}>
                    <h4 className={'contentTitle'}>пакеты интернета</h4>
                    <h4 className={'contentTitle'}>пакеты минут</h4>
                    <h4 className={'contentTitle'}>пакеты смс</h4>
                  </div>

                  <div className={'contentWrapRate'}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={2} className={'btnWrapRateBlock'}>
                      <ToggleButton value={1} className={'yellowButtonRate blackBtn'}>
                        <span>10 Гб</span>
                      </ToggleButton>

                      <ToggleButton value={2} className={'yellowButtonRate blackButton'}>
                        <span>30 Гб</span>
                      </ToggleButton>

                      <ToggleButton value={3} className={'yellowButtonRate yellowButton'}>
                        <span>50 Гб</span>
                      </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup type="radio" name="options" defaultValue={5} className={'btnWrapRateBlock'}>
                      <ToggleButton value={4} className={'yellowButtonRate blackBtn'}>
                        <span>0 мин</span>
                      </ToggleButton>

                      <ToggleButton value={5} className={'yellowButtonRate blackButton'}>
                        <span>100 мин</span>
                      </ToggleButton>

                      <ToggleButton value={6} className={'yellowButtonRate yellowButton'}>
                        <span>300 мин</span>
                      </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup type="radio" name="options" defaultValue={7} className={'btnDouble'}>
                      <ToggleButton value={7} className={'yellowButtonRate blackBtn btnDoubleYellow'}>
                        <span>0</span>
                      </ToggleButton>

                      <ToggleButton value={8} className={'yellowButtonRate yellowButton btnDoubleYellow'}>
                        <span>100</span>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>

                <div className={'btnRateBlockWrap'}>
                  <button className={'btnRateBlock'} onClick={() => setBlockVisible(!blockVisible)}>
                    подробнее
                    <img src={iconDown}/>
                  </button>
                </div>

                {blockVisible ? content : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}


export default RateBlock;
