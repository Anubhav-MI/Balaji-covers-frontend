import React from "react";
import { useState } from "react";
import Reviews from "./reviews";
import "../customize/detail.css";
import detail from "../../../Icons/detail.png";
import arrow from "../../../Icons/arrow.png";
import cart from "../../../Icons/shopping-cart.png";
import profile from "../../../Icons/Group 82.png";
import scan from "../../../Icons/scan.png";
import dash from "../../../Icons/dash.png";

const Detail2 = () => {
  const [country, setcountry] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setaddress] = useState("");
  const [apartment, setapartment] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");
  const [num, setnum] = useState("");
  const [isChecked, setChecked] = useState(false);

  /*event handlers*/
  const handlefnamechange = (event) => {
    setfname(event.target.value);
  };
  const handlelnamechange = (event) => {
    setlname(event.target.value);
  };
  const handlecountrychange = (event) => {
    setcountry(event.target.value);
  };
  const handlecitychange = (event) => {
    setcity(event.target.value);
  };
  const handlestatechange = (event) => {
    setstate(event.target.value);
  };
  const handleaddresschange = (event) => {
    setaddress(event.target.value);
  };
  const handleapartmentchange = (event) => {
    setapartment(event.target.value);
  };
  const handlepinchange = (event) => {
    setpin(event.target.value);
  };
  const handlenumchange = (event) => {
    setnum(event.target.value);
  };
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

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

          <span>199</span>
        </div>
        <div class="line"></div>
        <div
          className="row-container"
          style={{ justifyContent: "space-between", width: "350px" }}
        >
          <h1 className="heading">Shipping address</h1>
          <span>Have an account</span>
        </div>
        <div className="container">
          <input
            className="drop-box"
            type="text"
            placeholder="India"
            value={country}
            onChange={handlecountrychange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="First name"
            value={fname}
            onChange={handlefnamechange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={handlelnamechange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleaddresschange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="Apartment"
            value={apartment}
            onChange={handleapartmentchange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="City"
            value={city}
            onChange={handlecitychange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="State"
            value={state}
            onChange={handlestatechange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="Pincode"
            value={pin}
            onChange={handlepinchange}
          ></input>
          <input
            className="drop-box"
            type="text"
            placeholder="+91 "
            value={num}
            onChange={handlenumchange}
          ></input>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Save this information for next time
          </label>
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
            href="/home/customize/image/payment"
          >
            NEXT
          </a>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Detail2;
