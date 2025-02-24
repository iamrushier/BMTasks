import React, { useState } from "react";
import { CartItemProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../User/CartContext";

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  quantity,
  image,
}) => {
  const navigate = useNavigate();
  const { dispatch } = useCartContext();
  const [inputQuantity, setInputQuantity] = useState(quantity);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = Number(event.target.value);

    setInputQuantity(newQuantity);
    dispatch({
      type: "update_quantity",
      item: { productId: id, quantity: newQuantity },
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: "remove_from_cart",
      item: { productId: id, quantity: quantity },
    });
  };
  return (
    <div className="card mb-3 p-2">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center flex-grow-1">
            <img
              src={image}
              className="img-fluid rounded-3"
              alt={title}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/product/${id}`)}
            />
            <div className="ms-3">
              <h5 className="mb-1">{title}</h5>
              <h6 className="text-muted">${price.toFixed(2)}</h6>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center">
              <span className="me-2">Qty:</span>
              <input
                type="number"
                value={inputQuantity}
                min="1"
                className="form-control text-center"
                style={{ width: "60px" }}
                onChange={handleQuantityChange}
              />
            </div>
            <h5 className="mb-0 fw-bold">${(price * quantity).toFixed(2)}</h5>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleRemoveItem}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
