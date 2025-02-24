import Navbar from "../stateless/Navbar";
import CategoryBar from "../stateless/CategoryBar";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Outlet />
    </div>
  );
};

export default Products;
