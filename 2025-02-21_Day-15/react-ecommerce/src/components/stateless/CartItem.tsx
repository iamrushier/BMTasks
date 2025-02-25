import React, { useState } from "react";
import { ICartItemProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../User/CartContext";
import { deleteCartItems, updateCartProducts } from "../../api_calls";
import { useUserContext } from "../User/UserContext";

const CartItem: React.FC<ICartItemProps> = ({
  id,
  title,
  price,
  quantity,
  image,
}) => {
  const navigate = useNavigate();
  const { dispatch } = useCartContext();
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const { loggedInUser } = useUserContext();
  const handleQuantityChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newQuantity = Number(event.target.value);

    setInputQuantity(newQuantity);
    const cartItem = { productId: id, quantity: newQuantity };
    await updateCartProducts(id, {
      userId: Number(loggedInUser.id),
      date: new Date().toISOString(),
      products: [cartItem],
    });
    dispatch({
      type: "update_quantity",
      item: cartItem,
    });
  };

  const handleRemoveItem = async (e: React.MouseEvent) => {
    e.preventDefault();
    const confirmDelete = confirm("Are you sure you want to remove this item?");
    if (confirmDelete) {
      await deleteCartItems(id);
      dispatch({
        type: "remove_from_cart",
        item: { productId: id, quantity: quantity },
      });
      setInputQuantity(0);
      alert("Item removed from cart.");
    }
  };
  return (
    <div className="card mb-3 p-2">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div
            className="d-flex align-items-center flex-grow-1"
            onClick={() => navigate(`/product/${id}`)}
          >
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
