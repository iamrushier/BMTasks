import { renderProductDetails } from "./render";
import { addProductToCart, getProductById } from "./api_calls";
import loggedInUser from "../ts/state";
import { handleLogout } from "./event_handlers";

if (!loggedInUser.details.username) window.location.href = "../index.html";
const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");

logoutBtn.addEventListener("click", handleLogout);

const productId = window.location.search.split("=")[1];
if (productId) {
  getProductById(Number(productId)).then((data) => {
    renderProductDetails(data);

    const addToCartBtn = <HTMLButtonElement>(
      document.querySelector(".add-cart-btn")
    );
    const quantityInput = <HTMLInputElement>(
      document.querySelector("#quantity-input")
    );

    addToCartBtn.addEventListener("click", () => {
      const quantity = Number(quantityInput.value);
      addProductToCart({
        userId: Number(loggedInUser.details.id),
        date: new Date().toISOString(),
        products: [{ productId: Number(productId), quantity: quantity }],
      }).then((data) => {
        alert(`Product added to cart: ${JSON.stringify(data)}`);
        quantityInput.value = "1";
      });
    });
  });
}
