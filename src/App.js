import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./component/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserDashBoard from "./pages/user-routes/UserDashboard";
import Privateroute from "./component/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
function App() {
  return (
    <BrowserRouter>
      < ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
