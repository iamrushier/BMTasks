import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/stateless/Header";
import UserLoginSection from "./components/user/UserLoginSection";
// import AdminLoginSection from "./components/admin/AdminLoginSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./components/user/HomeSection";
import { UserContextProvider } from "./contexts/UserContext";
import CartSection from "./components/user/CartSection";
import ProductsSection from "./components/user/ProductsSection";
import ProductsContainer from "./components/user/ProductsContainer";
import ProductDetailsSection from "./components/user/ProductDetailsSection";
// import { CartProvider } from "./contexts/_UserCartContext";
import AdminProductForm from "./components/user/AdminProductFormSection";
// import AdminHomeSection from "./components/admin/AdminHomeSection";
import { AdminProvider } from "./contexts/AdminContext";
// import { AdminProductProvider } from "./contexts/_AdminProductContext";
// import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import UserProtectedRoute from "./components/user/UserProtectedRoute";
import Error404 from "./components/stateless/Error404";
import { AppProvider } from "./contexts/AppContext";
import { ThemeProvider } from "./components/utils/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AdminProvider>
          <UserContextProvider>
            <AppProvider>
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<HomeSection />} />
                  <Route path="/login" element={<UserLoginSection />} />

                  <Route path="/products" element={<ProductsSection />}>
                    <Route index element={<ProductsContainer />} />
                    <Route
                      path="category/:category"
                      element={<ProductsContainer />}
                    />
                    <Route
                      path="limit/:limit"
                      element={<ProductsContainer />}
                    />
                    <Route path="sort/:order" element={<ProductsContainer />} />
                  </Route>

                  <Route element={<UserProtectedRoute />}>
                    <Route path="/cart" element={<CartSection />} />
                    <Route path="/add_new" element={<AdminProductForm />} />
                    <Route
                      path="/product/edit/:id"
                      element={<AdminProductForm />}
                    />
                  </Route>

                  <Route
                    path="/product/:id"
                    element={<ProductDetailsSection />}
                  />

                  <Route path="*" element={<Error404 />} />
                </Routes>
              </Router>
            </AppProvider>
          </UserContextProvider>
        </AdminProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
