import "./customize.css";

import Reviews from "./reviews";

const Customize = () => {
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
      <div className="top">Home&rarr;Customize now</div>
      <div class="line"></div>
      <div className="container">
        <div className="btn-container">
          <button className="btn action-btn">Cover</button>
          <button className="btn signup">Frame</button>
        </div>
        <div className="content">
          <p>Create art from memories!</p>
          <p style={{ fontWeight: "600" }}>
            Upload image {">"}Artist creation{">"}Approve{">"}
            Receive at your home.
          </p>
          <p>Create yours today!</p>
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

export default Customize;
