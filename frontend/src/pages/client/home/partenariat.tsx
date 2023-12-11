import React from "react";
import Slider from "react-slick";

type Props = {};

export const Partenariat = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
  };
  return (
    <div className="partenaires">
      <div className="partenaires__content">
          <Slider className="slider" {...settings}>
            <img src="/images/partenaire-1.jpg" alt="1" />
            <img src="/images/partenaire-2.jpg" alt="2" />
            <img src="/images/partenaire-3.jpg" alt="3" />
            <img src="/images/partenaire-4.jpg" alt="4" />
            <img src="/images/partenaire-5.jpg" alt="5" />
            <img src="/images/partenaire-6.jpg" alt="6" />

          </Slider>
      </div>
    </div>
  );
};