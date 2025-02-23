import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/static/Header";
import UserLogin from "./components/User/UserLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/User/Home";
import { UserContextProvider } from "./components/User/UserContext";
function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
