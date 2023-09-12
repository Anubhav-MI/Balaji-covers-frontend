import "./navbar.css";
import bag from "../../Icons/bag.png";
// import menu from "../../Icons/menu.png";
function Navbar() {
  return (
    <div className="navbar">
      <span class="material-symbols-outlined">phone_iphone</span>
      <p className="title">Balaji Covers</p>
      <img src={bag} height={24} width={24} alt="product" />
      <span class="material-symbols-outlined">menu</span>
    </div>
  );
}
export default Navbar;
