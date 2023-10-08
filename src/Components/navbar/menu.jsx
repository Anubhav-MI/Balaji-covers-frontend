import React from "react";

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <p>yo</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMenu;
