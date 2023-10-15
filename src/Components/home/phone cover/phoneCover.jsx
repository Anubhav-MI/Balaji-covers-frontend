import "./phoneCover.css";
import "../../general.css";
import dash from "../../../Icons/dash.png";
const PhoneCover = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Phone covers
      </p>
      <div class="line"></div>
      <div className="container" style={{ marginTop: "32px" }}>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/glass-cover">3D Glass Cover</a>
        </div>
        <div className="coverCategory row-container">
          {" "}
          <a href="/home/phone-cover/soft-cover">Soft Sticker cases</a>
        </div>
        <div className="coverCategory row-container">For lovers</div>
        <div className="coverCategory row-container">Chain Cases</div>
        <div className="coverCategory row-container">Polaroid cases</div>
        <div className="coverCategory row-container">Aesthetic cases</div>
        <div className="coverCategory row-container">Anime cases</div>
        <div className="container customize-btn">
          <a href="/home/customize" style={{ color: "#fffbf1" }}>
            Customize Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCover;
