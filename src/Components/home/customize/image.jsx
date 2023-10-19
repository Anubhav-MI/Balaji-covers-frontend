import React from "react";
import Reviews from "./reviews";
import "./image.css";
import dash from "../../../Icons/dash.png";
const Image = () => {
  return (
    <div>
      {" "}
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        <a href="/home/customize">Customize now</a>
        <img src={dash} alt="product" height={8} width={8} />
        Image
      </p>
      <div class="line"></div>
      <div className="container response">
        <div className="content" style={{ textAlign: "center" }}>
          <p>Enhance your style with a pair of cases and enjoy 20% savings.</p>
        </div>

        <div className="box row-container">
          <div className="upload-box2 container">
            <button className="upload-image2">Upload Image</button>
          </div>
          <div className="upload-box2 container">
            <button className="upload-image2">Upload Image</button>
          </div>
        </div>

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
            href="/home/customize/image/detail1"
          >
            Fill details
          </a>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Image;
