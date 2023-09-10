import react from "react";
import "./signup.css";
function SignUp() {
  return (
    <div>
      <p className="top">Home-Signup</p>
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
    </div>
  );
}
export default SignUp;
