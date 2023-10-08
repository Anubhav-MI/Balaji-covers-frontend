import React from "react";
import car from "../../../Icons/delivery-car.png";
import box from "../../../Icons/box.png";
import badge from "../../../Icons/badge.png";
import star from "../../../Icons/Star.png";
import halfstar from "../../../Icons/halfStar.png";
import emptystar from "../../../Icons/emptystar.png";
import user from "../../../Icons/usericon.png";

const Reviews = () => {
  return (
    <div>
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
              <div className="loading-bar" style={{ width: "30%" }}></div>
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
              <div className="loading-bar" style={{ width: "20%" }}></div>
            </div>
            <span className="rating-no">5</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "0%" }}></div>
            </div>
            <span className="rating-no">0</span>
          </div>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <img src={emptystar} height={16} width={16} alt="product" />
            <div className="bar-container">
              <div className="loading-bar" style={{ width: "0%" }}></div>
            </div>
            <span className="rating-no">0</span>
          </div>
          <button className="review action-btn">Write a review</button>
        </div>
        <div class="line"></div>
        <div className="container-close">
          <p className="note">Write a review</p>
          <p>Rating</p>
          <div className="row-container">
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
            <img src={star} height={16} width={16} alt="product" />
          </div>
          <p>Review</p>
          <input
            type="text"
            className="comment-box"
            placeholder="Write your comments here"
          />
          <p>Picture(optional)</p>
          <div className="upload-box3 container-close">
            <button className="upload-image3">Upload Image</button>
          </div>
          <p>Name(Displayed publicly)</p>
          <input
            type="text"
            className="field"
            placeholder="Enter your name (public)"
          />
          <p>Phone number </p>
          <input type="text" className="field" placeholder="" />
          <div className="review-box">
            {" "}
            <button className="review btn btn1">Cancel review</button>
            <button className="review action-btn btn1">Submit review</button>
          </div>
        </div>
        <div class="line"></div>
        <div className="upload-section">
          <p className="uploads">Customer Photos & Videos</p>
          <div className="row-container">
            {" "}
            <div className="upload-items"></div>
            <div className="upload-items"></div>
            <div className="upload-items"></div>
            <div className="upload-items"></div>
          </div>
        </div>{" "}
        <div class="line"></div>
        <div className="reviews-section">
          <p className="note">Reviews(37)</p>
          <div className="container-close reviews">
            <div className="user-head row-container">
              <div className="icon-box">
                {" "}
                <img src={user} height={24} width={24} alt="product" />
              </div>
            </div>
            <div className="row-container">
              <img src={star} height={16} width={16} alt="product" />
              <img src={star} height={16} width={16} alt="product" />
              <img src={star} height={16} width={16} alt="product" />
              <img src={star} height={16} width={16} alt="product" />
              <img src={star} height={16} width={16} alt="product" />
            </div>
            <p>
              it’s too good & perfectly fitted to my phone... thanks a lot to
              send the exact one what i have ordered to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
