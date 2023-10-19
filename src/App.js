import "./App.css";
import SignUp from "./Components/Sign-up/signup";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Privacy from "./Components/Privacy policy/privacy";
import Terms from "./Components/Terms and condition/terms and condition";
import FAQ from "./Components/FAQ/faq";
import SignIn from "./Components/sign-in/signIn";
import Forgotpassword from "./Components/forgotPassword/forgotpassword";
import Home from "./Components/home/home";
import Customize from "./Components/home/customize/customize";
import Frames from "./Components/home/frames/frames";
import PhoneCover from "./Components/home/phone cover/phoneCover";
import Glasscover from "./Components/home/phone cover/3DglassCover/glasscover";
import Softcover from "./Components/home/phone cover/soft sticker cases/softSticker";
import Forlovers from "./Components/home/phone cover/For lovers/forlovers";
import Chaincases from "./Components/home/phone cover/Chain cases/chaincases";
import CoverImage from "./Components/home/phone cover/3DglassCover/coverImage";
import Polaroid from "./Components/home/phone cover/Polaroid cases/polaroid";
import Aesthetic from "./Components/home/phone cover/Aesthetic cases/Aesthetic";
import Anime from "./Components/home/phone cover/Anime cases/Anime cases";
import Wishlist from "./Components/home/wishlist/wishlist";
import Image from "./Components/home/customize/image";
import Detail1 from "./Components/home/customize/detail1";
import Detail2 from "./Components/home/customize/detail2";
import Payment from "./Components/home/customize/payment";
import Bag from "./Components/home/bag/bag";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandcondition" element={<Terms />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/" element={<Home />} />
          <Route path="/home/customize" element={<Customize />} />
          <Route path="/home/customize/image" element={<Image />} />
          <Route path="/home/customize/image/detail1" element={<Detail1 />} />
          <Route path="/home/customize/image/detail2" element={<Detail2 />} />
          <Route path="/home/customize/image/payment" element={<Payment />} />
          <Route path="/home/wishlist" element={<Wishlist />} />
          <Route path="/home/bag" element={<Bag />} />
          <Route path="/home/frames" element={<Frames />} />
          <Route path="/home/phone-cover" element={<PhoneCover />} />
          <Route
            path="/home/phone-cover/glass-cover"
            element={<Glasscover />}
          />
          <Route path="/home/phone-cover/soft-cover" element={<Softcover />} />
          <Route path="/home/phone-cover/forlovers" element={<Forlovers />} />
          <Route path="/home/phone-cover/polaroid" element={<Polaroid />} />
          <Route path="/home/phone-cover/aesthetic" element={<Aesthetic />} />
          <Route path="/home/phone-cover/anime" element={<Anime />} />
          <Route
            path="/home/phone-cover/chain-cases"
            element={<Chaincases />}
          />
          <Route
            path="/home/glass-cover/cover-image"
            element={<CoverImage />}
          />
          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
