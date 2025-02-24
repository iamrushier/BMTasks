import { useEffect, useState } from "react";
import Navbar from "../stateless/Navbar";
import { useUserContext } from "./UserContext";
import { getLimitedProducts } from "../../api_calls";
import { IProductDetails } from "../../types";
import ProductCard from "../stateless/ProductCard";

const Home = () => {
  const { loggedInUser } = useUserContext();
  const [products, setProducts] = useState<IProductDetails[]>([]);
  useEffect(() => {
    getLimitedProducts().then(setProducts);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-3">Welcome {loggedInUser.username}!</h1>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col">
                <ProductCard product={product} />
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

export default Home;
