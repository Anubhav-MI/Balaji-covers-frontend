import "./home.css";
import "../general.css";
import frame from "../../Icons/fm.png";
import print from "../../Icons/print.jpeg";
import printed from "../../Icons/printeddd.png";
import bag from "../../Icons/bbg.png";
import tshirt from "../../Icons/tshirt.png";

import Footer2 from "../footer/footer2";
import Sidebar from "../sidebar/sidebar";
function Home() {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        <div className="row2 header">
          <div className="title-container">Explore our available products</div>
          <div className="btn-container row-container" style={{ gap: "50px" }}>
            <button className="btn">
              <a className="login" href="/signin">
                Login
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
        </div>
        <div className="row2 center">
          <div className="category">
            <div className="category-itemlg category-item container-close">
              <div className="print">
                <img src={print} height={77} width={43} alt="product" />
                <img src={printed} height={77} width={43} alt="product" />
              </div>
              <span>
                <a href="/home/phone-cover">Phone cover</a>
              </span>
            </div>
            <div className="category-itemlg category-item container-close">
              <img src={frame} height={130} width={130} alt="product" />
              <a href="/home/frames">
                <span>Skins</span>
              </a>
            </div>
            <div className="category-itemlg category-item container-close">
              <img src={tshirt} className="image" alt="product" />
              <span>Tshirt</span>
            </div>
            <div className="category-itemlg category-item container-close">
              <img src={bag} height={100} width={100} alt="product" />
              <span>Accessories</span>
            </div>
          </div>
          <div className="custom nodisplay2">
            <p>
              "Design your phone cover in seconds! Click 'Customize Now,' upload
              your image, and make it yours. Create your unique phone case now!"
            </p>
            <div
              className="container customize-btn"
              style={{ paddingTop: "16px" }}
            >
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
        </div>
        <div
          className="container customize-btn nodisplay"
          style={{ marginLeft: "60px", paddingTop: "16px" }}
        >
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
        <Footer2 />
      </div>
    </div>
  );
}
export default Home;
