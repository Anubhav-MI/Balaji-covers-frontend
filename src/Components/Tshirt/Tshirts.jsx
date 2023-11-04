import "../home/skins/skin";
import "../general.css";
import frame from "../../Icons/tshirt.png";
import size from "../../Icons/tshirtsize.jpg";
import shopbag from "../../Icons/shopping-bag.png";
import dash from "../../Icons/dash.png";
// import Footer2 from "../footer/footer2";
// import Sidebar from "../sidebar/sidebar";
function Tshirt() {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Tshirts
      </p>
      <div class="line"></div>
      <div className="container">
        <div style={{ marginTop: "32px" }}>One Tshirt for 1099/- </div>
        <img
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
          }}
          src={size}
          height={100}
          width={200}
          alt="product"
        />
        <div className="products category">
          <div className="product-cards container">
            <a
              href="/home/glass-cover/cover-image-tshirt"
              style={{ color: "#fffbf1" }}
            >
              <img src={frame} height={175} width={150} alt="product" />
              <div className="callToAction">
                <button className="buy-btn action-btn">Buy now</button>
                <img
                  className="icon"
                  src={shopbag}
                  height={36}
                  width={36}
                  alt="product"
                />
              </div>
            </a>
          </div>
          <div className="product-cards container">
            <a
              href="/home/glass-cover/cover-image-tshirt"
              style={{ color: "#fffbf1" }}
            >
              <img src={frame} height={175} width={150} alt="product" />
              <div className="callToAction">
                <button className="buy-btn action-btn">Buy now</button>
                <img
                  className="icon"
                  src={shopbag}
                  height={36}
                  width={36}
                  alt="product"
                />
              </div>
            </a>
          </div>
          <div className="product-cards container">
            <a
              href="/home/glass-cover/cover-image-tshirt"
              style={{ color: "#fffbf1" }}
            >
              <img src={frame} height={175} width={150} alt="product" />
              <div className="callToAction">
                <button className="buy-btn action-btn">Buy now</button>
                <img
                  className="icon"
                  src={shopbag}
                  height={36}
                  width={36}
                  alt="product"
                />
              </div>
            </a>
          </div>
          <div className="product-cards container">
            <a
              href="/home/glass-cover/cover-image-tshirt"
              style={{ color: "#fffbf1" }}
            >
              <img src={frame} height={175} width={150} alt="product" />
              <div className="callToAction">
                <button className="buy-btn action-btn">Buy now</button>
                <img
                  className="icon"
                  src={shopbag}
                  height={36}
                  width={36}
                  alt="product"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tshirt;
