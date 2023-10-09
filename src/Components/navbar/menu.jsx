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
      <div className="link-container">
        <a href="/">Wishlist</a>
        <a href="/">Bag</a>
        <a href="/">Saved address</a>
        <a href="/">About product</a>
        <a href="/">Review</a>
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
