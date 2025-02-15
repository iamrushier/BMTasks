import { getAllProducts } from "./api_calls";
import loggedInUser from "../ts/state";
import { renderProducts } from "./render";
import "./commons";

if (!loggedInUser.username) window.location.href = "../index.html";

getAllProducts()
  .then((data) => {
    renderProducts(data);
  })
  .catch(() => {
    console.log("Failed to load products");
  });
