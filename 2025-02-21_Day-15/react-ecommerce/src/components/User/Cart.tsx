import Navbar from "../stateless/Navbar";
import { getProductById } from "../../api_calls";
import CartItem from "../stateless/CartItem";
import React, { useCallback } from "react";
import { useCartContext } from "./CartContext";
import { useQuery } from "@tanstack/react-query";

const Cart = () => {
  const { cart, dispatch } = useCartContext();
  const fetchCart = useCallback(async () => {
    try {
      if (cart.id !== 0) {
        const productPromises = cart.products.map((item) =>
          getProductById(item.productId)
        );
        const productDetails = await Promise.all(productPromises);
        return productDetails;
      }
      return [];
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }, []);
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div>
      <Navbar />
      <div className="container mt-3 w-50">
        <h2>Shopping Cart</h2>
        <p>
          {cart.id !== 0
            ? `You have ${cart.products.length} products in your cart`
            : "Your cart will appear here"}
        </p>

        <div className="item-container">
          {cart.id !== 0 && !isLoading ? (
            cart.products.map((entry) => {
              const product = data?.find((p) => p.id === entry.productId);
              return (
                product && (
                  <CartItem
                    key={entry.productId}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={entry.quantity}
                    image={product.image}
                  />
                )
              );
            })
          ) : (
            <p></p>
          )}
        </div>

        {cart.id !== 0 && !isLoading && (
          <div className="card bg-primary text-white rounded-3 mt-3 p-3">
            <div className="d-flex justify-content-between">
              <h3>Total</h3>
              <h3>
                $
                {data!
                  .reduce((total, product) => {
                    const quantity =
                      cart.products.find((p) => p.productId === product.id)
                        ?.quantity || 0;
                    return total + product.price * quantity;
                  }, 0)
                  .toFixed(2)}
              </h3>
            </div>
            <button
              className="checkout-btn btn btn-info btn-lg w-100"
              onClick={() => {
                alert("Dummy checkout COMPLETE!!");
                dispatch({ type: "clear_cart" });
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Cart);
