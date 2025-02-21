import { getAllProducts } from "./api_calls";
import loggedInUser from "../ts/state";
import { renderProducts } from "./render";

import { handleLogout } from "./event_handlers";

if (!loggedInUser.details.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
logoutBtn.addEventListener("click", handleLogout);

getAllProducts()
  .then((data) => {
    renderProducts(data);
  })
  .catch(() => {
    console.log("Failed to load products");
  });
