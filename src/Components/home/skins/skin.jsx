import "./skin.css";
import "../../general.css";
import frame from "../../../Icons/fmm.png";
import shopbag from "../../../Icons/shopping-bag.png";
import dash from "../../../Icons/dash.png";
const Skins = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Skins
      </p>
      <div class="line"></div>
      <div className="container">
        <div className="content" style={{ textAlign: "center" }}>
          <p>Create art from memories!</p>
          <p style={{ fontWeight: "600" }}>
            Upload image {">"}Artist creation{">"}Approve{">"}
            Receive at your home.
          </p>
          <p>Create yours today!</p>
        </div>
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
        <div className="products category">
          <div className="product-cards container">
            <img src={frame} height={175} width={150} alt="product" />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
          <div className="product-cards container">
            <img src={frame} height={175} width={150} alt="product" />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
          <div className="product-cards container">
            <img src={frame} height={175} width={150} alt="product" />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
          <div className="product-cards container">
            <img src={frame} height={175} width={150} alt="product" />
            <div className="callToAction">
              <button className="buy-btn action-btn">
                <a
                  href="/home/customize/image/detail1"
                  style={{ color: "#fffbf1" }}
                >
                  Select Model
                </a>
              </button>
              <img
                className="icon"
                src={shopbag}
                height={36}
                width={36}
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skins;
