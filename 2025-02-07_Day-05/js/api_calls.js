document.addEventListener("DOMContentLoaded", function () {
  console.log("API calls");
  const fakeStoreAPI = axios.create({ baseURL: "https://fakestoreapi.com" });

  // Home page ✅
  const getAllProducts = () => {
    fakeStoreAPI.get("/products").then((res) => res.data);
  };

  // Categories Page (tab for each category) ✅
  const getCategories = () => {
    fakeStoreAPI.get("/products/categories").then((res) => {
      console.log(res.data);
    });
  };

  const getProductsByCategory = (category) => {
    category = category.toLowerCase();
    fakeStoreAPI.get(`/products/category/${category}`).then((res) => res.data);
  };

  // Selected product ✅
  const getProductById = (productId) => {
    fakeStoreAPI.get(`/products/${productId}`);
  };

  // Cart page ✅
  // Get cart items for user id , default 1
  const getCartItemsForUserID = (userId) => {
    fakeStoreAPI
      .get(`/carts/user/${userId}`)
      .then((res) => console.log(res.data));
  };

  const updateCartProducts = (cartId, products) => {
    fakeStoreAPI
      .patch(`/carts/${cartId}`, { products })
      .then((res) => console.log(res));
  };

  const addProductToCart = ({ userId, date, products }) => {
    fakeStoreAPI
      .post("/carts", { userId, date, products })
      .then((res) => console.log(res.data));
  };

  const emptyCart = (cartId) => {
    fakeStoreAPI
      .delete(`/carts/${cartId}`)
      .then((res) => console.log(res.data));
  };

  // Optional: Login page, ✅
  const tryLoginForUser = ({ username, password }) => {
    fakeStoreAPI
      .post("/auth/login", { username, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Login failed, invalid credentials"));
  };

  //   tryLoginForUser({ username: "mor_2314", password: "83r5^_" });

  // List in login page, for reference ✅
  const getAllUsers = () => {
    fakeStoreAPI.get("/users").then((res) => console.log(res.data));
  };

  //   addProductToCart({
  //     userId: 67,
  //     date: "2024-03-02T00:00:00.000Z",
  //     products: [{ productId: 5, quantity: 1 }],
  //   });
  //   getAllUsers();
});
// Only include DOMContentLoad event for main.js file or other (helper)js files too?
