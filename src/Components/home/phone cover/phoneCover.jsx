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
        <div className="coverCategory row-container">
          {" "}
          <a href="/home/phone-cover/forlovers">For lovers</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/chain-cases">Chain Cases</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/polaroid">Polaroid cases</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/aesthetic">Aesthetic cases</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/anime">Anime cases</a>
        </div>
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
