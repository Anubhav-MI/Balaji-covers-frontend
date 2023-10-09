import "./home.css";
import "../general.css";
import frame from "../../Icons/fm.png";
import print from "../../Icons/print.jpeg";
import printed from "../../Icons/printeddd.png";
import bag from "../../Icons/bbg.png";
import tshirt from "../../Icons/tshirt.png";

function Home() {
  return (
    <div className="container">
      <div className="title-container">Explore our available products</div>
      <div
        className="btn-container row-container"
        style={{ justifyContent: "space-around" }}
      >
        <button className="btn">
          <a className="login" href="/signin">
            Sign up
          </a>
        </button>
        <div className="row-container">
          {" "}
          <button className="whatsapp">Need Help?</button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            height={48}
            width={48}
            alt="whatsapp logo"
          ></img>
        </div>
      </div>
      <div className="category">
        <div className="category-item container-close">
          <div className="print">
            <img src={print} height={77} width={43} alt="product" />
            <img src={printed} height={77} width={43} alt="product" />
          </div>
          <span>Phone cover</span>
        </div>
        <div className="category-item container-close">
          <img src={frame} height={130} width={130} alt="product" />
          <a href="/home/frames">
            {" "}
            <span>Frame</span>
          </a>
        </div>
        <div className="category-item container-close">
          <img src={tshirt} height={130} width={130} alt="product" />
          <span>Tshirt</span>
        </div>
        <div className="category-item container-close">
          <img src={bag} height={100} width={100} alt="product" />
          <span>Accessories</span>
        </div>
      </div>
      <div className="container customize-btn">
        <a
          style={{
            color: "#FFF",
            fontfamily: "Gill Sans MT",
            fontsize: "24px",
            fontstyle: "normal",
            fontweight: "400",
            lineheight: "normal",
          }}
          href="/home/customize"
        >
          Customize Now
        </a>
      </div>
    </div>
  );
}
export default Home;
