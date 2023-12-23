import "./signup.css";
import "../general.css";
import Footer2 from "../footer/footer2";
import dash from "../../Icons/dash.png";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import Cookies from "js-cookie";


function SignUp() {
 
  const [formData,setFormData] = useState({username:"",password:""})
 const navigate = useNavigate();

  const onHandleSubmit=async(e)=>{
    try{
      e.preventDefault();
     const response=await axios.post(`https://balaji-9ge1.onrender.com/api/auth/signup/`,formData)
     console.log("response",response)
     Cookies.set("mytoken" , response.data.token, {expires:30})
     localStorage.setItem("isLoggedIn","true")
    navigate("/");
    }
catch(error){
  console.log("error",error)
}
  }
  return (
    <form onSubmit={onHandleSubmit}>
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <p className="top roww">
          <a href="/">Home</a>
          <img src={dash} alt="product" height={8} width={8} />
          Sign up
        </p>
        <div class="line"></div>
        <div className="container sign">
          <div className="btn-container response">
            <a href="/signin">
              {" "}
              <button className="btn">Login </button>
            </a>

            <button className="btn action-btn">Sign up</button>
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
            <button className="form-item action-btn create-btn">CREATE</button>
          </div>
          
          <div className="auth response">
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
              <a href="/signin">Login</a>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
    </form>
  );
}
export default SignUp;
