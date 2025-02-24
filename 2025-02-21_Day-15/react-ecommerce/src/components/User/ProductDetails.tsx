import { useParams } from "react-router-dom";
import Navbar from "../stateless/Navbar";
import { getProductById } from "../../api_calls";
import { useEffect, useState } from "react";
import { IProductDetails } from "../../types";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDetails | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      getProductById(Number(id)).then(setProduct);
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {product ? (
          <div
            className="card p-4 shadow-sm mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-8">
                <h3>{product.title}</h3>
                <p className="text-muted">{product.category}</p>
                <h4 className="text-primary">${product.price}</h4>
                <p>{product.description}</p>
                <p>
                  <strong>Rating:</strong> {product.rating.rate} ⭐ (
                  {product.rating.count} reviews)
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
                  <button className="btn btn-success">Add to Cart</button>
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
