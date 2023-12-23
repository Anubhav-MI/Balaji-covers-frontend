import "./signIn.css";
import "../general.css";
import axios from "axios";
// import { useState, useEffect } from "react";
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [ formData, setFormData]=useState({username:"",password:""});
  const navigate= useNavigate();

  const onHandleSubmit=async(e)=>{
    e.preventDefault()
    try{
   const response=await axios.post(`https://balaji-9ge1.onrender.com/api/auth/login/`,formData)
   console.log("response",response);
   Cookies.set("mytoken",response.data.token,{expires:30});
   navigate("/")}
   catch(error){
    console.log("error",error)
   }
  }
  return (
    <form onSubmit={onHandleSubmit}>
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
              onChange={(e)=>setFormData({
                ...formData,
                username:e.target.value
              })}
            ></input>
            <input
              className="form-item"
              type="password"
              placeholder="Password"
              onChange={(e)=>setFormData({
                ...formData,
                password:e.target.value
              })}

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
    </div></form>
  );
}
export default SignIn;
