import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProductDetails } from "../../types";
import {
  addNewProduct,
  deleteProduct,
  updateProduct,
} from "../../api/api_calls";
import Navbar from "../reusable/Navbar";
import { useProductContext } from "@/contexts/AppContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

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
  const handleSelectChange = (value: string) => {
    setProduct({ ...product, category: value });
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
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="container mt-4">
        <Card className="p-6 shadow-sm mx-auto max-w-xl">
          <CardHeader className="px-0 pt-0">
            <CardTitle>
              {isEditing ? "Edit Product" : "Add New Product"}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title:</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="price">Price:</Label>
                <Input
                  id="price"
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category:</Label>
                <Select
                  name="category"
                  value={product.category}
                  onValueChange={handleSelectChange}
                  disabled={!isEditMode}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">electronics</SelectItem>
                    <SelectItem value="jewelery">jewelery</SelectItem>
                    <SelectItem value="men's clothing">
                      men's clothing
                    </SelectItem>
                    <SelectItem value="women's clothing">
                      women's clothing
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description:</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={product.description}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Image URL:</Label>
                <Input
                  id="image"
                  type="text"
                  name="image"
                  value={product.image}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-0 pb-0 flex justify-between">
            {isEditing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  {isEditMode ? "Cancel" : "Edit"}
                </Button>
                {isEditMode && (
                  <Button variant="default" onClick={handleSubmit}>
                    Update
                  </Button>
                )}
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </>
            ) : (
              <Button variant="default" onClick={handleSubmit}>
                Add Product
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminProductForm;
