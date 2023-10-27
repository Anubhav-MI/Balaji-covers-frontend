import "./customize.css";
import dash from "../../../Icons/dash.png";
import Reviews from "./reviews";

const Customizeskins = () => {
  // const [loadingWidth, setLoadingWidth] = useState(0);
  // const [inputValue, setInputValue] = useState(50);

  // window.onload = function () {
  //   // This function will be called when the page has finished loading.
  //   fillBar();
  // };
  // const fillBar = () => {
  //   const parsedValue = parseFloat(50);
  //   if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
  //     setLoadingWidth(parsedValue);
  //   } else {
  //     alert("Please enter a valid percentage between 0 and 100.");
  //   }
  // };
  return (
    <div>
      <p className="top roww">
        <a href="/">Home</a>
        <img src={dash} alt="product" height={8} width={8} />
        Customize now
      </p>
      <div class="line"></div>
      <div className="container response">
        <div className="btn-container2">
          <button className="btn signup ">Cover</button>
          <button className="btn signup ">Frame</button>
          <button className="btn action-btn">Skin</button>
          <button className="btn signup">Mugs</button>
        </div>
        <div className="content" style={{ textAlign: "center" }}>
          <p>
            Upload your own picture, wallpaper And anything that you want on
            your cover/skin to make it unique and special.
          </p>
          {/* <p style={{ fontWeight: "600" }}>
            Upload image {">"}Artist creation{">"}Approve{">"}
            Receive at your home.
          </p>
          <p>Create yours today!</p> */}
        </div>
        <div className="upload-box container">
          <button className="upload-image">
            <a
              style={{
                color: "#FFF",
                fontfamily: "Gill Sans MT",
                fontsize: "24px",
                fontstyle: "normal",
                fontweight: "400",
                lineheight: "normal",
              }}
              href="/home/customize/image"
            >
              Upload Image
            </a>
          </button>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Customizeskins;