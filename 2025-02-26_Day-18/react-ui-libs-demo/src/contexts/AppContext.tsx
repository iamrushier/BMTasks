import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import {
  CartContextType,
  ProductContextType,
  ICart,
  ICartProduct,
  IProductDetails,
} from "../types";
import { getAllProducts } from "../api/api_calls";

const initialCart: ICart = {
  id: 0,
  userId: 0,
  date: "",
  products: [],
};

const cartReducer = (
  state: ICart,
  action: { type: string; item?: ICartProduct; cart?: ICart }
) => {
  switch (action.type) {
    case "set_cart_init":
      return action.cart ? { ...state, ...action.cart } : state;
    case "add_to_cart":
      if (!action.item) return state;
      const existingProduct = state.products.find(
        (p) => p.productId === action.item?.productId
      );
      return existingProduct
        ? {
            ...state,
            products: state.products.map((p) =>
              p.productId === action.item?.productId
                ? { ...p, quantity: p.quantity + action.item!.quantity }
                : p
            ),
          }
        : { ...state, products: [...state.products, action.item] };
    case "update_quantity":
      return action.item
        ? {
            ...state,
            products: state.products.map((p) =>
              p.productId === action.item?.productId
                ? { ...p, quantity: action.item.quantity }
                : p
            ),
          }
        : state;
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

const productsReducer = (
  state: IProductDetails[],
  action: { type: string; item?: IProductDetails; products?: IProductDetails[] }
) => {
  switch (action.type) {
    case "initilize_data":
      return action.products ? action.products : state;
    case "add_product":
      return action.item ? [...state, action.item] : state;
    case "delete_product":
      return action.item
        ? state.filter((p) => p.id !== action.item?.id)
        : state;
    case "edit_product":
      return action.item
        ? state.map((p) => (p.id === action.item?.id ? action.item : p))
        : state;
    default:
      return state;
  }
};

interface AppContextType {
  cart: CartContextType;
  products: ProductContextType;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
  const [products, productDispatch] = useReducer(productsReducer, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts();
        productDispatch({ type: "initilize_data", products: productData });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart: { cart, dispatch: cartDispatch },
        products: { products, dispatch: productDispatch },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("No CartContext found");
  return context.cart;
};

export const useProductContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("No ProductContext found");
  return context.products;
};
