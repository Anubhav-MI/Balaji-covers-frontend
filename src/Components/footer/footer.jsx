import React from "react";
import "./footer.css";
import insta from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import youtube from "../../Icons/youtube.png";
function Footer() {
  return (
    <div className="footer">
      <div className="pages footer-item">
        <p className="item-heading">Pages</p>
        <a className="link" href="/">
          About us
        </a>
        <a className="link" href="/">
          Contact us
        </a>
        <a className="link" href="/">
          Privacy Policy
        </a>
        <a className="link" href="/">
          Terms and conditions
        </a>
        <a className="link" href="/">
          FAQ
        </a>
      </div>
      <div className="account footer-item">
        <p className="item-heading">My Account</p>
        <a className="link" href="/">
          Login
        </a>
        <a className="link" href="/">
          Register
        </a>
        <a className="link" href="/">
          Track order
        </a>
      </div>
      <div className="follow footer-item">
        <p className="item-heading">Follow us</p>
        <a className="link row" href="/">
          <img src={insta} height={12} width={12} alt="product" />
          Instagram
        </a>
        <a className="link row" href="/">
          <img src={facebook} height={12} width={12} alt="product" />
          Facebook
        </a>
        <a className="link row" href="/">
          <img src={youtube} height={12} width={12} alt="product" />
          Youtube
        </a>
      </div>
      <div class="line"></div>
      <div className="copyright">Copyrigt &copy; 2023 BalajiCover</div>
    </div>
  );
}
export default Footer;
