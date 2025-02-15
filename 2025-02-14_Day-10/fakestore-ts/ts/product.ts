import { renderProductDetails } from "./render";
import {
  addProductToCart,
  getProductById,
  updateCartProducts,
} from "./api_calls";
import loggedInUser from "../ts/state";
// console.log("Product Loaded");
// console.log(window.location.search);
if (!loggedInUser.username) window.location.href = "../index.html";
const productId = window.location.search.split("=")[1];
// console.log(productId);
if (productId) {
  getProductById(Number(productId)).then((data) => {
    renderProductDetails(data);

    const addToCartBtn = <HTMLButtonElement>(
      document.querySelector(".add-cart-btn")
    );
    addToCartBtn.addEventListener("click", () => {
      addProductToCart({
        userId: Number(loggedInUser.id),
        date: new Date().toISOString(),
        products: [{ productId: Number(productId), quantity: 1 }],
      }).then((data) => {
        console.log("Added to cart:", data);
      });
    });
  });
}
