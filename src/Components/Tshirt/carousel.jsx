import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshirt from "../../Icons/tshirt.png";
import like from "../../Icons/love.png";
import share from "../../Icons/share.png";
import { useRef } from "react";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <Slider ref={sliderRef} {...settings}>
        <div
          className="coverImage"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <img src={tshirt} height={324} width={283} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        {/* Duplicate slides for infinite scrolling */}
        <div
          className="coverImage"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <img src={tshirt} height={324} width={283} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
