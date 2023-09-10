import "./signup.css";
function SignUp() {
  return (
    <div className="container">
      <p className="top">Home&rarr;Signup</p>
      <div class="line"></div>

      <div className="btn-container">
        <button className="btn login">Login</button>
        <button className="btn action-btn">Sign up</button>
      </div>
      <div className="form">
        <input className="form-item" type="email" placeholder="Email"></input>
        <input
          className="form-item"
          type="password"
          placeholder="Password"
        ></input>
        <button className="form-item action-btn create-btn">CREATE</button>
      </div>

      <div className="auth">
        <p>Or Sign up using</p>
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
          <p>Already have an account?</p>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
