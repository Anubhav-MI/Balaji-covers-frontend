// PopupMenu.js
import React from "react";
import "./menu.css";
import close from "../../Icons/close.png";
import logout from "../../Icons/logout.png";

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-menu ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        {" "}
        <img src={close} height={32} width={32} alt="product" />
      </button>
      <div className="link-container" style={{ marginTop: "32px" }}>
        <a href="/home/wishlist">Wishlist</a>
        <a href="/home/bag">Bag</a>
        <a href="/my-account">My Account</a>
        <a href="/products">About product</a>
        <a href="/home/customize">Review</a>
        <div
          className="row-container logout-btn"
          style={{ justifyContent: "left" }}
        >
          {" "}
          <img src={logout} height={32} width={32} alt="product" />
          <a href="/" style={{ color: "#bf4444" }}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
