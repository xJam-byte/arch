import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../imgs/works/1.jpg'
import slide2 from '../imgs/works/2.jpg'
import slide3 from '../imgs/works/3.jpg'
import slide4 from '../imgs/works/4.jpg'
import { useTranslation } from 'react-i18next';

function OurWorks() {
    const {t} = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
      };
    
      return (
        <div className='container our-block'>
            <div className="our-title">{t("our-block-title")}</div>
            <div className="our-subtitle">{t("our-block-subtitle")}</div>
            <div className="custom-slider-container our-slide-block">
                <Slider {...settings}>
                    <div  className="custom-slider-slide">
                        <img src={slide1} alt={`Slide1`} className="custom-slider-image" />
                    </div>
                    <div  className="custom-slider-slide">
                        <img src={slide2} alt={`Slide2`} className="custom-slider-image" />
                    </div>
                    <div  className="custom-slider-slide">
                        <img src={slide3} alt={`Slide3`} className="custom-slider-image" />
                    </div>
                    <div  className="custom-slider-slide">
                        <img src={slide4} alt={`Slide4`} className="custom-slider-image" />
                    </div>
                </Slider>
            </div>
        </div>
      );
}

export default OurWorks