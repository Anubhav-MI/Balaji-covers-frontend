import "./home.css";
import "../general.css";
import frame from "../../Icons/fm.png";
import print from "../../Icons/print.jpeg";
import printed from "../../Icons/printeddd.png";
import bag from "../../Icons/bbg.png";

function Home() {
  return (
    <div className="container">
      <div className="title-container">Explore our available products</div>
      <div className="btn-container">
        <button className="btn">
          <a className="login" href="/signin">
            Login
          </a>
        </button>
        <button className="btn whatsapp">
          Need help
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            height={36}
            width={36}
            alt="whatsapp logo"
          ></img>
        </button>
      </div>
      <div className="category">
        <div className="category-item">
          <div className="print">
            <img src={print} height={77} width={43} alt="product" />
            <img src={printed} height={77} width={43} alt="product" />
          </div>
          <span>Phone cover</span>
        </div>
        <div className="category-item">
          <img src={frame} height={130} width={130} alt="product" />
          <span>Frame</span>
        </div>
        <div className="category-item">
          <img src={frame} height={130} width={130} alt="product" />
          <span>Tshirt</span>
        </div>
        <div className="category-item">
          <img src={bag} height={100} width={100} alt="product" />
          <span>Accessories</span>
        </div>
      </div>
      <div className="container customize-btn"><a href="/home/customize">Customize Now</a></div>
    </div>
  );
}
export default Home;
