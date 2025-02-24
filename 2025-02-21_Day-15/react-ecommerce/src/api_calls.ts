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
export const emptyCart = async (cartId: number) => {
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
