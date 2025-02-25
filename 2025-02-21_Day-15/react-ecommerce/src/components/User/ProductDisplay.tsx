import { useParams } from "react-router-dom";
import { IProductDetails } from "../../types";
import ProductCard from "../stateless/ProductCard";
import { getAllProducts, getProductsByCategory } from "../../api/api_calls";
import { useQuery } from "@tanstack/react-query";

const ProductDisplay = () => {
  const { category } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["products/category", category],
    queryFn: async () => {
      if (category) return await getProductsByCategory(category!.toLowerCase());
      else return await getAllProducts();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="container mt-4">
      <h3 className="text-center">
        {category ? category.toUpperCase() : "ALL PRODUCTS"}
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

export default ProductDisplay;
