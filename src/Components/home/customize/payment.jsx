import React from "react";
import { useState } from "react";
import "../customize/detail.css";
import detail from "../../../Icons/detail.png";
import arrow from "../../../Icons/arrow.png";
import cart from "../../../Icons/shopping-cart.png";
import profile from "../../../Icons/Group 82.png";
import scan from "../../../Icons/scan.png";

const Payment = () => {
  return (
    <div>
      <div className="top">Home&rarr;Customize now&rarr;Image&rarr;Details</div>
      <div class="line"></div>

      <div className="container-close">
        <div className="row-container gap">
          <div className="container icon-div">
            {" "}
            <img src={detail} height={24} width={24} alt="product" />
          </div>
          <img
            className="arrow1"
            src={arrow}
            height={8}
            width={24}
            alt="product"
          />
          <div className="container icon-div">
            {" "}
            <img src={profile} height={24} width={24} alt="product" />
          </div>
          <img
            className="arrow2"
            src={arrow}
            height={8}
            width={24}
            alt="product"
          />
          <div className="container icon-div">
            {" "}
            <img src={scan} height={24} width={24} alt="product" />
          </div>
        </div>
        <br></br>
        <div class="line"></div>
        <div
          className="row-container"
          style={{ justifyContent: "space-between", width: "350px" }}
        >
          <div className="row-container">
            {" "}
            <img src={cart} height={24} width={24} alt="product" />
            <p>Show order summary </p>
          </div>

          <span>199</span>
        </div>
        <div class="line"></div>

        <div className="detail-box"></div>
        <h1 className="heading">Payment</h1>
        <div className="container customize-btn">
          <a
            style={{
              color: "#FFF",
              fontfamily: "Gill Sans MT",
              fontsize: "24px",
              fontstyle: "normal",
              fontweight: "400",
              lineheight: "normal",
            }}
            href="/home/customize/image/payment"
          >
            PAY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
