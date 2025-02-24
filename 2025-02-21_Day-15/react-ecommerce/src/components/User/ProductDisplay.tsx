import { useParams } from "react-router-dom";
import { IProductDetails } from "../../types";
import { useEffect, useState } from "react";
import ProductCard from "../stateless/ProductCard";
import { getAllProducts, getProductsByCategory } from "../../api_calls";

const ProductDisplay = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<IProductDetails[]>([]);
  useEffect(() => {
    if (category && category !== "")
      getProductsByCategory(category?.toLowerCase()).then(setProducts);
    else getAllProducts().then(setProducts);
  }, [category]);
  return (
    <div className="container mt-4">
      <h3 className="text-center">
        {category ? category.toUpperCase() : "ALL PRODUCTS"}
      </h3>
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

export default ProductDisplay;
