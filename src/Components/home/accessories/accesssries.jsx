import "./accessories.css";
import "../../general.css";
import dash from "../../../Icons/dash.png";
const Accsesories = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Accessories
      </p>
      <div class="line"></div>
      <div className="container" style={{ marginTop: "32px", gap: "32px" }}>
        <a
          className="coverCategory row-container"
          href="/home/accessories/pop-gripppers"
        >
          Pop Gripper
        </a>
        <a
          className="coverCategory row-container"
          href="/home/accessories/pop-socket"
        >
          Pop Sockets
        </a>

        <div className="coverCategory row-container">
          {" "}
          <a href="/home/accessories/frames">Frames</a>
        </div>
        <div className="coverCategory row-container">
          {" "}
          <a href="/home/accessories/wallets">Wallet</a>
        </div>
        <div className="coverCategory row-container">
          <a href="/home/accessories/mugs">Mugs</a>
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

export default Accsesories;
