import "./coverImage.css";
import Phonecover from "../../../../../Icons/phone-cover.png";
import like from "../../../../../Icons/love.png";
import share from "../../../../../Icons/share.png";
import shopbag from "../../../../../Icons/shopping-bag.png";
const CoverImage = () => {
  return (
    <div>
      <div className="top">
        Home&rarr;Phone cover&rarr;3D Glass Cover&rarr;Cover Image
      </div>
      <div class="line"></div>
      <div className="container">
        <div className="coverImage">
          <img src={Phonecover} height={324} width={283} alt="product" />
          <img
            className="icon-1"
            src={like}
            height={24}
            width={24}
            alt="product"
          />
          <img
            className="icon-2"
            src={share}
            height={24}
            width={24}
            alt="product"
          />
        </div>
        <div className="row-container">
          <button className="buy action-btn">Buy now</button>
          <img
            className="icon"
            src={shopbag}
            height={36}
            width={36}
            alt="product"
          />
        </div>
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
          <div className="container">
            <img
              className="item-card"
              src={Phonecover}
              height={175}
              width={150}
              alt="product"
            />
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

export default CoverImage;
