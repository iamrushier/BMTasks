import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../stateless/Navbar";
import { addProductToCart, getProductById } from "../../api/api_calls";
import { useState } from "react";
import { ICartProduct } from "../../types";
import { useCartContext } from "../../contexts/UserCartContext";
import { useUserContext } from "../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const { loggedInUser } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCartContext();
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const handleAddToCart = async () => {
    if (!data) return;
    if (!loggedInUser.id) {
      alert("Log in first to add product to cart");
      navigate("/login");
      return;
    }
    const cartItem: ICartProduct = {
      productId: data.id,
      quantity,
    };
    await addProductToCart({
      userId: Number(loggedInUser.id),
      date: new Date().toISOString(),
      products: [cartItem],
    });
    dispatch({ type: "add_to_cart", item: cartItem });
    alert(`Added ${quantity} pieces of "${data.title}" to cart`);
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {!isLoading && data ? (
          <div
            className="card p-4 shadow-sm mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="img-fluid"
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-8">
                <h3>{data.title}</h3>
                <p className="text-muted">{data.category}</p>
                <h4 className="text-primary">${data.price}</h4>
                <p>{data.description}</p>
                <p>
                  <strong>Rating:</strong> {data.rating.rate} ⭐ (
                  {data.rating.count} reviews)
                </p>
                <div className="d-flex align-items-center">
                  <label htmlFor="quantity-input" className="me-2 fw-bold">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity-input"
                    className="form-control me-3"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{ width: "80px" }}
                  />
                  <button className="btn btn-success" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mt-5">Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
