import "./signIn.css";
import "../general.css";
import Footer2 from "../footer/footer2";
import logout from "../../Icons/logout.png";
function SignIn() {
  return (
    <div className="container main">
      <div className="sidebar">
        {" "}
        <div className="link-container">
          <a href="/home/wishlist">Wishlist</a>
          <a href="/home/bag">Bag</a>
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
      <div className="main-content">
        <p className="top">Home&rarr;Login</p>
        <div class="line"></div>
        <div className="container">
          <div className="btn-container">
            <button className="btn action-btn">Login</button>

            <a href="/signup">
              {" "}
              <button className="btn signup">Sign up </button>
            </a>
          </div>
          <div className="form">
            <input
              className="form-item"
              type="email"
              placeholder="Email"
            ></input>
            <input
              className="form-item"
              type="password"
              placeholder="Password"
            ></input>
            <p>
              Forgot your password? <a href="/forgot-password"> Reset</a>
            </p>
            <button className="form-item action-btn create-btn">LOGIN</button>
          </div>

          <div className="auth">
            <p>Or Login using</p>
            <div className="auth-icon">
              <button className="auth-button">
                <img
                  src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                  height={32}
                  width={32}
                  alt="google-icon"
                />
              </button>
              <button className="auth-button">
                <img
                  src="https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
                  height={32}
                  width={32}
                  alt="apple-icon"
                />
              </button>
            </div>
            <div className="auth-alt">
              <p>New customer?</p>
              <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}
export default SignIn;
