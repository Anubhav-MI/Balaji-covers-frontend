import React from "react";
import "./footer2.css";
import insta from "../../Icons/instagram.png";
import facebook from "../../Icons/facebook.png";
import youtube from "../../Icons/youtube.png";
import { useEffect, useState } from "react";
function Footer2() {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Update the state based on the screen width
      setShouldHide(window.innerWidth < 400);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!shouldHide && (
        <div className="footer-container">
          <div className="footer2">
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
          </div>
          <div class="line"></div>
          <div className="copyright">Copyrigt &copy; 2023 BalajiCover</div>
        </div>
      )}
    </div>
  );
}
export default Footer2;
