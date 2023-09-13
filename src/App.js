import "./App.css";
import SignUp from "./Components/Sign-up/signup";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import SignIn from "./Components/sign-in/signIn";
import Forgotpassword from "./Components/forgotPassword/forgotpassword";
import Home from "./Components/home/home";
import Frames from "./Components/home/frames/frames";
import PhoneCover from "./Components/home/phone cover/phoneCover";
import Glasscover from "./Components/home/phone cover/3DglassCover/glasscover";
import CoverImage from "./Components/home/phone cover/3DglassCover/coverImage/coverImage";
import Wishlist from "./Components/home/wishlist/wishlist";
import Bag from "./Components/home/bag/bag";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/home/wishlist" element={<Wishlist />} />
          <Route path="/home/bag" element={<Bag />} />
          <Route path="/home/frames" element={<Frames />} />
          <Route path="/home/phone-cover" element={<PhoneCover />} />
          <Route path="/home/glass-cover" element={<Glasscover />} />
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
