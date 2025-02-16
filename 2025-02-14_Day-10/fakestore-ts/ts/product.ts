import { renderProductDetails } from "./render";
import {
  addProductToCart,
  getProductById,
  updateCartProducts,
} from "./api_calls";
import loggedInUser from "../ts/state";
import { logoutUser } from "./event_handlers";

if (!loggedInUser.username) window.location.href = "../index.html";
const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
logoutBtn.addEventListener("click", logoutUser);

const productId = window.location.search.split("=")[1];
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
        alert(`Product added to cart: ${JSON.stringify(data)}`);
      });
    });
  });
}
