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
      <div className="container" style={{ marginTop: "32px", gap: "32px" }}>
        <a
          className="coverCategory row-container"
          href="/home/phone-cover/glass-cover"
        >
          Glass Cover
        </a>
        <a
          className="coverCategory row-container"
          href="/home/phone-cover/hard-cover"
        >
          Hard Cover
        </a>

        <div className="coverCategory row-container">
          {" "}
          <a href="/home/phone-cover/soft-cover">Sticker cases</a>
        </div>

        <div className="coverCategory row-container">
          <a href="/home/phone-cover/chain-cases">Chain Cases</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/phone-cover/polaroid">Soft cases</a>
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
