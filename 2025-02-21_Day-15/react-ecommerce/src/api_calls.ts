import axios from "axios";
import {
  AuthToken,
  ICart,
  IProductDetails,
  IUserCreds,
  IUserDetails,
} from "./types";
const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

export const tryLoginForUser = async ({
  username,
  password,
}: Partial<IUserCreds>): Promise<AuthToken> => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};

export const getAllUsers = async (): Promise<IUserDetails[]> => {
  const res = await fakeStoreAPI.get("/users");
  return res.data;
};

export const getProductById = async (
  productId: number
): Promise<IProductDetails> => {
  const res = await fakeStoreAPI.get(`/products/${productId}`);
  return res.data;
};
export const getCartItemsForUserID = async (
  userId: number
): Promise<ICart[]> => {
  const res = await fakeStoreAPI.get(`/carts/user/${userId}`);
  return res.data;
};
export const deleteCartItems = async (cartId: number) => {
  const res = await fakeStoreAPI.delete(`/carts/${cartId}`);
  return res.data;
};
export const getLimitedProducts = async (): Promise<IProductDetails[]> => {
  const res = await fakeStoreAPI.get("/products?limit=12");
  return res.data;
};
export const getAllProducts = async (): Promise<IProductDetails[]> => {
  const res = await fakeStoreAPI.get("/products");
  return res.data;
};
export const getProductsByCategory = async (
  category: string
): Promise<IProductDetails[]> => {
  category = category.toLowerCase();
  const res = await fakeStoreAPI.get(`/products/category/${category}`);
  return res.data;
};

export const updateProduct = async (id: number, product: IProductDetails) => {
  const res = await fakeStoreAPI.patch(`/products/${id}`, product);
  return res.data;
};
export const addNewProduct = async (product: IProductDetails) => {
  const res = await fakeStoreAPI.post("/products", product);
  return res.data;
};
export const deleteProduct = async (id: number) => {
  const res = await fakeStoreAPI.delete(`/products/${id}`);
  return res.data;
};
export const addProductToCart = async ({
  userId,
  date,
  products,
}: Partial<ICart>) => {
  const res = await fakeStoreAPI.post("/carts", { userId, date, products });
  return res.data;
};
export const updateCartProducts = async (
  cartId: number,
  cart: Partial<ICart>
) => {
  const res = await fakeStoreAPI.patch(`/carts/${cartId}`, cart);
  return res.data;
};
