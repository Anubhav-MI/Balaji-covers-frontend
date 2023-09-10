import "./App.css";
import SignUp from "./Components/Sign-up/signup";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import SignIn from "./Components/sign-in/signIn";
import Forgotpassword from "./Components/forgotPassword/forgotpassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    // <div>
    //   <Navbar />
    //   {/* <SignUp /> */}
    //   {/* <SignIn /> */}
    //   <Forgotpassword />
    //
    // </div>
  );
}

export default App;
