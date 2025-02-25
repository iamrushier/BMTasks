import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/stateless/Header";
import UserLoginSection from "./components/user/UserLoginSection";
import AdminLoginSection from "./components/admin/AdminLoginSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeSection from "./components/user/HomeSection";
import { UserContextProvider } from "./contexts/UserContext";
import CartSection from "./components/user/CartSection";
import ProductsSection from "./components/user/ProductsSection";
import ProductsContainer from "./components/user/ProductsContainer";
import ProductDetailsSection from "./components/user/ProductDetailsSection";
import { CartProvider } from "./contexts/UserCartContext";
import AdminProductForm from "./components/admin/AdminProductFormSection";
import AdminHomeSection from "./components/admin/AdminHomeSection";
import { AdminProvider } from "./contexts/AdminContext";
import { AdminProductProvider } from "./contexts/AdminProductContext";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import UserProtectedRoute from "./components/user/UserProtectedRoute";
import Error404 from "./components/stateless/Error404";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<UserContextProvider children={<Outlet />} />}>
            <Route element={<CartProvider children={<Outlet />} />}>
              <Route path="/" element={<HomeSection />} />

              <Route path="/products" element={<ProductsSection />}>
                <Route index element={<ProductsContainer />} />
                <Route path=":category" element={<ProductsContainer />} />
              </Route>

              <Route path="/product/:id" element={<ProductDetailsSection />} />

              <Route path="/login" element={<UserLoginSection />} />

              <Route element={<UserProtectedRoute />}>
                <Route path="/cart" element={<CartSection />} />
              </Route>
            </Route>
          </Route>

          <Route element={<AdminProvider children={<Outlet />} />}>
            <Route element={<AdminProductProvider children={<Outlet />} />}>
              <Route
                index
                path="/admin/login"
                element={<AdminLoginSection />}
              />
              <Route element={<AdminProtectedRoute />}>
                <Route path="/admin/home" element={<AdminHomeSection />} />
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
