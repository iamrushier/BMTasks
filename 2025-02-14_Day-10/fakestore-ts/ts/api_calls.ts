import axios from "axios";
import { AuthToken, cartEntry, Product, User, UserDetails } from "./types";
const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

const getAllProducts = async (): Promise<Product[]> => {
  const res = await fakeStoreAPI.get("/products?limit=10");
  return res.data;
};

const getCategories = async (): Promise<string[]> => {
  const res = await fakeStoreAPI.get("/products/categories");
  return res.data;
};

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  category = category.toLowerCase();
  const res = await fakeStoreAPI.get(`/products/category/${category}`);
  return res.data;
};

const getProductById = async (productId: number): Promise<Product> => {
  const res = await fakeStoreAPI.get(`/products/${productId}`);
  return res.data;
};

// Cart page ✅
// Get cart items for user id , default 1 ✅✅
const getCartItemsForUserID = async (userId: number) => {
  const res = await fakeStoreAPI.get(`/carts/user/${userId}`);
  return res.data;
};

const updateCartProducts = async (cartId: number, products: Product[]) => {
  const res = await fakeStoreAPI.patch(`/carts/${cartId}`, { products });
  return res.data;
};

const addProductToCart = async ({ userId, date, products }: cartEntry) => {
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
}: User): Promise<AuthToken> => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};

//   tryLoginForUser({ username: "mor_2314", password: "83r5^_" });

// List in login page, for reference ✅✅
const getAllUsers = async (): Promise<UserDetails[]> => {
  const res = await fakeStoreAPI.get("/users");
  return res.data;
};

//   addProductToCart({
//     userId: 67,
//     date: "2024-03-02T00:00:00.000Z",
//     products: [{ productId: 5, quantity: 1 }],
//   });
//   getAllUsers();

async function getIdOfLoggedInUser(
  loggedInUser: User
): Promise<number | undefined> {
  try {
    const users = await getAllUsers();
    const matchedUser = users.find(
      (user: User) => user.username === loggedInUser.username
    );

    if (matchedUser) {
      return matchedUser.id;
      // sessionStorage.setItem("id", matchedUser.id);
    }
  } catch (e) {
    console.log("Failed to fetch ID", e);
  }
}

export {
  getAllProducts,
  getCategories,
  updateCartProducts,
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
