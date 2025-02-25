import Navbar from "../reusable/Navbar";
import CategoryBar from "../reusable/CategoryBar";
import { Outlet } from "react-router-dom";

const ProductsSection = () => {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Outlet />
    </div>
  );
};

export default ProductsSection;
