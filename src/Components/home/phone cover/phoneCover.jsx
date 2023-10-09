import "./phoneCover.css";
import "../../general.css";
const PhoneCover = () => {
  return (
    <div>
      <div className="top">
        <a href="/">Home</a>&rarr;Phone cover
      </div>
      <div class="line"></div>
      <div className="container">
        <div className="coverCategory row-container">
          <a href="/home/glass-cover">3D Glass Cover</a>
        </div>
        <div className="coverCategory row-container">Soft Sticker cases</div>
        <div className="coverCategory row-container">For lovers</div>
        <div className="coverCategory row-container">Chain Cases</div>
        <div className="coverCategory row-container">Polaroid cases</div>
        <div className="coverCategory row-container">Asthetic cases</div>
        <div className="coverCategory row-container">Anime casees</div>
        <div className="container customize-btn">Customize Now</div>
      </div>
    </div>
  );
};

export default PhoneCover;
