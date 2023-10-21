import "./home.css";
import "../general.css";

import Footer2 from "../footer/footer2";
import Sidebar from "../sidebar/sidebar";
function Tshirt() {
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
          <div className="title-container">Coming Soon</div>
          <Footer2 />
        </div>
      </div>
    </div>
  );
}
export default Tshirt;
