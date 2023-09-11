import "./frames.css";
import "../../general.css";
import frame from "../../../Icons/fmm.png";
import shopbag from "../../../Icons/shopping-bag.png";
const Frames = () => {
  return (
    <div>
      <div className="top">Home&rarr;Frames</div>
      <div class="line"></div>
      <div className="container">
        <div className="content">
          <p>Create art from memories!</p>
          <p>
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
