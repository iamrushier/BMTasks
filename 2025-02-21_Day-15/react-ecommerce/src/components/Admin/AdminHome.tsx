import { useAdminProductContext } from "./AdminProductContext";
import AdminNavbar from "./AdminNavbar";
import AdminProductCard from "./AdminProductCard";

const AdminHome = () => {
  const { products } = useAdminProductContext();
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
