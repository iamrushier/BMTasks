import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../reusable/Navbar";
import { addProductToCart, getProductById } from "../../api/api_calls";
import { useState } from "react";
import { ICartProduct } from "../../types";
// import { useCartContext } from "../../contexts/_UserCartContext";
import { useUserContext } from "../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useCartContext } from "@/contexts/AppContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ProductDetailsSection = () => {
  const { loggedInUser } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCartContext();
  const [alertOpen, setAlertOpen] = useState(false);

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
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="container mt-6 flex justify-center">
        {!isLoading && data ? (
          <Card className="max-w-3xl w-full shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="rounded-lg max-h-80 object-contain"
                />
              </div>
              <CardContent className="flex flex-col gap-2">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {data.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{data.category}</p>
                </CardHeader>

                <p className="text-lg font-semibold text-primary">
                  ${data.price}
                </p>
                <p className="text-sm text-gray-500">{data.description}</p>
                <p className="text-sm">
                  <strong>Rating:</strong> {data.rating.rate} ⭐ (
                  {data.rating.count} reviews)
                </p>

                <div className="flex items-center gap-4">
                  <label htmlFor="quantity-input" className="font-medium">
                    Quantity:
                  </label>
                  <Input
                    type="number"
                    id="quantity-input"
                    min="1"
                    className="w-20"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleAddToCart}>Add to Cart</Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/product/edit/${data.id}`)}
                  >
                    Modify
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ) : (
          <Card className="max-w-3xl w-full p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-80 w-full rounded-lg" />
              <div className="flex flex-col gap-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </Card>
        )}
      </div>
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Added to Cart!</AlertDialogTitle>
            <AlertDialogDescription>
              {quantity} piece(s) of <strong>{data?.title}</strong> added to
              cart.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-2">
            <AlertDialogCancel>Continue Shopping</AlertDialogCancel>
            <AlertDialogAction onClick={() => navigate("/cart")}>
              Go to Cart
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductDetailsSection;
