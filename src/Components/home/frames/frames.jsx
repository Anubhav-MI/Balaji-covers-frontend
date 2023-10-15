import "./frames.css";
import "../../general.css";
import frame from "../../../Icons/fmm.png";
import shopbag from "../../../Icons/shopping-bag.png";
import dash from "../../../Icons/dash.png";
const Frames = () => {
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Skins
      </p>
      <div class="line"></div>
      <div className="container">
        <div className="content">
          <p>Create art from memories!</p>
          <p style={{ fontWeight: "600" }}>
            Upload image {">"}Artist creation{">"}Approve{">"}
            Receive at your home.
          </p>
          <p>Create yours today!</p>
        </div>
        <div className="container customize-btn">Customize Now</div>
        <div className="products category">
          <div className="product-cards container">
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
          </div>
          <div className="product-cards container">
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
          </div>
          <div className="product-cards container">
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
          </div>
          <div className="product-cards container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frames;
