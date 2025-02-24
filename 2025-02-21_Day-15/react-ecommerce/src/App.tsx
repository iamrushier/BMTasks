import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/stateless/Header";
import UserLogin from "./components/User/UserLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/User/Home";
import { UserContextProvider } from "./components/User/UserContext";
import Cart from "./components/User/Cart";
import Products from "./components/User/Products";
import ProductDisplay from "./components/User/ProductDisplay";
function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductDisplay />} />
              <Route path=":category" element={<ProductDisplay />} />
            </Route>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
