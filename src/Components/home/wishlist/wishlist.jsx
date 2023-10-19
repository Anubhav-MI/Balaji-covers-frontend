import Phonecover from "../../../Icons/phone-cover.png";
import Phonecover2 from "../../../Icons/phone-cover2.png";
import shopbag from "../../../Icons/shopping-bag.png";
const Wishlist = () => {
  return (
    <div>
      <div className="top">Home&rarr;Wishlist</div>
      <div class="line"></div>
      <div className="category">
        <div className="container">
          <img
            className="item-card"
            src={Phonecover}
            height={175}
            width={150}
            alt="product"
          />
          <div className="callToAction">
            <button className="buy-btn action-btn">Select Model</button>
            <img
              className="icon"
              src={shopbag}
              height={36}
              width={36}
              alt="product"
            />
          </div>
        </div>
        <div className="container">
          <img
            className="item-card"
            src={Phonecover2}
            height={175}
            width={150}
            alt="product"
          />
          <div className="callToAction">
            <button className="buy-btn action-btn">Select Model</button>
            <img
              className="icon"
              src={shopbag}
              height={36}
              width={36}
              alt="product"
            />
          </div>
        </div>
        <div className="container">
          <img
            className="item-card"
            src={Phonecover2}
            height={175}
            width={150}
            alt="product"
          />
          <div className="callToAction">
            <button className="buy-btn action-btn">Select Model</button>
            <img
              className="icon"
              src={shopbag}
              height={36}
              width={36}
              alt="product"
            />
          </div>
        </div>
        <div className="container">
          <img
            className="item-card"
            src={Phonecover2}
            height={175}
            width={150}
            alt="product"
          />
          <div className="callToAction">
            <button className="buy-btn action-btn">Select Model</button>
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
  );
};

export default Wishlist;
