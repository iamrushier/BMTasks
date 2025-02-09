import { renderProductDetails } from "./render.js";
import {
  addProductToCart,
  getProductById,
  updateCartProducts,
} from "./api_calls.js";
import loggedInUser from "../js/state.js";
// console.log("Product Loaded");
// console.log(window.location.search);
const productId = window.location.search.split("=")[1];
if (!loggedInUser.username) window.location.href = "../index.html";
// console.log(productId);
if (productId) {
  getProductById(productId).then((data) => {
    renderProductDetails(data);

    const addToCartBtn = document.querySelector(".add-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      addProductToCart({
        userId: loggedInUser.id,
        date: new Date().toISOString(),
        products: [{ productId, quantity: 1 }],
      }).then((data) => {
        console.log("Added to cart:", data);
      });
    });
  });
}
