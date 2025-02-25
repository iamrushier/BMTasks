import Navbar from "../stateless/Navbar";
import { useUserContext } from "./UserContext";
import { getLimitedProducts } from "../../api_calls";
import ProductCard from "../stateless/ProductCard";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
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

export default Home;
