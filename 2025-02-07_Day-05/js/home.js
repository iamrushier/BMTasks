import { getAllProducts } from "./api_calls.js";
import loggedInUser from "../js/state.js";
import { renderProducts } from "./render.js";
import "./commons.js";

if (!loggedInUser.username) window.location.href = "../index.html";

getAllProducts()
  .then((data) => {
    renderProducts(data);
  })
  .catch(() => {
    console.log("Failed to load products");
  });
