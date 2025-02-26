import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProductDetails } from "../../types";
// import { useAdminProductContext } from "../../contexts/_AdminProductContext";
import {
  addNewProduct,
  deleteProduct,
  updateProduct,
} from "../../api/api_calls";
import Navbar from "../reusable/Navbar";
import { useProductContext } from "@/contexts/AppContext";

const AdminProductForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { products, dispatch } = useProductContext();
  const initialProductData: IProductDetails = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rating: { rate: 0, count: 0 },
  };
  const [product, setProduct] = useState<IProductDetails>(initialProductData);

  const [isEditMode, setIsEditMode] = useState(!isEditing);

  useEffect(() => {
    if (isEditing) {
      const product = products.find((p) => p.id === Number(id));
      if (product) {
        setProduct(product);
        setIsEditMode(false);
      }
    } else {
      setProduct(initialProductData);
      setIsEditMode(true);
    }
  }, [id, isEditing]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await updateProduct(product.id, product);
      dispatch({ type: "edit_product", item: product });
      alert("Product updated successfully!");
    } else {
      await addNewProduct(product);
      dispatch({ type: "add_product", item: { ...product, id: Date.now() } });
      alert("Product added successfully!");
    }
    navigate("/products");
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    if (product.id <= 200) await deleteProduct(product.id);
    dispatch({ type: "delete_product", item: product });

    alert("Product deleted successfully!");
    navigate("/products");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div
          className="card p-4 shadow-sm mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="mb-3">
            {isEditing ? "Edit Product" : "Add New Product"}
          </h3>

          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              disabled={!isEditMode}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              disabled={!isEditMode}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category:</label>
            <select
              className="form-select"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              disabled={!isEditMode}
            >
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              name="description"
              rows={3}
              value={product.description}
              onChange={handleInputChange}
              disabled={!isEditMode}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              disabled={!isEditMode}
            />
          </div>

          <div className="d-flex justify-content-between">
            {isEditing ? (
              <>
                <button
                  className="btn btn-warning"
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  {isEditMode ? "Cancel" : "Edit"}
                </button>
                {isEditMode && (
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Update
                  </button>
                )}
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={handleSubmit}>
                Add Product
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductForm;
