import SliderComponent from 'infinite-react-carousel';
import { WinnersBlock } from "../WinnersBlock";
import './Slider.scss'

const settings =  {
    adaptiveHeight: true,
    adaptiveWeight:true,
    arrows: false,
    arrowsBlock: false,
    dots: true,
    dotsClass: "carousel-dots style",
    duration: 100,
};
export const Slider = ({winnersList}) => (
    <div className={'SliderWrapper'}>
        {
            winnersList && winnersList.length > 0
            ? <SliderComponent {...settings} >
                    {
                        winnersList.map((item, index) => (
                            <div key={index}>
                                <h3><WinnersBlock winnerSlideItem={item}/></h3>
                            </div>
                        ))
                    }
                </SliderComponent>
            : null
        }
    </div>
);
