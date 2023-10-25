import "./home.css";
import "../general.css";
import tshirt from "../../Icons/tshirt.gif";
import gif from "../../Icons/phone cover.gif";
import gif2 from "../../Icons/skin3.gif";
import gif3 from "../../Icons/accessories2.gif";

import Footer2 from "../footer/footer2";
import Sidebar from "../sidebar/sidebar";
function Home() {
  return (
    <div className="container main">
      <Sidebar />
      <div className="main-content">
        <div
          className="response"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row2 header">
            <div className="title-container">
              Explore our available products
            </div>
            <div
              className="btn-container row-container"
              style={{ gap: "50px" }}
            >
              <a className="login" href="/signin">
                <button className="btn"> Login </button>
              </a>

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
              <div className="container-close">
                <a href="/home/phone-cover">
                  <div>
                    {/* <img src={frame} height={130} width={130} alt="product" /> */}
                    <img
                      className="category-itemlg category-item container-close"
                      src={gif}
                      height={160}
                      width={160}
                      alt="my-gif"
                    />
                  </div>
                </a>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  Phone cover
                </span>
              </div>
              <div className="container-close">
                <a href="/home/skins">
                  <img
                    className="category-itemlg category-item container-close"
                    src={gif2}
                    height={120}
                    width={100}
                    alt="my-gif"
                  />
                </a>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  Skins
                </span>
              </div>
              <div className="container-close">
                <a href="/home/Tshirt">
                  <img
                    className="category-itemlg category-item container-close"
                    src={tshirt}
                    alt="product"
                  />
                </a>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  {" "}
                  Tshirt
                </span>
              </div>
              <div className="container-close">
                <a href="/home/accessories">
                  {/* <img src={frame} height={130} width={130} alt="product" /> */}
                  <img
                    className="category-itemlg category-item container-close"
                    src={gif3}
                    height={120}
                    width={120}
                    alt="my-gif"
                  />
                </a>
                <span style={{ marginTop: "10px", fontsize: "18px" }}>
                  Accessories
                </span>
              </div>
            </div>
            <div className="custom nodisplay2">
              <p>
                "Design your phone cover in seconds! Click 'Customize Now,'
                upload your image, and make it yours. Create your unique phone
                case now!"
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
          <div>
            <a
              className="container customize-btn nodisplay"
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
    </div>
  );
}
export default Home;
