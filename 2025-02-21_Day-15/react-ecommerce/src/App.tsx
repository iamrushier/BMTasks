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
import ProductDetails from "./components/User/ProductDetails";
import { CartProvider } from "./components/User/CartContext";
import AdminProductForm from "./components/Admin/AdminProductForm";
import AdminHome from "./components/Admin/AdminHome";
import { AdminProvider } from "./components/Admin/AdminContext";
import { AdminProductProvider } from "./components/Admin/AdminProductContext";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";
import UserProtectedRoute from "./components/User/UserProtectedRoute";
import Error404 from "./components/stateless/Error404";
function App() {
  return (
    <>
      <AdminProductProvider>
        <AdminProvider>
          <CartProvider>
            <UserContextProvider>
              <Router>
                <Header />
                <Routes>
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

                  <Route index path="/admin/login" element={<AdminLogin />} />
                  <Route element={<AdminProtectedRoute />}>
                    <Route path="/admin/home" element={<AdminHome />} />
                    <Route
                      path="/admin/add_new"
                      element={<AdminProductForm />}
                    />
                    <Route
                      path="/admin/product/:id"
                      element={<AdminProductForm />}
                    />
                  </Route>
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </Router>
            </UserContextProvider>
          </CartProvider>
        </AdminProvider>
      </AdminProductProvider>
    </>
  );
}

export default App;
