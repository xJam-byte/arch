import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../imgs/slide1.jpg';
import slide2 from '../imgs/slide2.jpg';
import slide3 from '../imgs/slide3.jpg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="slider">
      <Slider {...settings}>
        <div className="slide">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={slide2} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={slide3} alt="Slide 3" />
        </div>
      </Slider>
    </section>
  );
}

export default CustomSlider;
