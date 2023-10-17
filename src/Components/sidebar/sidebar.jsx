import React from "react";
import "./sidebar.css";
// import logout from "../../Icons/logout.png";
import heart from "../../Icons/heart (1).png";
import bag from "../../Icons/bag.png";
import saved from "../../Icons/savedadd.png";
import info from "../../Icons/about.png";
import review from "../../Icons/review.png";
import logo from "../../Icons/logobb.png";
import user from "../../Icons/userprofile.png";
import dropdown from "../../Icons/down.png";
const Sidebar = () => {
  return (
    <div>
      {" "}
      <div className="sidebar column">
        <div className="logo-container column">
          <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
          <div
            className="roww"
            style={{
              justifyContent: "space-around",
              height: "50px",
              padding: "0 20px",
            }}
          >
            {" "}
            <img src={logo} height={35} width={26} alt="product" />
            <p>Balaji Cover</p>
          </div>

          <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
        </div>
        <div
          className="link-container container"
          style={{ marginTop: "120px", marginBottom: "150px", height: "300px" }}
        >
          <div className="roww">
            {" "}
            <img src={heart} height={24} width={24} alt="product" />
            <a className="a" href="/home/wishlist">
              Wishlist
            </a>
          </div>
          <div className="roww">
            {" "}
            <img src={bag} height={24} width={24} alt="product" />
            <a className="a" href="/home/bag">
              Bag
            </a>
          </div>
          <div className="roww">
            {" "}
            <img src={saved} height={24} width={24} alt="product" />
            <a className="a" href="/">
              Saved address
            </a>
          </div>
          <div className="roww">
            {" "}
            <img src={info} height={24} width={24} alt="product" />
            <a className="a" href="/">
              About product
            </a>
          </div>
          <div className="roww">
            {" "}
            <img src={review} height={24} width={24} alt="product" />
            <a className="a" href="/">
              Review
            </a>
          </div>
        </div>
        {/* <div className="roww" style={{ marginTop: "72px", marginLeft: "24px" }}>
          {" "}
          <img src={logout} height={32} width={32} alt="product" />
          <a href="/" style={{ color: "#bf4444" }}>
            Logout
          </a>
        </div> */}
        <div className="column" style={{ marginTop: "150px" }}>
          <div class="line" style={{ backgroundColor: "#fffbf1" }}></div>
          <div className=" account2 roww" style={{ marginLeft: "16px" }}>
            {" "}
            <img src={user} height={30} width={30} alt="product" />
            <p>Ritesh Sharma</p>
            <img src={dropdown} height={16} width={16} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
