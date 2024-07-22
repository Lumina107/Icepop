import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import Buying from "./../assets/images/Buy.png";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    variableWidth: true,
  };
  return (
    <div className="slider-container pt-8 pb-5 bg-[#9959BA] border-y-8 border-[#73EFDF]">
      <Slider {...settings}>
        {[...new Array(9).keys()].map((_, index) => (
          <div
            className="h-8 lg:h-10 w-28 flex items-center justify-center mx-8"
            key={index}
          >
            <img
              src={Buying}
              alt="Buy $ICEPOP"
              className="h-8 lg:h-10 w-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
