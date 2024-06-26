import "./signIn.css";
import "../general.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
function SignIn() {
  // const [data, setdata] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/auth/login/")
  //     .then((response) => {
  //       setdata(response.data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // const handlesubmit = () => {
  //   console.log(input);
  //   try {
  //     const response = axios.post("http://localhost:8000/api/auth/login/", {
  //       data: input,
  //     });

  //     if (response.status === 200) {
  //       // Handle success
  //       console.log("Data sent successfully");
  //     } else {
  //       // Handle error
  //       console.error("Failed to send data");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={8} width={8} /> Login
        </p>
        <div class="line"></div>
        <div className="sign">
          <div className="btn-container">
            <button className="btn action-btn">Login</button>

            <a href="/signup">
              {" "}
              <button className="btn signup">Sign up </button>
            </a>
          </div>
          <div className="form response">
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
              Forgot your password?{" "}
              <a href="/forgot-password">
                <span style={{ color: "blue" }}>Reset</span>{" "}
              </a>
            </p>
            <button className="form-item action-btn create-btn">LOGIN</button>
          </div>

          <div className="auth response">
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
