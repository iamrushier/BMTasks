const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

// Home page ✅✅
const getAllProducts = async () => {
  const res = await fakeStoreAPI.get("/products?limit=10");
  return res.data;
};

// Categories Page (tab for each category) ✅✅
const getCategories = async () => {
  try {
    const res = await fakeStoreAPI.get("/products/categories");
    return res.data;
  } catch (err) {
    return new Promise((reso, rej) => reso({ 0: "One", 1: "Two", 2: "Three" }));
  }
};
// ✅✅
const getProductsByCategory = async (category) => {
  category = category.toLowerCase();
  const res = await fakeStoreAPI.get(`/products/category/${category}`);
  return res.data;
};

// Selected product ✅
const getProductById = async (productId) => {
  const res = await fakeStoreAPI.get(`/products/${productId}`);
  return res.data;
};

// Cart page ✅
// Get cart items for user id , default 1
const getCartItemsForUserID = async (userId) => {
  const res = await fakeStoreAPI.get(`/carts/user/${userId}`);
  return res.data;
};

const updateCartProducts = async (cartId, products) => {
  const res = await fakeStoreAPI.patch(`/carts/${cartId}`, { products });
  return res.data;
};

const addProductToCart = async ({ userId, date, products }) => {
  const res = await fakeStoreAPI.post("/carts", { userId, date, products });
  return res.data;
};

const emptyCart = async (cartId) => {
  const res = await fakeStoreAPI.delete(`/carts/${cartId}`);
  return res.data;
};

// Login page, ✅✅
const tryLoginForUser = async ({ username, password }) => {
  const res = await fakeStoreAPI.post("/auth/login", { username, password });
  return res.data;
};

//   tryLoginForUser({ username: "mor_2314", password: "83r5^_" });

// List in login page, for reference ✅✅
const getAllUsers = async () => {
  const res = await fakeStoreAPI.get("/users");
  return res.data;
};

//   addProductToCart({
//     userId: 67,
//     date: "2024-03-02T00:00:00.000Z",
//     products: [{ productId: 5, quantity: 1 }],
//   });
//   getAllUsers();

async function getIdOfLoggedInUser(loggedInUser) {
  try {
    const users = await getAllUsers();
    const matchedUser = users.find(
      (user) => user.username === loggedInUser.username
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
