import { renderProductDetails } from "./render.js";
import { getProductById } from "./api_calls.js";
import loggedInUser from "../js/state.js";
// console.log("Product Loaded");
// console.log(window.location.search);
const productId = window.location.search.split("=")[1];
if (!loggedInUser.username) window.location.href = "../index.html";
// console.log(productId);
if (productId) {
  getProductById(productId).then((data) => {
    console.log(data);
    renderProductDetails(data);
  });
}
