import React from "react";
import Navbar from "../stateless/Navbar";
import CategoryBar from "../stateless/CategoryBar";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div>
        <CategoryBar />
        Products
      </div>
    </div>
  );
};

export default Products;
