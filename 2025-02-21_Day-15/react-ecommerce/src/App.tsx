import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/static/Header";
import UserLogin from "./components/User/UserLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/User/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
