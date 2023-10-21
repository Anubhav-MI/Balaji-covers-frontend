import React from "react";
// import { useState } from "react";
import "../customize/detail.css";
import detail from "../../../Icons/detail.png";
import arrow from "../../../Icons/arrow.png";
import cart from "../../../Icons/shopping-cart.png";
import profile from "../../../Icons/Group 82.png";
import scan from "../../../Icons/scan.png";
import dash from "../../../Icons/dash.png";

const Paymentdone = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize">Customize now</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize/image">Image</a>
        <img src={dash} alt="product" height={8} width={8} />
        Details
      </p>
      <div class="line"></div>

      <div className="container-close response" style={{ marginTop: "20px" }}>
        <div className="row-container gap">
          <div className="container icon-div">
            <div>
              <img src={detail} height={24} width={24} alt="product" />
            </div>
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
            <img src={profile} height={36} width={36} alt="product" />
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

          <span>Rs 199</span>
        </div>
        <div class="line"></div>
        <h1 className="heading">Payment Received</h1>
        <p className="payment" style={{ textAlign: "center" }}>
          “Your order is processing. Expect tracking details on your WhatsApp in
          2-3 days. Thank you for choosing us!"
        </p>
        <div>
          <a
            className="container customize-btn"
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
            HOME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Paymentdone;