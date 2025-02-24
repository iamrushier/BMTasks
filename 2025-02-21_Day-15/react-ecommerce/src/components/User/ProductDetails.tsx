import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../stateless/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <h2>Product details - {id}</h2>
    </div>
  );
};

export default ProductDetails;
