import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartContextType, ICart, ICartProduct } from "../../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (
  state: ICart,
  action: { type: string; item?: ICartProduct; cart?: ICart }
) => {
  switch (action.type) {
    case "set_cart_init":
      if (!action.cart) return state;
      return { ...state, ...action.cart };
    case "add_to_cart":
      if (!action.item) return state;
      const existingProduct = state.products.find(
        (p) => p.productId === action.item?.productId
      );

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((p) =>
            p.productId === action.item?.productId
              ? { ...p, quantity: p.quantity + action.item!.quantity }
              : p
          ),
        };
      } else {
        return { ...state, products: [...state.products, action.item] };
      }
    case "update_quantity":
      if (!action.item) return state;
      return {
        ...state,
        products: state.products.map((p) =>
          p.productId === action.item?.productId
            ? { ...p, quantity: action.item.quantity }
            : p
        ),
      };
    case "remove_from_cart":
      return {
        ...state,
        products: state.products.filter(
          (p) => p.productId !== action.item?.productId
        ),
      };
    case "clear_cart":
      return { ...state, products: [] };
    default:
      return state;
  }
};
const initialCart: ICart = {
  id: 0,
  userId: 0,
  date: "",
  products: [],
};
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("No CartContext found");
  return context;
};
