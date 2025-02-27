import { useParams } from "react-router-dom";
import { IProductDetails } from "../../types";
import ProductCard from "../reusable/ProductCard";
import {
  getAllProducts,
  getProductsByCategory,
  limitProducts,
  sortProducts,
} from "../../api/api_calls";
import { useQuery } from "@tanstack/react-query";

const ProductsContainer = () => {
  const { category, limit, order } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["products", category, limit, order],
    queryFn: async () => {
      if (category) return await getProductsByCategory(category.toLowerCase());
      if (limit) return await limitProducts(Number(limit));
      if (order) return await sortProducts(order);
      return await getAllProducts();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="container mt-4 min-h-screen">
      <h3 className="text-center text-primary">
        {category
          ? `Category: ${category.toUpperCase()}`
          : Number(limit) > 0
          ? `Showing ${limit} Products`
          : order
          ? `Sorted: ${order.toUpperCase()}`
          : "ALL PRODUCTS"}
      </h3>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {!isLoading && data ? (
            data.map((product: IProductDetails) => (
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

export default ProductsContainer;
