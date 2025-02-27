import Navbar from "../reusable/Navbar";
import { useUserContext } from "../../contexts/UserContext";
import { getLimitedProducts } from "../../api/api_calls";
import ProductCard from "../reusable/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

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
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Navbar />
      <h1 className="text-center mt-6 text-2xl font-semibold text-primary">
        Welcome, {loggedInUser.username}!
      </h1>

      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!isLoading
            ? data?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[300px] rounded-lg" />
              ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
