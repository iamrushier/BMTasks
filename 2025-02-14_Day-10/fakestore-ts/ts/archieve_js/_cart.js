import loggedInUser from "../js/state.js";
import {
  getUserId,
  getProductById,
  getCartItemsForUserID,
} from "./api_calls.js";
import { renderCartItems } from "./render.js";
import "./commons.js";
if (!loggedInUser.username) window.location.href = "../index.html";

getUserId(loggedInUser)
  .then((id) => {
    loggedInUser.setUserId(id);
    sessionStorage.setItem("id", JSON.stringify(id));
    getCartItemsForUserID(id).then((data) => {
      renderCartItems(data);
    });
  })
  .catch((err) => console.log("Failed to get ID"));

const checkoutBtn = document.querySelector(".checkout-btn");
checkoutBtn.addEventListener("click", () => {
  console.log("Checkout complete");
});
