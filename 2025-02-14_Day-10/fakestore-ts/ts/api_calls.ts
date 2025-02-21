import axios from "axios";
import {
  AuthToken,
  ICart,
  IProductDetails,
  IUserCreds,
  IUserDetails,
} from "./types";
const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

console.log("Hello APi");
const getAllProducts = async (): Promise<IProductDetails[]> => {
  const res = await fakeStoreAPI.get("/products?limit=10");
  return res.data;
};

const getCategories = async (): Promise<string[]> => {
  const res = await fakeStoreAPI.get("/products/categories");
  return res.data;
};

const getProductsByCategory = async (
  category: string
): Promise<IProductDetails[]> => {
  category = category.toLowerCase();
  const res = await fakeStoreAPI.get(`/products/category/${category}`);
  return res.data;
};

const getProductById = async (productId: number): Promise<IProductDetails> => {
  const res = await fakeStoreAPI.get(`/products/${productId}`);
  return res.data;
};

const getCartItemsForUserID = async (userId: number): Promise<ICart[]> => {
  const res = await fakeStoreAPI.get(`/carts/user/${userId}`);
  return res.data;
};

// const updateCartProducts = async (
//   cartId: number,
//   products: IProductDetails[]
// ) => {
//   const res = await fakeStoreAPI.patch(`/carts/${cartId}`, { products });
//   return res.data;
// };

const addProductToCart = async ({ userId, date, products }: Partial<ICart>) => {
  const res = await fakeStoreAPI.post("/carts", { userId, date, products });
  return res.data;
};

const emptyCart = async (cartId: number) => {
  const res = await fakeStoreAPI.delete(`/carts/${cartId}`);
  return res.data;
};

const tryLoginForUser = async ({
  username,
  password,
}: Partial<IUserCreds>): Promise<AuthToken> => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};

const getAllUsers = async (): Promise<IUserDetails[]> => {
  const res = await fakeStoreAPI.get("/users");
  return res.data;
};

async function getIdOfLoggedInUser(
  loggedInUser: IUserCreds
): Promise<number | undefined> {
  try {
    const users = await getAllUsers();
    const matchedUser = users.find(
      (user: IUserDetails) => user.username === loggedInUser.username
    );

    if (matchedUser) {
      return Number(matchedUser.id);
    }
  } catch (e) {
    console.log("Failed to fetch ID", e);
  }
}

export {
  getAllProducts,
  getCategories,
  getCartItemsForUserID,
  getProductById,
  addProductToCart,
  emptyCart,
  getProductsByCategory,
  getAllUsers,
  tryLoginForUser,
  getIdOfLoggedInUser as getUserId,
};
// Only include DOMContentLoad event for main.js file or other (helper)js files too?
