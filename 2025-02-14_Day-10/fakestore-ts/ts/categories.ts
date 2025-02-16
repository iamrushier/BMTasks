import { getCategories, getProductsByCategory } from "./api_calls";
import { logoutUser, toggleCategories } from "./event_handlers";
import { renderCategories, renderProducts } from "./render";
import loggedInUser from "./state";

if (!loggedInUser.username) window.location.href = "../index.html";

const logoutBtn = <HTMLButtonElement>document.querySelector(".logout");
const catBar = <HTMLElement>document.getElementById("category-bar");
logoutBtn.addEventListener("click", logoutUser);
catBar.addEventListener("click", toggleCategories);

const initCatBar = () => {
  catBar.querySelector(".active")?.classList.remove("active");
  const first_category = <HTMLElement>catBar.querySelector(".nav-link");

  first_category.classList.add("active");
  getProductsByCategory(first_category.textContent || "").then((data) => {
    renderProducts(data);
  });
};
getCategories().then((data: string[]) => {
  renderCategories(data);
  initCatBar();
});
