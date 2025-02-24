import { useNavigate } from "react-router-dom";
import { useAuthorizeAdmin } from "./AdminContext";
import { useAdminProductContext } from "./AdminProductContext";
import AdminNavbar from "./AdminNavbar";
import ProductCard from "../stateless/ProductCard";
import { getAllProducts } from "../../api_calls";
import { useEffect } from "react";
import AdminProductCard from "./AdminProductCard";

const AdminHome = () => {
  const navigate = useNavigate();
  const { isAuthorizedAdmin } = useAuthorizeAdmin();
  const { products, dispatch } = useAdminProductContext();
  useEffect(() => {
    if (!isAuthorizedAdmin) navigate("/admin/login");
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts();

        dispatch({ type: "initilize_data", products: productData });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center mt-3">Welcome Admin!</h1>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col">
                <AdminProductCard product={product} />
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
