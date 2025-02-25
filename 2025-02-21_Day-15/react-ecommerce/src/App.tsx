import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/stateless/Header";
import UserLogin from "./components/User/UserLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/User/Home";
import { UserContextProvider } from "./contexts/UserContext";
import Cart from "./components/User/Cart";
import Products from "./components/User/Products";
import ProductDisplay from "./components/User/ProductDisplay";
import ProductDetails from "./components/User/ProductDetails";
import { CartProvider } from "./contexts/UserCartContext";
import AdminProductForm from "./components/Admin/AdminProductForm";
import AdminHome from "./components/Admin/AdminHome";
import { AdminProvider } from "./contexts/AdminContext";
import { AdminProductProvider } from "./contexts/AdminProductContext";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";
import UserProtectedRoute from "./components/User/UserProtectedRoute";
import Error404 from "./components/stateless/Error404";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<UserContextProvider children={<Outlet />} />}>
            <Route element={<CartProvider children={<Outlet />} />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />}>
                <Route index element={<ProductDisplay />} />
                <Route path=":category" element={<ProductDisplay />} />
              </Route>
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<UserLogin />} />
              <Route element={<UserProtectedRoute />}>
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Route>
          </Route>

          <Route element={<AdminProvider children={<Outlet />} />}>
            <Route element={<AdminProductProvider children={<Outlet />} />}>
              <Route index path="/admin/login" element={<AdminLogin />} />
              <Route element={<AdminProtectedRoute />}>
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/add_new" element={<AdminProductForm />} />
                <Route
                  path="/admin/product/:id"
                  element={<AdminProductForm />}
                />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
