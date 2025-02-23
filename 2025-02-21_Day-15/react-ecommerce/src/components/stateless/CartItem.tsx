import React from "react";
import { CartItemProps } from "../../types";

const CartItem: React.FC<CartItemProps> = ({
  title,
  price,
  quantity,
  image,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <img
              src={image}
              className="img-fluid rounded-3"
              alt="Shopping item"
              style={{ width: "65px" }}
            />
            <div className="ms-3">
              <h5>{title}</h5>
              <h6>(${price})</h6>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "50px" }}>
              <h5 className="fw-normal mb-0">x{quantity}</h5>
            </div>
            <div style={{ width: "80px" }}>
              <h5 className="mb-0 item-price">${price * quantity}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
