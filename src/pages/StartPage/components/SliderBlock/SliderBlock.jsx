import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Slider from 'infinite-react-carousel';
import {Link} from "react-router-dom";

import { TimerBlock } from "./TimerBlock";
import './SliderBlock.scss';

// Slide images
import slide_1 from '../../../../images/slider_images/samsung.svg'
import slide_2 from '../../../../images/slider_images/alice.svg'
import slide_3 from '../../../../images/slider_images/samsung_buds.svg'
import slide_4 from '../../../../images/slider_images/super_prize.svg'
import slide_5 from '../../../../images/slider_images/watch.svg'
import slide_6 from '../../../../images/slider_images/zenbook.svg'
import slide_7 from '../../../../images/slider_images/iphone.svg'
import slide_8 from '../../../../images/slider_images/ozon.svg'


const SliderBlock = ({prizeTimer}) => {
    return (
        <div id='PRIZE_BLOCK' className={'wrapDesk'}>
            <Container>
                <Row>
                    <Col className={'containerDesk'}>
                        <h2 className={'titleSliderBlock mobileTitle'}>
                            ТЫ МОЖЕШЬ
                            ВЫИГРАТЬ
                        </h2>

                        <div className={'sliderBlockDesk'}>
                            <Slider dots className={'sliderWrapper'}>
                                <div className="slide">
                                    <h3 className={'textSlider'}>
                                        <span className={'textSlider spanText'}>500</span> тысяч рублей
                                    </h3>
                                    <img src={slide_4} className={'sliderContent'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>iphone<span
                                        className={'textSlider spanText'}>12</span></h3>
                                    <img src={slide_7} className={'sliderContent'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>Samsung <span
                                        className={'textSlider spanText'}>Galaxy A71</span></h3>
                                    <img src={slide_1} className={'sliderContent miniImgSlider'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>ASUS
                                        <span className={'textSlider spanText'}> ZenBook</span>
                                    </h3>
                                    <img src={slide_6} className={'sliderContent'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>Apple Watch SE<span
                                        className={'textSlider spanText'}>40mm</span></h3>
                                    <img src={slide_5} className={'sliderContent miniImgSlider'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>True Wireless <span
                                        className={'textSlider spanText'}>Galaxy Buds+</span></h3>
                                    <img src={slide_3} className={'sliderContent slideImg'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>Яндекс.Станция<span
                                        className={'textSlider spanText'}> Мини</span></h3>
                                    <img src={slide_2} className={'sliderContent'}/>
                                </div>
                                <div className="slide">
                                    <h3 className={'textSlider'}>
                                        Сертификат Ozon на <span className={'textSlider spanText'}>1000</span> рублей
                                    </h3>
                                    <img src={slide_8} className={'sliderContent miniImgSlider'}/>
                                </div>
                            </Slider>
                        </div>

                        <div className={'timeRightBlock'}>
                            <h2 className={'titleSliderBlock'}>
                                ТЫ МОЖЕШЬ
                                ВЫИГРАТЬ
                            </h2>

                            <h4 className={'topTitleTimeBlock'}>Следующий розыгрыш состоится </h4>
                            {prizeTimer && <TimerBlock timer={prizeTimer} />}
                            <Link to='/winners' className={'linkWinners'}>
                                <h3 className={'bottomTitleTimeBlock'}>список победителей</h3>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderBlock;

