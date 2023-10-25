import "./navbar.css";
import { useState } from "react";
import PopupMenu from "./menu";
import bag from "../../Icons/bag.png";
import logo from "../../Icons/logobb.png";
import menu from "../../Icons/menu1.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="navbar">
      <img src={logo} height={24} width={24} alt="product" />
      <p className="title">Balaji Cover</p>
      <a href="/home/bag">
        <img src={bag} height={24} width={24} alt="product" />
      </a>
      <img
        src={menu}
        height={24}
        width={36}
        alt="product"
        onClick={toggleMenu}
      />
      <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}
export default Navbar;
