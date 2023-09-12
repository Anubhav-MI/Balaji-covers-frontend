import "./signIn.css";
import "../general.css";
function SignIn() {
  return (
    <div>
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
          <input className="form-item" type="email" placeholder="Email"></input>
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
    </div>
  );
}
export default SignIn;