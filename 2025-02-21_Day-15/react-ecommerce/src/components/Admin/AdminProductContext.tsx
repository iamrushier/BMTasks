import React, { useContext, useEffect } from "react";
import { IProductDetails, ProductContextType } from "../../types";
import { getAllProducts } from "../../api_calls";
const AdminProductContext = React.createContext<ProductContextType>({
  products: [],
  dispatch: () => {},
});

const productsReducer = (
  state: IProductDetails[],
  action: { type: string; item?: IProductDetails; products?: IProductDetails[] }
) => {
  switch (action.type) {
    case "initilize_data":
      if (!action.products) return state;
      return action.products;
    case "add_product":
      if (!action.item) return state;
      return [...state, action.item];
    case "delete_product":
      if (!action.item) return state;
      return state.filter((p) => p.id !== action.item?.id);
    case "edit_product":
      if (!action.item) return state;
      return state.map((p) => (p.id === action.item?.id ? action.item : p));
    default:
      return state;
  }
};

export const AdminProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, dispatch] = React.useReducer(productsReducer, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts();

        dispatch({ type: "initilize_data", products: productData });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <AdminProductContext.Provider value={{ products, dispatch }}>
      {children}
    </AdminProductContext.Provider>
  );
};

export const useAdminProductContext = () => {
  const context = useContext(AdminProductContext);
  if (!context) throw new Error("No context found");
  return context;
};
