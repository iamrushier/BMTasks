import React from "react";
import { IProductDetails } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: IProductDetails;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card p-3 shadow-sm border-0"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s",
        minHeight: "300px",
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image}
        className="card-img-top mx-auto"
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
        alt={product.title}
      />
      <div className="card-body text-center">
        <h6 className="card-title text-truncate">{product.title}</h6>
        <p className="text-warning mb-1">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>
        <h5 className="text-primary">${product.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
