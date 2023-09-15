import "./customize.css";
// import react, { useState } from "react";
import car from "../../../Icons/delivery-car.png";
import box from "../../../Icons/box.png";
import badge from "../../../Icons/badge.png";
import star from "../../../Icons/Star.png";
import halfstar from "../../../Icons/halfStar.png";
import emptystar from "../../../Icons/emptystar.png";

const Customize = () => {
  // const [loadingWidth, setLoadingWidth] = useState(0);
  // const [inputValue, setInputValue] = useState(50);

  // window.onload = function () {
  //   // This function will be called when the page has finished loading.
  //   fillBar();
  // };
  // const fillBar = () => {
  //   const parsedValue = parseFloat(50);
  //   if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
  //     setLoadingWidth(parsedValue);
  //   } else {
  //     alert("Please enter a valid percentage between 0 and 100.");
  //   }
  // };
  return (
    <div>
      <div className="top">Home&rarr;Customize now</div>
      <div class="line"></div>
      <div className="container">
        <div className="btn-container">
          <button className="btn action-btn">Cover</button>
          <button className="btn signup">Frame</button>
        </div>
        <div className="content">
          <p>Create art from memories!</p>
          <p>
            Upload image {">"}Artist creation{">"}Approve{">"}
            Receive at your home.
          </p>
          <p>Create yours today!</p>
        </div>
        <div className="upload-box container">
          <button className="upload-image">Upload Image</button>
        </div>
        <div class="line"></div>
        <div className="row-container">
          <div className="container">
            <img src={car} height={36} width={36} alt="product" />
            <p className="feature-text">Free Delivery Across INDIA</p>
          </div>
          <div className="container">
            <img src={box} height={36} width={36} alt="product" />
            <p className="feature-text">We Deliver within 5-8 Days</p>
          </div>
          <div className="container">
            <img src={badge} height={36} width={36} alt="product" />
            <p className="feature-text">High Quality Product</p>
          </div>
        </div>
      </div>
      <div className="product">
        <div class="line"></div>
        <div className="description">
          <img src={box} height={36} width={36} alt="product" />
          <p>Product Description</p>
        </div>
        <div class="line"></div>
      </div>
      <div className="container product-des">
        <p className="message">
          Introducing Balajicover's custom phone covers! Choose from Glass,
          Silicon, Hard, or Polaroid covers, all printed with laser precision.
          Experience the finest quality and style while safeguarding your
          device. Elevate your phone's look effortlessly with Balajicover!
        </p>
        <p className="note">Thank You So Much</p>
        <p className="message">
          Thank you for visiting! Your interest in our products is highly
          appreciated. We hope to serve you soon!
        </p>
        <div className="row-container">
          <img src={star} height={24} width={24} alt="product" />
          <img src={star} height={24} width={24} alt="product" />
          <img src={star} height={24} width={24} alt="product" />
          <img src={star} height={24} width={24} alt="product" />
          <img src={halfstar} height={24} width={24} alt="product" />
          <p className="rating">4.5 out of 5</p>
        </div>
        <p className="rating">Based on 45 reviews</p>
        <div className="star-rate">
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "50%" }}></div>
            </div>
            <span className="rating-no">30</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />

            <div className="bar-container">
              <div className="loading-bar" style={{ width: "50%" }}></div>
            </div>
            <span className="rating-no">10</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "50%" }}></div>
            </div>
            <span className="rating-no">5</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "50%" }}></div>
            </div>
            <span className="rating-no">30</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "50%" }}></div>
            </div>
            <span className="rating-no">30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
