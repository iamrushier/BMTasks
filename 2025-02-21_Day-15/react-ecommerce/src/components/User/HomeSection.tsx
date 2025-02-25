import Navbar from "../reusable/Navbar";
import { useUserContext } from "../../contexts/UserContext";
import { getLimitedProducts } from "../../api/api_calls";
import ProductCard from "../reusable/ProductCard";
import { useQuery } from "@tanstack/react-query";

const HomeSection = () => {
  const { loggedInUser } = useUserContext();
  const { data, isLoading } = useQuery({
    queryKey: ["products/limit"],
    queryFn: getLimitedProducts,
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-3">Welcome {loggedInUser.username}!</h1>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {!isLoading ? (
            data?.map((product) => (
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

export default HomeSection;
