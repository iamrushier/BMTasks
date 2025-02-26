import Navbar from "../reusable/Navbar";
import { Outlet } from "react-router-dom";
import FilterBar from "../reusable/FilterBar";

const ProductsSection = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <Outlet />
    </div>
  );
};

export default ProductsSection;
