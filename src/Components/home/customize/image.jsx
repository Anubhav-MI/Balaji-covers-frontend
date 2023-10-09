import React from "react";
import Reviews from "./reviews";
import "./image.css";
const Image = () => {
  return (
    <div>
      {" "}
      <div className="top">
        <a href="/">Home</a>&rarr;Customize now&rarr;Image
      </div>
      <div class="line"></div>
      <div className="container">
        <div className="content">
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
