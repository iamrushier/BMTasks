import React from "react";
import { IProductCardProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardContent className="flex flex-col items-center p-3 pb-0">
        <img
          src={product.image}
          className="w-32 h-32 object-contain mb-3"
          alt={product.title}
        />
        <h6 className="text-lg font-semibold text-center truncate w-full">
          {product.title}
        </h6>
        <div className="flex items-center gap-1 text-yellow-500">
          <span>
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <h5 className="text-xl font-bold text-primary mt-2 mb-0">
          ${product.price}
        </h5>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
