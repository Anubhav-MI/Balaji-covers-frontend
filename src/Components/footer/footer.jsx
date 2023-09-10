import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="pages footer-item">
        <p className="item-heading">Pages</p>
        <a href="/">About us</a>
        <a href="/">Contact us</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and conditions</a>
        <a href="/">FAQ</a>
      </div>
      <div className="account footer-item">
        <p className="item-heading">My Account</p>
        <a href="/">Login</a>
        <a href="/">Register</a>
        <a href="/">Track order</a>
      </div>
      <div className="follow footer-item">
        <p className="item-heading">Follow us</p>
        <a href="/">Instagram</a>
        <a href="/">Facebook</a>
        <a href="/">Youtube</a>
      </div>
      <div class="line"></div>
      <div className="copyright">Copyrigt &copy; 2023 BalajiCover</div>
    </div>
  );
}
export default Footer;
