import React, { useState } from "react";
import { ICartItemProps } from "../../types";
import { useNavigate } from "react-router-dom";
// import { useCartContext } from "../../contexts/_UserCartContext";
import { deleteCartItems, updateCartProducts } from "../../api/api_calls";
import { useUserContext } from "../../contexts/UserContext";
import { useCartContext } from "@/contexts/AppContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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

  const [open, setOpen] = useState(false);

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
    await deleteCartItems(id);
    dispatch({
      type: "remove_from_cart",
      item: { productId: id, quantity: quantity },
    });
    setInputQuantity(0);
    setOpen(false);
  };
  return (
    <Card className="mb-3 p-2">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center flex-grow-1 cursor-pointer"
            onClick={() => navigate(`/product/${id}`)}
          >
            <img
              src={image}
              className="rounded-md object-cover w-[70px] h-[70px]"
              alt={title}
            />
            <div className="ml-3">
              <h5 className="mb-1 text-base font-medium">{title}</h5>
              <h6 className="text-muted-foreground">${price.toFixed(2)}</h6>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="mr-2">Qty:</span>
              <Input
                type="number"
                value={inputQuantity}
                min="1"
                className="text-center w-[60px]"
                onChange={handleQuantityChange}
              />
            </div>
            <h5 className="font-bold">${(price * quantity).toFixed(2)}</h5>
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  ❌
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove Item?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove <strong>{title}</strong>{" "}
                    from your cart?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleRemoveItem}>
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
