import "./forgotpassword.css";
function Forgotpassword() {
  return (
    <div className="container">
      <p className="top">Home&rarr;Login&rarr;Reset password</p>
      <div class="line"></div>

      <div className="title">
        <p>Customer Login</p>
      </div>
      <div>
        <p className="reset-text">
          We will send you an email to reset your password
        </p>
        <div className="form">
          <input className="form-item" type="email" placeholder="Email"></input>
          <button className="form-item action-btn create-btn">SUBMIT</button>
          <button className="form-item cancel-btn">
            <a href="/signin">CANCEL</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Forgotpassword;
