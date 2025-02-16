import { getAllProducts } from "./api_calls";
import loggedInUser from "../ts/state";
import { renderProducts } from "./render";

import { logoutUser } from "./event_handlers";

if (!loggedInUser.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
logoutBtn.addEventListener("click", logoutUser);

getAllProducts()
  .then((data) => {
    renderProducts(data);
  })
  .catch(() => {
    console.log("Failed to load products");
  });
