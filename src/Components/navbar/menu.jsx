// PopupMenu.js
import React from "react";
import "./menu.css";

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-menu ${isOpen ? "open" : ""}`}>
      <a href="/">Wishlist</a>
      <a href="/">Bag</a>
      <a href="/">Saved address</a>
      <a href="/">About product</a>
      <a href="/">Review</a>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMenu;
