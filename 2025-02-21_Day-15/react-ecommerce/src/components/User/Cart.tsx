import { useEffect, useState } from "react";
import Navbar from "../stateless/Navbar";
import { useUserContext } from "./UserContext";
import { getCartItemsForUserID, getProductById } from "../../api_calls";
import CartItem from "../stateless/CartItem";
import { ICart, IProduct } from "../../types";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState<ICart | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { loggedInUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedInUser.id) {
      navigate("/login");
    }
    const fetchCart = async () => {
      try {
        const cart = await getCartItemsForUserID(Number(loggedInUser.id));
        if (cart.length > 0) {
          setCartData(cart[0]);
          const productPromises = cart[0].products.map((item) =>
            getProductById(item.productId)
          );
          const productDetails = await Promise.all(productPromises);
          setProducts(productDetails);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [loggedInUser.id]);

  return (
    <div>
      <Navbar />
      <div className="container mt-3 w-50">
        <h2>Shopping Cart</h2>
        <p>
          {cartData
            ? `You have ${cartData.products.length} items in your cart`
            : "Your cart will appear here"}
        </p>

        <div className="item-container">
          {cartData && products.length > 0 ? (
            cartData.products.map((entry) => {
              const product = products.find((p) => p.id === entry.productId);
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

        {cartData && products.length > 0 && (
          <div className="card bg-primary text-white rounded-3 mt-3 p-3">
            <div className="d-flex justify-content-between">
              <h3>Total</h3>
              <h3>
                $
                {products
                  .reduce((total, product) => {
                    const quantity =
                      cartData.products.find((p) => p.productId === product.id)
                        ?.quantity || 0;
                    return total + product.price * quantity;
                  }, 0)
                  .toFixed(2)}
              </h3>
            </div>
            <button className="checkout-btn btn btn-info btn-lg w-100">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Cart);
